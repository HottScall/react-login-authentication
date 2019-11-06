import React, { useState } from "react";
import { Link, Redirect } from "react-router-dom";
import LogoImg from "../img/RIAM.png";
import { Card, Logo, Input, Form, Button } from "../components/AuthForm";
import { useAuth } from "../context/auth";

function SignUp() {
  const [isSignedUp, setSignedUp] = useState(false);
  const [IsError, setIsError] = useState(false);
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const { setAuthTokens } = useAuth();

  function postLogin() {
    axios
      .post("https://www.somePlace.com/auth/signup", {
        userName,
        password
      })
      .then(result => {
        if (result.status === 200) {
          setAuthTokens(result.data);
          setLoggedIn(true);
        } else {
          setIsError(true);
        }
      })
      .catch(e => {
        setIsError(true);
      });
  }

  if (isLoggedIn) {
    return <Redirect to="/" />;
  }

  return (
    <Card>
      <Logo src={LogoImg} />
      <Form>
        <Input type="first name" placeholder="First Name" />
        <Input type="surname" placeholder="Surname" />
        <Input type="email" placeholder="Email" />
        <Input type="password" placeholder="Password" />
        <Input type="password" placeholder="Confirm Password" />
        <Button>Sign Up</Button>
      </Form>
      <Link to="/login">Already have an account?</Link>
      {isError && <Error>The passwords provided are not the same</Error>}
    </Card>
  );
}

export default SignUp;
