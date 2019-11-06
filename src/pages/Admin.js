import React from "react";
import { Button } from "../component/AuthForm";
import { useAuth } from "../context/auth";

function Admin(props) {
  const setAuthTokens = useAuth();

  function logOut() {
    setAuthTokens();
  }
  return (
    <div>
      <div>Admin Page</div>
      <Button onClick={logOut}>Log Out</Button>
    </div>
  );
}

export default Admin;
