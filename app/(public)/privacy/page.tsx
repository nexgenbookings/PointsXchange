export default function PrivacyPage() {
  return (
    <div className="bg-[#0A0A0A]">
      <div className="relative overflow-hidden border-b border-white/8">
        <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary/25 to-transparent" />
        <div className="mx-auto max-w-3xl px-4 py-14 lg:px-8">
          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-primary">Legal</p>
          <h1 className="mt-3 font-serif text-4xl font-semibold text-white sm:text-5xl">Privacy Policy</h1>
        </div>
      </div>
      <div className="mx-auto max-w-3xl px-4 py-14 lg:px-8">
        <p className="leading-8 text-[#A0A0A0]">
          Points Xchange collects contact, quote, and transaction information to respond to inquiries, evaluate rewards balances, and operate secure customer service workflows. We do not sell personal information. Production deployments should replace this starter policy with counsel-approved terms.
        </p>
      </div>
    </div>
  );
}
