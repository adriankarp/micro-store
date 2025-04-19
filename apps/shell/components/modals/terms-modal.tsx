import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@micro-store/ui/components/dialog";
import { useEffect, useRef } from "react";

export function TermsModal({
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
          <DialogTitle>Terms of Service</DialogTitle>
        </DialogHeader>
        <div
          ref={scrollRef}
          className="max-h-[75vh] overflow-y-auto space-y-6 pr-2"
        >
          <section>
            <h3 className="text-lg font-semibold">1. Introduction</h3>
            <p>
              Welcome to micro‑store! These Terms of Service (“Terms”) govern
              your use of our website and services. By accessing or using our
              platform, you agree to be bound by these Terms.
            </p>
          </section>

          <section>
            <h3 className="text-lg font-semibold">2. Eligibility</h3>
            <p>
              You must be at least 18 years old to use this site. By using our
              services, you represent that you meet this requirement.
            </p>
          </section>

          <section>
            <h3 className="text-lg font-semibold">3. Account Registration</h3>
            <ul className="list-disc list-inside space-y-2">
              <li>
                You may be required to create an account to make purchases.
              </li>
              <li>You agree to provide accurate and up‑to‑date information.</li>
              <li>
                You are responsible for safeguarding your password and all
                activities under your account.
              </li>
            </ul>
          </section>

          <section>
            <h3 className="text-lg font-semibold">4. Products & Pricing</h3>
            <p>
              We strive to display product information and prices accurately,
              but errors may occur. If an item’s price is incorrect, we reserve
              the right to cancel the order and refund any amounts paid.
            </p>
          </section>

          <section>
            <h3 className="text-lg font-semibold">5. Orders & Payment</h3>
            <ul className="list-disc list-inside space-y-2">
              <li>All orders are subject to acceptance and availability.</li>
              <li>
                Payment is processed through secure third‑party gateways; we do
                not store your full payment information.
              </li>
            </ul>
          </section>

          <section>
            <h3 className="text-lg font-semibold">6. Shipping & Delivery</h3>
            <p>
              Estimated delivery times are provided for reference and are not
              guaranteed. Risk of loss passes to you upon our delivery to the
              carrier.
            </p>
          </section>

          <section>
            <h3 className="text-lg font-semibold">7. Returns & Refunds</h3>
            <p>
              Please refer to our Returns Policy for details on eligibility,
              timeframes, and procedures. Refunds will be processed to the
              original payment method within 7–10 business days after we receive
              and inspect returned items.
            </p>
          </section>

          <section>
            <h3 className="text-lg font-semibold">8. Intellectual Property</h3>
            <p>
              All content on this site (text, graphics, logos, images, software)
              is owned or licensed by micro‑store and protected by copyright,
              trademark, and other laws.
            </p>
          </section>

          <section>
            <h3 className="text-lg font-semibold">9. Prohibited Uses</h3>
            <ul className="list-disc list-inside space-y-2">
              <li>Violating any applicable laws or regulations.</li>
              <li>Infringing intellectual property rights.</li>
              <li>Transmitting harmful code or spam.</li>
              <li>
                Engaging in any activity that disrupts the site’s functionality.
              </li>
            </ul>
          </section>

          <section>
            <h3 className="text-lg font-semibold">
              10. Limitation of Liability
            </h3>
            <p>
              To the maximum extent permitted by law, micro‑store and its
              affiliates will not be liable for any indirect, incidental,
              special, or consequential damages arising from your use of the
              site.
            </p>
          </section>

          <section>
            <h3 className="text-lg font-semibold">11. Disclaimers</h3>
            <p>
              The site and its content are provided “as is” and “as available”
              without warranties of any kind. We disclaim all implied
              warranties, including merchantability and fitness for a particular
              purpose.
            </p>
          </section>

          <section>
            <h3 className="text-lg font-semibold">12. Governing Law</h3>
            <p>
              These Terms are governed by the laws of [Jurisdiction], without
              regard to conflict of laws principles.
            </p>
          </section>

          <section>
            <h3 className="text-lg font-semibold">
              13. Changes to These Terms
            </h3>
            <p>
              We may update these Terms from time to time. The revised version
              will be effective when posted, and continued use constitutes
              acceptance.
            </p>
          </section>

          <section>
            <h3 className="text-lg font-semibold">14. Contact Us</h3>
            <p>
              If you have questions about these Terms, please contact us at{" "}
              <a href="mailto:support@microstore.com" className="underline">
                support@microstore.com
              </a>
              .
            </p>
          </section>
        </div>
      </DialogContent>
    </Dialog>
  );
}
