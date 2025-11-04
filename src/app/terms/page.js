export default function TermsOfService() {
  return (
    <div className="bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-lg p-8 md:p-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-8">
          Terms of Service
        </h1>

        <div className="prose prose-lg max-w-none text-gray-700 space-y-6">
          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">
              1. Acceptance of Terms
            </h2>
            <p>
              By accessing and using KarsaazQR (&quot;the Service&quot;), you
              accept and agree to be bound by the terms and provision of this
              agreement. If you do not agree to abide by the above, please do
              not use this service.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">
              2. Use License
            </h2>
            <p>
              Permission is granted to temporarily access the materials
              (information or software) on KarsaazQR for personal,
              non-commercial transitory viewing only. This is the grant of a
              license, not a transfer of title, and under this license you may
              not:
            </p>
            <ul className="list-disc pl-6 mt-4 space-y-2">
              <li>Modify or copy the materials</li>
              <li>
                Use the materials for any commercial purpose or for any public
                display
              </li>
              <li>
                Attempt to reverse engineer any software contained on KarsaazQR
              </li>
              <li>
                Remove any copyright or other proprietary notations from the
                materials
              </li>
              <li>
                Transfer the materials to another person or &quot;mirror&quot;
                the materials on any other server
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">
              3. User Accounts
            </h2>
            <p>
              When you create an account with us, you guarantee that you are
              above the age of 18, and that the information you provide us is
              accurate, complete, and current at all times. You are responsible
              for safeguarding the password that you use to access the Service.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">
              4. Prohibited Uses
            </h2>
            <p>
              You may use the Service only for lawful purposes and in accordance
              with these Terms. You agree not to:
            </p>
            <ul className="list-disc pl-6 mt-4 space-y-2">
              <li>
                Use the Service in any way that violates any applicable national
                or international law or regulation
              </li>
              <li>
                Engage in any conduct that restricts or inhibits anyone&apos;s
                use or enjoyment of the Service
              </li>
              <li>
                Use the Service to transmit any advertising or promotional
                material without our prior written consent
              </li>
              <li>
                Impersonate or attempt to impersonate the Company, a Company
                employee, another user, or any other person or entity
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">
              5. Intellectual Property Rights
            </h2>
            <p>
              The Service and its original content, features, and functionality
              are and will remain the exclusive property of KarsaazQR and its
              licensors. The Service is protected by copyright, trademark, and
              other laws of both the United Kingdom and foreign countries.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">
              6. Termination
            </h2>
            <p>
              We may terminate or suspend your account and bar access to the
              Service immediately, without prior notice or liability, under our
              sole discretion, for any reason whatsoever and without limitation,
              including but not limited to a breach of the Terms.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">
              7. Limitation of Liability
            </h2>
            <p>
              In no event shall KarsaazQR, nor its directors, employees,
              partners, agents, suppliers, or affiliates, be liable for any
              indirect, incidental, special, consequential or punitive damages,
              including without limitation, loss of profits, data, use,
              goodwill, or other intangible losses.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">
              8. Governing Law
            </h2>
            <p>
              These Terms shall be governed and construed in accordance with the
              laws of the United Kingdom, without regard to its conflict of law
              provisions.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">
              9. Changes to Terms
            </h2>
            <p>
              We reserve the right, at our sole discretion, to modify or replace
              these Terms at any time. We will provide at least 30 days notice
              prior to any new terms taking effect.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">
              10. Contact Us
            </h2>
            <p>
              If you have any questions about these Terms, please contact us at:
            </p>
            <p className="mt-4">
              <strong>Email:</strong> info@karsaazQR.com
              <br />
              <strong>Address:</strong> 85 Great Portland Street, First Floor,
              London, W1W 7LT, United Kingdom
              <br />
              <strong>Phone:</strong> +44 7411 209240
            </p>
          </section>

          <p className="text-sm text-gray-500 mt-12 pt-8 border-t">
            Last updated:{" "}
            {new Date().toLocaleDateString("en-GB", {
              day: "numeric",
              month: "long",
              year: "numeric",
            })}
          </p>
        </div>
      </div>
    </div>
  );
}
