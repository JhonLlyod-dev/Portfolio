import profile from '../Images/Profile.jpg'
import { Mail,Github,Mouse,MapPinned,Phone } from "lucide-react"

export default function Body(){

  return(
    <div className='motion-preset-fade-lg flex flex-col items-center py-2 '>
    <section
      id="Home"
      className="flex items-center justify-center pt-30 gap-10 flex-col min-h-[85vh] md:min-h-screen px-6 md:px-10"
    >
      <div className="w-full max-w-screen-xl mx-auto flex-center flex-col gap-1 text-white text-center">
        <div className="motion-preset-slide-up-md gradient-shadow rounded-full p-2">
          <img
            src={profile}
            className="w-40 md:w-50 rounded-full border-4 border-[#101010]"
            alt=""
          />
        </div>

        <h1 className="motion-preset-slide-up-md motion-delay-100 font-bold text-4xl md:text-6xl bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent py-3">
          Jhon Llyod Navarro
        </h1>
        <h2 className="text-xl md:text-2xl pb-1 motion-preset-slide-up-md motion-delay-200">
          Full Stack Developer & UI/UX Designer
        </h2>
        <p className="w-full md:w-[60%] text-sm md:text-lg motion-preset-slide-up-md motion-delay-300">
          I build responsive, functional web applications that address real-world problems. Backed by over a year of experience with modern web technologies and development best practices.
        </p>

        <div className="flex-center w-full gap-4 py-4 font-semibold mt-5">
          <a
            href="#Contact"
            className="btn-anim motion-preset-slide-right-md cursor-pointer bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex-center gap-2 py-2 px-4"
          >
            <Mail size={18} strokeWidth={1.5} />
            Get in Touch
          </a>
          <a
            href="https://github.com/JhonLlyod-dev"
            target="_blank"
            className="btn-anim motion-preset-slide-left-md cursor-pointer border border-pink-600 text-pink-600 hover:bg-pink-600 hover:text-white rounded-lg flex-center gap-2 py-2 px-4"
          >
            <Github size={18} strokeWidth={1.5} />
            Github
          </a>
        </div>
      </div>

      <Mouse className="motion-translate-y-loop-25 mt-10 motion-ease-spring-smooth" size={30} strokeWidth={1.5} />
    </section>


      <section id='About' className='intersect-once intersect:motion-preset-slide-up motion-delay-100 text-gray-400 text-justify flex-center  flex-col md:flex-row gap-10 py-20 px-6 md:px-10 lg:px-34 xl:px-44'>
        <div className='flex-center flex-1/4 flex-col gap-4'>
          <h1 className='text-2xl md:text-4xl self-start font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent'>About me</h1>
          <p className='md:text-lg'>I'm a full-stack developer who values thoughtful user experience and practical design. I enjoy solving problems that require real-world solutions—building applications that are both functional and easy to use.</p>
          <p className='md:text-lg'>I spend most of my free time hanging out with my family and exploring new technologies. I also take pleasure in sharing what I know with anyone who’s interested and enjoy the opportunity to connect with the people around me.</p>
        
          <div className='self-start flex text-white gap-4 md:gap-8 text-sm md:text-base'>
            <h1 className='flex-center gap-2'><MapPinned size={18} strokeWidth={1.50} />Cagayan de Oro, Philippines</h1>
            <h1 className='flex-center gap-2'><Phone size={18} strokeWidth={1.50}/>Available for work</h1>
          </div>
        </div>

        <div className='w-full flex flex-col gap-2 flex-1 bg-gradient-fade py-7 px-10 border-2 border-blue-400 rounded-xl'>
          <h1 className='font-bold text-xl text-white'>Quick Facts</h1>
          <ul className='list-disc flex flex-col gap-1'>
            <li>Over a year of professional experience</li>
            <li>Stronger proficiency in front-end development</li>
            <li>Built 2+ production applications</li>
            <li>Student at STI College CDO</li>
          </ul>
        </div>
      </section>
    </div>
  );
}