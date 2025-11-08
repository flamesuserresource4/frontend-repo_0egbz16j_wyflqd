const projects = [
  {
    title: "E‑commerce Redesign",
    description:
      "A headless commerce storefront with blazing performance, rich search, and smooth checkout.",
    tags: ["Next.js", "Tailwind", "Stripe"],
    image:
      "https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=1887&auto=format&fit=crop",
    link: "#",
  },
  {
    title: "Analytics Dashboard",
    description:
      "A modular dashboard with real‑time charts, role‑based access, and dark mode.",
    tags: ["React", "D3", "FastAPI"],
    image:
      "https://images.unsplash.com/photo-1551281044-8d8c9fdc95c6?q=80&w=1887&auto=format&fit=crop",
    link: "#",
  },
  {
    title: "Mobile Banking App",
    description:
      "A secure, intuitive mobile experience with biometric auth and instant transfers.",
    tags: ["React Native", "Redux", "Firebase"],
    image:
      "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?q=80&w=1887&auto=format&fit=crop",
    link: "#",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-20 bg-neutral-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between mb-8">
          <div>
            <p className="text-sm uppercase tracking-widest text-neutral-600">Selected Work</p>
            <h2 className="mt-2 text-3xl md:text-4xl font-semibold tracking-tight text-neutral-900">Projects</h2>
          </div>
          <a href="#contact" className="hidden sm:inline-flex items-center rounded-md border border-neutral-300 px-4 py-2 text-neutral-900 hover:bg-neutral-100">
            Work with me
          </a>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((p) => (
            <a key={p.title} href={p.link} className="group rounded-2xl overflow-hidden border border-neutral-200 bg-white hover:shadow-lg transition-shadow">
              <div className="aspect-[16/10] w-full overflow-hidden bg-neutral-100">
                <img src={p.image} alt={p.title} className="h-full w-full object-cover group-hover:scale-[1.02] transition-transform" loading="lazy" />
              </div>
              <div className="p-4">
                <h3 className="text-lg font-semibold text-neutral-900">{p.title}</h3>
                <p className="mt-1 text-sm text-neutral-600">{p.description}</p>
                <div className="mt-3 flex flex-wrap gap-2">
                  {p.tags.map((t) => (
                    <span key={t} className="inline-flex items-center rounded-full bg-neutral-100 px-2.5 py-1 text-xs text-neutral-700">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
