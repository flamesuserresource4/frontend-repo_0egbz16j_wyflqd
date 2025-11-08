export default function About() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-12 items-center">
          <div className="md:col-span-5">
            <div className="aspect-[4/5] w-full overflow-hidden rounded-2xl bg-neutral-100">
              <img
                src="https://images.unsplash.com/photo-1527980965255-d3b416303d12?q=80&w=1887&auto=format&fit=crop"
                alt="Profile"
                className="h-full w-full object-cover"
                loading="lazy"
              />
            </div>
          </div>
          <div className="md:col-span-7">
            <p className="text-sm uppercase tracking-widest text-neutral-600">About</p>
            <h2 className="mt-2 text-3xl md:text-4xl font-semibold tracking-tight text-neutral-900">I blend design and engineering to ship polished products</h2>
            <p className="mt-4 text-neutral-700">
              With a background spanning product design and full‑stack development, I enjoy turning complex problems into simple, beautiful, and intuitive solutions. I care about clean architecture, accessible UI, and thoughtful motion.
            </p>
            <div className="mt-6 grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="rounded-xl border border-neutral-200 p-4">
                <p className="text-3xl font-semibold text-neutral-900">5+ </p>
                <p className="text-sm text-neutral-600">Years experience</p>
              </div>
              <div className="rounded-xl border border-neutral-200 p-4">
                <p className="text-3xl font-semibold text-neutral-900">40+ </p>
                <p className="text-sm text-neutral-600">Projects shipped</p>
              </div>
              <div className="rounded-xl border border-neutral-200 p-4">
                <p className="text-3xl font-semibold text-neutral-900">100% </p>
                <p className="text-sm text-neutral-600">Client satisfaction</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
