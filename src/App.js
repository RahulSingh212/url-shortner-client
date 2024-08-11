import logo from "./logo.svg";
import "./App.css";

import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Layout from "./components/Layout";
import HomePage from "./pages/HomePage";
import AboutUsPage from "./pages/AboutUsPage";
import BrandPage from './pages/BrandPage';
import PartnerPage from "./pages/PartnerPage";
import PressPage from "./pages/PressPage";
import BlogPage from "./pages/BlogPage";
import ContactUsPage from "./pages/ContactUsPage";
import CareerPage from "./pages/CareerPage";
import Top100Urls from "./pages/Top100Urls";
import AllUrls from "./pages/AllUrls";

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutUsPage />} />
          <Route path="/brands" element={<BrandPage />} />
          <Route path="/partners" element={<PartnerPage />} />
          <Route path="/press" element={<PressPage />} />
          <Route path="/blog" element={<BlogPage />} />
          <Route path="/contact" element={<ContactUsPage />} />
          <Route path="/career" element={<CareerPage />} />
          <Route path="/top-100-urls" element={<Top100Urls />} />
          <Route path="/all-urls" element={<AllUrls />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
