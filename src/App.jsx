import './App.css'
import Header from './assets/Header';
import Body  from './assets/Body';
import Stack from './assets/Stack';
import Experience from './assets/Experience';
import Projects from './assets/Projects';

function App() {


  return (
    <div className=" relative min-h-screen flex flex-col items-center text-center">
      <Header/>
      <Body/>
      <Experience/>
      <Stack/>
      <Projects/>
    </div>
  )
}

export default App
