import { useInView } from 'react-intersection-observer'
import { motion } from 'framer-motion'

const screenshots = [
  {
    title: 'Dashboard',
    caption: 'Your streak at a glance — every second counted.',
    content: (
      <div className="flex flex-col items-center gap-4 pt-8">
        <div className="flex h-24 w-24 items-center justify-center rounded-full border-4 border-streak-orange">
          <span className="text-2xl font-bold text-text-primary">42</span>
        </div>
        <p className="font-mono text-base text-streak-orange">14:23:07</p>
      </div>
    ),
  },
  {
    title: 'Analytics',
    caption: 'Understand your patterns with detailed charts.',
    content: (
      <div className="flex flex-col gap-3 px-4 pt-8">
        <div className="h-3 w-full rounded bg-primary-blue/30" />
        <div className="h-3 w-4/5 rounded bg-primary-blue/20" />
        <div className="h-3 w-3/5 rounded bg-primary-blue/15" />
        <div className="mt-4 flex gap-2">
          {[40, 65, 30, 80, 55, 70, 45].map((h, i) => (
            <div
              key={i}
              className="flex-1 rounded-t bg-primary-blue"
              style={{ height: `${h}px` }}
            />
          ))}
        </div>
      </div>
    ),
  },
  {
    title: 'Heatmap',
    caption: 'Visualize your journey like a contribution grid.',
    content: (
      <div className="grid grid-cols-7 gap-1.5 px-6 pt-10">
        {Array.from({ length: 35 }).map((_, i) => {
          const intensity = Math.random()
          return (
            <div
              key={i}
              className="aspect-square rounded-sm"
              style={{
                backgroundColor:
                  intensity > 0.7
                    ? '#1193D4'
                    : intensity > 0.4
                      ? 'rgba(17,147,212,0.4)'
                      : 'rgba(17,147,212,0.1)',
              }}
            />
          )
        })}
      </div>
    ),
  },
  {
    title: 'Milestones',
    caption: 'Celebrate every milestone on your journey.',
    content: (
      <div className="flex flex-col items-center gap-3 px-6 pt-10">
        <div className="text-4xl">🎉</div>
        <p className="text-lg font-bold text-streak-orange">30 Days!</p>
        <p className="text-center text-xs text-text-secondary">
          You've reached a major milestone. Keep going!
        </p>
        <div className="mt-2 rounded-full bg-streak-orange/20 px-4 py-1.5 text-xs font-semibold text-streak-orange">
          Share Achievement
        </div>
      </div>
    ),
  },
  {
    title: 'History',
    caption: 'Review your complete recovery timeline.',
    content: (
      <div className="flex flex-col gap-2.5 px-4 pt-8">
        {[
          { label: '14 days streak', status: 'completed' },
          { label: 'Relapse logged', status: 'relapse' },
          { label: '7 days streak', status: 'completed' },
          { label: '21 days streak', status: 'current' },
        ].map((item, i) => (
          <div key={i} className="flex items-center gap-3 rounded-lg bg-surface-dark/50 px-3 py-2">
            <div
              className={`h-2.5 w-2.5 rounded-full ${
                item.status === 'relapse'
                  ? 'bg-red-500'
                  : item.status === 'current'
                    ? 'bg-streak-orange'
                    : 'bg-green-500'
              }`}
            />
            <span className="text-xs text-text-secondary">{item.label}</span>
          </div>
        ))}
      </div>
    ),
  },
]

export default function Screenshots() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 })

  return (
    <section id="screenshots" className="py-24">
      <div className="page-wrap px-4">
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-extrabold text-text-primary sm:text-4xl">
            See It in Action
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-text-secondary">
            A clean, focused interface designed to support your recovery.
          </p>
        </div>
      </div>

      <motion.div
        ref={ref}
        initial={{ opacity: 0, x: 40 }}
        animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: 40 }}
        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
      >
        <div className="flex snap-x snap-mandatory gap-6 overflow-x-auto px-8 pb-4 md:px-16">
          {screenshots.map((screenshot) => (
            <div
              key={screenshot.title}
              className="flex-shrink-0 snap-center"
            >
              <div className="relative h-[480px] w-[240px] rounded-[2rem] border-[3px] border-border bg-surface-deeper shadow-xl">
                {/* Notch */}
                <div className="absolute left-1/2 top-3 h-4 w-20 -translate-x-1/2 rounded-full bg-surface-dark" />
                {/* Screen */}
                <div className="h-full overflow-hidden rounded-[1.7rem]">
                  {screenshot.content}
                </div>
              </div>
              <p className="mt-4 text-center text-sm font-medium text-text-primary">
                {screenshot.title}
              </p>
              <p className="mt-1 max-w-[240px] text-center text-xs text-text-secondary">
                {screenshot.caption}
              </p>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  )
}
