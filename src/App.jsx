import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Landing from './Pages/Landing';
import Thanks from './Pages/Thank';
import ObserverProvider from './Observer';
import NotFound from './Pages/Error';
import Builds from './Pages/Builds';
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
        <Route path="*" element={<NotFound />} />
        <Route path="/projects" element={
          <ObserverProvider> 
            <Builds/> 
          </ObserverProvider>
        } />
      </Routes>
    </Router>
  )
}

export default App
