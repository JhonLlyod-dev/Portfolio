import { useState, useEffect } from 'react';
import Header from '../assets/Header';
import ParticlesComponent from '../assets/Live';
import Footer from '../assets/Footer';
import { projects } from '../Data';
import { Github, SquareArrowOutUpRight, X, ExternalLink, Code2 } from 'lucide-react';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

const tabs = ["Websites", "Automations"];

const tabKeyMap = {
  Websites: "website",
  Automations: "automation",
};

// reverse lookup: category param -> tab label
const categoryToTab = {
  website: "Websites",
  automation: "Automations",
};

export default function Builds() {
  // Fetch the URL first - if it has a valid category, use it; otherwise default to "Websites"
  const getCategoryFromUrl = () => {
    const params = new URLSearchParams(window.location.search);
    return params.get('category');
  };

  const initialTab = categoryToTab[getCategoryFromUrl()] || "Websites";

  const [activeTab, setActiveTab] = useState(initialTab);
  const [selectedProject, setSelectedProject] = useState(null);

  // If there's no (or an invalid) category in the URL, set it to the default
  useEffect(() => {
    if (!categoryToTab[getCategoryFromUrl()]) {
      const params = new URLSearchParams(window.location.search);
      params.set('category', tabKeyMap[activeTab]);
      window.history.replaceState(null, '', `${window.location.pathname}?${params.toString()}`);
    }
  }, []);

  const handleTabChange = (tab) => {
    setActiveTab(tab);
    const params = new URLSearchParams(window.location.search);
    params.set('category', tabKeyMap[tab]);
    window.history.pushState(null, '', `${window.location.pathname}?${params.toString()}`);
  };

  const filtered = projects.filter(p => p.type === tabKeyMap[activeTab]);

  return (
    <main>
      <ParticlesComponent />
      <div className="absolute z-2 scroll-smooth h-screen overflow-y-scroll flex flex-col items-center text-center w-full">
        <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 z-10">
        </div>
        <div className="absolute  left-5">
          <Link to="/">
            <button className="mt-10 bg-gradient btn-anim py-2 px-4 font-semibold rounded-lg flex-center gap-4 cursor-pointer">
              <ArrowLeft size={20} strokeWidth={2} />
            </button>
          </Link>
        </div>
        <section className="flex flex-col items-center py-20 w-full px-6 md:px-10 lg:px-24 xl:px-44 gap-10">

          <div className="flex flex-col items-center gap-3">
            <h1 className="text-3xl md:text-5xl font-extrabold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Stuff I Built That Actually Slaps
            </h1>
            <p className="text-gray-400 text-sm md:text-base max-w-xl">
              No cap, every project here is a W. Real builds, real solutions - shipped and out in the wild.
            </p>
          </div>

          <div className="flex gap-2 p-1 rounded-xl bg-gradient-fade-20 border border-purple-600/30">
            {tabs.map((tab) => (
              <button
                key={tab}
                onClick={() => handleTabChange(tab)}
                className={`px-5 py-2 rounded-lg text-sm font-semibold transition-all duration-200 cursor-pointer btn-anim
                  ${activeTab === tab
                    ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white'
                    : 'text-gray-400 hover:text-white'
                  }`}
              >
                {tab}
              </button>
            ))}
          </div>

          {filtered.length === 0 ? (
            <div className="flex flex-col items-center gap-3 py-20 text-gray-500">
              <Code2 size={40} strokeWidth={1} />
              <p className="text-sm">Nothing dropped here yet - stay tuned fr 👀</p>
            </div>
          ) : (
            <div className="flex flex-wrap justify-center gap-8 w-full">
              {filtered.map((data, i) => (
                <div
                  key={i}
                  onClick={() => setSelectedProject(data)}
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

                  <div className="flex gap-3 p-4" onClick={(e) => e.stopPropagation()}>
                    {data.access !== 'private' ? (
                      <a
                        href={data.Code}
                        target="_blank"
                        rel="noopener noreferrer"
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
                        rel="noopener noreferrer"
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
          )}
        </section>
        
      <footer class=" w-full text-center text-gray-400 text-sm py-6 border-t-1 border-gray-400">
        © 2025 Jhon Llyod Navarro. All rights reserved.
      </footer>
      </div>

      {selectedProject && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm px-4"
          onClick={() => setSelectedProject(null)}
        >
          <div
            className="relative w-full max-w-2xl bg-[#0d0d1a] border border-purple-600/40 rounded-2xl overflow-hidden shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 z-10" />
            <div className="relative">
              <img
                src={selectedProject.img}
                className="w-full aspect-video object-cover "
                alt={selectedProject.name}
              />
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-3 right-3 bg-black/50 hover:bg-black/80 text-white rounded-full p-1.5 transition btn-anim cursor-pointer"
              >
                <X size={18} />
              </button>
            </div>

            <div className="p-6 flex flex-col gap-4 text-left">
              <div className="flex items-center justify-between">
                <h2 className="text-xl font-bold text-white">{selectedProject.name}</h2>
                <span className="text-[10px] font-bold px-2 py-1 rounded-full bg-purple-600/20 border border-purple-600/40 text-purple-400 capitalize">
                  {selectedProject.type}
                </span>
              </div>
              <p className="text-sm text-gray-400 leading-relaxed">{selectedProject.description}</p>

              <div>
                <p className="text-xs text-gray-500 font-semibold uppercase tracking-widest mb-2">Tech Stack</p>
                <div className="flex flex-wrap gap-2">
                  {selectedProject.tech.map((item, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 rounded-full text-xs font-semibold bg-blue-600/20 border border-blue-600/40 text-blue-400"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>

              <div className="h-px bg-purple-600/20" />

              <div className="flex gap-3">
                {selectedProject.access !== 'private' ? (
                  <a
                    href={selectedProject.Code}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-anim flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-semibold text-white bg-gradient-to-r from-blue-600 to-purple-600 hover:opacity-90 transition cursor-pointer"
                  >
                    <Github size={15} strokeWidth={1.5} />
                    View Code
                  </a>
                ) : (
                  <span className="flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-semibold text-gray-500 border border-gray-700 cursor-not-allowed">
                    <Github size={15} strokeWidth={1.5} />
                    Private Repo
                  </span>
                )}
                {selectedProject.Live !== 'No Link yet' && (
                  <a
                    href={selectedProject.Live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-anim flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-semibold border border-pink-600 text-pink-600 hover:bg-pink-600 hover:text-white transition cursor-pointer"
                  >
                    <ExternalLink size={15} strokeWidth={1.5} />
                    See It Live
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </main>
  );
}