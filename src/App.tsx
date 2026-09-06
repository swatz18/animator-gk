import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./sections/Home/Home";
import Contact from "./sections/Contact/Contact";
import Learn from "./sections/Learn/Learn";
import About from "./sections/About/About";
import Footer from "./sections/Home/Footer/Footer";



function App() {
  return (
    <BrowserRouter>
      

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