import { exp } from "../Data"
import { Briefcase } from "lucide-react"


export default function Experience(){

  return(
    <div className="mt-10 w-full flex-center bg-gradient-fade flex-col p-6 py-8 gap-4">
      <h1 className="text-2xl md:text-4xl font-bold bg-gradient-to-t from-blue-600 to-pink-600 bg-clip-text text-transparent">Work Experience</h1>
      <p className="text-gray-400">My work experienve throught the years</p>
      <div className="flex flex-col gap-8 md:px-10 lg:px-34 xl:px-44">
        {exp.map((data,i)=>(
          <div key={i} className="flex md:nth-[even]:flex-row-reverse md:nth-[even]:text-start  text-end  w-full  gap-2">

            <div className="md:p-4 md:px-8rounded-lg w-0 md:w-[50%]"></div>

            <div className="flex-center flex-col gap-4">
              <div className="p-2 rounded-full border-1 border-blue-400">
                <Briefcase className="text-blue-400" size={22} strokeWidth={2}/>
              </div>
              <div className="w-[1px] rounded-2xl h-full bg-blue-400"></div>
            </div>

            <div className="text-gray-400 p-4 md:px-8 mb-8 border-1 flex flex-col gap-4 border-purple-400 bg-[#101010]/10 rounded-lg w-full md:w-[50%]">
              <div>
                <h1 className="font-bold text-lg text-gradient">{data.position}</h1>
                <p className="font-semibold text-white">{data.company}</p>
                <p className="text-sm">{data.date}</p>
              </div>

              <p className="">{data.description}</p>
            </div>
            
          </div>
        ))}
       
      </div>
    </div>
  )
}