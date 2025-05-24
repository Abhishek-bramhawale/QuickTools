import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import {useState} from "react";
import './index.css';
import Header from "./components/Header.jsx";
import Card1 from "./components/Card1.jsx"
import TextcaseConverter from "./components/TextcaseConverter.jsx";
import LoremIpsumGenerator from "./components/LoremIpsumGenerator.jsx";
import PasswordGenerator from "./components/PasswordGenerator.jsx";
import Calculator from "./components/Calculator.jsx"
import AgeCalculator from "./components/AgeCalculator.jsx"
import TempConverter from "./components/TempConverter.jsx"
import LengthConverter from "./components/LengthConverter.jsx"
import WeightConverter from "./components/WeightConverter"
import SpeedConverter from "./components/SpeedConverter"
import VolumeConverter1 from "./components/VolumeConverter1.jsx"
import AreaConverter from "./components/AreaConverter.jsx"
import TimeConverter from "./components/TimeConverter.jsx"
import DateDiffCalculator from "./components/DateDiffCalculator.jsx"
import GstCalculator from "./components/GstCalculator.jsx"
import CurrencyConverter from "./components/CurrencyConverter.jsx"

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
    { title: "Currency Converter", img: currency, path: "/CurrencyConverter" },
    { title: "Temperature Converter", img: temp, path: "/temperatureconverter" },
    { title: "Length Converter", img: length, path: "/lengthconverter" },
    { title: "Weight Converter", img: weight , path : "/weightconverter"},
    { title: "Speed Converter", img: speed , path: "/SpeedConverter"},
    { title: "Volume Converter", img: volume, path: "/VolumeConverter1" },
    { title: "Area Converter", img: area, path: "/AreaConverter" },
    { title: "Time Converter", img: time, path: "/TimeConverter" },
  ];

  const calculators = [
    { title: "Basic Calculator", img: calc, path: "/calculator" },
    { title: "Age Calculator", img: age, path:"/agecal" },
    { title: "Date difference Calculator", img: date, path: "/DateDiffCalculator" },
    { title: "GST Calculator", img: gst , path: "/GstCalculator"},
  ];

  const others = [
    { title: "Text Text Case Converter", img: text, path: "/text-case" },
    { title: "Lorem Ipsum Generator", img: lorem, path: "/lorem" },
    { title: "Password Generator", img: pass, path: "/password" },
  ];

  return (
    <Router>
      <Header onSearch={setSearchTerm}/>
      <Routes>
        <Route path="/"
          element={
            <>
               {searchTerm.trim() === "" || filterTools(calculators).length > 0 ? (
                <Card1 title="Calculators" tools={filterTools(calculators)} />
              ) : null}
               {searchTerm.trim() === "" || filterTools(converters).length > 0 ? (
                <Card1 title="Converters" tools={filterTools(converters)} />
              ) : null}
              
              {searchTerm.trim() === "" || filterTools(others).length > 0 ? (
                <Card1 title="Others" tools={filterTools(others)} />
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
        <Route path="/VolumeConverter1" element={<VolumeConverter1 />} />
        <Route path="/AreaConverter" element={<AreaConverter />} />
        <Route path="/TimeConverter" element={<TimeConverter />} />
        <Route path="/DateDiffCalculator" element={<DateDiffCalculator />} />
        <Route path="/GstCalculator" element={<GstCalculator />} />
        <Route path="/CurrencyConverter" element={<CurrencyConverter />} />
      </Routes>
    </Router>
  );
}

export default App;