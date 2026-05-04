import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section className="relative flex min-h-screen items-center overflow-hidden px-4">
      {/* Background glow */}
      <div className="pointer-events-none absolute left-1/2 top-1/3 -translate-x-1/2 -translate-y-1/2 h-[600px] w-[600px] rounded-full bg-[radial-gradient(circle,rgba(17,147,212,0.15),transparent_70%)]" />

      <div className="page-wrap relative z-10 flex w-full flex-col items-center gap-12 py-20 md:flex-row md:justify-between">
        {/* Left: Text content */}
        <div className="max-w-xl text-center md:text-left">
          <motion.h1
            className="text-4xl leading-tight font-extrabold tracking-tight text-text-primary sm:text-5xl lg:text-6xl"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          >
            Break Free.
            <br />
            <span className="text-streak-orange">Start Your Reboot.</span>
          </motion.h1>

          <motion.p
            className="mt-6 text-lg leading-relaxed text-text-secondary"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
          >
            A private, judgment-free companion that tracks your recovery in real
            time. No account required.
          </motion.p>

          <motion.div
            className="mt-8 flex flex-col items-center gap-4 sm:flex-row md:justify-start"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          >
            <a
              href="#download"
              className="inline-flex items-center gap-2 rounded-full bg-streak-orange px-8 py-3.5 text-base font-semibold text-white no-underline transition hover:bg-streak-orange-alt hover:shadow-lg"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M3.609 1.814L13.792 12 3.61 22.186a.996.996 0 01-.61-.92V2.734a1 1 0 01.609-.92zm10.89 10.893l2.302 2.302-10.937 6.333 8.635-8.635zm3.199-3.199l2.302 2.302c.812.464.812 1.98 0 2.444l-2.302 2.302-2.506-2.506 2.506-4.542zM5.864 2.658L16.8 9.49l-2.302 2.302-8.635-8.635z" />
              </svg>
              Download on Play Store
            </a>
            <span className="text-sm text-text-secondary">Available on Android</span>
          </motion.div>
        </div>

        {/* Right: Phone mockup */}
        <motion.div
          className="relative"
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
        >
          {/* Glow behind phone */}
          <div className="pointer-events-none absolute -inset-16 rounded-full bg-[radial-gradient(circle,rgba(17,147,212,0.2),transparent_65%)]" />

          {/* Phone frame */}
          <div className="relative h-[520px] w-[260px] rounded-[2.5rem] border-[3px] border-border bg-surface-deeper shadow-2xl">
            {/* Notch */}
            <div className="absolute left-1/2 top-3 h-5 w-24 -translate-x-1/2 rounded-full bg-surface-dark" />

            {/* Screen content placeholder */}
            <div className="flex h-full flex-col items-center justify-center gap-6 px-6 pt-12">
              {/* Circular counter placeholder */}
              <div className="flex h-32 w-32 items-center justify-center rounded-full border-4 border-streak-orange">
                <div className="text-center">
                  <span className="block text-3xl font-bold text-text-primary">42</span>
                  <span className="text-xs text-text-secondary">days</span>
                </div>
              </div>

              {/* Live timer placeholder */}
              <div className="text-center">
                <p className="text-sm text-text-secondary">Current streak</p>
                <p className="font-mono text-lg font-semibold text-streak-orange">
                  14:23:07
                </p>
              </div>

              {/* Quick stats */}
              <div className="flex w-full gap-3">
                <div className="flex-1 rounded-xl bg-card p-3 text-center">
                  <p className="text-xs text-text-secondary">Best</p>
                  <p className="text-sm font-bold text-text-primary">68 days</p>
                </div>
                <div className="flex-1 rounded-xl bg-card p-3 text-center">
                  <p className="text-xs text-text-secondary">Total</p>
                  <p className="text-sm font-bold text-text-primary">142 days</p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
