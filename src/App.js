import AboutMe from "./components/AboutMe/AboutMe";
import HomePart from "./components/HomePart/HomePart";
import MyNavbar from "./components/MyNavbar/MyNavbar";
import "./NavbarCSS.css";

function App() {
  return (
    <div className="App">
      <MyNavbar />
      <HomePart />
      <AboutMe />
    </div>
  );
}

export default App;
