import React from {"react"}

export default function TempConverter(){
    const [tempValue, setTempValue] = useState("");
  const [tempUnit, setTempUnit] = useState("C");
  const [tempResult, setTempResult] = useState("");

  const convertTemperature = () => {
    const val = parseFloat(tempValue);
    if (isNaN(val)) {
      setTempResult("Enter a valid number");
      return;
    }
    let celsius;

    if (tempUnit === "C") celsius = val;
    else if (tempUnit === "F") celsius = (val - 32) * (5 / 9);
    else if (tempUnit === "K") celsius = val - 273.15;

    const f = (celsius * 9) / 5 + 32;
    const k = celsius + 273.15;

    setTempResult(
      `Celsius: ${celsius.toFixed(2)}°C, Fahrenheit: ${f.toFixed(
        2
      )}°F, Kelvin: ${k.toFixed(2)}K`
    );
  };

    return (
        <>
        <div className="temperature-converter-container">
            <h2>Temperature converter</h2>
            <input type="number" placeholder="Enter value"  type="number" value={tempValue} onChange={(e) => setTempValue(e.target.value)} />
            <select value={tempUnit} onChange={(e) => setTempUnit(e.target.value)}>
                <option value="C">Celsius (°C)</option>
                <option value="F">Fahrenheit (°C)</option>
                <option value="K">Kelvin (K)</option>

            </select>
            <button onClick={convertTemperature}>convert</button>
            <p>{tempResult}</p>
        </div>
        </>
    )
}