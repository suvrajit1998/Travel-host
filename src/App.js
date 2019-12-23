import React from "react";
// import logo from "./logo.svg";
import "./App.css";
import { Route, Switch, Redirect } from "react-router-dom";
import Homepage from "./pages/homepage/homepage.component";
import Pakegespage from "./pages/pakegespage/pakeges.component";
import Header from "./components/header/header.component";
import SignInSignout from "./pages/sign-in-sign-out-page/sign-in-and-sign-out.component";

import { auth, createUserProfileDocument } from "./firebase/firebase.utils";
import { connect } from "react-redux";
import { setcurrentuser } from "./redux/user/user.action";
import { createStructuredSelector } from "reselect";
import { selectCurrentUser } from "./redux/user/user.select";

class App extends React.Component {
  unsubcribtionfromAuth = null;

  componentDidMount() {
    const { setcurrentuser } = this.props;
    this.unsubcribtionfromAuth = auth.onAuthStateChanged(async userAuth => {
      if (userAuth) {
        const userref = await createUserProfileDocument(userAuth);

        userref.onSnapshot(snapshot => {
          // console.log(snapshot);
          setcurrentuser({ id: snapshot.id, ...snapshot.data() });
        });
      } else {
        setcurrentuser(userAuth);
      }
    });
  }

  componentWillUnmount() {
    this.unsubcribtionfromAuth();
  }

  render() {
    return (
      <div>
        <Header />
        <Switch>
          <Route exact path="/" component={Homepage} />
          <Route path="/shop" component={Pakegespage} />
          <Route
            exact
            path="/singin"
            render={() =>
              this.props.currentUser ? <Redirect to="/" /> : <SignInSignout />
            }
          />
        </Switch>
      </div>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser
});

const mapToDispatchToProps = dispatch => ({
  setcurrentuser: user => dispatch(setcurrentuser(user))
});

export default connect(mapStateToProps, mapToDispatchToProps)(App);
