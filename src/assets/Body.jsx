import profile from '../Images/Profile.jpg'
import { Linkedin,Github,Mouse,MapPinned,Phone } from "lucide-react"

export default function Body(){

  return(
    <div className='mt-30 flex flex-col items-center p-2 px-4 gap-2 md:gap-4'>
      <div className='gradient-shadow rounded-full p-2'>
        <img src={profile} className='w-40 md:w-50 rounded-full border-4 border-[#101010]' alt="" />
      </div>

      <h1 className='font-bold text-4xl md:text-6xl bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent py-3'>Jhon Llyod Navarro</h1>
      <h2 className='text-xl md:text-2xl text-gray-400'>Full Stack Developer & UI/UX Designer</h2>
      <p className=' w-full md:w-[60%] md:text-lg text-gray-400'>Passionate about creating beautiful, functional web applications that solve real-world problems. 5+ years of experience in modern web technologies.</p>
      <div className='flex-center w-full gap-4 px-4 font-semibold mt-5'>
        <buttton className='btn-anim cursor-pointer bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex-center gap-2 py-2 px-4'><Linkedin size={18} strokeWidth={1.50}/>Get in Touch</buttton>
        <buttton className='btn-anim cursor-pointer  border-1 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white    rounded-lg flex-center gap-2 py-2 px-4'><Github size={18} strokeWidth={1.50}/>Github</buttton>
      </div>

      <Mouse className='mt-10 mb-10 motion-translate-y-loop-25 motion-ease-spring-smooth' size={30} strokeWidth={1.50} />

      <div className='text-gray-400 text-justify flex-center   flex-col md:flex-row gap-10 py-5 pb-10 md:px-10 lg:px-30 xl:px-40'>
        <div className='flex-center flex-1/4 flex-col gap-4'>
          <h1 className='text-2xl md:text-4xl self-start font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent'>About me</h1>
          <p className='md:text-lg'>I'm a passionate full-stack developer with a keen eye for design and user experience. I love turning complex problems into simple, beautiful solutions that users enjoy interacting with.</p>
          <p className='md:text-lg'>When I'm not coding, you can find me exploring new technologies, contributing to open-source projects, or sharing my knowledge through technical writing and mentoring.</p>
        
          <div className='self-start flex gap-4 md:gap-8 text-sm md:text-base'>
            <h1 className='flex-center gap-2'><MapPinned size={18} strokeWidth={1.50} />Cagayan de Oro, Philippines</h1>
            <h1 className='flex-center gap-2'><Phone size={18} strokeWidth={1.50}/>Available for work</h1>
          </div>
        </div>

        <div className='w-full flex flex-col gap-2 flex-1 bg-gradient-fade py-8 px-10 border-2 border-blue-600 rounded-xl'>
          <h1 className='font-bold text-xl text-white'>Quick Facts</h1>
          <ul className='list-disc flex flex-col gap-1'>
            <li>5+ years of professional experience</li>
            <li>Led teams of 3-5 developers</li>
            <li>Built 20+ production applications</li>
            <li>Open source contributor</li>
          </ul>
        </div>
      </div>

    </div>
  );
}