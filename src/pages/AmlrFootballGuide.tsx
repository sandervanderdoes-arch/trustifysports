import { Seo, breadcrumb, faqPage, article } from "@/components/Seo";
import { GuideLayout, Faq } from "@/components/GuideLayout";

const PATH = "/amlr-football-guide";
const TITLE = "The EU AML Regulation and football: what clubs and agents must do by 10 July 2029";
const META_TITLE = "EU AML Regulation for football: 2029 guide for clubs and agents";
const DESCRIPTION =
  "What the EU Anti-Money Laundering Regulation (AMLR) means for football clubs and agents from 10 July 2029: scope, the six duties, supervision, timeline and how to prepare.";
const PUBLISHED = "2026-11-11";
const MODIFIED = "2026-11-11";

// Copy rule (CLAUDE.md): only regulatory statements Sander has given or approved.
const faqs = [
  {
    q: "When do the EU anti-money laundering rules apply to football clubs and agents?",
    a: "From 10 July 2029. On that date professional football clubs and football agents become obliged entities under the EU Anti-Money Laundering Regulation, Regulation (EU) 2024/1624. The regulation already applies to banks and other existing obliged entities from 10 July 2027.",
  },
  {
    q: "Are football agents obliged entities under the AMLR?",
    a: "Yes. Every football agent is an obliged entity, regardless of size and with no exemption, for all their client business: mandates, commissions, transfers and sub-agent arrangements, whoever pays the fee.",
  },
  {
    q: "Which transactions of a football club are covered?",
    a: "Four types only: transactions with investors; with sponsors and advertisers; with football agents and other intermediaries; and player transfers. Ticketing, merchandise, media rights and ordinary supplier and staff payments are outside the scope.",
  },
  {
    q: "Does AMLA supervise football clubs?",
    a: "No. AMLA, the EU Anti-Money Laundering Authority, sets technical standards and coordinates supervision. Clubs and agents are supervised day to day by their national AML supervisor.",
  },
  {
    q: "Are football associations and leagues covered?",
    a: "No. Football associations and leagues are not obliged entities under the AMLR.",
  },
  {
    q: "Can smaller clubs be exempted?",
    a: "Possibly, but not automatically. EU countries may exempt, fully or partly, top-division clubs whose turnover stayed below €5 million in each of the two previous years, and lower-division clubs, where the risk is shown to be low. It is a national choice, and agents have no such exemption.",
  },
  {
    q: "What happens if a club or agent does not comply?",
    a: "National supervisors can impose sanctions. Fines for serious breaches can reach €1 million or more, alongside reputational damage.",
  },
  {
    q: "Who files a suspicious-transaction report?",
    a: "The club or agent itself, with its national Financial Intelligence Unit (FIU). Trustify Sports prepares the file and the report, but never files on a client's behalf.",
  },
];

const toc = [
  { id: "key-facts", label: "Key facts at a glance" },
  { id: "who-is-in-scope", label: "Who is in scope" },
  { id: "six-duties", label: "The six duties" },
  { id: "when-a-check-applies", label: "When a check applies" },
  { id: "supervision", label: "Supervision and sanctions" },
  { id: "timeline", label: "Timeline to 2029" },
  { id: "how-to-prepare", label: "How to prepare" },
  { id: "beyond-the-eu", label: "Beyond the EU" },
  { id: "faq", label: "Frequently asked questions" },
];

