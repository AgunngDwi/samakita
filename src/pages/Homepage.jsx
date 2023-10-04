import About from "../component/About";
import Footer from "../component/Footer";
import Hero from "../component/Hero";
import Menu from "../component/Menu";
import NavbarMain from "../component/NavbarMain";

const Homepage = () => {
  return (
    <div>
      <NavbarMain />
      <Hero />
      <About />
      <Menu />
      <Footer />
    </div>
  );
};

export default Homepage;
