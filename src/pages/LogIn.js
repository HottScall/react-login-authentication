import React from "react";
import { Link } from "react-router-dom";
import LogoImg from "../img/RIAM.png";
import { Card, Logo, Button, Form, Input } from "../components/AuthForms";

function LogIn() {
  return (
    <Card>
      <Logo src={LogoImg} />
      <Form>
        <Input type="email" placeholder="email" />
        <Input type="password" placeholder="password" />
      </Form>

      <Link to="/signup">Dont have an account?</Link>
    </Card>
  );
}

export default Login;
