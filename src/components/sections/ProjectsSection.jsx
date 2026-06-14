import { projects } from '../../data/portfolio'
import { SectionHeading } from '../ui/SectionHeading'
import { ScrollReveal } from '../ui/ScrollReveal'
import { ProjectCard } from '../ui/ProjectCard'

export function ProjectsSection() {
  const featuredProjects = projects.filter(p => p.featured)
  const otherProjects = projects.filter(p => !p.featured)

  return (
    <section id="projects" className="py-20 sm:py-28">
      <div className="section-container">
        <ScrollReveal>
          <SectionHeading
            label="Projects"
            title="What I've Built"
            description="A selection of projects I've worked on recently"
          />
        </ScrollReveal>

        {/* Featured projects */}
        <div className="mb-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {featuredProjects.map((project, index) => (
            <ScrollReveal key={project.id} delay={index * 0.1}>
              <ProjectCard project={project} index={index} />
            </ScrollReveal>
          ))}
        </div>

        {/* Other projects */}
        {otherProjects.length > 0 && (
          <>
            <ScrollReveal delay={0.2}>
              <h3 className="mb-6 text-center text-lg font-semibold text-text-secondary">
                More Projects
              </h3>
            </ScrollReveal>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {otherProjects.map((project, index) => (
                <ScrollReveal key={project.id} delay={index * 0.05}>
                  <ProjectCard project={project} index={featuredProjects.length + index} />
                </ScrollReveal>
              ))}
            </div>
          </>
        )}

        {/* Empty state */}
        {projects.length === 0 && (
          <div className="rounded-xl border border-border bg-white p-12 text-center">
            <p className="text-text-secondary">Projects coming soon!</p>
          </div>
        )}
      </div>
    </section>
  )
}
