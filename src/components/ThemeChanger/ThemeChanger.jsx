import { useState } from 'react';
import css from "./ThemeChanger.module.css";

export default function ThemeChanger({ setThemeColor, setImage  }) {
  const [isVisible, setIsVisible] = useState(true);


  const handleColorChange = (primaryColor, accentColor, newImage) => {
    setThemeColor((prev) => ({
      ...prev,
      primary: primaryColor,
      accent: accentColor
    }));
     setImage(newImage);
  };

  return (
    <div
      className={css.themeContainer}
      style={{
        left: isVisible ? '0' : '-200px',
      }}
    >
      <button onClick={() => setIsVisible(!isVisible)}>
        {isVisible ? 'Hide' : 'Show'}
      </button>
      <div>
        <button onClick={() => handleColorChange('#f4c550', '#fbe9ba', "/img/iMac/iMac-yellow.svg")}>Yellow</button>
        <button onClick={() => handleColorChange('#9fbaae', '#cbded3', "/img/iMac/iMac-yellow.svg")}>Gray</button>
        <button onClick={() => handleColorChange('#9fb7ce', '#bfd6ea', "/img/iMac/iMac-yellow.svg")}>Blue</button>
        <button onClick={() => handleColorChange('#e0a39a', '#f2c0bd', "/img/iMac/iMac-yellow.svg")}>Pink</button>
                <button onClick={() => handleColorChange('#f0aa8d', '#f4c8ba',"/img/iMac/iMac-yellow.svg")}>Peach</button>
      
      </div>
    </div>
  );
}
