import * as React from "react";
import { Link } from "react-router-dom";
import "./Header.css";

export default function Header() {
  return (
    <div>
      <header className="masthead">
        <div className="boards-menu">
          <button className="boards-btn btn">
            <i className="fab fa-trello boards-btn-icon"></i> Boards
          </button>

          <div className="board-search">
            <input
              type="search"
              className="board-search-input"
              aria-label="Board Search"
            />
            <i className="fas fa-search search-icon" aria-hidden="true"></i>
          </div>
        </div>

        <div className="logo">
          <h1>
            <i className="fab fa-trello logo-icon" aria-hidden="true"></i>

            <Link to="/">Trello</Link>
          </h1>
        </div>

        <div className="user-settings">
          <button className="user-settings-btn btn" aria-label="Create">
            <i className="fas fa-plus" aria-hidden="true"></i>
          </button>

          <button className="user-settings-btn btn" aria-label="Information">
            <i className="fas fa-info-circle" aria-hidden="true"></i>
          </button>

          <button className="user-settings-btn btn" aria-label="Notifications">
            <i className="fas fa-bell" aria-hidden="true"></i>
          </button>

          <button className="user-settings-btn btn" aria-label="User Settings">
            <i className="fas fa-user-circle" aria-hidden="true"></i>
          </button>
        </div>
      </header>
      <section class="board-info-bar">
        <div class="board-controls">
          <button class="board-title btn">
            <h2>Web Development</h2>
          </button>

          <button class="star-btn btn" aria-label="Star Board">
            <i class="far fa-star" aria-hidden="true"></i>
          </button>

          <button class="personal-btn btn">
            <Link to="personal">Personal </Link>
          </button>
        </div>

        <button class="menu-btn btn">
          <i class="fas fa-ellipsis-h menu-btn-icon" aria-hidden="true"></i>Show
          Menu
        </button>
      </section>
    </div>
  );
}
