import { Seo, breadcrumb, faqPage, article } from "@/components/Seo";
import { GuideLayout, Faq } from "@/components/GuideLayout";

const PATH = "/aml-compliance-football-clubs";
const TITLE = "AML and KYC compliance for professional football clubs";
const META_TITLE = "AML & KYC compliance for football clubs | Trustify Sports";
const DESCRIPTION =
  "Professional football clubs are obliged entities under the EU AML Regulation from 10 July 2029. Which transactions are covered, the KYC checks per counterparty, and how to prepare.";
const PUBLISHED = "2026-11-11";
const MODIFIED = "2026-11-11";

// Copy rule (CLAUDE.md): only regulatory statements Sander has given or approved.
const faqs = [
  {
    q: "Is my football club an obliged entity under the AMLR?",
    a: "Professional football clubs are obliged entities under the EU Anti-Money Laundering Regulation from 10 July 2029, for four transaction types: with investors; with sponsors and advertisers; with football agents and other intermediaries; and player transfers.",
  },
  {
    q: "Do ticketing and merchandise fall under the AML rules?",
    a: "No. Ticketing and matchday income, merchandise, broadcast and media rights, and ordinary supplier and staff payments are outside the scope.",
  },
  {
    q: "When does a club need to carry out customer due diligence?",
    a: "For every business relationship within the four transaction types, and for one-off transactions of €10,000 or more, counted across linked payments. Ownership must be traced to the beneficial owner: anyone with 25% or more, plus a test of who actually controls the counterparty.",
  },
  {
    q: "Can a small club be exempted?",
    a: "Possibly. EU countries may exempt, fully or partly, top-division clubs whose turnover stayed below €5 million in each of the two previous years, and lower-division clubs, where the risk is shown to be low. It is a national choice, not automatic.",
  },
  {
    q: "Who supervises football clubs for AML?",
    a: "The national AML supervisor in the club's country. AMLA, the EU Anti-Money Laundering Authority, sets technical standards and coordinates supervision, but does not supervise clubs day to day.",
  },
  {
    q: "Does Trustify Sports file suspicious-transaction reports for the club?",
    a: "No. Trustify Sports prepares the file and a pre-filled report for the club to review. The club files it with its national Financial Intelligence Unit (FIU).",
  },
];

const toc = [
  { id: "in-scope", label: "Which transactions are covered" },
  { id: "kyc-per-counterparty", label: "KYC per counterparty" },
  { id: "out-of-scope", label: "What is out of scope" },
  { id: "what-supervisors-ask", label: "What supervisors and banks will ask" },
  { id: "exemption", label: "Can smaller clubs be exempted?" },
  { id: "how-trustify-helps", label: "How Trustify Sports helps" },
  { id: "faq", label: "Frequently asked questions" },
];

