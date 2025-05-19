import React from "react"

export default function LengthConverter() {
    return (
        <>
            <div>
                <h2>Length Converter</h2>
                <input type="number" placeholder="Enter value"/>
                <select name="" id="">
                    <option value="">mm</option>
                    <option value="">km</option>
                    <option value="">inch</option>
                    <option value="">ft</option>
                    <option value="">Yd</option>
                    <option value="">mile</option>
                    
                </select>
                <button>convert</button>
                <p>Result</p>
            </div>
        </>
    )    
}