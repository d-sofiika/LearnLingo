import Benefits from "../../components/Benefits/Benefits";
import Header from "../../components/Header/Header";
import Hero from "../../components/Hero/Hero";


const HomePage = () => {
  return (
    <div className="container">
      <Header />
      <Hero />
      <Benefits/>
    </div>
  );
};

export default HomePage;