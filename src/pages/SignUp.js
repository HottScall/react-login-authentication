import React, { useState } from "react";
import { Link, Redirect } from "react-router-dom";
import axios from "axios";
import LogoImg from "../img/RIAM.png";
import { Card, Logo, Input, Form, Button, Error } from "../components/AuthForm";
import { useAuth } from "../context/auth";

function SignUp() {
  const [isLoggedIn, setLoggedIn] = useState(false);
  const [isError, setIsError] = useState(false);
  const [firstName, setFirstName] = useState("");
  const [surname, setSurname] = useState("");
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const { setAuthTokens } = useAuth();

  function postSignUp() {
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
        <Input
          type="first name"
          value={firstName}
          onChange={e => {
            setFirstName(e.target.value);
          }}
          placeholder="First Name"
        />
        <Input
          type="surname"
          value={surname}
          onChange={e => {
            setSurname(e.target.value);
          }}
          placeholder="Surname"
        />
        <Input
          type="email"
          value={userName}
          onChange={e => {
            setUserName(e.target.value);
          }}
          placeholder="Email"
        />
        <Input
          type="password"
          value={password}
          onChange={e => {
            setPassword(e.target.value);
          }}
          placeholder="Password"
        />
        <Input
          type="password"
          value={confirmPassword}
          onChange={e => {
            setConfirmPassword(e.target.value);
          }}
          placeholder="Confirm Password"
        />
        <Button onClick={postSignUp}>Sign Up</Button>
      </Form>
      <Link to="/login">Already have an account?</Link>
      {isError && <Error>The passwords provided are not the same</Error>}
    </Card>
  );
}

export default SignUp;
