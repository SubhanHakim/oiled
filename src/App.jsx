import React from "react";
import Header from "./components/Header";
import BackgroundImages from "./components/BackgroundImages";
import Hero from "./components/Hero";
import Features from "./components/Features";
import Generator from "./components/Generator";
import Gallery from "./components/Gallery";
import Community from "./components/Community";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <BackgroundImages />
      <Header />
      <main>
        <Hero />
        <Generator />
        {/* <Features /> */}
        <Gallery />
        <Community />
      </main>
      <Footer />
    </>
  );
}

export default App;
