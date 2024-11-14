import Nav from "./components/Nav";
import CircularCarousel from "./service/CircularCarousel";
import Hero9 from "./service/Hero9";


import Footer from "./components/Footer";
import Footer2 from "./componentsindex/Footer2";

import Serapp from "./service/Serapp"
import Hero5 from "./service/Hero5";

function Customer() {
  return (
    <>
      <Nav />
      <Hero9 />
      <Hero5 />
      <CircularCarousel />
      <Serapp/>
      <Footer2 />
      <Footer />
    </>
  );
}

export default Customer;
