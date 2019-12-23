import React from "react";

import SignIn from "../../components/signIn/signin.component";
import SingUppage from "../../components/singUp/singup.component";

import "./sign-in-sign-out.style.scss";

const SignInSignout = () => (
  <div className="sign-in-sign-out">
    <SignIn />
    <SingUppage />
  </div>
);

export default SignInSignout;
