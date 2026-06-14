import { useState } from 'react'
import { skills, skillCategories } from '../../data/portfolio'
import { SectionHeading } from '../ui/SectionHeading'
import { ScrollReveal } from '../ui/ScrollReveal'

export function SkillsSection() {
  const [activeCategory, setActiveCategory] = useState('all')

  const filteredSkills = activeCategory === 'all'
    ? skills
    : skills.filter(s => s.category === activeCategory)

  return (
    <section id="skills" className="bg-surface-alt py-20 sm:py-28">
      <div className="section-container">
        <ScrollReveal>
          <SectionHeading
            label="Skills"
            title="My Toolkit"
            description="Technologies and tools I use to bring ideas to life"
          />
        </ScrollReveal>

        {/* Category filter */}
        <ScrollReveal delay={0.1}>
          <div className="mb-10 flex flex-wrap justify-center gap-2">
            {skillCategories.map(cat => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`rounded-full px-5 py-2 text-sm font-medium transition-all ${
                  activeCategory === cat.id
                    ? 'bg-primary text-white shadow-md'
                    : 'bg-white text-text-secondary hover:border-primary hover:text-primary border border-border'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </ScrollReveal>

        {/* Skills grid */}
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {filteredSkills.map((skill, index) => (
            <ScrollReveal key={skill.name} delay={index * 0.05}>
              <div className="group rounded-xl border border-border bg-white p-5 transition-all hover:border-primary/30 hover:shadow-md">
                <div className="mb-2 flex items-center justify-between">
                  <span className="font-medium text-text">{skill.name}</span>
                  <span className="text-sm font-semibold text-primary">{skill.level}%</span>
                </div>
                <div className="h-2 overflow-hidden rounded-full bg-surface-alt">
                  <div
                    className="h-full rounded-full bg-gradient-to-r from-primary to-secondary transition-all duration-1000 ease-out"
                    style={{ width: `${skill.level}%` }}
                  />
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>

        {/* Empty state */}
        {filteredSkills.length === 0 && (
          <div className="rounded-xl border border-border bg-white p-12 text-center">
            <p className="text-text-secondary">No skills found in this category.</p>
          </div>
        )}
      </div>
    </section>
  )
}
