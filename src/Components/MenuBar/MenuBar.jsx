import React from "react";
import { Link } from "react-router-dom";
import "./MenuBar.css";

export default function MenuBar() {
  return (
    <div>
      <section class="board-info-bar">
        <div class="board-controls">
          <button class="board-title btn">
            <h2>Web Development</h2>
          </button>

          <button class="personal-btn btn">
            <Link to="personal">Personal </Link>
          </button>
        </div>
      </section>
    </div>
  );
}
