import React from "react";
import { Link } from "react-router-dom";

const Card1 = ({ title, tools }) => {
  return (
    <div>
      <h1 className="category-title">{title}</h1>
      <div className="cards-container">
        {tools.map((tool) => (
          <Link
            to={tool.path || "#"}
            key={tool.title}
            className="tool-card"
            style={{ textDecoration: 'none', color: 'inherit' }}
          >
            <img src={tool.img} alt={tool.title} />
            <p>{tool.title}</p>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Card1;
