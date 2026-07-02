import { Frontend, Backend, Database, Automation, SEO, Tools } from '../Data';

const FALLBACK_ICON =
  "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='40' height='40'><rect width='40' height='40' rx='8' fill='%23262626'/></svg>";

const groups = [
  { title: 'Frontend', items: Frontend },
  { title: 'Backend', items: Backend },
  { title: 'Database', items: Database },
  { title: 'Automation', items: Automation },
  { title: 'SEO', items: SEO },
  { title: 'Tools & Others', items: Tools },
];

export default function Stack() {
  return (
    <section
      id="Skills"
      className="mt-10 w-full text-gray-400 flex flex-col gap-14 px-6 py-20 md:px-10 lg:px-34 xl:px-44"
    >
      <h1 className="text-2xl md:text-4xl self-start font-extrabold bg-gradient-to-r py-2 from-blue-600 to-purple-600 bg-clip-text text-transparent">
        What I'm Packin'
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-12 w-full">
        {groups.map((group) => (
          <div key={group.title} className="flex flex-col gap-5">
            <h2 className="text-lg md:text-xl font-extrabold text-gradient-2  rounded-xl backdrop-blur-xs bg-[rgba(255,255,255,0.02)] border border-white/10 px-4 py-2 w-fit self-center">
              {group.title}
            </h2>

            <div className="grid grid-cols-3 gap-x-4 gap-y-8">
              {group.items.map((item, i) => (
                <div key={i} title={item.name} className="flex flex-col items-center gap-3">
                  <img
                    src={item.icon}
                    alt={item.name}
                    width={48}
                    height={48}
                    loading="lazy"
                    onError={(e) => {
                      e.currentTarget.onerror = null;
                      e.currentTarget.src = FALLBACK_ICON;
                    }}
                    className="w-12 h-12 object-contain p-2 rounded-xl backdrop-blur-xs bg-[rgba(255,255,255,0.02)] border border-white/10"
                  />
                  <span className="text-sm text-center text-gray-300 leading-tight">
                    {item.name}
                  </span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}