import React from "react";
import { Link } from "react-router-dom";
import "../css/error.css";

const Error = () => {
  return (
    <main>
      <h1>No such website</h1>
      <Link className="link" to="/">
        Go back to main page
      </Link>
    </main>
  );
};

export default Error;
