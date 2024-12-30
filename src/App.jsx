import React from "react";
import TestimonialCarousel from "./components/TestimonialCarousel";
import "./App.css";

function App() {
  return (
    <div className="App">
      <TestimonialCarousel pauseDuration={4000} />
    </div>
  );
}

export default App;
