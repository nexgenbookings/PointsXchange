export default function TermsPage() {
  return (
    <div className="bg-[#0A0A0A]">
      <div className="relative overflow-hidden border-b border-white/8">
        <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary/25 to-transparent" />
        <div className="mx-auto max-w-3xl px-4 py-14 lg:px-8">
          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-primary">Legal</p>
          <h1 className="mt-3 font-serif text-4xl font-semibold text-white sm:text-5xl">Terms of Service</h1>
        </div>
      </div>

      <div className="mx-auto max-w-3xl space-y-10 px-4 py-14 lg:px-8">

        {/* Account Risk Disclaimer — prominent */}
        <div className="rounded-2xl border border-primary/30 bg-primary/5 p-6">
          <p className="text-sm font-bold uppercase tracking-[0.14em] text-primary">Important — Account Risk Disclaimer</p>
          <p className="mt-3 leading-7 text-[#A0A0A0]">
            Selling, brokering, or transferring loyalty points or miles may violate the terms and conditions of the applicable loyalty program. <strong className="text-white">Points Xchange accepts no responsibility whatsoever for any account suspension, account closure, point forfeiture, or any other action taken by a loyalty program or financial institution against your account as a result of entering into or completing a transaction with us.</strong> You transact entirely at your own risk. By using our services, you confirm that you have reviewed your program&apos;s terms of service and accept full responsibility for any consequences to your account.
          </p>
        </div>

        <div className="space-y-6 text-[#A0A0A0]">
          <section>
            <h2 className="font-serif text-xl font-semibold text-white">Quotes and Offers</h2>
            <p className="mt-3 leading-7">All quotes provided through our calculator or desk are estimates only. No offer is binding until confirmed in writing by Points Xchange. We reserve the right to withdraw, adjust, or decline any offer at any time prior to a confirmed agreement.</p>
          </section>

          <section>
            <h2 className="font-serif text-xl font-semibold text-white">No Liability for Account Actions</h2>
            <p className="mt-3 leading-7">Points Xchange expressly disclaims all liability for any consequences arising from your loyalty program accounts, including but not limited to: account suspension, account closure, forfeiture of points or miles, loss of status, or any other punitive action by a loyalty program, airline, hotel, bank, or credit card issuer. These risks are solely yours to bear.</p>
          </section>

          <section>
            <h2 className="font-serif text-xl font-semibold text-white">Transaction Conditions</h2>
            <p className="mt-3 leading-7">All transactions are subject to balance verification, fraud review, program availability, and market conditions. We reserve the right to cancel any transaction if verification fails or if circumstances change prior to completion.</p>
          </section>

          <section>
            <h2 className="font-serif text-xl font-semibold text-white">Payments</h2>
            <p className="mt-3 leading-7">Payment is issued via ACH bank transfer or Zelle following successful transfer confirmation. Points Xchange is not responsible for delays caused by third-party payment processors, banks, or technical issues outside our control.</p>
          </section>

          <section>
            <h2 className="font-serif text-xl font-semibold text-white">Limitation of Liability</h2>
            <p className="mt-3 leading-7">To the fullest extent permitted by law, Points Xchange, its operators, employees, and affiliates shall not be liable for any direct, indirect, incidental, consequential, or punitive damages arising out of or related to your use of our services, including any loss of loyalty points, account privileges, or financial loss.</p>
          </section>

          <section>
            <h2 className="font-serif text-xl font-semibold text-white">Governing Terms</h2>
            <p className="mt-3 leading-7">These terms constitute the entire agreement between you and Points Xchange with respect to use of our services. Production deployments should supplement these terms with counsel-approved legal language specific to your jurisdiction.</p>
          </section>
        </div>
      </div>
    </div>
  );
}
