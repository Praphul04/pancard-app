import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import DeshBoard from "./components/DeshBoard";




import PanCardApplicationForm from "./pages/PanCardApplicationForm";
import PanCorrectionForm from "./pages/PanCorrectionForm";



// Import other components as needed

const App = () => {
  const isMainComponent = true; // Example condition
  return (
    <>
      <Router>
        <div>
          <Header />
          <Routes>
            <Route path="/" element={<DeshBoard />} />
            <Route path="apply-new-pan" element={<PanCardApplicationForm showTitle={isMainComponent}/>} />
            <Route path="/pan-correction" element={<PanCorrectionForm showTitle={isMainComponent}/>} />
       
          </Routes>
          <Footer />
        </div>
      </Router>
    </>
  );
};

export default App;
