import React, { useState, useEffect } from "react";

export default function RandomColorGenerator() {
  const [randomCol, setRandomCol] = useState("#fff");
  const [typeOfColor, setTypeOfColor] = useState(null);

  function handleRgbColor() {
    let r = Math.floor(Math.random() * 256);
    let g = Math.floor(Math.random() * 256);
    let b = Math.floor(Math.random() * 256);
    setRandomCol(`rgb(${r}, ${g}, ${b})`);
  }

  function handleHexColor() {
    let hexColor = "#";
    let hexChar = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];

    // console.log(randomIndex);
    for (let i = 0; i < 6; i++) {
      let randomIndex = Math.floor(Math.random() * hexChar.length);
      let randomChar = hexChar[randomIndex];
      hexColor += randomChar;
    }
    setRandomCol(hexColor);
  }
  useEffect(() => {
    if (typeOfColor === "RGB") handleRgbColor();
    else handleHexColor();
  }, [typeOfColor]);
  return (
    <div className="h-screen flex flex-col justify-center w-[310px]">
      <hr className="mb-4" />
      <h2 className="text-xl text-center">Random Color Generator</h2>
      <div className="wrapper text-sm m-4">
        <div className="flex flex-wrap justify-evenly items-center gap-2 my-4">
          <button
            className="bg-black text-white p-2 rounded-sm hover:bg-gray-500"
            onClick={() => setTypeOfColor("HEX")}
          >
            Set HEX Color
          </button>
          <button
            className="bg-black text-white p-2 rounded-sm hover:bg-gray-500"
            onClick={() => setTypeOfColor("RGB")}
          >
            Set RGB Color
          </button>
          <button
            className="bg-blue-500 text-white p-2 rounded-sm hover:bg-blue-600"
            onClick={typeOfColor === "RGB" ? handleRgbColor : handleHexColor}
          >
            Generate RGB Color
          </button>
        </div>
        <div
          className="flex flex-col justify-center items-center h-[300px] "
          style={{ backgroundColor: `${randomCol}` }}
        >
          <p className="text-2xl text-white">Wow!! Random Color...</p>

          <p className="text-2xl text-white">Color code: {randomCol}</p>
        </div>
      </div>
    </div>
  );
}
