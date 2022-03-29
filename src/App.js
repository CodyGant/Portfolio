import "bootstrap/dist/css/bootstrap.min.css";
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import About from "./components/About";
import Technologies from "./components/Tech";
import ContactMe from "./components/Contactme";
import Footer from "./components/footer";
import { Stack } from "react-bootstrap";

function App() {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
  return (
    <div >
      <header >
        <Stack className = 'imstacking'>
          <div >
            <About />
          </div>
          <div className = 'tech'>
            <Technologies />
          </div>
          <div>
            <ContactMe />
          </div>
        </Stack>
      </header>
      <Footer />
    </div>
  );
}

export default App;
