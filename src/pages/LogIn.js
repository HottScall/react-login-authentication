import React, { useState } from "react";
import { Link, Redirect } from "react-router-dom";
import axios from "axios";
import LogoImg from "../img/RIAM.png";
import { Card, Logo, Button, Form, Input, Error } from "../components/AuthForm";
import { useAuth } from "../context/auth";

function LogIn() {
  const [isLoggedIn, setLoggedIn] = useState(false);
  const [isError, setIsError] = useState(false);
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [setAuthTokens] = useAuth();

  function postLogin() {
    axios
      .post("https://www.somePlace.com/auth/login", {
        userName,
        password
      })
      .then(result => {
        if (result.state === 200) {
          setAuthTokens(results.data);
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
          type="email"
          value={userName}
          onChange={e => {
            setUserName(e.target.value);
          }}
          placeholder="email"
        />
        <Input
          type="password"
          value={password}
          onChange={e => {
            setPassword(e.target.value);
          }}
          placeholder="password"
        />
        <Button onClick={postLogin}>Sign In</Button>
      </Form>

      <Link to="/signup">Already have an account?</Link>
      {isError && (
        <Error>The username or password provided was incorrect</Error>
      )}
    </Card>
  );
}

export default LogIn;
