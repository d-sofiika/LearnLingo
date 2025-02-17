import { useContext, useState } from "react";
import { ThemeContext } from "../../components/Context/ThemeContext";
import Benefits from "../../components/Benefits/Benefits";
import Header from "../../components/Header/Header";
import Hero from "../../components/Hero/Hero";
import ThemeChanger from "../../components/ThemeChanger/ThemeChanger";


const HomePage = () => {
   const { setTheme } = useContext(ThemeContext);
        const [image, setImage] = useState("/img/iMac/iMac-yellow.svg");
  return (
    <div className="container">
      <Header />
      <ThemeChanger setThemeColor={setTheme} setImage={setImage} />
      <Hero image={image} />
      <Benefits/>
    </div>
  );
};

export default HomePage;