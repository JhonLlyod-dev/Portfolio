import { featured } from "../Data"
import { Github,SquareArrowOutUpRight } from "lucide-react"

export default function Projects(){
  return(
  <div className="mt-10 w-full text-gray-400 text-justify flex flex-col  items-center gap-6 px-6 py-5 pb-10 md:px-10 lg:px-24 xl:px-44">
    <h1 className="text-2xl md:text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent py-2">
      Featured Projects
    </h1>

    <div className="grid gap-6 w-full grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
      {featured.map((data, i) => (
        <div
          key={i}
          className="flex flex-col justify-between gap-4 p-4 rounded-xl bg-gradient-fade-20 border border-purple-600/50 card-animated"
        >
          {/* Image */}
          <div className="p-4 flex items-center justify-center rounded-lg">
            <img src={data.img} className="w-50 md:w-55 aspect-square object-contain" alt={data.name} />
          </div>

          {/* Name & Description */}
          <div className="space-y-2">
            <h1 className="text-lg font-bold text-white">{data.name}</h1>
            <p className="text-sm text-gray-300">{data.description}</p>

            {/* Tech tags */}
            <div className="flex flex-wrap gap-2 text-xs">
              {data.tech.map((item, index) => (
                <span
                  key={index}
                  className="px-2 py-1 rounded-2xl font-semibold bg-blue-500 text-white"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>

          {/* Action buttons */}
          <div className="text-white flex gap-4 font-bold pt-2">
            <button className="flex items-center gap-2 px-3 py-1 rounded-md bg-gradient-to-r from-blue-600 to-purple-600 hover:opacity-90 transition cursor-pointer">
              <Github size={18} strokeWidth={1.5} />
              Code
            </button>
            <button className="flex items-center gap-2 px-3 py-1 rounded-md border border-pink-600 text-pink-600 hover:bg-pink-600 hover:text-white transition cursor-pointer">
              <SquareArrowOutUpRight size={18} strokeWidth={1.5} />
              Live
            </button>
          </div>
        </div>
      ))}
    </div>
  </div>

  )
}