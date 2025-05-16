import React from "react";

export default function Card({title,tools, onCardClick}){
    return (
        
        <div>
        <h1 className="category-title">{title}</h1>
        <div className="cards-container">
          {tools.map(tool => (
            <div 
            className="tool-card" 
            key={tool.title}
            onClick={() => onCardClick && onCardClick(tool.title)}
          >
            <img src={tool.img} alt={tool.title} />
            <p>{tool.title}</p>
            </div>
          ))}
        </div>
      </div>

        
    )
}