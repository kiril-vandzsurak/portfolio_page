import AboutMe from "./components/AboutMe/AboutMe";
import ContactPart from "./components/ContactPart/ContacrPart";
import Footer from "./components/Footer/Footer";
import HomePart from "./components/HomePart/HomePart";
import MyNavbar from "./components/MyNavbar/MyNavbar";
import MyProjects from "./components/MyProjects/MyProjects";
import "./NavbarCSS.css";

function App() {
  return (
    <div className="App" style={{ minWidth: "550px" }}>
      <MyNavbar />
      <HomePart />
      <AboutMe />
      <MyProjects />
      <ContactPart />
      <Footer />
    </div>
  );
}

export default App;
