import React,{useState} from "react"


export default function TextCaseConverter(){
    const[text, setText]=useState("");
    const[output, setOutput]=useState("");

    const toLowerCase=()=>{
        setOutput(text.toLowerCase());
    };

    const toUpperCase = () => {
        setOutput(text.toUpperCase());
      };

      const toTitleCase = () => {
        const title = text
          .toLowerCase()
          .split(" ")
          .map(word => word.charAt(0).toUpperCase() + word.slice(1))
          .join(" ");
        setOutput(title);
      };
    
      const toSentenceCase = () => {
        const sentence =
          text.charAt(0).toUpperCase() + text.slice(1).toLowerCase();
        setOutput(sentence);
      };

    return(
        <div className="text-converter-container">
        <h1>Text Case Converter</h1>
        <input 
            type="text" 
            placeholder="Enter your text" 
            value={text} 
            onChange={e => setText(e.target.value)}
        />
        
        <div className="button-group">
            <button onClick={toUpperCase}>UPPERCASE</button>
            <button onClick={toLowerCase}>lowercase</button>
            <button onClick={toTitleCase}>Title Case</button>
            <button onClick={toSentenceCase}>Sentence case</button>
        </div>
        
        {output && (
            <div className="output-container">
                <strong>Output: </strong>{output}
            </div>
        )}
    </div>
    )
}