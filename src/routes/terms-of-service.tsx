import { createFileRoute } from '@tanstack/react-router'
import { termsOfServiceContent } from '#/data/terms-of-service'

export const Route = createFileRoute('/terms-of-service')({
  component: TermsOfServicePage,
})

function TermsOfServicePage() {
  return (
    <main className="page-wrap px-4 py-12">
      <h1 className="mb-2 text-3xl font-bold text-text-primary">Terms of Service</h1>
      <p className="mb-8 text-sm text-text-secondary">
        Last updated: {termsOfServiceContent.lastUpdated}
      </p>
      <div className="prose prose-invert max-w-none">
        {termsOfServiceContent.sections.map((section) => (
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