const AmlFootballClubs = () => (
  <GuideLayout
    path={PATH}
    breadcrumbName="AML compliance for football clubs"
    kicker="For football clubs"
    title={TITLE}
    lead="From 10 July 2029, professional football clubs are obliged entities under the EU Anti-Money Laundering Regulation (AMLR) for four types of transaction. Here is what that means for your investors, sponsors, intermediaries and transfers, and what your supervisor will expect to see."
    updated="11 November 2026"
    toc={toc}
  >
    <Seo
      title={META_TITLE}
      description={DESCRIPTION}
      path={PATH}
      type="article"
      jsonLd={[article(TITLE, DESCRIPTION, PATH, PUBLISHED, MODIFIED), breadcrumb("AML compliance for football clubs", PATH), faqPage(faqs)]}
    />

    <h2 id="in-scope">Which club transactions are covered</h2>
    <p>
      Under Regulation (EU) 2024/1624, a professional football club is an obliged entity only for four types of
      transaction. For each, the club must know who it is dealing with, assess the risk, monitor the money and keep the
      evidence.
    </p>
    <ol>
      <li><strong>Investors</strong>: anyone buying into or financing the club.</li>
      <li><strong>Sponsors and advertisers</strong>: commercial partners paying the club.</li>
      <li><strong>Football agents and other intermediaries</strong>: whoever is paid in connection with a deal.</li>
      <li><strong>Player transfers</strong>: the buying and selling clubs and the flows around a transfer.</li>
    </ol>

    <h2 id="kyc-per-counterparty">KYC per counterparty</h2>
    <p>
      A check applies to every business relationship within these four types, and to one-off transactions of €10,000
      or more, counted across linked payments. What that looks like in practice:
    </p>
    <table>
      <thead>
        <tr><th scope="col">Counterparty</th><th scope="col">What the club needs to establish</th></tr>
      </thead>
      <tbody>
        <tr><td>Investor</td><td>Identity, the beneficial owners behind the investment vehicle (25% or more, plus who actually controls it), sanctions and PEP status, and the source of the funds.</td></tr>
        <tr><td>Sponsor or advertiser</td><td>Who owns and controls the sponsor, sanctions, PEP and adverse-media screening, and whether the deal value is in line with the market.</td></tr>
        <tr><td>Agent or intermediary</td><td>Identity and licence, beneficial ownership of the agency, screening, and whether the fee and the payment route are what the contract says.</td></tr>
        <tr><td>Transfer counterparty</td><td>Who owns and controls the other club, where payments come from and go to, and flags such as third-party payers, offshore routing or bridge transfers.</td></tr>
      </tbody>
    </table>
    <p>
      High-risk relationships need enhanced due diligence, and suspicious transactions must be reported to the national
      Financial Intelligence Unit (FIU). The full list of duties is in our{" "}
      <a href="/amlr-football-guide#six-duties">guide to the AMLR for football</a>.
    </p>

    <h2 id="out-of-scope">What is out of scope</h2>
    <p>
      Ticketing and matchday income, merchandise, broadcast and media rights, and ordinary supplier and staff payments
      are outside the AMLR scope for clubs. Football associations and leagues are not obliged entities.
    </p>

    <h2 id="what-supervisors-ask">What supervisors and banks will ask</h2>
    <p>
      Supervisors assess the file, not the intention. Your national AML supervisor will expect a written business-wide
      risk assessment, policies and procedures, an accountable person, and a record of every check, decision and
      approval. Under AMLA's draft risk methodology, a club would be rated on 39 inherent-risk and 31 control data
      points, which together set how often and how deeply the supervisor engages. Fines for serious breaches can reach
      €1 million or more.
    </p>
    <p>
      The questions start earlier than 2029. From 10 July 2027 the AMLR applies to banks and other financial firms, and
      new beneficial-ownership rules take effect: expect due-diligence questions from the banks that finance you.
      Incomplete ownership disclosure already carries sporting consequences under UEFA licensing.
    </p>

    <h2 id="exemption">Can smaller clubs be exempted?</h2>
    <p>
      EU countries may exempt, fully or partly, top-division clubs whose turnover stayed below €5 million in each of the
      two previous years, and lower-division clubs, where the risk is shown to be low. It is a national choice, not
      automatic: until your country decides, plan as if the obligations apply.
    </p>

    <h2 id="how-trustify-helps">How Trustify Sports helps clubs</h2>
    <p>
      Trustify Sports is a one-stop compliance solution: compliance experts who guide your implementation, and a
      platform built for football that runs the daily work.
    </p>
    <ul>
      <li><strong>Assess and design.</strong> We map your exposure across the four transaction types and write your risk assessment, policies and procedures.</li>
      <li><strong>Verify.</strong> Beneficial owners of clubs, players, agents, sponsors and investors, with sanctions, PEP, adverse-media and licence checks.</li>
      <li><strong>Monitor.</strong> A live risk score per relationship, with flags for off-market fees, third-party payers and bridge transfers.</li>
      <li><strong>Evidence.</strong> An audit trail per transaction, a pre-filled suspicious-transaction report for you to review and file, and your business-wide risk assessment.</li>
    </ul>
    <p>
      Trustify prepares the file; your club files. Trustify supports compliance but does not provide legal advice.
    </p>

    <h2 id="faq">Frequently asked questions</h2>
    <Faq items={faqs} />
  </GuideLayout>
);

export default AmlFootballClubs;
