import React from "react";
import { Link } from "react-router-dom";
import "./FirstPage.css";

export default function FirstPage() {
  return (
    <div className="firstPage">
      <Link to="login">
        <button>Login</button>
      </Link>
    </div>
  );
}
