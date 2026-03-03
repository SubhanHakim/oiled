import React from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Features from "./components/Features";
import Generator from "./components/Generator";
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
        <Community />
      </main>
      <Footer />
    </>
  );
}

export default App;
