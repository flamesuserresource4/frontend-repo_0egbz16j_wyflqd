import { Mail, Linkedin, Github } from "lucide-react";

export default function Contact() {
  return (
    <section id="contact" className="py-20 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          <div className="lg:col-span-1">
            <p className="text-sm uppercase tracking-widest text-neutral-600">Contact</p>
            <h2 className="mt-2 text-3xl md:text-4xl font-semibold tracking-tight text-neutral-900">Let’s build something great</h2>
            <p className="mt-4 text-neutral-700">Have a project in mind or just want to say hello? I’d love to hear from you.</p>

            <div className="mt-6 flex flex-col gap-3">
              <a href="mailto:hello@example.com" className="inline-flex items-center gap-2 text-neutral-800 hover:text-neutral-900">
                <Mail size={18} /> hello@example.com
              </a>
              <a href="https://www.linkedin.com" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 text-neutral-800 hover:text-neutral-900">
                <Linkedin size={18} /> LinkedIn
              </a>
              <a href="https://github.com" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 text-neutral-800 hover:text-neutral-900">
                <Github size={18} /> GitHub
              </a>
            </div>
          </div>

          <div className="lg:col-span-2">
            <form onSubmit={(e) => e.preventDefault()} className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-neutral-700">Name</label>
                <input type="text" required className="mt-1 block w-full rounded-md border-neutral-300 shadow-sm focus:border-neutral-500 focus:ring-neutral-500" placeholder="Your name" />
              </div>
              <div>
                <label className="block text-sm font-medium text-neutral-700">Email</label>
                <input type="email" required className="mt-1 block w-full rounded-md border-neutral-300 shadow-sm focus:border-neutral-500 focus:ring-neutral-500" placeholder="you@example.com" />
              </div>
              <div className="sm:col-span-2">
                <label className="block text-sm font-medium text-neutral-700">Message</label>
                <textarea required rows={5} className="mt-1 block w-full rounded-md border-neutral-300 shadow-sm focus:border-neutral-500 focus:ring-neutral-500" placeholder="Tell me about your project" />
              </div>
              <div className="sm:col-span-2 flex items-center justify-between">
                <p className="text-sm text-neutral-600">I usually reply within 24 hours.</p>
                <button type="submit" className="inline-flex items-center rounded-md bg-neutral-900 px-5 py-2.5 text-white hover:bg-neutral-800">Send</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
