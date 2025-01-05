import React from 'react';
import { LegalLayout } from './components/LegalLayout';

export const DMCA: React.FC = () => {
  return (
    <LegalLayout title="DMCA Policy">
      <section className="space-y-6">
        <h2 className="text-xl font-semibold text-white">Copyright Infringement Notice</h2>
        <p className="text-white/80">
          If you believe that your copyrighted work has been copied in a way that constitutes copyright
          infringement and is accessible on our platform, please send a notification containing the
          following information to our copyright agent.
        </p>

        <h2 className="text-xl font-semibold text-white">Required Information</h2>
        <ul className="list-disc list-inside space-y-2 text-white/80">
          <li>A physical or electronic signature of the copyright owner</li>
          <li>Identification of the copyrighted work claimed to have been infringed</li>
          <li>Identification of the material that is claimed to be infringing</li>
          <li>Contact information of the copyright owner</li>
          <li>A statement of good faith belief that the use is not authorized</li>
          <li>A statement that the information is accurate and under penalty of perjury</li>
        </ul>
      </section>
    </LegalLayout>
  );
};