import { useState } from 'react'
import './index.css';
// import './App.css'
import Header from "./components/Header.jsx";
import Card from "./components/Card.jsx";
import TextcaseConverter from "./components/TextCaseConverter.jsx"
import LoremIpsumGenerator from "./components/LoremIpsumGenerator.jsx"

import currency from "./images/currency.png"
import temp from "./images/temp.png"
import length from "./images/length.png"
import weight from "./images/weigth.png"
import speed from "./images/speed.png"
import volume from "./images/volume.png"
import area from "./images/area.png"
import time from "./images/time.png"
import calc from "./images/calculator.png"
import age from "./images/age.png"
import date from "./images/date.png"
import gst from "./images/gst.png"
import text from "./images/text.png"
import lorem from "./images/lorem.png"
import pass from "./images/pass.png"

function App() {
  const [currentTool, setCurrentTool] = useState(null);
  const converters = [
    { title: "Currency Converter", img: currency },
    { title: "Temperature Converter", img: temp },
    { title: "Length Converter", img: length },
    { title: "Weight Converter", img: weight},
    { title: "Speed Converter", img:  speed},
    { title: "Volume Converter", img: volume },
    { title: "Area Converter", img: area },
    { title: "Time Converter", img: time },
  ];

  const calculators = [
    { title: "Basic Calculator", img: calc},
    { title: "Age Calculator", img:age },
    { title: "Date difference Calculator", img: date },
    { title: "GST Calculator", img: gst },
  ];

  const others = [
    { title: "Text Text Case Converter", img: text},
    { title: "Lorem Ipsum Generator",img: lorem },
    { title: "Password Generator",img: pass },
   
  ];


  const handleCardClick = (toolTitle) => {
    setCurrentTool(toolTitle);
  };

  const renderTool = () => {
    switch(currentTool) {
      case "Text Text Case Converter":
        return <TextcaseConverter />;
      case "Lorem Ipsum Generator":
          return <LoremIpsumGenerator />;
      default:
        return (
          <>
            <Card title="Converters" tools={converters} onCardClick={handleCardClick} />
            <Card title="calculators" tools={calculators} onCardClick={handleCardClick} />
            <Card title="others" tools={others} onCardClick={handleCardClick} />
          </>
        );
    }
  };

  return (
    <>
      <Header/>
      {currentTool && <button className="back-button" onClick={() => setCurrentTool(null)}>Back</button>}
      {renderTool()}
    </>
  );
}

export default App