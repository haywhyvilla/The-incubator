import "./App.css";
import Home from "./Components/Home";
import Articles from "./Components/Articles";
import Aside from "./Components/Aside";
import News from "./Components/News";
import Details from "./Components/Details";
import Footer from "./Components/Footer";

function App() {
  return (
    <div className="App">
      <Home />
      <News />
      <div class="md:px-[140px] sm:py-[60px] sm:grid grid-cols-[2fr_1fr]">
        <Articles />
        <Aside />
      </div>
      <Details />
      <Footer />
    </div>
  );
}

export default App;
