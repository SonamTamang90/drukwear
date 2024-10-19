import { useState } from "react";

function ColorOptions({ colors }) {
  const [selectedColor, setSelectedColor] = useState("black");

  function handleColorChange(color) {
    setSelectedColor(color);
  }

  return (
    <div className="flex items-center space-x-2 mt-4">
      {colors &&
        colors.map((color) => (
          <div key={color.name}>
            <input
              type="radio"
              id={`color-${color.name}`}
              name="color"
              value={color.code}
              className="hidden"
              checked={selectedColor === color.code}
              onChange={() => handleColorChange(color.code)}
            />

            <label
              htmlFor={`color-${color.name}`}
              className={`w-3 h-3 rounded-full text-xs cursor-pointer flex justify-center items-center opacity-75`}
              style={{
                backgroundColor: color.code,
              }}
            ></label>
          </div>
        ))}
    </div>
  );
}

export default ColorOptions;
