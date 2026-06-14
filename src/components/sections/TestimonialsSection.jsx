import { useState, useEffect, useCallback } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { testimonials } from '../../data/portfolio'
import { SectionHeading } from '../ui/SectionHeading'
import { ScrollReveal } from '../ui/ScrollReveal'

export function TestimonialsSection() {
  const [current, setCurrent] = useState(0)
  const [direction, setDirection] = useState(1)

  const goTo = useCallback((index) => {
    setDirection(index > current ? 1 : -1)
    setCurrent(index)
  }, [current])

  const goNext = useCallback(() => {
    setDirection(1)
    setCurrent(prev => (prev + 1) % testimonials.length)
  }, [])

  const goPrev = useCallback(() => {
    setDirection(-1)
    setCurrent(prev => (prev - 1 + testimonials.length) % testimonials.length)
  }, [])

  // Auto-rotate
  useEffect(() => {
    if (testimonials.length <= 1) return
    const interval = setInterval(goNext, 5000)
    return () => clearInterval(interval)
  }, [goNext])

  const variants = {
    enter: (dir) => ({ x: dir > 0 ? 200 : -200, opacity: 0 }),
    center: { x: 0, opacity: 1 },
    exit: (dir) => ({ x: dir > 0 ? -200 : 200, opacity: 0 }),
  }

  if (testimonials.length === 0) {
    return (
      <section id="testimonials" className="py-20 sm:py-28">
        <div className="section-container">
          <ScrollReveal>
            <SectionHeading
              label="Testimonials"
              title="What People Say"
              description="Feedback from people I've worked with"
            />
          </ScrollReveal>
          <div className="rounded-xl border border-border bg-white p-12 text-center">
            <p className="text-text-secondary">Testimonials coming soon.</p>
          </div>
        </div>
      </section>
    )
  }

  const testimonial = testimonials[current]

  return (
    <section id="testimonials" className="py-20 sm:py-28">
      <div className="section-container">
        <ScrollReveal>
          <SectionHeading
            label="Testimonials"
            title="What People Say"
            description="Feedback from people I've worked with"
          />
        </ScrollReveal>

        <div className="relative mx-auto max-w-2xl">
          <AnimatePresence mode="wait" custom={direction}>
            <motion.div
              key={current}
              custom={direction}
              variants={variants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: 0.3, ease: 'easeInOut' }}
              className="rounded-2xl border border-border bg-white p-8 text-center shadow-sm sm:p-10"
            >
              {/* Quote icon */}
              <svg className="mx-auto mb-4 h-8 w-8 text-primary/20" fill="currentColor" viewBox="0 0 24 24">
                <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
              </svg>

              <p className="mb-6 text-base leading-relaxed text-text-secondary sm:text-lg">
                "{testimonial.content}"
              </p>

              <div className="flex items-center justify-center gap-3">
                <img
                  src={testimonial.avatar}
                  alt={testimonial.name}
                  className="h-12 w-12 rounded-full object-cover"
                />
                <div className="text-left">
                  <p className="font-semibold text-text">{testimonial.name}</p>
                  <p className="text-sm text-text-secondary">{testimonial.role}</p>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation */}
          {testimonials.length > 1 && (
            <>
              <button
                onClick={goPrev}
                className="absolute left-0 top-1/2 -translate-x-4 -translate-y-1/2 rounded-full border border-border bg-white p-2 text-text-secondary shadow-sm transition-all hover:border-primary hover:text-primary sm:-translate-x-12"
                aria-label="Previous testimonial"
              >
                <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              <button
                onClick={goNext}
                className="absolute right-0 top-1/2 translate-x-4 -translate-y-1/2 rounded-full border border-border bg-white p-2 text-text-secondary shadow-sm transition-all hover:border-primary hover:text-primary sm:translate-x-12"
                aria-label="Next testimonial"
              >
                <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                </svg>
              </button>

              {/* Dots */}
              <div className="mt-6 flex justify-center gap-2">
                {testimonials.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => goTo(i)}
                    className={`h-2 rounded-full transition-all ${
                      i === current ? 'w-6 bg-primary' : 'w-2 bg-border hover:bg-primary/50'
                    }`}
                    aria-label={`Go to testimonial ${i + 1}`}
                  />
                ))}
              </div>
            </>
          )}
        </div>
      </div>
    </section>
  )
}
