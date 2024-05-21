import { Button } from "./components/Button";
import { Container } from "./components/Container";
import { Header } from "./components/Header";
import "./index.css";

function App() {
  return (
    <>
      <Header />
      <main>
        <div className="h-[300vh]">
          <Container>
            Hero component <Button size="large">Test Button</Button>
          </Container>
        </div>
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
