import React from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Features from "./components/Features";
import Generator from "./components/Generator";
import Gallery from "./components/Gallery";
import Community from "./components/Community";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Features />
        <Generator />
        <Gallery />
        <Community />
      </main>
      <Footer />
    </>
  );
}

export default App;
