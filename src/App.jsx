import React from "react";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import Properties from "./components/Properties/Properties";
import Legacy from "./components/Legacy/Legacy";
import Cards from "./components/Cards/Cards";
import Vision from "./components/OurVision/Vision";
import Projects from "./components/Ourprojects/Projects";

function App() {
  return (
    <>
      <Navbar />
      <Properties />
      <Cards />
      <Projects />
      <Vision />
      <Legacy />
      <Footer />
    </>
  );
}

export default App;
