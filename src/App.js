import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/home/Home";
import "./global_styles/app.scss";
import Footer from "./components/footer/Footer";
import AboutUs from "./pages/aboutUs/AboutUs";
import LatestNews from "./pages/latestNews/LatestNews";
import Contact from "./pages/contact/Contact";
import Portfolio from "./pages/portfolio/Portfolio";

function App() {
  return (
    <React.Fragment>
      <div className="app">
        <BrowserRouter>
          <Routes>
            <Route path="/">
              <Route index element={<Home />} />
              <Route path="about-us" element={<AboutUs />} />
              <Route path="latest-news" element={<LatestNews />} />
              <Route path="contact" element={<Contact />} />
              <Route path="portfolio" element={<Portfolio />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </div>
      <Footer />
    </React.Fragment>
  );
}

export default App;
