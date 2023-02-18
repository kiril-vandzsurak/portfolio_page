import { Helmet } from "react-helmet";
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
      <Helmet>
        <meta charSet="utf-8" />
        <title>Kiril Vandzsurak | Full-Stack developer</title>
        <link
          rel="canonical"
          href="https://kiril-vandzsurak-66uevc4tx-kiril-vandzsurak.vercel.app/"
        />
        <meta name="description" content="Welcome to my portfolio page!" />
      </Helmet>
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
