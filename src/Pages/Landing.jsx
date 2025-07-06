import Header from '../assets/Header';
import Body  from '../assets/Body';
import Stack from '../assets/Stack';
import Experience from '../assets/Experience';
import Projects from '../assets/Projects';
import Contact from '../assets/Contact';
import Footer from '../assets/Footer';

function Landing() {


  return (
    <div className=" relative min-h-screen flex flex-col items-center text-center">
      <Header/>
      <Body/>
      <Experience/>
      <Stack/>
      <Projects/>
      <Contact/>
      <Footer/>
    </div>
  )
}

export default Landing
