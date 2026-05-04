import { createFileRoute } from '@tanstack/react-router'
import Hero from '#/components/sections/Hero'

export const Route = createFileRoute('/')({ component: LandingPage })

function LandingPage() {
  return (
    <main>
      <Hero />
      {/* Features, Screenshots, Testimonials, Download — added in Phases 5-7 */}
    </main>
  )
}
