import React from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Generator from "./components/Generator";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Generator />
      </main>
      <Footer />
    </>
  );
}

export default App;
