import About from "./componets/About";
import Contacts from "./componets/Contacts";
import Home from "./componets/Home";
import Navbar from "./componets/Navbar";
import Skills from "./componets/Skills";
import Work from "./componets/Work";

export default function App() {
  return (
    <div>
      <Navbar />
      <Home />
      <About />
      <Skills />
      <Work />
      <Contacts />
    </div>
  );
}
