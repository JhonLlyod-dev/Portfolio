import { SunMoon,Download,AlignJustify } from "lucide-react"
import { useState } from "react"

export default function Header(){

  const[menu,setMenu] = useState(false);

  function navMenu(){
    setMenu(prev => !prev);
  }



  return(
    <div className="motion-preset-slide-down-sm flex fixed top-0 z-10 justify-between w-full items-center px-4 md:px-8 py-3  bg-[#101010]/30 border-b-[1px] border-purple-400 rounded-b-xl backdrop-blur-xs">
      <div className="flex-1 flex justify-start items-center ">
        <h1 className="font-bold md:text-xl bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Jhon Llyod Navarro</h1>
      </div>

      <ul className={`hidden md:flex flex-1 md:gap-4  lg:gap-6 justify-center`}>
        <li className="text-nav">About</li>
        <li className="text-nav">Experience</li>
        <li className="text-nav">Skills</li>
        <li className="text-nav">Projects</li>
        <li className="text-nav">Contact</li>
      </ul>

      <div className="flex flex-1 gap-5 justify-end items-center">
        <button className="font-semibold btn-anim text-sm md:text-base flex items-center gap-2 py-2 px-4 rounded-lg bg-gradient-to-r from-blue-600 to-purple-600 "><Download size={16} strokeWidth={2.25} /> Resume</button>
        <AlignJustify className="md:hidden active:text-blue-600" onClick={navMenu} />
      </div>

    <div className={`transition-transform ease-in  ${menu ? 'translate-x-0':'translate-x-full'} absolute top-15.5 right-0 z-4 backdrop-blur-xs`}>
      <ul className={`flex  md:hidden flex-col  bg-[#101010]/30  rounded-l-lg flex-1 gap-4 justify-center border-l border-b p-3 px-5`}>
        <li className="text-nav">About</li>
        <li className="text-nav">Experience</li>
        <li className="text-nav">Skills</li>
        <li className="text-nav">Projects</li>
        <li className="text-nav">Contact</li>
      </ul>
    </div>

    </div>
  )
}