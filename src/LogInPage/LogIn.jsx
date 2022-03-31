import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { ACTION_TYPES, State } from "../Components/State/State";
import "./LogIn.css";

export default function LogIn() {
  const { dispatch } = useContext(State);
  const handleLoggedIn = () => {
    dispatch({
      type: ACTION_TYPES.LOGGED_IN,
      payload: {
        type: true,
      },
    });
  };
  return (
    <div class="container">
      <div class="screen">
        <div class="screen__content">
          <form class="login">
            <div class="login__field">
              <i class="login__icon fas fa-user"></i>
              <input
                type="text"
                class="login__input"
                placeholder="User name / Email"
              ></input>
            </div>
            <div class="login__field">
              <i class="login__icon fas fa-lock"></i>
              <input
                type="password"
                class="login__input"
                placeholder="Password"
              ></input>
            </div>
            <button class="button login__submit">
              <Link to="/board">
                <span onClick={handleLoggedIn} class="button__text">
                 Just click
                </span>
              </Link>
              <i class="button__icon fas fa-chevron-right"></i>
            </button>
          </form>
          <div class="social-login">
            <h2>Just click</h2>
            <div class="social-icons">
              <a href="#" class="social-login__icon fab fa-instagram"></a>
              <a href="#" class="social-login__icon fab fa-facebook"></a>
              <a href="#" class="social-login__icon fab fa-twitter"></a>
            </div>
          </div>
        </div>
        <div class="screen__background">
          <span class="screen__background__shape screen__background__shape4"></span>
          <span class="screen__background__shape screen__background__shape3"></span>
          <span class="screen__background__shape screen__background__shape2"></span>
          <span class="screen__background__shape screen__background__shape1"></span>
        </div>
      </div>
    </div>
  );
}
