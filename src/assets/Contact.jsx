import { Mail,Github,Linkedin,Facebook,Send} from "lucide-react"

export default function Contact(){
  return(
    <section id="Contact" className="mt-10 w-full text-gray-400 text-justify bg-gradient-fade flex flex-col  items-center gap-6 px-6 py-5 pb-10 md:px-10 lg:px-24 xl:px-44">
      <h1 className="text-2xl md:text-4xl font-bold bg-gradient-to-t from-blue-600 to-pink-600 bg-clip-text text-transparent">Let's Work Together</h1>
      <p className="text-center">I'm always interested in new opportunities and exciting projects. Let's discuss how we can bring your ideas to life.</p>
      <div className="flex-center flex-col lg:flex-row lg:items-start gap-10">
        <div className="flex-center lg:items-start gap-4 flex-col ">
          <h1 className="text-gradient-2 font-bold text-xl md:text-2xl">Socials</h1>
          <button className="btn-anim w-fit py-2 px-4 flex-center gap-2 font-semibold bg-gradient text-white rounded-lg"><Mail size={18} strokeWidth={1.50}/>navarro.jhonllyod2005@gmail.com</button>
          <div className="flex-center flex-wrap lg:flex-nowrap lg:flex-col lg:items-start gap-4">
            <a href="https://www.facebook.com/Rhaia.llyod/" target="_blank" className="btn-anim transition w-fit py-2 px-4 flex-center gap-2 font-semibold rounded-lg text-blue-600 border-1 border-blue-600 hover:bg-blue-600 hover:text-white"><Facebook size={18} strokeWidth={1.50}/>Facebook</a>
            <a href="https://www.linkedin.com/in/jhon-llyod-navarro-15635b373/" target="_blank" className="btn-anim transition w-fit py-2 px-4 flex-center gap-2 font-semibold rounded-lg text-purple-600 border-1 border-purple-600 hover:bg-purple-600 hover:text-white"><Linkedin size={18} strokeWidth={1.50}/>LinkedIn</a>
            <a href="https://github.com/JhonLlyod-dev" target="_blank" className="btn-anim transition w-fit py-2 px-4 flex-center gap-2 font-semibold rounded-lg text-pink-600 border-1 border-pink-600 hover:bg-pink-600 hover:text-white"><Github size={18} strokeWidth={1.50}/>GitHub</a>
          </div>
        </div>

        <div className="w-full lg:w-fit">
          <form
            action="https://formsubmit.co/navarro.jhonllyod2005@gmail.com"
            method="POST"
            className="flex-center flex-col gap-4 bg-[#101010]/20 text-white font-semibold border-1 border-purple-600 rounded-lg p-4"
          >
            <h1 className="text-gradient-2 font-bold text-xl md:text-2xl">Get in touch</h1>

            {/* Hidden FormSubmit Settings */}
            <input type="hidden" name="_captcha" value="false" />

            <div className="flex w-full flex-col lg:flex-row gap-4">
              <div className="w-full flex gap-1 flex-col">
                <label className="text-sm">Name</label>
                <input
                  type="text"
                  name="name"
                  required
                  className="border-2 border-pink-600 rounded-md outline-0 px-4 py-2"
                />
              </div>

              <div className="w-full flex gap-1 flex-col">
                <label className="text-sm">Email</label>
                <input
                  type="email"
                  name="email"
                  required
                  className="border-2 border-pink-600 rounded-md outline-0 px-4 py-2"
                />
              </div>
            </div>

            <div className="flex w-full gap-1 flex-col">
              <label className="text-sm">Subject</label>
              <input
                type="text"
                name="subject"
                className="border-2 border-pink-600 rounded-md outline-0 px-4 py-2"
              />
            </div>

            <div className="flex w-full gap-1 flex-col">
              <label className="text-sm">Message</label>
              <textarea
                name="message"
                rows={5}
                required
                className="border-2 border-pink-600 rounded-md outline-0 px-4 py-2"
              ></textarea>
            </div>

            <button
              type="submit"
              className="btn-anim w-fit py-2 px-4 flex-center gap-4 font-semibold bg-gradient text-white rounded-lg"
            >
              <Send size={18} strokeWidth={2} />
              Send
            </button>
          </form>

        </div>
      </div>
    </section>

  )
}