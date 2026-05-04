import { useInView } from 'react-intersection-observer'
import { motion } from 'framer-motion'
import {
  Timer,
  Grid3X3,
  BarChart3,
  NotebookPen,
  PartyPopper,
  ShieldCheck,
} from 'lucide-react'

const features = [
  {
    icon: Timer,
    title: 'Real-Time Streak Counter',
    description:
      'Watch every second of your progress with a live timer.',
  },
  {
    icon: Grid3X3,
    title: 'Activity Heatmap',
    description:
      'Visualize your journey with a GitHub-style contribution grid.',
  },
  {
    icon: BarChart3,
    title: 'Streak Analytics',
    description:
      'Understand your patterns with longest streak, averages, and trend charts.',
  },
  {
    icon: NotebookPen,
    title: 'Honest Relapse Logging',
    description:
      'Log setbacks with date, time, and optional notes — no judgment.',
  },
  {
    icon: PartyPopper,
    title: 'Milestone Celebrations',
    description:
      'Get notified and share your achievements on Instagram.',
  },
  {
    icon: ShieldCheck,
    title: 'Privacy First',
    description:
      'No account, no cloud, no tracking. Your data stays on your device.',
  },
]

export default function Features() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 })

  return (
    <section id="features" className="px-4 py-24">
      <div className="page-wrap">
        <div className="mb-14 text-center">
          <h2 className="text-3xl font-extrabold text-text-primary sm:text-4xl">
            Everything You Need to Reclaim Your Life
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-text-secondary">
            Simple tools designed to support your recovery — privately and without judgment.
          </p>
        </div>

        <div ref={ref} className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) => (
            <motion.article
              key={feature.title}
              className="feature-card rounded-2xl p-6"
              initial={{ opacity: 0, y: 24 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 24 }}
              transition={{
                duration: 0.5,
                delay: index * 0.1,
                ease: [0.16, 1, 0.3, 1],
              }}
            >
              <feature.icon className="mb-4 h-8 w-8 text-primary-blue" />
              <h3 className="mb-2 text-lg font-semibold text-text-primary">
                {feature.title}
              </h3>
              <p className="text-sm leading-relaxed text-text-secondary">
                {feature.description}
              </p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}
