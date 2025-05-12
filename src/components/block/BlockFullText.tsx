'use client'

export default function BlockFullText({ children }: { children: React.ReactNode }) {
  return (
    <section className="block-full-text">
      <div className="grid">
        <div className="block-full-text__content">{children}</div>
      </div>
    </section>
  )
}
