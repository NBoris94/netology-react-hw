import React, { useState } from "react";

function ConvertColor() {
  const [hexCodeColor, setHexCodeColor] = useState("#000000");
  const [rgbCodeColor, setRgbCodeColor] = useState("rgb(0, 0, 0)");
  const [bgColor, setBgColor] = useState("rgb(0, 0, 0)");

  function hexToRgb(hex) {
    let r = 0,
      g = 0,
      b = 0;

    r = "0x" + hex[1] + hex[2];
    g = "0x" + hex[3] + hex[4];
    b = "0x" + hex[5] + hex[6];

    return "rgb(" + +r + "," + +g + "," + +b + ")";
  }

  function handleChange(e) {
    const value = e.target.value;
    setHexCodeColor(value);

    if (value.length === 7) {
      if (/^#[a-f0-9]{6}$/i.test(value)) {
        let rgbCode = hexToRgb(value);
        setRgbCodeColor(rgbCode);
        setBgColor(rgbCode);
      } else {
        setRgbCodeColor("Ошибка!");
        setBgColor("rgb(97,27,27)");
      }
    }
  }

  return (
    <div className="converter" style={{ backgroundColor: bgColor }}>
      <input className="converter__input-hex" type="text" id="hex" name="hex" value={hexCodeColor} onChange={handleChange} />
      <span className="converter__rgb-field">{rgbCodeColor}</span>
    </div>
  );
}

export default ConvertColor;
