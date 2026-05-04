import { createFileRoute } from '@tanstack/react-router'
import Hero from '#/components/sections/Hero'
import Features from '#/components/sections/Features'

export const Route = createFileRoute('/')({ component: LandingPage })

function LandingPage() {
  return (
    <main>
      <Hero />
      <Features />
      {/* Screenshots, Testimonials, Download — added in Phases 6-7 */}
    </main>
  )
}
