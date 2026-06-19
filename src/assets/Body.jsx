import profile from '../Images/Profile.png'
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
            className="w-40 md:w-50 rounded-full border-4 bg-gradient-fade-20 border-[#101010]"
            alt="Jhon Llyod Navarro - Full Stack Developer Philippines"
          />
        </div>

        <h1 className="motion-preset-slide-up-md motion-delay-100 font-bold text-4xl md:text-6xl bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent py-3">
          Jhon Llyod Navarro
        </h1>
        <h2 className="text-xl md:text-2xl pb-1 motion-preset-slide-up-md motion-delay-200">
          Full Stack Developer & Automation Specialist — Fr Bro, I Build Hits
        </h2>
        <p className="w-full md:w-[60%] text-sm md:text-lg motion-preset-slide-up-md motion-delay-300">
          Bro, I build responsive web apps with clean modern design and automation that slap. I am NOT cooked. Real results, real solutions, no cap.
        </p>

        <div className="flex-center w-full gap-4 py-4 font-semibold mt-5">
          <a
            href="#Contact"
            className="btn-anim motion-preset-slide-right-md cursor-pointer bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex-center gap-2 py-2 px-4"
          >
            <Mail size={18} strokeWidth={1.5} />
            Slide in My DMs
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


      <section id='About' className='intersect-once intersect:motion-preset-slide-up motion-delay-100 text-gray-400 text-justify flex-center flex-col md:flex-row gap-10 py-20 px-6 md:px-10 lg:px-34 xl:px-44'>
        <div className='flex-center flex-1/4 flex-col gap-4'>
          <h1 className='text-2xl md:text-4xl self-start font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent py-1'>Lowkey, Who Am I?</h1>
          <p className='md:text-lg'>No cap, I'm a full-stack developer and automation guy who builds web apps and systems that actually slap in the real world. I stay locked in on scalable solutions, clean workflows, and automating the boring stuff — so you can work smarter, not harder. That's the Top G move. 🚀</p>
          <p className='md:text-lg'>Off the clock? Vibing with the family, going down tech rabbit holes, and leveling up like my guy Sung Jin-Woo — no cap, the grind never stops. I lowkey enjoy sharing the sauce with my bros too, because staying ahead in this industry ain't optional. It's the only W that matters. ⚡</p>
        
          <div className='self-start flex text-white gap-4 md:gap-8 text-sm md:text-base'>
            <h1 className='flex-center gap-2'><MapPinned size={18} strokeWidth={1.50} />Cagayan de Oro, Philippines</h1>
            <h1 className='flex-center gap-2'><Phone size={18} strokeWidth={1.50}/>Open to work,I ain't trippin!</h1>
          </div>
        </div>

        <div className='w-full flex flex-col gap-2 flex-1 bg-gradient-fade py-7 px-10 border-2 border-blue-400 rounded-xl'>
          <h1 className='font-bold text-xl text-white'>Day Ones Know These Facts</h1>
          <ul className='list-disc flex flex-col gap-1'>
            <li>2+ year in the game and I ain't cappin'</li>
            <li>Front-end development is my main character era</li>
            <li>Shipped 2+ production apps that actually bussin' fr</li>
            <li>Your guy here grinding at STI College CDO</li>
          </ul>
        </div>
      </section>
    </div>
  );
}