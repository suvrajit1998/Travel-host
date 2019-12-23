import React from "react";

import Custombutton from "../custombutton/custombutton.component";
import FormInput from "../formInput/formInput.component";

import { auth, createUserProfileDocument } from "../../firebase/firebase.utils";

import "./singup.style.scss";

export default class SingUppage extends React.Component {
  constructor() {
    super();

    this.state = {
      displayName: "",
      email: "",
      password: "",
      confirmpassword: ""
    };
  }

  handlesubmit = async e => {
    e.preventDefault();

    const { displayName, email, password, confirmpassword } = this.state;

    if (password !== confirmpassword) {
      alert("Password Don't match");
      return;
    }

    try {
      const { user } = await auth.createUserWithEmailAndPassword(
        email,
        password
      );

      await createUserProfileDocument(user, { displayName });

      this.setState({
        displayName: "",
        email: "",
        password: "",
        confirmpassword: ""
      });
    } catch (error) {
      console.log(error);
    }
  };

  handlechange = e => {
    const { name, value } = e.target;

    this.setState({ [name]: value });
  };

  render() {
    const { displayName, email, password, confirmpassword } = this.state;
    return (
      <div className="Sing-up">
        <h2 className="title">I have not a account</h2>
        <span className="subtitle">Sign up with email and password</span>
        <form className="sing-up-form" onSubmit={this.handlesubmit}>
          <FormInput
            type="text"
            name="displayName"
            label="Display name"
            value={displayName}
            onChange={this.handlechange}
            required
          />
          <FormInput
            type="email"
            name="email"
            label="email"
            value={email}
            onChange={this.handlechange}
            required
          />
          <FormInput
            type="password"
            name="password"
            label="password"
            value={password}
            onChange={this.handlechange}
            required
          />
          <FormInput
            type="password"
            name="confirmpassword"
            label="Confirm pasword"
            value={confirmpassword}
            onChange={this.handlechange}
            required
          />
          <Custombutton type="submit"> Sign Up </Custombutton>
        </form>
      </div>
    );
  }
}
