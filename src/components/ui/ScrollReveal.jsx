import { motion } from 'framer-motion'

export function ScrollReveal({ children, className = '', delay = 0, direction = 'up' }) {
  const directionVariants = {
    up: { y: 40 },
    down: { y: -40 },
    left: { x: -40 },
    right: { x: 40 },
  }

  return (
    <motion.div
      initial={{ opacity: 0, ...directionVariants[direction] }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.5, delay }}
      className={className}
    >
      {children}
    </motion.div>
  )
}
