import Hero from "./Hero/Hero";
import Navbar from "../../components/Header/Header";
import WhatIDo from "./WhatIDo/WhatIDo";
import Testimonials from "./Testimonials/Testimonials";


function Home() {
  return (
    <>
      <Navbar />

      <Hero />
      <WhatIDo />
      <Testimonials />
      
    </>
  );
}

export default Home;