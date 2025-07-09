import Header from '../assets/Header';
import Body from '../assets/Body';
import Stack from '../assets/Stack';
import Experience from '../assets/Experience';
import Projects from '../assets/Projects';
import Contact from '../assets/Contact';
import Footer from '../assets/Footer';
import ParticlesComponent from '../assets/Live';


function Landing() {
  return (
    <div>
      <ParticlesComponent/>
      <div className="absolute z-2 scroll-smooth h-screen overflow-y-scroll flex flex-col items-center text-center">
        
        <Header />
        <Body />
        <Experience />
        <Stack />
        <Projects />
        <Contact />
        <Footer />
      </div>
    </div>

  );
}

export default Landing;
