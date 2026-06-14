import { useState } from 'react'

export function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  })
  const [errors, setErrors] = useState({})
  const [status, setStatus] = useState('idle') // idle | sending | success | error

  const validateField = (name, value) => {
    switch (name) {
      case 'name':
        if (!value.trim()) return 'Name is required'
        if (value.length > 100) return 'Name must be under 100 characters'
        return ''
      case 'email':
        if (!value.trim()) return 'Email is required'
        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) return 'Invalid email address'
        return ''
      case 'subject':
        if (!value.trim()) return 'Subject is required'
        if (value.length > 200) return 'Subject must be under 200 characters'
        return ''
      case 'message':
        if (!value.trim()) return 'Message is required'
        if (value.length < 10) return 'Message must be at least 10 characters'
        if (value.length > 1000) return 'Message must be under 1000 characters'
        return ''
      default:
        return ''
    }
  }

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
    if (errors[name]) {
      const error = validateField(name, value)
      setErrors(prev => ({ ...prev, [name]: error }))
    }
  }

  const handleBlur = (e) => {
    const { name, value } = e.target
    const error = validateField(name, value)
    setErrors(prev => ({ ...prev, [name]: error }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    const newErrors = {}
    for (const field of ['name', 'email', 'subject', 'message']) {
      const error = validateField(field, formData[field])
      if (error) newErrors[field] = error
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors)
      return
    }

    setStatus('sending')

    try {
      // Simulate API call — replace with your actual endpoint
      await new Promise(resolve => setTimeout(resolve, 1500))
      setStatus('success')
      setFormData({ name: '', email: '', subject: '', message: '' })
    } catch {
      setStatus('error')
    }
  }

  if (status === 'success') {
    return (
      <div className="rounded-2xl border border-success/20 bg-success/5 p-8 text-center">
        <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-success/10">
          <svg className="h-7 w-7 text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h3 className="mb-2 text-xl font-semibold text-text">Message Sent!</h3>
        <p className="mb-6 text-text-secondary">Thank you for reaching out. I'll get back to you soon.</p>
        <button
          onClick={() => setStatus('idle')}
          className="rounded-lg bg-primary px-6 py-2.5 text-sm font-medium text-white transition-colors hover:bg-primary-dark"
        >
          Send Another Message
        </button>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5" noValidate>
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className="mb-1.5 block text-sm font-medium text-text">Name</label>
          <input
            id="name"
            name="name"
            type="text"
            value={formData.name}
            onChange={handleChange}
            onBlur={handleBlur}
            className={`w-full rounded-xl border bg-white px-4 py-3 text-sm outline-none transition-colors placeholder:text-text-secondary/50 focus:ring-2 focus:ring-primary/30 ${
              errors.name ? 'border-error' : 'border-border focus:border-primary'
            }`}
            placeholder="John Doe"
          />
          {errors.name && <p className="mt-1 text-xs text-error">{errors.name}</p>}
        </div>
        <div>
          <label htmlFor="email" className="mb-1.5 block text-sm font-medium text-text">Email</label>
          <input
            id="email"
            name="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
            onBlur={handleBlur}
            className={`w-full rounded-xl border bg-white px-4 py-3 text-sm outline-none transition-colors placeholder:text-text-secondary/50 focus:ring-2 focus:ring-primary/30 ${
              errors.email ? 'border-error' : 'border-border focus:border-primary'
            }`}
            placeholder="john@example.com"
          />
          {errors.email && <p className="mt-1 text-xs text-error">{errors.email}</p>}
        </div>
      </div>

      <div>
        <label htmlFor="subject" className="mb-1.5 block text-sm font-medium text-text">Subject</label>
        <input
          id="subject"
          name="subject"
          type="text"
          value={formData.subject}
          onChange={handleChange}
          onBlur={handleBlur}
          className={`w-full rounded-xl border bg-white px-4 py-3 text-sm outline-none transition-colors placeholder:text-text-secondary/50 focus:ring-2 focus:ring-primary/30 ${
            errors.subject ? 'border-error' : 'border-border focus:border-primary'
          }`}
          placeholder="What's this about?"
        />
        {errors.subject && <p className="mt-1 text-xs text-error">{errors.subject}</p>}
      </div>

      <div>
        <label htmlFor="message" className="mb-1.5 block text-sm font-medium text-text">Message</label>
        <textarea
          id="message"
          name="message"
          rows={5}
          value={formData.message}
          onChange={handleChange}
          onBlur={handleBlur}
          className={`w-full rounded-xl border bg-white px-4 py-3 text-sm outline-none transition-colors placeholder:text-text-secondary/50 focus:ring-2 focus:ring-primary/30 resize-y ${
            errors.message ? 'border-error' : 'border-border focus:border-primary'
          }`}
          placeholder="Your message..."
        />
        {errors.message && <p className="mt-1 text-xs text-error">{errors.message}</p>}
      </div>

      {status === 'error' && (
        <div className="rounded-xl border border-error/20 bg-error/5 p-4 text-sm text-error">
          Something went wrong. Please try again later.
        </div>
      )}

      <button
        type="submit"
        disabled={status === 'sending'}
        className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-primary px-6 py-3 text-sm font-semibold text-white transition-all hover:bg-primary-dark disabled:cursor-not-allowed disabled:opacity-60"
      >
        {status === 'sending' ? (
          <>
            <svg className="h-4 w-4 animate-spin" viewBox="0 0 24 24">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
            </svg>
            Sending...
          </>
        ) : (
          <>
            Send Message
            <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </>
        )}
      </button>
    </form>
  )
}
