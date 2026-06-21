import { featured } from "../Data"
import { Github,SquareArrowOutUpRight,ArrowRight } from "lucide-react"
import { Link } from "react-router-dom"

export default function Projects(){
  
  const features = featured.slice(0, 3);

  return(
  <section id='Projects' className="intersect-once intersect:motion-preset-fade motion-delay-400 mt-10 w-full text-gray-400 text-justify flex flex-col items-center gap-10 px-6 py-20 md:px-10 lg:px-24 xl:px-44">
    <h2 className="text-2xl md:text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent py-2">
      My Best Drops fr
    </h2>

    <div className="flex flex-wrap justify-center gap-8 w-full">
      {features.map((data, i) => (
        <div
          key={i}
          className="w-full sm:w-[48%] lg:w-[30%] flex flex-col justify-between rounded-xl bg-[rgba(255,255,255,0.02)] border border-white/10 card-animated overflow-hidden cursor-pointer relative"
        >
          <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 z-10" />

          <div className="relative overflow-hidden">
            <img
              src={data.img}
              className="w-full aspect-video object-cover  transition-all duration-300"
              alt={data.name}
            />
  
          </div>

          <div className="flex flex-col gap-3 p-4 flex-1 text-left">
            <div className="flex items-center justify-between">
              <h3 className="text-base font-bold text-white">{data.name}</h3>
              <span className="text-[10px] font-bold px-2 py-1 rounded-full bg-purple-600/20 border border-purple-600/40 text-purple-400 capitalize">
                {data.type}
              </span>
            </div>
            <p className="text-sm text-gray-400 leading-relaxed line-clamp-2">{data.description}</p>
            <div className="flex flex-wrap gap-2">
              {data.tech.map((item, index) => (
                <span
                  key={index}
                  className="text-[10px] font-semibold px-2 py-1 rounded bg-blue-600/15 text-blue-400"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>

          <div className="h-px bg-white/5 mx-4" />

          <div className="flex gap-3 p-4">
            {data.access !== 'private' ? (
              <a
                href={data.Code}
                target="_blank"
                className="btn-anim flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-semibold text-white bg-gradient-to-r from-blue-600 to-purple-600 hover:opacity-90 transition cursor-pointer"
              >
                <Github size={15} strokeWidth={1.5} />
                Code
              </a>
            ) : (
              <span className="flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-semibold text-gray-600 border border-gray-800 cursor-not-allowed">
                <Github size={15} strokeWidth={1.5} />
                Private
              </span>
            )}
            {data.Live !== 'No Link yet' && (
              <a
                href={data.Live}
                target="_blank"
                className="btn-anim flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-semibold border border-pink-600 text-pink-600 hover:bg-pink-600 hover:text-white transition cursor-pointer"
              >
                <SquareArrowOutUpRight size={15} strokeWidth={1.5} />
                Live
              </a>
            )}
          </div>
        </div>
      ))}
    </div>
    <Link to="/projects?category=website" className="font-semibold text-white btn-anim motion-preset-slide-right-md cursor-pointer bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex-center gap-2 py-2 px-4">
      Check Out the Rest of My Builds
      <ArrowRight />
    </Link>
  </section>
  )
}