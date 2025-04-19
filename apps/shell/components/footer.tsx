"use client";

import { useState } from "react";

import { PrivacyModal } from "./modals/privacy-modal";
import { TermsModal } from "./modals/terms-modal";

export function Footer() {
  const [termsOpen, setTermsOpen] = useState(false);
  const [privacyOpen, setPrivacyOpen] = useState(false);

  return (
    <>
      <div className="text-muted-foreground *:[a]:hover:text-primary text-center text-xs text-balance *:[a]:underline *:[a]:underline-offset-4">
        By clicking continue, you agree to our{" "}
        <a
          href="#"
          onClick={(e) => {
            e.preventDefault();
            setTermsOpen(true);
          }}
        >
          Terms of Service
        </a>{" "}
        and{" "}
        <a
          href="#"
          onClick={(e) => {
            e.preventDefault();
            setPrivacyOpen(true);
          }}
        >
          Privacy Policy
        </a>
        .
      </div>

      <TermsModal open={termsOpen} onOpenChange={setTermsOpen} />
      <PrivacyModal open={privacyOpen} onOpenChange={setPrivacyOpen} />
    </>
  );
}
