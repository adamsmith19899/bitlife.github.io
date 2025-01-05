import React from 'react';
import { LegalLayout } from './components/LegalLayout';

export const Terms: React.FC = () => {
  return (
    <LegalLayout title="Terms of Service">
      <section className="space-y-6">
        <h2 className="text-xl font-semibold text-white">Acceptance of Terms</h2>
        <p className="text-white/80">
          By accessing and using our services, you agree to be bound by these Terms of Service and all
          applicable laws and regulations. If you do not agree with any of these terms, you are prohibited
          from using or accessing our services.
        </p>

        <h2 className="text-xl font-semibold text-white">User Accounts</h2>
        <p className="text-white/80">
          You are responsible for maintaining the confidentiality of your account and password. You agree
          to accept responsibility for all activities that occur under your account.
        </p>

        <h2 className="text-xl font-semibold text-white">Content Guidelines</h2>
        <p className="text-white/80">
          Users must not post content that is illegal, offensive, or violates the rights of others. We
          reserve the right to remove any content that violates these terms.
        </p>
      </section>
    </LegalLayout>
  );
};