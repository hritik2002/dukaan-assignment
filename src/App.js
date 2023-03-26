import logo from "./logo.svg";
import "./App.css";
import "./font/galanogrotesque-semibold.otf";
import "./font/galanogrotesque-medium.otf";
import "./font/galanogrotesque-regular.otf";
import Navbar from "./components/navbar/Navbar";
import Guide from "./components/guide/Guide";
import TryProducts from "./components/tryproducts/TryProducts";
import Footer from "./components/footer/Footer";
import FreeSlogan from "./components/freeslogan/FreeSlogan";

function App() {
  return (
    <div className="App">
      <Navbar />
      <FreeSlogan />
      <Guide />
      <TryProducts />
      <Footer />
    </div>
  );
}

export default App;
