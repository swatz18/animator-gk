import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { useEffect } from "react";

import Header from "./components/Header/Header";

import Home from "./sections/Home/Home";
import Contact from "./sections/Contact/Contact";
import Learn from "./sections/Learn/Learn";
import About from "./sections/About/About";
import Work from "./sections/Work/Work";

import Footer from "./sections/Home/Footer/Footer";


function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}


function App() {
  return (
    <BrowserRouter>

      <ScrollToTop />

      {/* ================= GLOBAL HEADER ================= */}
      <Header />

      {/* ================= PAGES ================= */}
      <Routes>

        <Route
          path="/"
          element={<Home />}
        />

        <Route
          path="/work"
          element={<Work />}
        />

        <Route
          path="/contact"
          element={<Contact />}
        />

        <Route
          path="/learn"
          element={<Learn />}
        />

        <Route
          path="/about"
          element={<About />}
        />

      </Routes>

      {/* ================= GLOBAL FOOTER ================= */}
      <Footer />

    </BrowserRouter>
  );
}

export default App;