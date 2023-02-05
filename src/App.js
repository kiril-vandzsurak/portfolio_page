import AboutMe from "./components/AboutMe/AboutMe";
import ContactPart from "./components/ContactPart/ContacrPart";
import HomePart from "./components/HomePart/HomePart";
import MyNavbar from "./components/MyNavbar/MyNavbar";
import MyProjects from "./components/MyProjects/MyProjects";
import "./NavbarCSS.css";

function App() {
  return (
    <div className="App">
      <MyNavbar />
      <HomePart />
      <AboutMe />
      <MyProjects />
      <ContactPart />
    </div>
  );
}

export default App;
