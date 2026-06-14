export function Badge({ children, variant = 'default' }) {
  const variants = {
    default: 'bg-primary/10 text-primary',
    accent: 'bg-accent/10 text-accent',
    outline: 'border border-border text-text-secondary',
  }

  return (
    <span className={`inline-block rounded-full px-3 py-1 text-xs font-medium ${variants[variant]}`}>
      {children}
    </span>
  )
}
