import "./App.css";
import Black from "./componets/Black";
import Section from "./componets/Section";
import Footer from "./componets/Footer";
import Faq from "./componets/Faq";
import Navbar from "./componets/Navbar";
import Header from "./componets/Header";
import "./componets/MovingImages.css";

function App() {
  return (
    <div className="bg-white ">
      <Navbar />
      <Header />
      <Black />
      <Section />
      <Faq />
      <Footer />
    </div>
  );
}

export default App;
