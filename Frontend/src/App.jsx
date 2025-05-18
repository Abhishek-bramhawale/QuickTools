import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './index.css';
import Header from "./components/Header.jsx";
import Card from "./components/Card.jsx";
import TextcaseConverter from "./components/TextCaseConverter.jsx";
import LoremIpsumGenerator from "./components/LoremIpsumGenerator.jsx";
import PasswordGenerator from "./components/PasswordGenerator.jsx";
import Calculator from "./components/Calculator.jsx"
import AgeCalculator from "./components/AgeCalculator.jsx"

import currency from "./images/currency.png";
import temp from "./images/temp.png";
import length from "./images/length.png";
import weight from "./images/weigth.png";
import speed from "./images/speed.png";
import volume from "./images/volume.png";
import area from "./images/area.png";
import time from "./images/time.png";
import calc from "./images/calculator.png";
import age from "./images/age.png";
import date from "./images/date.png";
import gst from "./images/gst.png";
import text from "./images/text.png";
import lorem from "./images/lorem.png";
import pass from "./images/pass.png";

function App() {
  const converters = [
    { title: "Currency Converter", img: currency },
    { title: "Temperature Converter", img: temp },
    { title: "Length Converter", img: length },
    { title: "Weight Converter", img: weight },
    { title: "Speed Converter", img: speed },
    { title: "Volume Converter", img: volume },
    { title: "Area Converter", img: area },
    { title: "Time Converter", img: time },
  ];

  const calculators = [
    { title: "Basic Calculator", img: calc, path: "/calculator" },
    { title: "Age Calculator", img: age, path:"/agecal" },
    { title: "Date difference Calculator", img: date },
    { title: "GST Calculator", img: gst },
  ];

  const others = [
    { title: "Text Text Case Converter", img: text, path: "/text-case" },
    { title: "Lorem Ipsum Generator", img: lorem, path: "/lorem" },
    { title: "Password Generator", img: pass, path: "/password" },
  ];

  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/"
          element={
            <>
              <Card title="Converters" tools={converters} />
              <Card title="Calculators" tools={calculators} />
              <Card title="Others" tools={others} />
            </>
          }
        />
        <Route path="/text-case" element={<TextcaseConverter />} />
        <Route path="/lorem" element={<LoremIpsumGenerator />} />
        <Route path="/password" element={<PasswordGenerator />} />
        <Route path="/calculator" element={<Calculator />} />
        <Route path="/agecal" element={<AgeCalculator />} />
      </Routes>
    </Router>
  );
}

export default App;
