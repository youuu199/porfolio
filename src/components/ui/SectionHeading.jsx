import { motion } from 'framer-motion'
import { useIntersectionObserver } from '../../hooks/useIntersectionObserver'

export function SectionHeading({ label, title, description }) {
  const { ref, hasIntersected } = useIntersectionObserver()

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={hasIntersected ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5 }}
      className="mb-12 text-center"
    >
      {label && (
        <span className="mb-2 inline-block rounded-full bg-primary/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-primary">
          {label}
        </span>
      )}
      <h2 className="text-3xl font-bold text-text sm:text-4xl">{title}</h2>
      {description && (
        <p className="mx-auto mt-4 max-w-2xl text-lg text-text-secondary">
          {description}
        </p>
      )}
    </motion.div>
  )
}
