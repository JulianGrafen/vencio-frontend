import React from "react";
import Login from "../components/Login";

function LoginPage() {
  return (
    <body className="w-full h-screen text-center bg-background ">
      <h1 className="font-poppins text-heading font-bold font">Vencio</h1>
      <h2 className="font-poppins text-subheading font-bold font">
        Get rid of things faster.
        <br />
        Support the nature.
        <br />
        Be awesome.
      </h2>
      <Login />
    </body>
  );
}

export default LoginPage;
