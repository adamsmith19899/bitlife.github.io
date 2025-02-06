import React from 'react';
import { LegalLayout } from './components/LegalLayout';

export const Privacy: React.FC = () => {
  return (
    <LegalLayout title="Privacy Policy">
      <section className="space-y-6">
        {/* Effective Date */}
        <p className="text-white/80">
          <strong>Effective Date:</strong> Nov-09-24
        </p>

        {/* Introduction */}
        <h2 className="text-xl font-semibold text-white">Introduction</h2>
        <p className="text-white/80">
          We respect your privacy and are committed to protecting your personal information. This Privacy Policy
          outlines our practices regarding the collection, use, and disclosure of your information.
        </p>

        {/* Information Collection */}
        <h2 className="text-xl font-semibold text-white">Information Collection</h2>
        <p className="text-white/80">
          We collect information from you in various ways:
        </p>
        <ul className="list-disc pl-6 text-white/80">
          <li>
            <strong>Personal Information:</strong> We may collect personally identifiable information, such as your
            name and email address, when you register for an account, contact us through the Site, or participate in
            forums or comments.
          </li>
          <li>
            <strong>Non-Personal Information:</strong> We may collect non-personally identifiable information, such as
            browser type, operating system, referring URLs, device type, location (city, state, country), IP address,
            cookie information, and game play data (e.g., scores, progress).
          </li>
        </ul>

        {/* Cookies and Tracking */}
        <h2 className="text-xl font-semibold text-white">Cookies and Tracking</h2>
        <p className="text-white/80">
          We use cookies to analyze Site usage, personalize content, improve user experience, and track advertising
          effectiveness. You can control cookies through your browser settings.
        </p>

        {/* Information Use */}
        <h2 className="text-xl font-semibold text-white">Information Use</h2>
        <p className="text-white/80">
          We use your information for providing and improving the Site, enhancing user experience, sending newsletters
          and updates (if opted-in), responding to inquiries, conducting research and analysis, and complying with laws
          and regulations.
        </p>

        {/* Information Disclosure */}
        <h2 className="text-xl font-semibold text-white">Information Disclosure</h2>
        <p className="text-white/80">
          We may disclose your information to affiliated companies or partners, to comply with legal obligations, to
          protect our rights or property, or in the event of a merger or acquisition.
        </p>

        {/* Data Security */}
        <h2 className="text-xl font-semibold text-white">Data Security</h2>
        <p className="text-white/80">
          We implement reasonable security measures to protect your information from unauthorized access, disclosure,
          alteration, or destruction.
        </p>

        {/* Data Retention */}
        <h2 className="text-xl font-semibold text-white">Data Retention</h2>
        <p className="text-white/80">
          We retain your information for as long as necessary to provide our services or as required by law.
        </p>

        {/* User Rights */}
        <h2 className="text-xl font-semibold text-white">User Rights</h2>
        <p className="text-white/80">
          You have the right to access and update your information, opt-out of newsletters and updates, request data
          deletion, and object to data processing.
        </p>

        {/* Children's Privacy */}
        <h2 className="text-xl font-semibold text-white">Children's Privacy</h2>
        <p className="text-white/80">
          Our Site is not directed to children under 13. We do not knowingly collect personal information from
          children.
        </p>

        {/* Changes to this Policy */}
        <h2 className="text-xl font-semibold text-white">Changes to this Policy</h2>
        <p className="text-white/80">
          We may update this Privacy Policy. Changes will be posted on this page.
        </p>

        {/* Contact Us */}
        <h2 className="text-xl font-semibold text-white">Contact Us</h2>
        <p className="text-white/80">
          If you have questions or concerns, please contact us at{' '}
          <a href="mailto:info@eblogs.online" className="text-blue-400 hover:underline">
            info@eblogs.online
          </a>.
        </p>
      </section>
    </LegalLayout>
  );
};
