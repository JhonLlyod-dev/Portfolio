import './App.css'
import { Construction } from 'lucide-react';

function App() {


  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-[#101010] px-4 text-center">
      <Construction className="h-16 w-16 text-yellow-400 mb-4" />
      <h1 className="text-3xl font-bold text-white mb-2">
        Jhonllyod-dev's Portfolio 🚧
      </h1>
      <p className="text-gray-400 max-w-md">
        This site is currently in production. I'm setting things up to showcase my projects, skills, and experiences. Please check back soon — exciting things are on the way!
      </p>
      <div className="mt-6 text-sm text-gray-500">
        — Built with 💻 by Jhon Llyod Navarro
      </div>
    </div>
  )
}

export default App
