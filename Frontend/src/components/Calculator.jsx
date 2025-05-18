import React from "react"
import {useState } from "react"

export default function Calculator(){
    return (
        <>
            <div className="cal-container">
                <div className="cal-display">
                    <div className="cal-expression"></div>
                    <div className="cal-result"></div>
                </div>
                <div className="calc=btns">
                    <button style={{background:"orange"}} onClick={handleClear}>C</button>
                    <button  style={{background:"orange"}} onClick={handleDelete}>⌫</button>
                    <button onClick={() => handleClick("%")}>%</button>
                    <button onClick={() => handleClick("/")}>÷</button>

                    <button onClick={() => handleClick("7")}>7</button>
                    <button onClick={() => handleClick("8")}>8</button>
                    <button onClick={() => handleClick("9")}>9</button>
                    <button onClick={() => handleClick("*")}>×</button>

                    <button onClick={() => handleClick("4")}>4</button>
                    <button onClick={() => handleClick("5")}>5</button>
                    <button onClick={() => handleClick("6")}>6</button>
                    <button onClick={() => handleClick("-")}>−</button>

                    <button onClick={() => handleClick("1")}>1</button>
                    <button onClick={() => handleClick("2")}>2</button>
                    <button onClick={() => handleClick("3")}>3</button>
                    <button onClick={() => handleClick("+")}>+</button>

                    <button onClick={() => handleClick("0")}>0</button>
                    <button onClick={() => handleClick(".")}>.</button>
                    <button className="equal-btn" onClick={handleEvaluate}>=</button>
                </div>
            </div>
        </>
    )
}