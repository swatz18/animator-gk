import HeroGallery from "./components/HeroGallery";
import HeroTitle from "./components/HeroTitle";
import MenuButton from "./components/MenuButton";

import "./Home.css";

function Home() {
  return (
    <main className="home">
      <MenuButton />

      <HeroGallery />

      <div className="home-content">
        <HeroTitle />
      </div>

    </main>
  );
}

export default Home;