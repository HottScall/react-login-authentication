import React from "react";
import { Link } from "react-router-dom";
import LogoImg from "../img/RIAM.png";
import { Card, Logo, Input, Form, Button } from "../components/AuthForm";

function SignUp() {
  return (
    <Card>
      <Logo src={LogoImg} />
      <Form>
        <Input type="email" placeholder="email" />
        <Input type="password" placeholder="password" />
        <Input type="password" placeholder="confirm password" />
        <Button>Sign Up</Button>
      </Form>
      <Link to="/login">Already have an account?</Link>
    </Card>
  );
}

export default SignUp;
