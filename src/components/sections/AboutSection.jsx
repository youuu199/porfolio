import { motion } from 'framer-motion'
import { personalInfo, aboutContent } from '../../data/portfolio'
import { ScrollReveal } from '../ui/ScrollReveal'

export function AboutSection() {
  return (
    <section id="about" className="py-20 sm:py-28">
      <div className="section-container">
        <ScrollReveal>
          <div className="mb-12 text-center">
            <span className="mb-2 inline-block rounded-full bg-primary/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-primary">
              About Me
            </span>
            <h2 className="text-3xl font-bold text-text sm:text-4xl">Get To Know Me</h2>
          </div>
        </ScrollReveal>

        <div className="grid items-center gap-12 lg:grid-cols-5">
          {/* Image */}
          <ScrollReveal direction="left" className="lg:col-span-2">
            <div className="relative mx-auto w-fit">
              <div className="absolute -inset-4 rounded-3xl bg-gradient-to-br from-primary/20 to-secondary/20 blur-2xl" />
              <img
                src={personalInfo.avatar}
                alt={personalInfo.name}
                className="relative h-72 w-72 rounded-2xl border-4 border-white object-cover shadow-xl sm:h-80 sm:w-80"
              />
            </div>
          </ScrollReveal>

          {/* Content */}
          <ScrollReveal direction="right" className="lg:col-span-3">
            <div className="space-y-4">
              {aboutContent.paragraphs.map((paragraph, i) => (
                <p key={i} className="text-base leading-relaxed text-text-secondary sm:text-lg">
                  {paragraph}
                </p>
              ))}
            </div>

            {/* Highlights */}
            <div className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-4">
              {aboutContent.highlights.map((item) => (
                <div
                  key={item.label}
                  className="rounded-xl border border-border bg-white p-4 text-center transition-all hover:border-primary/30 hover:shadow-md"
                >
                  <div className="text-2xl font-bold gradient-text sm:text-3xl">
                    {item.value}
                  </div>
                  <div className="mt-1 text-xs text-text-secondary sm:text-sm">
                    {item.label}
                  </div>
                </div>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  )
}
