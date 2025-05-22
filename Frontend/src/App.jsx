import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import {useState} from "react";
import './index.css';
import Header from "./components/Header.jsx";
import Card from "./components/Card.jsx";
import TextcaseConverter from "./components/TextcaseConverter.jsx";
import LoremIpsumGenerator from "./components/LoremIpsumGenerator.jsx";
import PasswordGenerator from "./components/PasswordGenerator.jsx";
import Calculator from "./components/Calculator.jsx"
import AgeCalculator from "./components/AgeCalculator.jsx"
import TempConverter from "./components/TempConverter.jsx"
import LengthConverter from "./components/LengthConverter.jsx"
import WeightConverter from "./components/WeightConverter"
import SpeedConverter from "./components/SpeedConverter"
import VolumeConverter from "./components/VolumeConverter.jsx"
import AreaConverter from "./components/AreaConverter.jsx"
import TimeConverter from "./components/TimeConverter.jsx"

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

  const[searchTerm, setSearchTerm]= useState("");

  const filterTools=(tools)=>
    tools.filter((tool)=>
      tool.title.toLowerCase().includes(searchTerm.toLowerCase())
);

  const converters = [
    { title: "Currency Converter", img: currency },
    { title: "Temperature Converter (implemented)", img: temp, path: "/temperatureconverter" },
    { title: "Length Converter (implemented)", img: length, path: "/lengthconverter" },
    { title: "Weight Converter (implemented)", img: weight , path : "/weightconverter"},
    { title: "Speed Converter (implemented)", img: speed , path: "/SpeedConverter"},
    { title: "Volume Converter", img: volume, path: "/VolumeConverter" },
    { title: "Area Converter", img: area, path: "/AreaConverter" },
    { title: "Time Converter", img: time, path: "/TimeConverter" },
  ];

  const calculators = [
    { title: "Basic Calculator (implemented)", img: calc, path: "/calculator" },
    { title: "Age Calculator (implemented)", img: age, path:"/agecal" },
    { title: "Date difference Calculator", img: date },
    { title: "GST Calculator", img: gst },
  ];

  const others = [
    { title: "Text Text Case Converter (implemented)", img: text, path: "/text-case" },
    { title: "Lorem Ipsum Generator (implemented)", img: lorem, path: "/lorem" },
    { title: "Password Generator (implemented)", img: pass, path: "/password" },
  ];

  return (
    <Router>
      <Header onSearch={setSearchTerm}/>
      <Routes>
        <Route path="/"
          element={
            <>
               {searchTerm.trim() === "" || filterTools(converters).length > 0 ? (
                <Card title="Converters" tools={filterTools(converters)} />
              ) : null}
              {searchTerm.trim() === "" || filterTools(calculators).length > 0 ? (
                <Card title="Calculators" tools={filterTools(calculators)} />
              ) : null}
              {searchTerm.trim() === "" || filterTools(others).length > 0 ? (
                <Card title="Others" tools={filterTools(others)} />
              ) : null}
            </>
          }
        />
        <Route path="/text-case" element={<TextcaseConverter />} />
        <Route path="/lorem" element={<LoremIpsumGenerator />} />
        <Route path="/password" element={<PasswordGenerator />} />
        <Route path="/calculator" element={<Calculator />} />
        <Route path="/agecal" element={<AgeCalculator />} />
        <Route path="/temperatureconverter" element={<TempConverter />} />
        <Route path="/lengthconverter" element={<LengthConverter />} />
        <Route path="/weightconverter" element={<WeightConverter />} />
        <Route path="/SpeedConverter" element={<SpeedConverter />} />
        <Route path="/VolumeConverter" element={<VolumeConverter />} />
        <Route path="/AreaConverter" element={<AreaConverter />} />
        <Route path="/TimeConverter" element={<TimeConverter />} />
      </Routes>
    </Router>
  );
}

export default App;
