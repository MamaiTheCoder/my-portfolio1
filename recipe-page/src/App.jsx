import "./App.css";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import Ingredients from "./components/Ingredients/Ingredients";

function App() {
  return (
    <article className="main">
      <Header />
      <Hero />
      <Ingredients />
      <Footer />
    </article>
  );
}

export default App;
