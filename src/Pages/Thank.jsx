import { Link } from "react-router-dom"
import {ArrowLeft} from "lucide-react"


export default function Thanks(){
  return(
    <div className="min-h-screen flex items-center pt-50 flex-col gap-4" >
      <h1 class="text-7xl font-bold text-gradient-2">Thank you for reaching out!</h1>
      <p class="text-xl text-gray-400 mt-2">Your message has been sent successfully. I’ll get back to you as soon as possible — usually within 24 hours.</p>
      <Link to='/'>
        <button className="mt-10 bg-gradient btn-anim py-2 px-4 font-semibold rounded-lg flex-center gap-4"><ArrowLeft size={20} strokeWidth={2}/>Back to Home</button>
      </Link>
    </div>
  )
}