const AmlrFootballGuide = () => (
  <GuideLayout
    path={PATH}
    breadcrumbName="AMLR guide for football"
    kicker="Guide · EU AML Regulation"
    title={TITLE}
    lead="From 10 July 2029, professional football clubs and football agents become obliged entities under the EU Anti-Money Laundering Regulation. This guide explains who is covered, what you must prove to a supervisor, and how to be ready in time."
    updated="11 November 2026"
    toc={toc}
  >
    <Seo
      title={META_TITLE}
      description={DESCRIPTION}
      path={PATH}
      type="article"
      jsonLd={[article(TITLE, DESCRIPTION, PATH, PUBLISHED, MODIFIED), breadcrumb("AMLR guide for football", PATH), faqPage(faqs)]}
    />

    <h2 id="key-facts">Key facts at a glance</h2>
    <table>
      <tbody>
        <tr><th scope="row">The law</th><td>The EU Anti-Money Laundering Regulation (AMLR), <a href="https://eur-lex.europa.eu/eli/reg/2024/1624/oj" target="_blank" rel="noopener">Regulation (EU) 2024/1624</a>, published in June 2024.</td></tr>
        <tr><th scope="row">Applies to football from</th><td>10 July 2029.</td></tr>
        <tr><th scope="row">Who</th><td>Professional football clubs (for four transaction types) and every football agent.</td></tr>
        <tr><th scope="row">Not covered</th><td>Football associations and leagues.</td></tr>
        <tr><th scope="row">Supervised by</th><td>National AML supervisors. AMLA, the EU authority, sets the technical standards.</td></tr>
        <tr><th scope="row">Sanctions</th><td>Fines for serious breaches can reach €1 million or more.</td></tr>
      </tbody>
    </table>

    <h2 id="who-is-in-scope">Who is in scope</h2>
    <p>
      The AMLR names professional football clubs and football agents as <strong>obliged entities</strong>: the same
      legal category as banks and payment providers. In practice this means customer due diligence, beneficial-ownership
      checks, monitoring and suspicious-transaction reporting now apply directly to football.
    </p>
    <h3>Professional football clubs</h3>
    <p>Clubs are obliged only for four types of transaction:</p>
    <ul>
      <li>transactions with <strong>investors</strong>;</li>
      <li>transactions with <strong>sponsors and advertisers</strong>;</li>
      <li>transactions with <strong>football agents and other intermediaries</strong>;</li>
      <li><strong>player transfers</strong>.</li>
    </ul>
    <p>
      Ticketing and matchday income, merchandise, broadcast and media rights, and ordinary supplier and staff payments
      are outside the scope. Read more in our guide to{" "}
      <a href="/aml-compliance-football-clubs">AML and KYC compliance for football clubs</a>.
    </p>
    <h3>Football agents</h3>
    <p>
      Every football agent is an obliged entity, regardless of size and with no exemption: from the solo operator to the
      global agency. The obligations cover all client business, including representation contracts, commissions,
      transfers and sub-agent arrangements, whoever pays the fee. Running the agency itself, scouting before a mandate,
      the agent's own media income and personal transactions are outside the scope. See{" "}
      <a href="/aml-compliance-football-agents">AML compliance for football agents</a>.
    </p>
    <h3>Can smaller clubs be exempted?</h3>
    <p>
      EU countries may exempt, fully or partly, top-division clubs whose turnover stayed below €5 million in each of the
      two previous years, and lower-division clubs, where the risk is shown to be low. The exemption is a national
      choice, not automatic, and there is no equivalent for agents.
    </p>
    <h3>Who is not covered</h3>
    <p>Football associations and leagues are not obliged entities under the AMLR.</p>

    <h2 id="six-duties">The six duties clubs and agents must prove</h2>
    <ol>
      <li><strong>Know your counterparty.</strong> Verify every client and counterparty down to the ultimate beneficial owner.</li>
      <li><strong>Screen every relationship.</strong> Sanctions, politically exposed persons (PEP) and adverse-media checks before a mandate is signed or money moves.</li>
      <li><strong>Assess and score the risk.</strong> Rate each relationship and apply enhanced due diligence where the risk is high.</li>
      <li><strong>Monitor the money.</strong> Flag offshore routing, third-party payments, cash over €10,000 and fees that are out of line with the market.</li>
      <li><strong>Report suspicion.</strong> File a suspicious-transaction report with the national Financial Intelligence Unit (FIU), with the evidence behind it.</li>
      <li><strong>Keep an audit trail.</strong> Log every check, decision and approval, retain the records and produce them on request.</li>
    </ol>
    <p>
      Underneath all six sit governance duties: an accountable board member or compliance officer, a written risk
      assessment and policies, and training and periodic review.
    </p>

    <h2 id="when-a-check-applies">When a check applies</h2>
    <p>
      Customer due diligence is triggered by a <strong>business relationship</strong>, or by a <strong>one-off transaction of
      €10,000 or more</strong>, counted across linked payments. Ownership must be traced to the beneficial owner: anyone
      holding 25% or more, plus a test of who actually controls the counterparty.
    </p>
    <p>
      For football this reaches well beyond the transfer window: a new shirt sponsor, an investor buying a minority stake,
      an intermediary on a loan deal and a sub-agent sharing a fee all need a documented check.
    </p>

    <h2 id="supervision">Supervision and sanctions</h2>
    <p>
      Clubs and agents are supervised by their <strong>national AML supervisor</strong>. AMLA, the EU Anti-Money Laundering
      Authority in Frankfurt, has been operational since July 2025. It sets the technical standards and coordinates
      supervision, but it does not supervise clubs day to day.
    </p>
    <p>
      Supervisors assess the file, not the intention. Under AMLA's draft methodology, a supervisor combines an entity's
      inherent risk with the quality of its controls into a residual risk rating, from low to high, which sets how often
      and how deeply it engages. Fines for serious breaches can reach €1 million or more.
    </p>

    <h2 id="timeline">Timeline to 10 July 2029</h2>
    <table>
      <tbody>
        <tr><th scope="row">June 2024</th><td>The EU AML package, including the AMLR, is published.</td></tr>
        <tr><th scope="row">July 2025</th><td>AMLA becomes operational in Frankfurt.</td></tr>
        <tr><th scope="row">2026</th><td>AMLA works on the technical standards. In October 2026 it sent its final draft standards on customer due diligence to the European Commission, and it has consulted on how supervisors will rate the risk of clubs and agents.</td></tr>
        <tr><th scope="row">10 July 2027</th><td>The AMLR applies to banks, funds, payment providers and other existing obliged entities, and new beneficial-ownership rules take effect. Expect due-diligence questions from the banks that finance you.</td></tr>
        <tr><th scope="row">2028 (recommended)</th><td>Map your processes, configure your system and test it on past deals.</td></tr>
        <tr><th scope="row">January 2029 (recommended)</th><td>Run the system alongside your current processes, so your first assessed year is fully on record.</td></tr>
        <tr><th scope="row">10 July 2029</th><td>Obligations apply to professional football clubs and football agents.</td></tr>
      </tbody>
    </table>

    <h2 id="how-to-prepare">How to prepare</h2>
    <p>
      Building and evidencing a compliance programme takes most organisations 18 to 24 months, and records cannot be
      backfilled. A practical sequence:
    </p>
    <ol>
      <li>Appoint the person accountable for AML compliance and secure a board mandate.</li>
      <li>Map your exposure: the four transaction types for a club, all client business for an agent.</li>
      <li>Write your business-wide risk assessment, policies and procedures.</li>
      <li>Set up due diligence and screening for every counterparty and beneficial owner.</li>
      <li>Set up transaction monitoring and a reporting workflow for suspicious transactions.</li>
      <li>Test it on past deals in 2028, then run it live from January 2029.</li>
    </ol>
    <p>
      Trustify Sports takes clubs and agents through these steps: our compliance experts assess, design and operate the
      programme with you, and our platform runs the daily checks. See <a href="/#how">how we help</a>.
    </p>

    <h2 id="beyond-the-eu">Beyond the EU</h2>
    <p>
      Belgium has applied anti-money laundering rules to professional football clubs since 2021. In England, the
      Independent Football Regulator's owners' test is already in force, and in September 2026 the UK government
      announced a consultation on extending AML rules to clubs and agents.
    </p>

    <h2 id="faq">Frequently asked questions</h2>
    <Faq items={faqs} />

    <h2 id="sources">Sources</h2>
    <ul>
      <li><a href="https://eur-lex.europa.eu/eli/reg/2024/1624/oj" target="_blank" rel="noopener">Regulation (EU) 2024/1624 (AMLR), EUR-Lex</a></li>
      <li><a href="https://www.amla.europa.eu/" target="_blank" rel="noopener">EU Anti-Money Laundering Authority (AMLA)</a></li>
    </ul>
  </GuideLayout>
);

export default AmlrFootballGuide;
