import React, { useState, useRef } from "react";
import { QRCodeCanvas } from "qrcode.react";

export default function QrcodeGenerator() {
  const [text, setText] = useState("");
  const qrRef = useRef(null);


  const downloadQR = () => {
    const canvas = qrRef.current.querySelector("canvas");
    const pngUrl = canvas
      .toDataURL("image/png")
      .replace("image/png", "image/octet-stream");

    const downloadLink = document.createElement("a");
    downloadLink.href = pngUrl;
    downloadLink.download = "qr-code.png";
    document.body.appendChild(downloadLink);
    downloadLink.click();
    document.body.removeChild(downloadLink);
  };

  return (
    <div style={{ textAlign: "center", padding: "2rem" }} className="temperature-converter-container">
      <h2>QR Code Generator</h2>
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Enter text or URL"
        style={{
          padding: "10px",
          width: "90%",
          maxWidth: "400px",
          fontSize: "16px",
          borderRadius: "8px",
          marginBottom: "20px",
          border: "1px solid #ccc",
        }}
      />
      <div ref={qrRef} style={{ margin: "20px auto" }}>
        {text ? (
          <QRCodeCanvas value={text} size={200} />
        ) : (
          <p>Enter text or URL to generate QR code</p>
        )}
      </div>
      {text && (
        <button onClick={downloadQR}>
          Download QR Code
        </button>
      )}
    </div>
  );
}
