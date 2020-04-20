import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";

import { MainContentSection, SubContent } from "./components/Layout";

function App() {
  return (
    <div className="App">
      <Header />
      <MainContentSection />
      <SubContent />
      <Footer />
    </div>
  );
}

export default App;
