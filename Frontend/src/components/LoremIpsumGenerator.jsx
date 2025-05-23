import React, { useState } from "react";
import { LoremIpsum } from "lorem-ipsum";

const lorem = new LoremIpsum({
  sentencesPerParagraph: {
    max: 8,
    min: 4
  },
  wordsPerSentence: {
    max: 16,
    min: 4
  }
});

export default function LoremIpsumGenerator() {
  const [wordCount, setWordCount] = useState(10);
  const [output, setOutput] = useState("");

  const handleGenerate = () => {
    const text = lorem.generateWords(wordCount);
    setOutput(text);
  };

  return (
    <div className="lorem-generator-container">
  <h2>Lorem Ipsum Generator</h2>
  <label>Enter number of words:</label>
  <input
    type="number"
    value={wordCount}
    onChange={(e) => setWordCount(Number(e.target.value))}
    min="1"
  />
  <button onClick={handleGenerate}>Generate</button>

  {output && (
  <div className="lorem-output-container">
    <p>{output}</p>
  </div>
)}
</div>

  );
}
