"use client";

import { useState } from "react";
import { Mail, Github, Linkedin, Facebook, Send, Loader2, CheckCircle2, XCircle } from "lucide-react";

export default function Contact() {
  const [status, setStatus] = useState("idle"); // idle | sending | success | error

  async function handleSubmit(e) {
    e.preventDefault();
    setStatus("sending");

    const form = e.target;
    const data = new FormData(form);

    try {
      const res = await fetch("https://formsubmit.co/ajax/navarro.jhonllyod2005@gmail.com", {
        method: "POST",
        headers: { Accept: "application/json" },
        body: data,
      });

      if (!res.ok) throw new Error("Submission failed");

      setStatus("success");
      form.reset();
    } catch (err) {
      setStatus("error");
    }
  }

  return (
    <section
      id="Contact"
      className="intersect-once intersect:motion-preset-fade motion-delay-200 mt-10 w-full text-gray-400 text-justify bg-gradient-fade flex flex-col items-center gap-6 px-6 py-25 md:px-10 lg:px-20 xl:px-44"
    >
      <h1 className="text-2xl md:text-4xl font-extrabold bg-gradient-to-t p-1 from-blue-600 to-pink-600 bg-clip-text text-transparent">
        Ready to Cook? Let's Go
      </h1>
      <p className="text-center mb-5">
        Always down for new opportunities and dope projects fr. Let's link up and make your ideas go crazy.
      </p>

      <div className="flex-center flex-col lg:flex-row lg:items-start gap-10">
        <div className="flex-center lg:items-start gap-4 flex-col">
          <h1 className="text-gradient-2 font-bold text-xl md:text-2xl">Socials</h1>
          <button className="intersect-once intersect:motion-preset-fade motion-delay-100 btn-anim w-fit py-2 px-4 flex-center gap-2 font-semibold bg-gradient text-white rounded-lg">
            <Mail size={18} strokeWidth={1.5} />
            navarro.jhonllyod2005@gmail.com
          </button>
          <div className="flex-center flex-wrap lg:flex-nowrap lg:flex-col lg:items-start gap-4">
            <a href="https://www.facebook.com/Rhaia.llyod/" target="_blank" rel="noopener noreferrer" className="intersect-once intersect:motion-preset-fade motion-delay-200 btn-anim transition w-fit py-2 px-4 flex-center gap-2 font-semibold rounded-lg text-blue-600 border-1 border-blue-600 hover:bg-blue-600 hover:text-white">
              <Facebook size={18} strokeWidth={1.5} />Facebook
            </a>
            <a href="https://www.linkedin.com/in/jhon-llyod-navarro-15635b373/" target="_blank" rel="noopener noreferrer" className="intersect-once intersect:motion-preset-fade motion-delay-300 btn-anim transition w-fit py-2 px-4 flex-center gap-2 font-semibold rounded-lg text-purple-600 border-1 border-purple-600 hover:bg-purple-600 hover:text-white">
              <Linkedin size={18} strokeWidth={1.5} />LinkedIn
            </a>
            <a href="https://github.com/JhonLlyod-dev" target="_blank" rel="noopener noreferrer" className="intersect-once intersect:motion-preset-fade motion-delay-400 btn-anim transition w-fit py-2 px-4 flex-center gap-2 font-semibold rounded-lg text-pink-600 border-1 border-pink-600 hover:bg-pink-600 hover:text-white">
              <Github size={18} strokeWidth={1.5} />GitHub
            </a>
          </div>
        </div>

        <div className="w-full lg:w-fit">
          <form
            onSubmit={handleSubmit}
            className="intersect-once intersect:motion-preset-fade motion-delay-400 flex-center flex-col gap-4 bg-[#101010]/20 text-white font-semibold border-1 border-purple-600 rounded-lg p-4 min-w-[320px] lg:min-w-[420px]"
          >
            <h1 className="text-gradient-2 font-extrabold text-xl md:text-2xl">Send It</h1>

            {/* Honeypot — bots fill this, humans never see it */}
            <input type="text" name="_honey" style={{ display: "none" }} tabIndex={-1} autoComplete="off" />
            <input type="hidden" name="_captcha" value="false" />
            <input type="hidden" name="_subject" value="New message from portfolio site" />

            <div className="flex w-full flex-col lg:flex-row gap-4">
              <div className="w-full flex gap-1 flex-col">
                <label className="text-sm">Name</label>
                <input
                  type="text"
                  name="name"
                  required
                  disabled={status === "sending"}
                  placeholder="Your name"
                  className=" text-white placeholder-gray-500 border-2 border-pink-600 rounded-md outline-none px-4 py-2 transition-colors focus:border-blue-500 disabled:opacity-50"
                />
              </div>

              <div className="w-full flex gap-1 flex-col">
                <label className="text-sm">Email</label>
                <input
                  type="email"
                  name="email"
                  required
                  disabled={status === "sending"}
                  placeholder="you@email.com"
                  className=" text-white placeholder-gray-500 border-2 border-pink-600 rounded-md outline-none px-4 py-2 transition-colors focus:border-blue-500 disabled:opacity-50"
                />
              </div>
            </div>

            <div className="flex w-full gap-1 flex-col">
              <label className="text-sm">Subject</label>
              <input
                type="text"
                name="subject"
                disabled={status === "sending"}
                placeholder="What's this about?"
                className=" text-white placeholder-gray-500 border-2 border-pink-600 rounded-md outline-none px-4 py-2 transition-colors focus:border-blue-500 disabled:opacity-50"
              />
            </div>

            <div className="flex w-full gap-1 flex-col">
              <label className="text-sm">Message</label>
              <textarea
                name="message"
                rows={5}
                required
                disabled={status === "sending"}
                placeholder="Let's talk about..."
                className=" text-white placeholder-gray-500 border-2 border-pink-600 rounded-md outline-none px-4 py-2 transition-colors focus:border-blue-500 disabled:opacity-50 resize-none"
              ></textarea>
            </div>

            <button
              type="submit"
              disabled={status === "sending"}
              className="btn-anim w-fit py-2 px-4 flex-center gap-2 font-semibold bg-gradient text-white rounded-lg disabled:opacity-60 disabled:cursor-not-allowed"
            >
              {status === "sending" ? (
                <>
                  <Loader2 size={18} strokeWidth={2} className="animate-spin" />
                  Sending...
                </>
              ) : (
                <>
                  <Send size={18} strokeWidth={2} />
                  Send
                </>
              )}
            </button>

            {status === "success" && (
              <p className="flex items-center gap-2 text-sm text-emerald-400">
                <CheckCircle2 size={16} />
                Message sent. I'll get back to you soon.
              </p>
            )}
            {status === "error" && (
              <p className="flex items-center gap-2 text-sm text-red-400">
                <XCircle size={16} />
                Something went wrong. Try emailing me directly instead.
              </p>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}