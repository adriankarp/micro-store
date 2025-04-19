import { useEffect, useRef } from "react";

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@micro-store/ui/components/dialog";

export function PrivacyModal({
  open,
  onOpenChange,
}: {
  open: boolean;
  onOpenChange: (v: boolean) => void;
}) {
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (open && scrollRef.current) {
      scrollRef.current.scrollTop = 0;
    }
  }, [open]);

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-2xl">
        <DialogHeader>
          <DialogTitle>Privacy Policy</DialogTitle>
        </DialogHeader>
        <div
          ref={scrollRef}
          className="max-h-[75vh] overflow-y-auto space-y-6 pr-2"
        >
          <section>
            <h3 className="text-lg font-semibold">1. Introduction</h3>
            <p>
              micro‑store (“we,” “us,” or “our”) is committed to protecting your
              privacy. This Privacy Policy explains how we collect, use, and
              share your information.
            </p>
          </section>

          <section>
            <h3 className="text-lg font-semibold">2. Information We Collect</h3>
            <ul className="list-disc list-inside space-y-2">
              <li>
                <strong>Personal Data:</strong> Name, email, shipping address,
                billing address, payment details (tokenized).
              </li>
              <li>
                <strong>Usage Data:</strong> IP address, browser type, pages
                visited, referring URLs.
              </li>
            </ul>
          </section>

          <section>
            <h3 className="text-lg font-semibold">
              3. How We Use Your Information
            </h3>
            <ul className="list-disc list-inside space-y-2">
              <li>Process and fulfill orders.</li>
              <li>
                Send transactional emails (order confirmations, shipping
                notices).
              </li>
              <li>
                Improve our site, personalize your experience, and for
                analytics.
              </li>
            </ul>
          </section>

          <section>
            <h3 className="text-lg font-semibold">4. Cookies & Tracking</h3>
            <p>
              We use cookies and similar technologies to enhance your
              experience, analyze site traffic, and for marketing. You can
              control cookies via your browser settings.
            </p>
          </section>

          <section>
            <h3 className="text-lg font-semibold">5. Sharing & Disclosure</h3>
            <ul className="list-disc list-inside space-y-2">
              <li>
                <strong>Service Providers:</strong> Shipping companies, payment
                processors, analytics providers.
              </li>
              <li>
                <strong>Legal Requirements:</strong> If required by law or to
                protect our rights.
              </li>
            </ul>
          </section>

          <section>
            <h3 className="text-lg font-semibold">6. Third‑Party Links</h3>
            <p>
              Our site may contain links to third‑party websites. We are not
              responsible for their privacy practices—please review their
              policies separately.
            </p>
          </section>

          <section>
            <h3 className="text-lg font-semibold">7. Data Security</h3>
            <p>
              We implement industry‑standard measures (SSL, encryption, access
              controls) to protect your data. However, no method is 100% secure.
            </p>
          </section>

          <section>
            <h3 className="text-lg font-semibold">8. Your Rights</h3>
            <ul className="list-disc list-inside space-y-2">
              <li>
                <strong>Access & Correction:</strong> View or update your
                account information.
              </li>
              <li>
                <strong>Deletion:</strong> Request deletion of your personal
                data (subject to legal obligations).
              </li>
              <li>
                <strong>Opt‑Out:</strong> Opt out of marketing communications at
                any time.
              </li>
            </ul>
          </section>

          <section>
            <h3 className="text-lg font-semibold">9. Children’s Privacy</h3>
            <p>
              Our services are not directed to children under 13. We do not
              knowingly collect data from children.
            </p>
          </section>

          <section>
            <h3 className="text-lg font-semibold">
              10. International Transfers
            </h3>
            <p>
              Your data may be transferred to and processed in countries with
              different data protection laws than your residence.
            </p>
          </section>

          <section>
            <h3 className="text-lg font-semibold">
              11. Changes to This Policy
            </h3>
            <p>
              We may revise this Privacy Policy. The updated version will be
              effective when posted.
            </p>
          </section>

          <section>
            <h3 className="text-lg font-semibold">12. Contact Information</h3>
            <p>
              For privacy inquiries, please email{" "}
              <a href="mailto:privacy@microstore.com" className="underline">
                privacy@microstore.com
              </a>{" "}
              or write to:
            </p>
            <address className="not-italic">
              micro‑store
              <br />
              [Address Line 1]
              <br />
              [City, State, ZIP]
            </address>
          </section>
        </div>
      </DialogContent>
    </Dialog>
  );
}
