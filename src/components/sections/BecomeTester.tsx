import { useState } from 'react'
import { useInView } from 'react-intersection-observer'
import { motion, AnimatePresence } from 'framer-motion'
import { Mail, ExternalLink, X } from 'lucide-react'

export default function BecomeTester() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 })
  const [open, setOpen] = useState(false)

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

          <button
            onClick={() => setOpen(true)}
            className="mt-8 inline-flex items-center gap-2 rounded-full border-2 border-primary-blue bg-transparent px-8 py-3.5 text-base font-semibold text-primary-blue transition hover:bg-primary-blue hover:text-white hover:shadow-lg"
          >
            <Mail size={20} />
            I Want to Become a Tester
          </button>

          <p className="mt-4 text-sm text-text-secondary">
            We'll guide you through the testing steps
          </p>
        </motion.div>
      </div>

      {/* Modal */}
      <AnimatePresence>
        {open && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 px-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setOpen(false)}
          >
            <motion.div
              className="relative w-full max-w-md rounded-2xl border border-primary-blue/30 bg-card p-8"
              initial={{ opacity: 0, scale: 0.95, y: 16 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 16 }}
              transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setOpen(false)}
                className="absolute right-4 top-4 text-text-secondary hover:text-text-primary"
              >
                <X size={20} />
              </button>

              <h3 className="text-xl font-bold text-text-primary">
                Join Closed Testing
              </h3>

              <div className="mt-6 space-y-5">
                <div>
                  <p className="mb-1.5 text-sm font-medium text-text-secondary">
                    1. Join tester group
                  </p>
                  <a
                    href="https://groups.google.com/u/0/g/reboot-tester-beta"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-primary-blue underline underline-offset-2 hover:opacity-80"
                  >
                    groups.google.com/u/0/g/reboot-tester-beta
                    <ExternalLink size={14} />
                  </a>
                </div>

                <div>
                  <p className="mb-1.5 text-sm font-medium text-text-secondary">
                    2. Register as tester
                  </p>
                  <a
                    href="https://play.google.com/apps/testing/com.notsatria.reboot"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-primary-blue underline underline-offset-2 hover:opacity-80"
                  >
                    play.google.com/apps/testing/com.notsatria.reboot
                    <ExternalLink size={14} />
                  </a>
                </div>

                <div>
                  <p className="mb-1.5 text-sm font-medium text-text-secondary">
                    3. Download the app
                  </p>
                  <a
                    href="https://play.google.com/store/apps/details?id=com.notsatria.reboot"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-primary-blue underline underline-offset-2 hover:opacity-80"
                  >
                    play.google.com/store/apps/details?id=com.notsatria.reboot
                    <ExternalLink size={14} />
                  </a>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}
