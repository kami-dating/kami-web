import type { Metadata } from "next";
import Link from "next/link";
import {
  ContactLinks,
  LegalPage,
  LegalSection,
} from "../components/legal-page";

export const metadata: Metadata = {
  title: "Delete your data | Kami",
  description:
    "Kami doesn't store personal data yet. This page will explain how to request deletion of your data once accounts launch.",
};

export default function DeleteData() {
  return (
    <LegalPage
      title="Delete your data"
      intro="Kami doesn't have accounts yet, on the website or in the mobile app, so we aren't holding personal data about you right now."
    >
      <LegalSection title="What this page is for">
        <p>
          This is the address for asking us to delete the personal data we hold
          about you. When accounts launch, this page will explain how to make
          that request, and the mobile app and website will link here.
        </p>
      </LegalSection>

      <LegalSection title="What's stored today">
        <p>
          Nothing that needs deleting. The website only uses anonymous visit
          statistics that aren&rsquo;t linked to any person. You can read the
          details in our <Link href="/privacy">Privacy Policy</Link>.
        </p>
      </LegalSection>

      <LegalSection title="When accounts launch">
        <p>
          Before accounts open, we&rsquo;ll update this page with the exact
          steps for requesting deletion of your data, what gets deleted, and how
          long it takes. If you want to close your account entirely, see{" "}
          <Link href="/delete-account">Delete your account</Link>.
        </p>
      </LegalSection>

      <LegalSection title="Questions">
        <p>Need help or have a question? Reach us here:</p>
        <ContactLinks />
      </LegalSection>
    </LegalPage>
  );
}
