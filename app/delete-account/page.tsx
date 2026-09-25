import type { Metadata } from "next";
import Link from "next/link";
import {
  ContactLinks,
  LegalPage,
  LegalSection,
} from "../components/legal-page";

export const metadata: Metadata = {
  title: "Delete your account | Kami",
  description:
    "Kami doesn't have accounts yet. This page will explain how to delete your account once they launch.",
};

export default function DeleteAccount() {
  return (
    <LegalPage
      title="Delete your account"
      intro="Kami doesn't have accounts yet, on the website or in the mobile app, so there is no account to delete right now."
    >
      <LegalSection title="What this page is for">
        <p>
          This is the address for deleting your Kami account. When accounts
          launch, this page will be where you find out how to delete yours, and
          the mobile app and website will link here.
        </p>
      </LegalSection>

      <LegalSection title="What's stored today">
        <p>
          Nothing that needs deleting. We don&rsquo;t collect personal
          information, and the anonymous visit statistics we use aren&rsquo;t
          linked to any person. You can read the details in our{" "}
          <Link href="/privacy">Privacy Policy</Link>.
        </p>
      </LegalSection>

      <LegalSection title="When accounts launch">
        <p>
          Before accounts open, we&rsquo;ll update this page with the exact
          steps for deleting your account, what gets deleted, and how long it
          takes. If you only want your data removed, see{" "}
          <Link href="/delete-data">Delete your data</Link>.
        </p>
      </LegalSection>

      <LegalSection title="Questions">
        <p>Need help or have a question? Reach us here:</p>
        <ContactLinks />
      </LegalSection>
    </LegalPage>
  );
}
