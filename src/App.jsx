import React from "react";
import Layout from "./components/Layout";
import Experience from "./components/Experience";
import Contact from "./components/Contact";
import Body from "./components/Body";
import { Route, Routes } from "react-router-dom";

const App = () => {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Body />} />
        <Route path="/experience" element={<Experience />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Layout>
  );
};

export default App;
