import { Community } from "./components/community";
import { Hero } from "./components/hero";
import { PageShell } from "./components/page-shell";
import { Safety } from "./components/safety";

export default function Home() {
  return (
    <PageShell>
      <Hero />
      <Safety />
      <Community />
    </PageShell>
  );
}
