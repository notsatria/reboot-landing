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
            Download Reboot today and take the first step toward reclaiming your
            life. Free, private, no account needed.
          </p>
          <a
            href="https://play.google.com/store/apps/details?id=com.stoppmo"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 inline-flex items-center gap-2 rounded-full bg-streak-orange px-8 py-3.5 text-base font-semibold text-white no-underline transition hover:bg-streak-orange-alt hover:shadow-lg"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
              <path d="M3.609 1.814L13.792 12 3.61 22.186a.996.996 0 01-.61-.92V2.734a1 1 0 01.609-.92zm10.89 10.893l2.302 2.302-10.937 6.333 8.635-8.635zm3.199-3.199l2.302 2.302c.812.464.812 1.98 0 2.444l-2.302 2.302-2.506-2.506 2.506-4.542zM5.864 2.658L16.8 9.49l-2.302 2.302-8.635-8.635z" />
            </svg>
            Download on Play Store
          </a>
          <p className="mt-4 text-sm text-text-secondary">
            Available on Android
          </p>
        </motion.div>
      </div>
    </section>
  )
}
