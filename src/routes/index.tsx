import { createFileRoute } from '@tanstack/react-router'
import Hero from '#/components/sections/Hero'
import Features from '#/components/sections/Features'
import Screenshots from '#/components/sections/Screenshots'

export const Route = createFileRoute('/')({ component: LandingPage })

function LandingPage() {
  return (
    <main>
      <Hero />
      <Features />
      <Screenshots />
      {/* Testimonials, Download — added in Phase 7 */}
    </main>
  )
}
