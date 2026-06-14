import { experience } from '../../data/portfolio'
import { SectionHeading } from '../ui/SectionHeading'
import { ScrollReveal } from '../ui/ScrollReveal'

export function ExperienceSection() {
  return (
    <section id="experience" className="bg-surface-alt py-20 sm:py-28">
      <div className="section-container">
        <ScrollReveal>
          <SectionHeading
            label="Education"
            title="My Qualifications"
            description="NCC Level 4 & 5 Diploma in Computing"
          />
        </ScrollReveal>

        <div className="relative mx-auto max-w-3xl">
          {/* Timeline line */}
          <div className="absolute left-8 top-0 h-full w-0.5 bg-border sm:left-1/2 sm:-translate-x-1/2" />

          {experience.map((item, index) => (
            <ScrollReveal key={item.id} delay={index * 0.15}>
              <div className="relative mb-10 last:mb-0">
                {/* Timeline dot */}
                <div className="absolute left-8 top-1 z-10 hidden h-4 w-4 -translate-x-1/2 rounded-full border-4 border-primary bg-white sm:left-1/2 sm:block" />

                <div className={`ml-16 sm:ml-0 sm:w-[calc(50%-2rem)] ${
                  index % 2 === 0 ? 'sm:pr-8 sm:text-right' : 'sm:ml-[calc(50%+2rem)]'
                }`}>
                  <div className="rounded-xl border border-border bg-white p-6 transition-all hover:border-primary/30 hover:shadow-md">
                    <span className="mb-1 inline-block text-xs font-semibold uppercase tracking-wider text-primary">
                      {item.period}
                    </span>
                    <h3 className="text-lg font-bold text-text">{item.role}</h3>
                    <p className="mb-3 text-sm text-text-secondary">
                      {item.company} &middot; {item.location}
                    </p>
                    <p className="mb-3 text-sm leading-relaxed text-text-secondary">
                      {item.description}
                    </p>
                    <ul className="space-y-1.5">
                      {item.achievements.map((achievement, i) => (
                        <li key={i} className="flex items-start gap-2 text-sm text-text-secondary">
                          <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-primary/60" />
                          {achievement}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>

        {/* Empty state */}
        {experience.length === 0 && (
          <div className="rounded-xl border border-border bg-white p-12 text-center">
            <p className="text-text-secondary">Experience details coming soon.</p>
          </div>
        )}
      </div>
    </section>
  )
}
