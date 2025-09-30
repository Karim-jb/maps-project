import AboutUs from "../components/AboutUs";
import Clients from "../components/Clients";
import WhyUs from "../components/WhyUs";
import Reviews from "../components/Reviews";
import Footer from "../components/Footer";
import MoviesHomeFetch from "../components/MoviesHomeFetch";

export default function Home() {
  return (
    <>
      <AboutUs />
      <Clients />
      <WhyUs />
      <Reviews />
      <MoviesHomeFetch />
      <Footer />
    </>
  );
}
