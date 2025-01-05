import React from 'react';
import { LegalLayout } from './components/LegalLayout';

export const Privacy: React.FC = () => {
  return (
    <LegalLayout title="Privacy Policy">
      <section className="space-y-6">
        <h2 className="text-xl font-semibold text-white">Information Collection and Use</h2>
        <p className="text-white/80">
          We collect information to provide better services to our users and improve their gaming experience.
          This includes information you provide directly, such as your name and email address when you create
          an account, as well as information we collect automatically through your use of our services.
        </p>

        <h2 className="text-xl font-semibold text-white">Data Protection</h2>
        <p className="text-white/80">
          We implement appropriate technical and organizational measures to protect your personal data against
          unauthorized or unlawful processing, accidental loss, destruction, or damage.
        </p>

        <h2 className="text-xl font-semibold text-white">Your Rights</h2>
        <p className="text-white/80">
          You have the right to access, correct, or delete your personal data. You can also object to processing
          and request data portability. Contact us to exercise these rights.
        </p>
      </section>
    </LegalLayout>
  );
};