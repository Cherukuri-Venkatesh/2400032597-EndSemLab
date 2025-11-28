import React, { useState } from "react";
import "./App.css";

function App() {
  const images = [
    "p1.jpeg",
    "p2.jpeg",
    "p3.jpg",
    "p5.jpeg",
    "p6.jpeg",
    "4.jpeg",
    "image.png",
    "image copy 2.png"
  ];

  const [selectedImg, setSelectedImg] = useState(null);

  return (
    <div className="container">
      <h1>Image Gallery</h1>
      <div className="gallery">
        {images.map((img, index) => (
          <img
            key={index}
            src={`/${img}`}
            alt=""
            onClick={() => setSelectedImg(`/${img}`)}
          />
        ))}
      </div>

      {/* Fullscreen Modal */}
      {selectedImg && (
        <div className="modal" onClick={() => setSelectedImg(null)}>
          <img className="modal-img" src={selectedImg} alt="" />
        </div>
      )}
    </div>
  );
}

export default App;
