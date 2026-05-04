import { createFileRoute } from '@tanstack/react-router'
import { privacyPolicyContent } from '#/data/privacy-policy'

export const Route = createFileRoute('/privacy-policy')({
  component: PrivacyPolicyPage,
})

function PrivacyPolicyPage() {
  return (
    <main className="page-wrap px-4 py-12">
      <h1 className="mb-2 text-3xl font-bold text-text-primary">Privacy Policy</h1>
      <p className="mb-8 text-sm text-text-secondary">
        Last updated: {privacyPolicyContent.lastUpdated}
      </p>
      <div className="prose prose-invert max-w-none">
        {privacyPolicyContent.sections.map((section) => (
          <section key={section.title} className="mb-8">
            <h2 className="mb-3 text-xl font-semibold text-text-primary">
              {section.title}
            </h2>
            <div className="whitespace-pre-line leading-relaxed text-text-secondary">
              {section.content}
            </div>
          </section>
        ))}
      </div>
    </main>
  )
}
