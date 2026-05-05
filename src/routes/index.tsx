import { createFileRoute } from '@tanstack/react-router'
import Hero from '#/components/sections/Hero'
import Features from '#/components/sections/Features'
import Screenshots from '#/components/sections/Screenshots'
import Testimonials from '#/components/sections/Testimonials'
import BecomeTester from '#/components/sections/BecomeTester'
import Download from '#/components/sections/Download'

export const Route = createFileRoute('/')({ component: LandingPage })

function LandingPage() {
  return (
    <main>
      <Hero />
      <Features />
      <Screenshots />
      <Testimonials />
      <BecomeTester />
      <Download />
    </main>
  )
}
