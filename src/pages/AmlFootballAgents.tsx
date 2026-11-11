import { Seo, breadcrumb, faqPage, article } from "@/components/Seo";
import { GuideLayout, Faq } from "@/components/GuideLayout";

const PATH = "/aml-compliance-football-agents";
const TITLE = "AML compliance for football agents under the EU AML Regulation";
const META_TITLE = "AML compliance for football agents (AMLR 2029) | Trustify Sports";
const DESCRIPTION =
  "Every football agent is an obliged entity under the EU AML Regulation from 10 July 2029, regardless of size. What is covered, the duties, and how agencies can prepare.";
const PUBLISHED = "2026-11-11";
const MODIFIED = "2026-11-11";

// Copy rule (CLAUDE.md): only regulatory statements Sander has given or approved.
const faqs = [
  {
    q: "Do the EU anti-money laundering rules apply to football agents?",
    a: "Yes. From 10 July 2029 every football agent is an obliged entity under the EU Anti-Money Laundering Regulation, Regulation (EU) 2024/1624.",
  },
  {
    q: "Is there an exemption for small or one-person agencies?",
    a: "No. Every football agent is an obliged entity, regardless of size and with no exemption. A one-person agency carries the same obligations, applied proportionately to its risk.",
  },
  {
    q: "Which agent activities are covered?",
    a: "All client business: representation contracts and mandates, commissions, transfers and sub-agent arrangements, whoever pays the fee. Running the agency itself, scouting before a mandate, the agent's own media income and personal transactions are outside the scope.",
  },
  {
    q: "Who supervises football agents for AML?",
    a: "The national AML supervisor in the agent's country. AMLA, the EU Anti-Money Laundering Authority, sets technical standards and coordinates supervision.",
  },
  {
    q: "Who files a suspicious-transaction report?",
    a: "The agent, with the national Financial Intelligence Unit (FIU). Trustify Sports prepares the file and a pre-filled report for the agent to review, but never files on a client's behalf.",
  },
];

const toc = [
  { id: "every-agent", label: "Every agent is in scope" },
  { id: "what-is-covered", label: "What is covered" },
  { id: "duties", label: "What an agency must do" },
  { id: "proportionate", label: "Proportionate for small agencies" },
  { id: "pro-agent", label: "Developed with the agent industry" },
  { id: "how-trustify-helps", label: "How Trustify Sports helps" },
  { id: "faq", label: "Frequently asked questions" },
];

const AmlFootballAgents = () => (
  <GuideLayout
    path={PATH}
    breadcrumbName="AML compliance for football agents"
    kicker="For football agents"
    title={TITLE}
    lead="From 10 July 2029, every football agent is an obliged entity under the EU Anti-Money Laundering Regulation, regardless of size and with no exemption. This guide explains what that covers and how an agency can be ready in time."
    updated="11 November 2026"
    toc={toc}
  >
    <Seo
      title={META_TITLE}
      description={DESCRIPTION}
      path={PATH}
      type="article"
      jsonLd={[article(TITLE, DESCRIPTION, PATH, PUBLISHED, MODIFIED), breadcrumb("AML compliance for football agents", PATH), faqPage(faqs)]}
    />

    <h2 id="every-agent">Every football agent is in scope</h2>
    <p>
      Regulation (EU) 2024/1624 names football agents as obliged entities: the same legal category as banks and
      payment providers. Unlike clubs, agents are covered for all their client business, and there is no size threshold:
      from the solo operator to the global agency.
    </p>

    <h2 id="what-is-covered">What is covered, and what is not</h2>
    <table>
      <thead>
        <tr><th scope="col">Covered</th><th scope="col">Not covered</th></tr>
      </thead>
      <tbody>
        <tr><td>Representation contracts and mandates</td><td>Running the agency itself</td></tr>
        <tr><td>Commissions, whoever pays the fee</td><td>Scouting before a mandate</td></tr>
        <tr><td>Transfers</td><td>The agent's own media income</td></tr>
        <tr><td>Sub-agent arrangements</td><td>Personal transactions</td></tr>
      </tbody>
    </table>

    <h2 id="duties">What an agency must do</h2>
    <ol>
      <li><strong>Know your client and counterparties</strong>, down to the ultimate beneficial owner.</li>
      <li><strong>Screen every relationship</strong> for sanctions, politically exposed persons (PEP) and adverse media before a mandate is signed or money moves.</li>
      <li><strong>Assess the risk</strong> of each relationship and apply enhanced due diligence where it is high.</li>
      <li><strong>Monitor the money</strong>: third-party payments, offshore routing and fees out of line with the market.</li>
      <li><strong>Report suspicion</strong> to the national Financial Intelligence Unit (FIU).</li>
      <li><strong>Keep an audit trail</strong> of every check, decision and approval.</li>
    </ol>
    <p>
      A check applies to every business relationship, and to one-off transactions of €10,000 or more, counted across
      linked payments. The agency also needs a written risk assessment, policies and procedures, and a person accountable
      for compliance. Read the full picture in our <a href="/amlr-football-guide">guide to the AMLR for football</a>.
    </p>

    <h2 id="proportionate">Proportionate for small agencies</h2>
    <p>
      A one-person agency carries the same obligations as a large one, applied proportionately to its risk. AMLA's draft
      risk methodology reflects this: a standard agency would be rated on 24 inherent-risk and 31 control data points,
      while an agency with fewer than 5 employees and less than €600,000 turnover would report a reduced set of 17
      inherent-risk data points. The methodology is still a draft.
    </p>

    <h2 id="pro-agent">Developed with the agent industry</h2>
    <p>
      Trustify Sports is an official partner of Pro Agent, the industry association for football player agents. Like the rest of
      our platform, our approach for agencies was developed with clubs and agents, for the football industry.
    </p>

    <h2 id="how-trustify-helps">How Trustify Sports helps agents</h2>
    <ul>
      <li>AML risk assessment, policies and procedures, written with our compliance experts.</li>
      <li>Client and counterparty due diligence, with beneficial-ownership, sanctions, PEP and adverse-media checks.</li>
      <li>Monitoring and a reporting workflow: Trustify prepares the file, the agent files with the FIU.</li>
      <li>Readiness for 10 July 2029, and ongoing support as the rules evolve.</li>
    </ul>
    <p>Trustify supports compliance but does not provide legal advice.</p>

    <h2 id="faq">Frequently asked questions</h2>
    <Faq items={faqs} />
  </GuideLayout>
);

export default AmlFootballAgents;
