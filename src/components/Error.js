import React from "react";
import { Link } from "react-router-dom";

const Error = () => {
  return (
    <main>
      <h1>No such website</h1>
      <Link to="/">Go back to main page</Link>
    </main>
  );
};

export default Error;
