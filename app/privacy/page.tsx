import type { Metadata } from "next";
import Link from "next/link";
import {
  ContactLinks,
  LegalPage,
  LegalSection,
} from "../components/legal-page";

export const metadata: Metadata = {
  title: "Privacy Policy | Kami",
  description:
    "How Kami handles your information. The Kami website has no accounts and collects only anonymous visit statistics.",
};

export default function PrivacyPolicy() {
  return (
    <LegalPage
      title="Privacy Policy"
      intro="Kami is a community-built dating app for sapphic and WLW people. This policy explains what the Kami website does with your information today, and what we commit to before we ever collect more."
    >
      <LegalSection title="The short version">
        <ul>
          <li>The Kami website and app have no accounts yet.</li>
          <li>
            We don&rsquo;t ask you for your name, email, phone number, or any
            other personal details on this website.
          </li>
          <li>
            We measure visits to this website with anonymous statistics that
            aren&rsquo;t tied to you. The mobile app doesn&rsquo;t use them.
          </li>
          <li>We don&rsquo;t sell your information.</li>
        </ul>
      </LegalSection>

      <LegalSection title="What we collect on this website">
        <p>
          We use two tools from our hosting provider, Vercel, to understand how
          the site is used and how fast it loads.
        </p>
        <p>
          <strong className="font-semibold text-white">
            Visit statistics (Vercel Web Analytics).
          </strong>{" "}
          When you view a page, the tool records anonymous details such as the
          page address, the site you came from, your approximate location
          (country, region, or city), and your browser, operating system, and
          device type. According to Vercel, this doesn&rsquo;t use third-party
          cookies, isn&rsquo;t tied to any individual or IP address, and
          identifies visitors only by a temporary hash that is discarded after
          24 hours.
        </p>
        <p>
          <strong className="font-semibold text-white">
            Performance measurements (Vercel Speed Insights).
          </strong>{" "}
          Your browser reports how quickly pages load, along with the page
          route, network speed, browser, device type, operating system, and
          country. Vercel states that this data is anonymous and can&rsquo;t be
          used to follow a browsing session or identify you.
        </p>
        <p>
          <strong className="font-semibold text-white">
            Hosting information.
          </strong>{" "}
          Like any website, ours is delivered by a hosting provider, and it may
          process technical information such as your IP address to deliver the
          site and keep it secure. We don&rsquo;t use that information to
          identify you.
        </p>
      </LegalSection>

      <LegalSection title="What we don't collect">
        <ul>
          <li>No accounts, sign-ups, or forms on this website.</li>
          <li>
            No government ID, biometric data, or face scans. We will never ask
            for them.
          </li>
          <li>We don&rsquo;t set our own cookies on this website.</li>
          <li>No advertising or cross-site tracking.</li>
        </ul>
      </LegalSection>

      <LegalSection title="The mobile app">
        <p>
          The Kami mobile app is at an early stage. The analytics and
          performance tools described above apply to this website only. The app
          doesn&rsquo;t include analytics or crash-reporting tools, and it
          doesn&rsquo;t collect personal information. If you install it from an
          app store, that store&rsquo;s own privacy policy applies to your
          download.
        </p>
        <p>
          We&rsquo;ll update this section before the app collects anything.
        </p>
      </LegalSection>

      <LegalSection title="Links to other services">
        <p>
          This website links to our community spaces on Discord and Reddit.
          Those services are run by other companies and have their own privacy
          policies. We don&rsquo;t control what they collect once you leave this
          site.
        </p>
      </LegalSection>

      <LegalSection title="Who Kami is for">
        <p>
          Kami is intended for adults. This website isn&rsquo;t directed at
          anyone under 18.
        </p>
      </LegalSection>

      <LegalSection title="When accounts launch">
        <p>
          We&rsquo;re building Kami in the open, and accounts will come later.
          Before we collect any personal information, we&rsquo;ll update this
          policy to explain what we collect, why, how long we keep it, and how
          you can delete it. We will never ask for government ID or biometrics.
        </p>
        <p>
          When those features exist, you&rsquo;ll be able to use these pages to
          delete your data:{" "}
          <Link href="/delete-account">Delete your account</Link> and{" "}
          <Link href="/delete-data">Delete your data</Link>.
        </p>
      </LegalSection>

      <LegalSection title="Your choices">
        <p>
          Because we don&rsquo;t hold personal information about you, there is
          currently nothing to access, correct, or delete. If you would still
          prefer not to be measured by analytics, you can block those scripts
          with your browser&rsquo;s privacy settings or an extension.
        </p>
      </LegalSection>

      <LegalSection title="Changes to this policy">
        <p>
          If we change this policy, we&rsquo;ll post the new version on this
          page and update the date at the top.
        </p>
      </LegalSection>

      <LegalSection title="Contact us">
        <p>
          Questions about privacy? The best way to reach us right now is through
          our community spaces:
        </p>
        <ContactLinks />
      </LegalSection>
    </LegalPage>
  );
}
