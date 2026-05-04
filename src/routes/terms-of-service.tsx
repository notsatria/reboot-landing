import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/terms-of-service')({
  component: TermsOfServicePage,
})

function TermsOfServicePage() {
  return (
    <main className="page-wrap px-4 py-12">
      <h1 className="mb-6 text-3xl font-bold text-text-primary">Terms of Service</h1>
      <div className="prose prose-invert max-w-none">
        <p className="text-text-secondary">Terms of service content will be added in Phase 9.</p>
      </div>
    </main>
  )
}
