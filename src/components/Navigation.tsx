import React from "react";
import { Link } from "react-router-dom";

export const Navigation: React.FC = () => {
  return (
    <nav style={{ padding: "1rem", backgroundColor: "#f0f0f0" }}>
      <ul
        style={{
          display: "flex",
          gap: "1rem",
          listStyle: "none",
          margin: 0,
          padding: 0,
        }}
      >
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
      </ul>
    </nav>
  );
};
