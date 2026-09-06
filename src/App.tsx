import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { useEffect } from "react";

import Home from "./sections/Home/Home";
import Contact from "./sections/Contact/Contact";
import Learn from "./sections/Learn/Learn";
import About from "./sections/About/About";
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
      <Routes>

        <Route
          path="/"
          element={<Home />}
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
    <Footer />  
    </BrowserRouter>
  );
}

export default App;