import Nav from "./components/Nav";
import CircularCarousel from "./service/CircularCarousel";
import Hero9 from "./service/Hero9";


import Footer from "./components/Footer";
import Footer2 from "./componentsindex/Footer2";

import Serapp from "./service/Serapp"
import Hero5 from "./service/Hero5";
import About7 from "./service/About7";

function Customer() {
  return (
    <>
      <Nav />
      <Hero9 />
      <About7 />
      <Hero5 />
      <CircularCarousel />
      <Serapp/>
      <Footer2 />
      <Footer />
    </>
  );
}

export default Customer;
