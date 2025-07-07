
export default function Footer(){
  return(
    <div className="mt-10 w-full text-gray-400 text-justify flex flex-col  items-center gap-6 px-6 py-5 pb-0 md:px-10 ">
    
      <div className="w-full flex justify-between gap-8">
        <div className="flex-1/2">
          <h1 className="font-semibold  text-white">Jhon Llyod Navarro</h1>
          <p className="w-full lg:w-[50%]">A developer with a vision for building responsive and functional apps that solve real-world problems. I’m more experienced in front-end and always aim to make the user experience smoother and more efficient.</p>
        </div>
        <div className="flex-1 flex gap-2 flex-col">
          <h1 className="font-semibold  text-white">Navigations</h1>
          <ul className="flex flex-col gap-1 ">
            <li className="transition hover:text-white hover:underline"><a href="#Home">Home</a></li>
            <li className="transition hover:text-white hover:underline"><a href="#About">About</a></li>
            <li className="transition hover:text-white hover:underline"><a href="#Experience">Experience</a></li>
            <li className="transition hover:text-white hover:underline"><a href="#Skills">Skills</a></li>
            <li className="transition hover:text-white hover:underline"><a href="#Projects">Projects</a></li>
            <li className="transition hover:text-white hover:underline"><a href="#Contact">Contact</a></li>
          </ul>
        </div>

        <div className="flex-1 flex gap-2 flex-col">
          <h1 className="font-semibold text-white">Services</h1>
          <ul className="flex flex-col  gap-1">
            <li className="transition hover:text-white hover:underline">Web development</li>
            <li className="transition hover:text-white hover:underline">UI/UX Design</li>
            <li className="transition hover:text-white hover:underline">Front-end Development</li>
          </ul>
        </div>

      </div>

      <footer class=" w-full text-center text-gray-400 text-sm py-6 border-t-1 border-gray-400">
        © 2025 Jhon Llyod Navarro. All rights reserved.
      </footer>
    </div>
  )
}