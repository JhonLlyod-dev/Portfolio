import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Landing from './Pages/Landing';
import Thanks from './Pages/Thank';
import ObserverProvider from './Observer';
import NotFound from './Pages/Error';
import Builds from './Pages/Builds';
import { Analytics } from "@vercel/analytics/react";

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={
          <ObserverProvider>
            <Landing/>
          </ObserverProvider>
        }/>
        <Route path='/thank-you' element={<Thanks/>}/>
        <Route path="/projects" element={
          <ObserverProvider>
            <Builds/>
          </ObserverProvider>
        }/>
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Analytics />
    </Router>
  )
}

export default App