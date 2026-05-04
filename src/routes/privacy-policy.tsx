import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/privacy-policy')({
  component: PrivacyPolicyPage,
})

function PrivacyPolicyPage() {
  return (
    <main className="page-wrap px-4 py-12">
      <h1 className="mb-6 text-3xl font-bold text-text-primary">Privacy Policy</h1>
      <div className="prose prose-invert max-w-none">
        <p className="text-text-secondary">Privacy policy content will be added in Phase 9.</p>
      </div>
    </main>
  )
}
