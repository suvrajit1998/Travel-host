import React from "react";

import FormInput from "../formInput/formInput.component";
import Custombutton from "../custombutton/custombutton.component";

import { auth, singInWithGoogle } from "../../firebase/firebase.utils";

import "./signin.style.scss";

export default class SignIn extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      password: "",
      email: ""
    };
  }

  handlesubmit = async e => {
    e.preventDefault();

    const { email, password } = this.state;

    try {
      await auth.signInWithEmailAndPassword(email, password);
      this.setState({ email: "", password: "" });
    } catch (error) {
      console.log(error);
    }
  };

  handlechange = e => {
    const { value, name } = e.target;

    this.setState({ [name]: value });
  };

  render() {
    return (
      <div className="sign-in">
        <h2 className="title">I already have an account</h2>
        <span>Sign in with email and password</span>
        <form onSubmit={this.handlesubmit}>
          <FormInput
            type="email"
            name="email"
            value={this.state.email}
            handlechange={this.handlechange}
            label="email"
            required
          />
          <FormInput
            type="password"
            name="password"
            value={this.state.password}
            handlechange={this.handlechange}
            label="password"
            required
          />
          <div className="button">
            <Custombutton type="submit">Sign In</Custombutton>
            <Custombutton onClick={singInWithGoogle} isgoogleSingIn>
              Sign in with google
            </Custombutton>
          </div>
        </form>
      </div>
    );
  }
}
