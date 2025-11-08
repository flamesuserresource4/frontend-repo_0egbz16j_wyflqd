import Spline from '@splinetool/react-spline';

export default function Hero() {
  return (
    <section id="home" className="relative h-[80vh] min-h-[600px] w-full">
      <div className="absolute inset-0">
        <Spline 
          scene="https://prod.spline.design/zhZFnwyOYLgqlLWk/scene.splinecode" 
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      <div className="relative h-full w-full">
        <div className="absolute inset-0 bg-gradient-to-b from-white/80 via-white/50 to-white pointer-events-none" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-full flex items-center">
          <div className="max-w-2xl">
            <p className="text-sm uppercase tracking-widest text-neutral-600">Designer & Developer</p>
            <h1 className="mt-3 text-4xl sm:text-5xl md:text-6xl font-semibold tracking-tight text-neutral-900">
              Building clean, modern digital experiences
            </h1>
            <p className="mt-4 text-neutral-700 max-w-xl">
              I craft responsive interfaces and robust backends with a focus on performance, accessibility, and delightful interactions.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <a href="#projects" className="inline-flex items-center rounded-md bg-neutral-900 px-5 py-2.5 text-white hover:bg-neutral-800 transition-colors">
                View Projects
              </a>
              <a href="#contact" className="inline-flex items-center rounded-md border border-neutral-300 px-5 py-2.5 text-neutral-900 hover:bg-neutral-50">
                Contact Me
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
