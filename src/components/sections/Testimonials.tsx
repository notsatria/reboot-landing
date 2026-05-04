import { useInView } from 'react-intersection-observer'
import { motion } from 'framer-motion'
import { Flame } from 'lucide-react'

const testimonials = [
  {
    quote:
      "This app changed my life. Seeing every second tick by gave me the motivation I needed to keep going. 90 days and counting.",
    alias: 'RecoveringWarrior',
    streak: 90,
  },
  {
    quote:
      "I've tried other apps but they all felt clinical. Reboot feels like it was built by someone who actually understands what we're going through.",
    alias: 'NewBeginnings',
    streak: 45,
  },
  {
    quote:
      "The heatmap is brilliant. Seeing those green squares stack up is more motivating than any badge or points system.",
    alias: 'DayByDay',
    streak: 120,
  },
]

const stats = [
  { value: '10K+', label: 'Downloads' },
  { value: '500K+', label: 'Streak Days Logged' },
  { value: '4.8', label: 'on Play Store' },
]

export default function Testimonials() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 })

  return (
    <section className="px-4 py-24">
      <div className="page-wrap">
        <div className="mb-14 text-center">
          <h2 className="text-3xl font-extrabold text-text-primary sm:text-4xl">
            Join Thousands Breaking Free
          </h2>
        </div>

        <div ref={ref} className="grid gap-5 md:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.alias}
              className="rounded-2xl border border-border bg-card p-6"
              initial={{ opacity: 0, y: 24 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 24 }}
              transition={{
                duration: 0.5,
                delay: index * 0.1,
                ease: [0.16, 1, 0.3, 1],
              }}
            >
              <p className="mb-6 text-sm leading-relaxed text-text-secondary">
                "{testimonial.quote}"
              </p>
              <div className="flex items-center justify-between">
                <span className="text-sm font-semibold text-text-primary">
                  {testimonial.alias}
                </span>
                <span className="inline-flex items-center gap-1 rounded-full bg-streak-orange/15 px-2.5 py-1 text-xs font-semibold text-streak-orange">
                  <Flame className="h-3 w-3" />
                  {testimonial.streak} days
                </span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Stats bar */}
        <motion.div
          className="mt-16 grid grid-cols-3 gap-6 rounded-2xl border border-border bg-card py-8"
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 24 }}
          transition={{ duration: 0.5, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
        >
          {stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <p className="text-2xl font-extrabold text-streak-orange sm:text-3xl">
                {stat.value}
              </p>
              <p className="mt-1 text-xs text-text-secondary sm:text-sm">
                {stat.label}
              </p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
