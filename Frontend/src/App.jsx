import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import Header from "./components/Header.jsx";
import Card from "./components/Card.jsx";
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

// import textTools from "./images/textTools.png";
// import qrCodeGen from "./images/qrCodeGen.png";
// import passwordGen from "./images/passwordGen.png";
// import unitConverter from "./images/unitConverter.png";
// import speed from "./images/speed.png";
// import volume from "./images/volume.png";
// import area from "./images/area.png";
// import time from "./images/time.png";

function App() {
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


  // const [count, setCount] = useState(0)

  return (
    <>
    <Header/>
      {/* <h1 className="tool-title">Converters</h1><br />
      <h1 className="tool-title">Calculators</h1><br />
      <h1 className="tool-title">Day and Time Tools</h1><br />
      <h1 className="tool-title">Others</h1>
      
      */}

<Card title="Converters" tools={converters} />
<Card title="calculators" tools={calculators} />
<Card title="others" tools={others} />
{/* <Card title="Day and Time Tools" tools={day} />
<Card title="Others" tools={others} /> */}
      
    </>
  )
}

export default App
