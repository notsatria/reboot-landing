import { useInView } from 'react-intersection-observer'
import { motion } from 'framer-motion'
import { Mail } from 'lucide-react'

const EMAIL = 'notsatria.dev@gmail.com'
const SUBJECT = 'Reboot Closed Testing - I Want to Become a Tester'
const BODY = `Hi,

I'd like to join the Reboot closed testing program.

Device info:
- Device model:
- Android version:

Thanks!`

export default function BecomeTester() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 })

  const mailtoUrl = `mailto:${EMAIL}?subject=${encodeURIComponent(SUBJECT)}&body=${encodeURIComponent(BODY)}`

  return (
    <section id="tester" className="px-4 py-24">
      <div className="page-wrap">
        <motion.div
          ref={ref}
          className="rounded-2xl border border-primary-blue/30 bg-card px-8 py-16 text-center"
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 24 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        >
          {/* Badge */}
          <span className="mb-6 inline-block rounded-full border border-primary-blue/40 bg-primary-blue/10 px-4 py-1.5 text-sm font-medium text-primary-blue">
            Closed Testing
          </span>

          <h2 className="text-3xl font-extrabold text-text-primary sm:text-4xl">
            Want Early Access?
          </h2>
          <p className="mx-auto mt-4 max-w-lg text-text-secondary">
            Reboot is currently in closed testing and not yet publicly available
            on the Play Store. Join the beta program and be among the first to
            try it out.
          </p>

          <a
            href={mailtoUrl}
            className="mt-8 inline-flex items-center gap-2 rounded-full border-2 border-primary-blue bg-transparent px-8 py-3.5 text-base font-semibold text-primary-blue no-underline transition hover:bg-primary-blue hover:text-white hover:shadow-lg"
          >
            <Mail size={20} />
            I Want to Become a Tester
          </a>

          <p className="mt-4 text-sm text-text-secondary">
            We'll send you the testing link via email
          </p>
        </motion.div>
      </div>
    </section>
  )
}
