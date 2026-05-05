import { useInView } from 'react-intersection-observer'
import { motion } from 'framer-motion'

export default function Download() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 })

  return (
    <section id="download" className="px-4 py-24">
      <div className="page-wrap">
        <motion.div
          ref={ref}
          className="rounded-2xl border border-border bg-card px-8 py-16 text-center"
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 24 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        >
          <h2 className="text-3xl font-extrabold text-text-primary sm:text-4xl">
            Ready to Start Your Reboot?
          </h2>
          <p className="mx-auto mt-4 max-w-md text-text-secondary">
            Reboot is coming soon to the Play Store. Want early access? Join the
            closed testing program above.
          </p>
          <a
            href="#tester"
            className="mt-8 inline-flex items-center gap-2 rounded-full bg-streak-orange px-8 py-3.5 text-base font-semibold text-white no-underline transition hover:bg-streak-orange-alt hover:shadow-lg"
          >
            Join Closed Testing
          </a>
          <p className="mt-4 text-sm text-text-secondary">
            Coming soon to the Play Store
          </p>
        </motion.div>
      </div>
    </section>
  )
}
