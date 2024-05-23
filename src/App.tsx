import { Header } from "./components/Header";
import { Hero } from "./components/section/Hero";
import Usps from "./components/section/Usps";
import VideoCarousel from "./components/section/VideoCarousel";
import "./index.css";

function App() {
  return (
    <>
      <Header />
      <main>
        <div className="bg-background">
          <Hero />
          <Usps />
        </div>
        <VideoCarousel />
      </main>
    </>
  );
}

export default App;
