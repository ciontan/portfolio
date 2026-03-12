import { Github, Linkedin, Mail, Phone } from "lucide-react";
import { contactDetails } from "@/content/site";

export function Contact() {
  return (
    <div className="w-full">
      <section className="border-b border-black/8 bg-white py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <p className="section-kicker">Let&apos;s Connect</p>
          <h1 className="section-title max-w-4xl">
            Open to product design, development, and AI opportunities starting mid-2026.
          </h1>
        </div>
      </section>

      <section className="py-24">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-[0.95fr_1.05fr] lg:px-8">
          <div className="rounded-[2rem] bg-white p-8 shadow-[0_24px_70px_rgba(18,22,31,0.06)]">
            <h2 className="mb-8 font-display text-3xl">Send a Message</h2>
            <form className="space-y-5">
              <label className="block">
                <span className="mb-2 block text-sm text-black/60">Name</span>
                <input className="input-field" type="text" placeholder="Your name" />
              </label>
              <label className="block">
                <span className="mb-2 block text-sm text-black/60">Email</span>
                <input className="input-field" type="email" placeholder="your@email.com" />
              </label>
              <label className="block">
                <span className="mb-2 block text-sm text-black/60">Message</span>
                <textarea className="input-field min-h-40 resize-none" placeholder="Tell me about your project or opportunity..." />
              </label>
              <button type="submit" className="button-primary">
                Send Message
              </button>
            </form>
          </div>

          <div className="space-y-8">
            <div className="rounded-[2rem] bg-[var(--color-ink)] p-8 text-white shadow-[0_24px_70px_rgba(18,22,31,0.12)]">
              <h2 className="mb-6 font-display text-3xl">Get in Touch</h2>
              <div className="space-y-5">
                <a href={`mailto:${contactDetails.email}`} className="contact-row">
                  <Mail className="size-5" />
                  <span>{contactDetails.email}</span>
                </a>
                <a href={`tel:${contactDetails.phoneHref}`} className="contact-row">
                  <Phone className="size-5" />
                  <span>{contactDetails.phone}</span>
                </a>
                <a href={contactDetails.linkedin} target="_blank" rel="noreferrer" className="contact-row">
                  <Linkedin className="size-5" />
                  <span>LinkedIn</span>
                </a>
                <a href={contactDetails.github} target="_blank" rel="noreferrer" className="contact-row">
                  <Github className="size-5" />
                  <span>GitHub</span>
                </a>
              </div>
            </div>

            <div className="rounded-[2rem] border border-black/8 bg-white p-8">
              <h3 className="mb-4 font-display text-2xl">Current Status</h3>
              <p className="leading-7 text-black/62">{contactDetails.status}</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
