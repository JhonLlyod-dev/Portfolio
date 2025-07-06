import { Frontend,Backend,Tools } from '../Data';

export default function Stack(){
  return(
  <div className=' mt-10 w-full text-gray-400 text-justify flex flex-col gap-6 px-6 py-5 pb-10 md:px-10 lg:px-34 xl:px-44'>
    <h1 className='text-2xl md:text-4xl self-start font-bold bg-gradient-to-r py-2 from-blue-600 to-purple-600 bg-clip-text text-transparent'>
      Skills & Technologies
    </h1>

    <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full">
      {/* Frontend */}
      <div className="intersect-once intersect:motion-preset-slide-up motion-delay-0 bg-gradient-fade border border-blue-600 rounded-xl p-5">
        <h2 className="text-lg md:text-xl font-semibold text-white mb-4">Frontend</h2>
        <div className="flex flex-wrap gap-3">
          {Frontend.map((item, i) => (
            <span
              key={i}
              className="px-3 py-1 rounded-full text-sm font-medium bg-blue-800/30 text-white"
            >
              {item}
            </span>
          ))}
        </div>
      </div>

      {/* Backend */}
      <div className="intersect-once intersect:motion-preset-slide-up motion-delay-200 bg-gradient-fade border border-purple-600 rounded-xl p-5">
        <h2 className="text-lg md:text-xl font-semibold text-white mb-4">Backend</h2>
        <div className="flex flex-wrap gap-3">
          {Backend.map((item, i) => (
            <span
              key={i}
              className="px-3 py-1 rounded-full text-sm font-medium bg-purple-800/30 text-white"
            >
              {item}
            </span>
          ))}
        </div>
      </div>

      {/* Tools */}
      <div className="intersect-once intersect:motion-preset-slide-up motion-delay-400 bg-gradient-fade border border-pink-600 rounded-xl p-5">
        <h2 className="text-lg md:text-xl font-semibold text-white mb-4">Tools & Others</h2>
        <div className="flex flex-wrap gap-3">
          {Tools.map((item, i) => (
            <span
              key={i}
              className="px-3 py-1 rounded-full text-sm font-medium bg-pink-800/30 text-white"
            >
              {item}
            </span>
          ))}
        </div>
      </div>
    </div>

  </div>

  )
}