import { Container } from "./components/Container";
import { Header } from "./components/Header";
import { Hero } from "./components/section/Hero";
import "./index.css";

function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <div>
          <Container>USP</Container>
        </div>
        <div>
          <Container>3 cols layout</Container>
        </div>
        <div>
          <Container>Carrousel</Container>
        </div>
      </main>
    </>
  );
}

export default App;
