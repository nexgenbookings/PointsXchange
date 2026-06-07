import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "How Points Xchange collects, uses, and protects your personal information."
};

export default function PrivacyPage() {
  return (
    <div className="bg-[#0A0A0A]">
      <div className="relative overflow-hidden border-b border-white/8">
        <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary/25 to-transparent" />
        <div className="mx-auto max-w-3xl px-4 py-14 lg:px-8">
          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-primary">Legal</p>
          <h1 className="mt-3 font-serif text-4xl font-semibold text-white sm:text-5xl">Privacy Policy</h1>
          <p className="mt-4 text-sm text-[#A0A0A0]">Last updated: June 2026</p>
        </div>
      </div>

      <div className="mx-auto max-w-3xl space-y-10 px-4 py-14 lg:px-8 text-[#A0A0A0]">

        <section>
          <h2 className="font-serif text-xl font-semibold text-white">Overview</h2>
          <p className="mt-3 leading-7">
            Points Xchange (&quot;we,&quot; &quot;our,&quot; or &quot;us&quot;) operates pointsxchange.cc. This Privacy Policy explains what information we collect, how we use it, and your rights in relation to it. By using our website or submitting a quote request, you agree to the practices described below.
          </p>
        </section>

        <section>
          <h2 className="font-serif text-xl font-semibold text-white">Information We Collect</h2>
          <p className="mt-3 leading-7">We collect information you provide directly when you:</p>
          <ul className="mt-3 space-y-2 leading-7 list-disc list-inside">
            <li>Submit a quote request (name, email, phone number, loyalty program, and points balance)</li>
            <li>Contact us via our contact form (name, email, phone, and message)</li>
            <li>Communicate with us by email or WhatsApp</li>
          </ul>
          <p className="mt-3 leading-7">
            We do not collect payment information. We do not require account creation to use our services. We do not collect loyalty program login credentials.
          </p>
        </section>

        <section>
          <h2 className="font-serif text-xl font-semibold text-white">How We Use Your Information</h2>
          <p className="mt-3 leading-7">We use the information you provide to:</p>
          <ul className="mt-3 space-y-2 leading-7 list-disc list-inside">
            <li>Evaluate your points balance and prepare a cash offer</li>
            <li>Respond to quote requests and contact inquiries</li>
            <li>Communicate with you about your transaction</li>
            <li>Maintain internal records for fraud prevention and compliance purposes</li>
          </ul>
          <p className="mt-3 leading-7">
            We do not use your information for advertising purposes. We do not sell, rent, or share your personal information with third parties for their marketing use.
          </p>
        </section>

        <section>
          <h2 className="font-serif text-xl font-semibold text-white">Email Communications</h2>
          <p className="mt-3 leading-7">
            When you submit a quote request, you will receive a confirmation email summarizing your request. Our desk may follow up with a verified cash offer. You can opt out of further communications at any time by replying to any email and requesting to be removed.
          </p>
        </section>

        <section>
          <h2 className="font-serif text-xl font-semibold text-white">Data Storage and Security</h2>
          <p className="mt-3 leading-7">
            Your information is stored in a secure, access-controlled database. We use industry-standard encryption in transit (HTTPS) and limit access to your data to authorized personnel only. We retain your information for as long as necessary to fulfill the purposes described in this policy or as required by applicable law.
          </p>
        </section>

        <section>
          <h2 className="font-serif text-xl font-semibold text-white">Cookies and Analytics</h2>
          <p className="mt-3 leading-7">
            Our website may use basic session cookies required for functionality. We do not use advertising cookies or third-party tracking pixels. We do not use Google Analytics or similar behavioral tracking tools.
          </p>
        </section>

        <section>
          <h2 className="font-serif text-xl font-semibold text-white">Third-Party Services</h2>
          <p className="mt-3 leading-7">
            We use the following third-party services to operate our platform:
          </p>
          <ul className="mt-3 space-y-2 leading-7 list-disc list-inside">
            <li><strong className="text-white">Vercel</strong> — website hosting and infrastructure</li>
            <li><strong className="text-white">Neon</strong> — secure database storage</li>
            <li><strong className="text-white">Resend</strong> — transactional email delivery</li>
          </ul>
          <p className="mt-3 leading-7">
            Each of these services has its own privacy policy. We do not share your information with any other third parties.
          </p>
        </section>

        <section>
          <h2 className="font-serif text-xl font-semibold text-white">Your Rights</h2>
          <p className="mt-3 leading-7">You have the right to:</p>
          <ul className="mt-3 space-y-2 leading-7 list-disc list-inside">
            <li>Request a copy of the information we hold about you</li>
            <li>Request correction of inaccurate information</li>
            <li>Request deletion of your information from our records</li>
            <li>Opt out of any future communications from us</li>
          </ul>
          <p className="mt-3 leading-7">
            To exercise any of these rights, contact us at <a href="mailto:Info@pointsxchange.cc" className="text-primary hover:underline">Info@pointsxchange.cc</a>.
          </p>
        </section>

        <section>
          <h2 className="font-serif text-xl font-semibold text-white">Children&apos;s Privacy</h2>
          <p className="mt-3 leading-7">
            Our services are not directed at individuals under the age of 18. We do not knowingly collect personal information from minors.
          </p>
        </section>

        <section>
          <h2 className="font-serif text-xl font-semibold text-white">Changes to This Policy</h2>
          <p className="mt-3 leading-7">
            We may update this Privacy Policy from time to time. When we do, we will update the date at the top of this page. Continued use of our website after changes are posted constitutes your acceptance of the updated policy.
          </p>
        </section>

        <section>
          <h2 className="font-serif text-xl font-semibold text-white">Contact</h2>
          <p className="mt-3 leading-7">
            Questions about this Privacy Policy can be directed to:<br />
            <a href="mailto:Info@pointsxchange.cc" className="text-primary hover:underline">Info@pointsxchange.cc</a><br />
            Points Xchange · Private Points Brokerage
          </p>
        </section>

      </div>
    </div>
  );
}
