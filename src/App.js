import Header from "./components/Header";
import Footer from "./components/Footer";
import { ContentB } from "./components/ContentB";
import { ContentA } from "./components/ContentA";
import "./App.css";

function App() {
  return (
    <div>
      <Header />
      <ContentA />
      <ContentB />
      <Footer />
    </div>
  );
}

export default App;
