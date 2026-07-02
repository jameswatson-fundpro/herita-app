export type Block =
  | { type: "p"; html: string }
  | { type: "h2"; text: string }
  | { type: "ul"; items: string[] }
  | { type: "callout"; html: string }
  | { type: "table"; rows: [string, string, ("bold" | "bg-linen" | "bg-alt")?][] }
  | { type: "compare-table"; headers: string[]; rows: string[][] }
  | { type: "script-box"; html: string };

export type Article = {
  slug: string;
  num: number;
  audience: "borrower" | "referrer";
  title: string;
  summary: string;
  h1: string;
  metaTitle: string;
  metaDescription: string;
  readTime: number;
  hasFAQSchema: boolean;
  quickAnswer?: string;
  body: Block[];
  faqs?: { title: string; items: { q: string; a: string }[] };
  cta: { text: string; linkText: string; href: string };
  disclaimer?: string;
};

export const articles: Article[] = [
  // ─── Article 1 ───────────────────────────────────────────────────────────────
  {
    slug: "how-long-does-estate-settlement-take-australia",
    num: 1,
    audience: "borrower",
    title: "How long does it take for an estate to be settled in Australia?",
    summary:
      "If you're a beneficiary waiting for an estate to be settled, 12 months can feel like a very long time — especially when you're managing financial pressure at the same time as grief.",
    h1: "How long does it take for an estate to be settled in Australia?",
    metaTitle: "How Long Does Estate Settlement Take in Australia? | Inherita",
    metaDescription:
      "Most Australian estates take 9–12 months to settle. Here's what causes delays, what beneficiaries can do in the meantime, and how to access funds early.",
    readTime: 5,
    hasFAQSchema: true,
    quickAnswer:
      "On average, an Australian estate takes 9 to 12 months to settle from the date of death. Complex estates — particularly those with property, disputes, or interstate assets — can take 18 months or longer.",
    body: [
      {
        type: "p",
        html: "If you're a beneficiary waiting for an estate to be settled, 12 months can feel like a very long time — especially when you're managing financial pressure at the same time as grief. Understanding why estates take so long, and what affects the timeline, can help you plan ahead and make informed decisions.",
      },
      { type: "h2", text: "What is estate settlement?" },
      {
        type: "p",
        html: "Estate settlement is the process of administering a deceased person's assets and distributing them to the people named in their will (or under intestacy rules if there's no will). It's managed by an executor — usually a family member, solicitor, or trustee company — and involves everything from valuing assets and paying debts to selling property and filing final tax returns.",
      },
      {
        type: "p",
        html: "Until that process is complete, beneficiaries generally cannot access their inheritance. The estate is a legal entity in its own right, and assets can only be distributed once all obligations are settled.",
      },
      { type: "h2", text: "How long does it typically take?" },
      {
        type: "p",
        html: "In Australia, most estates take between 9 and 12 months to settle from the date of death. This is the national average — but it's exactly that: an average. Some straightforward estates with minimal assets and no disputes can be wrapped up in 4 to 6 months. Others, particularly those involving property, business interests, or family conflict, can take 2 years or more.",
      },
      {
        type: "p",
        html: "The probate process alone — the court process that gives the executor legal authority to act — typically takes 4 to 8 weeks once the application is filed. But probate is just the beginning.",
      },
      { type: "h2", text: "What causes estate settlement to take so long?" },
      {
        type: "p",
        html: "Several factors influence how long administration takes:",
      },
      {
        type: "ul",
        items: [
          "<strong>Property sales.</strong> If the estate includes a home or investment property, the executor must obtain a valuation, prepare the property for sale, list it, wait for the market, and complete settlement. In a slow market, this alone can add 6 to 12 months.",
          "<strong>Tax obligations.</strong> The executor must lodge the deceased's final tax return and may need to obtain a tax clearance before distributing the estate. The ATO's response time varies.",
          "<strong>Outstanding debts.</strong> All debts — including mortgages, credit cards, and funeral costs — must be paid before any distribution. If the estate has complex liabilities, this takes time to work through.",
          "<strong>Disputes.</strong> Will contests, family provision claims, or disagreements between beneficiaries can extend administration significantly — sometimes by years.",
          "<strong>Multiple beneficiaries.</strong> Estates with several beneficiaries often require more communication, more documentation, and occasionally mediation.",
          "<strong>Interstate or overseas assets.</strong> Assets in different jurisdictions may require separate legal processes in each.",
        ],
      },
      {
        type: "h2",
        text: "Does it matter which state the deceased lived in?",
      },
      {
        type: "p",
        html: "Yes — probate timelines vary by state. In New South Wales and Victoria, probate applications are typically processed within 4 to 6 weeks. In Queensland, the Supreme Court of Queensland typically takes 4 to 8 weeks. Western Australia and South Australia can be slightly faster for straightforward estates, but timelines across all states can blow out if applications are incomplete or contested.",
      },
      {
        type: "p",
        html: `If the deceased owned property in more than one state, the executor may need to apply for a "resealing" of probate in the second state — adding further time and cost.`,
      },
      { type: "h2", text: "What can beneficiaries do while waiting?" },
      {
        type: "p",
        html: "While the estate is being administered, beneficiaries have limited formal options for accessing their share early. However, there are a few things worth knowing:",
      },
      {
        type: "ul",
        items: [
          "You can ask the executor for an <strong>interim distribution</strong> — a partial payment made before final settlement — if the estate has sufficient liquid assets and all debts are accounted for. This is at the executor's discretion.",
          "You can apply for an <a href='/faqs'>inheritance advance</a> — a facility that advances a portion of your confirmed inheritance now, with repayment made directly from the estate when it settles. This doesn't require the executor's approval to initiate, though they will be notified.",
        ],
      },
      {
        type: "callout",
        html: "An inheritance advance is not a loan against your income. It's assessed on your confirmed entitlement from the estate — so your employment status, salary, or personal assets aren't considered.",
      },
    ],
    faqs: {
      title: "Frequently asked questions",
      items: [
        {
          q: "Can I get my inheritance early?",
          a: "Not directly — the executor controls the distribution timeline. But an inheritance advance lets you access up to 50% of your confirmed entitlement now, with the full amount repaid from the estate at settlement. You make no monthly repayments.",
        },
        {
          q: "What if the estate takes longer than expected?",
          a: "If an inheritance advance is in place, interest accrues until the estate repays — but your repayment is capped at your share of the estate. You will never repay more than your inheritance.",
        },
        {
          q: "Can the executor speed up settlement?",
          a: "To some extent — prompt filing of probate, responsive communication with the ATO, and early engagement of a real estate agent can all reduce delays. But some factors (property markets, court timelines, outstanding debts) are outside anyone's control.",
        },
      ],
    },
    cta: {
      text: "While you wait for the estate to settle, Inherita can advance up to 50% of your confirmed inheritance — assessed on the estate, not your income. No monthly repayments. Everything settles when the estate does.",
      linkText: "Check your eligibility →",
      href: "/apply",
    },
  },

  // ─── Article 2 ───────────────────────────────────────────────────────────────
  {
    slug: "what-is-an-inheritance-advance-australia",
    num: 2,
    audience: "borrower",
    title:
      "What is an inheritance advance? A plain-English guide for Australian beneficiaries",
    summary:
      "An inheritance advance is a way to access a portion of your inheritance before an estate has been fully settled.",
    h1: "What is an inheritance advance? A plain-English guide for Australian beneficiaries",
    metaTitle:
      "What Is an Inheritance Advance? A Plain-English Guide | Inherita",
    metaDescription:
      "An inheritance advance lets you access up to 50% of your inheritance while an estate is being settled. No income check. No monthly repayments. Here's how it works.",
    readTime: 5,
    hasFAQSchema: false,
    quickAnswer: undefined,
    body: [
      {
        type: "p",
        html: "An inheritance advance is a way to access a portion of your inheritance before an estate has been fully settled. Instead of waiting months — or sometimes years — for probate to complete and assets to be distributed, you receive a lump sum now. The advance is repaid directly from the estate when it finalises. You make no monthly repayments in the meantime.",
      },
      {
        type: "p",
        html: "If you're a beneficiary of a deceased estate in Australia, this guide explains how it works, what you'll need to qualify, and what the process looks like from application to funds in your account.",
      },
      { type: "h2", text: "Why do people need an inheritance advance?" },
      {
        type: "p",
        html: "In Australia, the average estate takes 9 to 12 months to settle. For estates that include property — which describes the majority of Australian estates — the timeline is often longer. During that period, beneficiaries may be managing mortgage payments, covering living expenses, or dealing with the practical costs of estate administration (repairs to the property, ongoing rates and insurance, legal fees) with no access to the funds they're entitled to.",
      },
      {
        type: "p",
        html: "An inheritance advance bridges that gap. It gives you access to funds you're already owed, earlier than you'd otherwise receive them.",
      },
      { type: "h2", text: "How does an inheritance advance work?" },
      {
        type: "p",
        html: "At Inherita, the process works in four steps:",
      },
      {
        type: "ul",
        items: [
          "<strong>Tell us about the estate.</strong> Complete an online application — it takes around 10 minutes. We ask about the estate, not your income or employment.",
          "<strong>Share your documents.</strong> Send us the key estate documents: the will, death certificate, and probate paperwork. We'll tell you exactly what we need.",
          "<strong>Receive a decision.</strong> Our team reviews every application personally. You'll have an initial answer within 48 hours.",
          "<strong>Access your funds.</strong> Once approved and contracts are signed, funds are transferred directly to your account the next business day.",
        ],
      },
      { type: "h2", text: "What can you use the funds for?" },
      {
        type: "p",
        html: "There are no restrictions on how you use an inheritance advance. Common uses include:",
      },
      {
        type: "ul",
        items: [
          "Covering mortgage or rent payments while waiting for the estate",
          "Paying for essential repairs to an estate property before sale",
          "Meeting everyday living expenses during the administration period",
          "Covering the costs of the estate itself — legal fees, funeral expenses, insurance",
          "Consolidating personal debts",
        ],
      },
      {
        type: "h2",
        text: "How is an inheritance advance different from a personal loan?",
      },
      {
        type: "p",
        html: "The key difference is how repayment works — and what you're assessed against.",
      },
      {
        type: "p",
        html: "A personal loan is assessed on your income, your credit history, and your ability to make monthly repayments. If you're retired, part-time, or not currently working, many lenders will decline you.",
      },
      {
        type: "p",
        html: "An inheritance advance is assessed on the estate — specifically, on the value of the estate assets and your confirmed entitlement as a named beneficiary. Your income and employment status are not considered. And because repayment comes directly from the estate at settlement, you make no monthly repayments at all.",
      },
      {
        type: "callout",
        html: "The total you repay will never exceed your inheritance. Inherita's advances are capped at your confirmed share of the estate — you cannot end up owing more than you receive.",
      },
      { type: "h2", text: "How much can you access?" },
      {
        type: "p",
        html: "Inherita advances up to 50% of your confirmed inheritance entitlement. The exact amount depends on the value of the estate assets, any outstanding debts or liabilities within the estate, and the number of beneficiaries. Our <a href='/#calculator'>estimate tool</a> lets you enter your expected inheritance amount and see an indicative cost before you apply.",
      },
      { type: "h2", text: "Who qualifies?" },
      {
        type: "p",
        html: "To be eligible for an Inherita advance, you generally need to be:",
      },
      {
        type: "ul",
        items: [
          "A named beneficiary of a confirmed will",
          "Waiting on an estate that is being professionally administered (by a solicitor or trustee company)",
          "Able to provide the key estate documents (will, death certificate, probate paperwork)",
        ],
      },
      {
        type: "p",
        html: "Your income, employment status, and personal assets are not part of the assessment.",
      },
    ],
    faqs: undefined,
    cta: {
      text: "Ready to see how much you could access? Use our estimate tool to get an instant breakdown — advance amount, fees, and your remaining inheritance — before you apply. No commitment required.",
      linkText: "Try the estimator →",
      href: "/#calculator",
    },
  },

  // ─── Article 3 ───────────────────────────────────────────────────────────────
  {
    slug: "access-inheritance-before-estate-finalised",
    num: 3,
    audience: "borrower",
    title: "Can I access my inheritance before the estate is finalised?",
    summary:
      "This is one of the most common questions we hear from people who are waiting on a deceased estate.",
    h1: "Can I access my inheritance before the estate is finalised?",
    metaTitle:
      "Can I Access My Inheritance Before the Estate Is Finalised? | Inherita",
    metaDescription:
      "Yes — through an inheritance advance. Access up to 50% of your confirmed inheritance while the estate is being settled. No income check. No monthly repayments.",
    readTime: 4,
    hasFAQSchema: true,
    quickAnswer:
      "Yes. Through an inheritance advance, you can access up to 50% of your confirmed inheritance while the estate is being settled — without waiting for probate to complete. You make no monthly repayments. The advance is repaid directly from the estate when it finalises.",
    body: [
      {
        type: "p",
        html: "This is one of the most common questions we hear from people who are waiting on a deceased estate. The honest answer is: not directly — but there is a way to access funds you're already entitled to, before the estate formally distributes.",
      },
      {
        type: "h2",
        text: "Why can't beneficiaries access the estate directly?",
      },
      {
        type: "p",
        html: "Once someone passes away, their assets become part of their deceased estate. The estate is a separate legal entity, and until the executor has obtained probate, paid all debts and taxes, and completed the administration process, those assets cannot be formally distributed to beneficiaries.",
      },
      {
        type: "p",
        html: "This process takes time — in Australia, most estates take 9 to 12 months to settle. Estates involving property often take longer.",
      },
      { type: "h2", text: "How an inheritance advance works" },
      {
        type: "p",
        html: "An <a href='/faqs'>inheritance advance</a> is a facility that lets you access a portion of your confirmed inheritance entitlement now. At Inherita, we advance up to 50% of what you're owed — assessed on the estate assets, not your personal income.",
      },
      { type: "p", html: "Here's how it works:" },
      {
        type: "ul",
        items: [
          "You apply online and share your estate documents (will, death certificate, probate paperwork)",
          "We assess the estate value and your confirmed entitlement — not your salary or employment history",
          "If approved, funds are in your account the next business day",
          "When the estate finalises, the executor repays Inherita directly before distributing the remainder to you",
        ],
      },
      {
        type: "p",
        html: "You make no monthly repayments during the term. The advance, fees, and interest are all settled at the end — from the estate, not from your pocket.",
      },
      { type: "h2", text: "What can you use the funds for?" },
      {
        type: "p",
        html: "There are no restrictions. People use inheritance advances for mortgage payments, living expenses, urgent repairs to an estate property, legal costs, or simply to reduce financial pressure while the estate takes its course.",
      },
      {
        type: "h2",
        text: "Will the total repayment ever exceed my inheritance?",
      },
      {
        type: "p",
        html: "No. Inherita's advances are capped at your confirmed share of the estate. The total you repay — advance plus fees and interest — will never exceed your inheritance entitlement. This is a non-recourse product: if something unexpected reduces the value of the estate, your liability is limited to what the estate pays out.",
      },
      {
        type: "h2",
        text: "Does the executor have to approve my application?",
      },
      {
        type: "p",
        html: "The executor is notified and needs to sign a deed acknowledging the arrangement — but they do not have the power to veto your application. The advance is between you and Inherita. The deed simply directs the executor to repay Inherita from your share of the estate when settlement occurs.",
      },
    ],
    faqs: {
      title: "Frequently asked questions",
      items: [
        {
          q: "How quickly can I receive funds?",
          a: "Once your application is approved and contracts are signed, funds are transferred the next business day. The initial assessment typically takes 48 hours.",
        },
        {
          q: "Do I need a good credit score?",
          a: "We do conduct a credit check, but your credit score is not the primary basis for our assessment. We assess the estate — specifically the estate asset value and your confirmed entitlement. Beneficiaries who would not qualify for a conventional loan often qualify for an Inherita advance.",
        },
        {
          q: "What if the estate is delayed?",
          a: "Interest accrues until the estate repays. But because your total repayment is capped at your share of the estate, a longer timeline increases cost — it doesn't increase your liability beyond what you're entitled to receive.",
        },
      ],
    },
    cta: {
      text: "If you're a named beneficiary of a confirmed will, you may be able to access up to 50% of your inheritance now — without waiting for the estate to finalise.",
      linkText: "Check your eligibility in 2 minutes →",
      href: "/apply",
    },
  },

  // ─── Article 4 ───────────────────────────────────────────────────────────────
  {
    slug: "what-happens-family-home-when-someone-dies-australia",
    num: 4,
    audience: "borrower",
    title:
      "What happens to the family home when someone dies? A guide for beneficiaries",
    summary:
      "The family home is often the most significant asset in a deceased estate — and frequently the most complicated to deal with.",
    h1: "What happens to the family home when someone dies? A guide for beneficiaries",
    metaTitle:
      "What Happens to the Family Home When Someone Dies? | Inherita",
    metaDescription:
      "When someone dies, the family home becomes part of their estate. Here's what beneficiaries need to know about probate, property sales, and accessing funds before settlement.",
    readTime: 5,
    hasFAQSchema: false,
    quickAnswer: undefined,
    body: [
      {
        type: "p",
        html: "The family home is often the most significant asset in a deceased estate — and frequently the most complicated to deal with. If you're a beneficiary waiting for a parent's property to be sold as part of estate administration, you're likely managing a combination of grief, financial pressure, and uncertainty about what happens next.",
      },
      {
        type: "p",
        html: "This guide explains the process clearly, so you know what to expect and what your options are.",
      },
      { type: "h2", text: "The home becomes part of the estate" },
      {
        type: "p",
        html: "When someone dies, all their assets — including the family home — become part of their deceased estate. The property doesn't automatically transfer to beneficiaries. It sits within the estate until the executor has obtained probate and completed all the legal and financial steps required before distribution.",
      },
      {
        type: "p",
        html: "Until that process is complete, beneficiaries have no legal right to the property itself. They cannot sell it, rent it out for personal benefit, or access any proceeds. The executor manages it on behalf of the estate.",
      },
      { type: "h2", text: "What does the executor do with the property?" },
      {
        type: "p",
        html: "The executor's job is to deal with the property in accordance with the will. In most cases, this means selling it and distributing the proceeds to the beneficiaries. Less commonly, the will may specify that the property is to be transferred directly to a specific beneficiary — in which case a formal title transfer (not a sale) takes place.",
      },
      {
        type: "p",
        html: "If there's no will, the property is dealt with under intestacy rules, which specify how assets are distributed to next of kin.",
      },
      {
        type: "h2",
        text: "Does the executor need probate to sell the property?",
      },
      {
        type: "p",
        html: "Yes — in most circumstances. Probate is the formal legal authority granted by a court that gives the executor power to deal with the estate's assets. Without probate, a real estate agent cannot be formally engaged, and settlement of a sale cannot occur.",
      },
      {
        type: "p",
        html: "Probate typically takes 4 to 8 weeks once the application is lodged with the relevant Supreme Court. The executor can prepare the property for sale during this period, but the sale itself cannot complete until probate is granted.",
      },
      { type: "h2", text: "How long does the property process take?" },
      {
        type: "p",
        html: "Property sales within deceased estates typically take longer than standard residential sales. From the date of death, the full process — probate, preparation, listing, sale, and distribution — commonly takes 9 to 18 months. Several factors can extend this:",
      },
      {
        type: "ul",
        items: [
          "A slow property market or difficulty finding a buyer",
          "Delays in obtaining probate due to incomplete documentation",
          "Disagreement between beneficiaries about whether to sell, when to sell, or at what price",
          "Condition issues requiring significant repairs before the property can be listed",
          "Interstate or international beneficiaries requiring coordination across time zones",
        ],
      },
      {
        type: "h2",
        text: "Can beneficiaries live in the property during administration?",
      },
      {
        type: "p",
        html: "This depends on the will and the agreement of all beneficiaries and the executor. Some executors allow beneficiaries to occupy the property rent-free during administration — particularly if the beneficiary was already living there. Others require a market rent to be paid to the estate.",
      },
      {
        type: "p",
        html: "There is no universal rule. The executor has discretion, and in contested situations the matter may need to be resolved through mediation or the courts.",
      },
      {
        type: "h2",
        text: "Who pays the ongoing costs while the estate is being settled?",
      },
      {
        type: "callout",
        html: "During estate administration, the property's ongoing costs — council rates, water, building insurance, strata levies, and any maintenance — are paid from estate funds, not by individual beneficiaries. If the estate has limited liquid assets, this can create cash flow pressure for the executor.",
      },
      {
        type: "p",
        html: "If the estate lacks the cash to cover these costs, the executor may need to draw on the sale proceeds — which means beneficiaries may receive slightly less than the gross sale price. In some cases, beneficiaries voluntarily contribute to ongoing costs to keep the estate solvent, though they are not legally required to.",
      },
      { type: "h2", text: "What if siblings disagree about selling?" },
      {
        type: "p",
        html: "This is one of the most common sources of estate conflict in Australia. If all beneficiaries have an equal share, one beneficiary cannot block the sale indefinitely — the executor has authority to sell under the terms of the will. But disagreement about timing, pricing, or the choice of agent can cause significant delays.",
      },
      {
        type: "p",
        html: "In cases where conflict is severe, beneficiaries can apply to the Supreme Court for directions. This is a last resort and adds both time and cost to the process.",
      },
      {
        type: "h2",
        text: "How can beneficiaries access funds before the property sells?",
      },
      {
        type: "p",
        html: "Waiting 12 months or more for a property sale to settle the estate can cause real financial hardship. An <a href='/faqs'>inheritance advance</a> lets beneficiaries access up to 50% of their confirmed entitlement now — without waiting for the property to sell.",
      },
      {
        type: "p",
        html: "The advance is assessed on the estate assets (including the property value), not on your personal income. You make no monthly repayments. When the estate finalises and the property proceeds are distributed, the executor repays Inherita directly from your share.",
      },
    ],
    faqs: undefined,
    cta: {
      text: "Waiting on a property sale to settle the estate? Inherita can advance funds against your confirmed inheritance — so you don't have to wait.",
      linkText: "See how it works →",
      href: "/faqs",
    },
  },

  // ─── Article 5 ───────────────────────────────────────────────────────────────
  {
    slug: "how-much-does-inheritance-advance-cost",
    num: 5,
    audience: "borrower",
    title: "How much does an inheritance advance cost? Understanding the fees",
    summary:
      "One of the first questions people ask about an inheritance advance is: what will it actually cost me?",
    h1: "How much does an inheritance advance cost? Understanding the fees",
    metaTitle: "How Much Does an Inheritance Advance Cost? | Inherita",
    metaDescription:
      "Inheritance advance costs include an establishment fee and a monthly rate. See a worked example and use our free estimator to see your personalised cost before you apply.",
    readTime: 5,
    hasFAQSchema: true,
    quickAnswer: undefined,
    body: [
      {
        type: "p",
        html: "One of the first questions people ask about an inheritance advance is: what will it actually cost me? It's a fair question, and the honest answer is that it depends on three things — how much you advance, the length of time before the estate settles, and the fees that apply.",
      },
      {
        type: "p",
        html: "This article explains exactly how Inherita's costs work, walks through a real example, and shows you how to calculate your own estimate before you apply.",
      },
      { type: "h2", text: "How Inherita's fees work" },
      {
        type: "p",
        html: "There are two cost components to an Inherita advance:",
      },
      {
        type: "ul",
        items: [
          "<strong>Establishment fee.</strong> A one-off fee charged when the advance is set up. This is a percentage of the advance amount.",
          "<strong>Monthly rate.</strong> Interest accrues on the advance amount for the duration of the term — from the date funds are received until the estate repays Inherita.",
        ],
      },
      {
        type: "p",
        html: "Both the establishment fee and the accrued interest are repaid at the end — from the estate, at settlement. You make no payments during the term of the advance.",
      },
      {
        type: "callout",
        html: "Current indicative rates: establishment fee of 2% of the advance amount (minimum $1,200), and a monthly rate of 1.5% to 2% per month simple interest. Check the Inherita website for current rates, as these may be updated.",
      },
      { type: "h2", text: "A worked example" },
      {
        type: "p",
        html: "Here's how the costs might look for a typical advance:",
      },
      {
        type: "table",
        rows: [
          ["Expected inheritance entitlement", "$200,000", "bg-linen"],
          ["Advance amount (25% of entitlement)", "$50,000"],
          ["Establishment fee (2%)", "$1,000", "bg-alt"],
          ["Monthly rate (1.75% × 6 months)", "$5,250"],
          ["Total repaid from estate", "$56,250", "bold"],
          ["Remaining inheritance received", "$143,750", "bold"],
        ],
      },
      {
        type: "p",
        html: "In this example, a $50,000 advance over 6 months costs $6,250 in total fees and interest. The beneficiary receives $50,000 now and $143,750 at settlement — a total of $193,750 from a $200,000 entitlement.",
      },
      {
        type: "p",
        html: "Want to see your own numbers? <a href='/#calculator'>Use the Inherita estimator</a> to enter your expected inheritance amount and advance percentage and get an instant breakdown.",
      },
      { type: "h2", text: "Is the cost worth it?" },
      {
        type: "p",
        html: "This is a personal decision — and it depends on your circumstances. The right question isn't just 'how much will this cost?' but 'what is the cost of waiting?'",
      },
      {
        type: "p",
        html: "If you're managing mortgage arrears, covering living expenses from savings, or under financial pressure during the administration period, the cost of an inheritance advance may be significantly less than the cost of the alternatives — credit card debt, personal loans, or selling other assets.",
      },
      {
        type: "p",
        html: "The advance is not free, and the cost is real. But for many beneficiaries, accessing funds now — at a known, transparent cost — is considerably better than the uncertainty and hardship of waiting.",
      },
    ],
    faqs: {
      title: "Frequently asked questions about cost",
      items: [
        {
          q: "Is there a minimum advance amount?",
          a: "Yes. The minimum establishment fee is $1,200, which means the advance needs to be of sufficient size to make the fixed cost proportionate. Speak to the Inherita team if you're unsure whether your situation qualifies.",
        },
        {
          q: "What if the estate takes longer than expected?",
          a: "Interest accrues for the actual duration of the advance, not an estimated duration. If the estate takes 12 months instead of 6, the interest cost doubles. However, your total repayment is always capped at your inheritance entitlement — you cannot owe more than you receive.",
        },
        {
          q: "Are there any other fees?",
          a: "No hidden fees. The establishment fee and the monthly rate are the only cost components. The estimate tool shows the full cost breakdown before you apply.",
        },
      ],
    },
    cta: {
      text: "See your exact cost in seconds. Our estimator shows the full breakdown — advance amount, fees, and your remaining inheritance — before you apply. No commitment required.",
      linkText: "Try the estimator →",
      href: "/#calculator",
    },
  },

  // ─── Article 6 ───────────────────────────────────────────────────────────────
  {
    slug: "do-i-need-income-inheritance-advance",
    num: 6,
    audience: "borrower",
    title:
      "Do I need a job or regular income to get an inheritance advance?",
    summary:
      "Many people assume they won't qualify for financial help because they're retired, not currently working, or on a reduced income.",
    h1: "Do I need a job or regular income to get an inheritance advance?",
    metaTitle: "Do I Need a Job to Get an Inheritance Advance? | Inherita",
    metaDescription:
      "No. Inherita assesses your inheritance, not your income. Retirees, part-time workers, and those not currently employed can all qualify. Here's how the assessment works.",
    readTime: 4,
    hasFAQSchema: true,
    quickAnswer:
      "No. Inherita does not check your income, employment status, or payslips. We assess your inheritance — specifically, the value of the estate and your confirmed entitlement as a named beneficiary.",
    body: [
      {
        type: "p",
        html: "Many people assume they won't qualify for financial help because they're retired, not currently working, or on a reduced income. If that's you, this article is worth reading — because an inheritance advance works very differently from a conventional loan.",
      },
      {
        type: "h2",
        text: "Why income doesn't matter for an inheritance advance",
      },
      {
        type: "p",
        html: "Traditional lenders — banks, personal loan providers — assess your ability to repay a loan from your income. They ask for payslips, bank statements, and employment history because their repayment model depends on money coming from you, regularly, over time.",
      },
      {
        type: "p",
        html: "An inheritance advance doesn't work that way. The repayment comes from the estate — not from your income — and it happens once, at settlement. Because you're not making monthly repayments, your current income is simply irrelevant to the assessment.",
      },
      {
        type: "p",
        html: "What we assess instead is the estate: the value of the assets, the confirmed liabilities, and your entitlement as a named beneficiary. If the estate can support the advance, you can qualify — regardless of whether you're working, retired, or on Centrelink.",
      },
      { type: "h2", text: "What Inherita does assess" },
      {
        type: "p",
        html: "To approve an advance, we look at:",
      },
      {
        type: "ul",
        items: [
          "<strong>The estate assets.</strong> What does the estate hold — property, cash, investments? We apply a conservative valuation to each asset class.",
          "<strong>Outstanding liabilities.</strong> What does the estate owe? Debts, taxes, legal fees, and specific bequests are deducted before calculating the distributable value.",
          "<strong>Your confirmed entitlement.</strong> What share of the estate are you entitled to, based on the will or intestacy rules?",
          "<strong>The advance amount.</strong> We advance up to 50% of your confirmed entitlement, so the advance sits well within the estate's capacity to repay.",
        ],
      },
      {
        type: "p",
        html: "We do conduct a credit check — but it's not the primary basis for approval. The estate assessment carries most of the weight.",
      },
      { type: "h2", text: "Who typically qualifies?" },
      {
        type: "p",
        html: "Inherita's borrowers include a wide range of people in very different financial circumstances. Common profiles include:",
      },
      {
        type: "ul",
        items: [
          "Retirees receiving superannuation or a pension who have no regular employment income",
          "Part-time or casual workers whose income wouldn't support a conventional loan",
          "People who have recently lost a job or taken time off work to manage the estate",
          "Adult children who are full-time carers or parents",
          "Anyone whose financial situation means conventional lenders would decline them",
        ],
      },
      { type: "h2", text: "What you do need" },
      {
        type: "p",
        html: "To apply for an Inherita advance, you'll need:",
      },
      {
        type: "ul",
        items: [
          "To be a named beneficiary of a confirmed will",
          "The estate to be administered by a professional executor (a solicitor or trustee company)",
          "A copy of the will, death certificate, and probate paperwork",
        ],
      },
      {
        type: "p",
        html: "That's it. No payslips. No employment history. No evidence of income.",
      },
    ],
    faqs: {
      title: "Frequently asked questions",
      items: [
        {
          q: "Will my credit history affect my application?",
          a: "We do conduct a credit check, but a poor credit history won't automatically disqualify you. The assessment is primarily based on the estate, not your personal financial history. If you have concerns, speak to our team before applying.",
        },
        {
          q: "Can I apply if I'm on Centrelink?",
          a: "Yes. Government benefits are not considered part of our assessment — and they don't disqualify you. What matters is the estate value and your entitlement, not your personal income source.",
        },
        {
          q: "What if I have personal debts?",
          a: "Your personal debts are not assessed as part of the Inherita application. We look at the estate's liabilities, not yours. As long as the estate has sufficient value to support the advance, personal debt doesn't affect eligibility.",
        },
      ],
    },
    cta: {
      text: "We assess your inheritance, not your income. No payslips, no employment history — just your confirmed entitlement from the estate.",
      linkText: "Check your eligibility →",
      href: "/apply",
    },
  },

  // ─── Article 7 ───────────────────────────────────────────────────────────────
  {
    slug: "inheritance-advance-guide-estate-lawyers",
    num: 7,
    audience: "referrer",
    title:
      "Inheritance advances: a guide for estate lawyers and their clients",
    summary:
      "Estate administration takes time, and beneficiaries often experience real financial hardship during that period.",
    h1: "Inheritance advances: a guide for estate lawyers and their clients",
    metaTitle:
      "Inheritance Advances: A Guide for Estate Lawyers and Their Clients | Inherita",
    metaDescription:
      "A plain-English guide to how inheritance advances work, the legal structure, and what estate lawyers need to know before referring a client to Inherita.",
    readTime: 6,
    hasFAQSchema: false,
    quickAnswer: undefined,
    body: [
      {
        type: "p",
        html: "Estate administration takes time, and beneficiaries often experience real financial hardship during that period. As an estate lawyer, you may already be fielding questions from clients who are asset-rich but cash-poor — waiting on a property sale or the completion of probate while managing everyday financial pressure.",
      },
      {
        type: "p",
        html: "Inheritance advances exist to address exactly this problem. This guide explains how they work, what the legal structure looks like, and what estate lawyers need to know before referring a client.",
      },
      { type: "h2", text: "What is an inheritance advance?" },
      {
        type: "p",
        html: "An inheritance advance allows a named beneficiary to access a portion of their confirmed inheritance entitlement before the estate has been distributed. The advance is secured against the beneficiary's share of the estate and repaid directly from the estate at settlement — before the beneficiary receives their distribution.",
      },
      {
        type: "p",
        html: "At Inherita, we advance up to 50% of a beneficiary's confirmed entitlement. The product is regulated under the National Consumer Credit Protection Act (NCCP Act), and the advance is assessed on the estate assets — not on the borrower's personal income.",
      },
      { type: "h2", text: "The legal structure" },
      {
        type: "p",
        html: "The Inherita advance involves two key legal instruments:",
      },
      {
        type: "callout",
        html: `<strong>Deed of Assignment and Direction.</strong> The borrower (beneficiary) irrevocably assigns their rights in their inheritance proceeds to Inherita, and irrevocably directs the executor to repay Inherita from their share of the estate before any distribution is made to them. Executors are required to sign the deed to acknowledge the assignment and direction. The deed is binding on any subsequent executor if the original executor is replaced.`,
      },
      {
        type: "p",
        html: "In addition to the deed, Inherita registers a security interest over the inheritance proceeds on the Personal Property Securities Register (PPSR). This provides a registered security position in favour of Inherita over the relevant share of the estate proceeds.",
      },
      {
        type: "p",
        html: "The loan contract itself is between Inherita and the borrower. The borrower also grants Inherita a power of attorney to fulfil loan obligations in the event that they receive estate proceeds before the advance is repaid.",
      },
      { type: "h2", text: "What the executor is asked to do" },
      {
        type: "p",
        html: "The executor's role is limited. They are asked to:",
      },
      {
        type: "ul",
        items: [
          "Sign the Deed of Assignment and Direction, acknowledging the beneficiary's assignment and direction",
          "Repay the outstanding advance amount (principal, fees, and accrued interest) from the beneficiary's share of the estate before distributing the balance to that beneficiary",
        ],
      },
      {
        type: "p",
        html: "The executor is not providing financial advice. They are not approving or endorsing the advance as appropriate for the beneficiary. They are simply acknowledging a legal direction from the beneficiary and acting on it at distribution.",
      },
      {
        type: "h2",
        text: "Common questions from clients — and how to respond",
      },
      {
        type: "p",
        html: `<strong>"Is this a legitimate product?"</strong> Yes. Inherita is regulated under the NCCP Act. The product is a consumer credit contract, and Inherita holds an Australian Credit Licence (or operates as an authorised credit representative under one).`,
      },
      {
        type: "p",
        html: `<strong>"Will I owe more than my inheritance?"</strong> No. The total repayment is capped at the borrower's share of the estate. It is a non-recourse product.`,
      },
      {
        type: "p",
        html: `<strong>"What if the estate value falls?"</strong> Inherita's recourse is limited to the estate proceeds. If the estate value is lower than anticipated (for example, due to a will dispute), interest continues to accrue until the advance is repaid, but the borrower cannot be pursued for more than their entitlement.`,
      },
      {
        type: "p",
        html: `<strong>"Does this affect other beneficiaries?"</strong> No. The advance is secured against the borrowing beneficiary's share only. Other beneficiaries' distributions are not affected in any way.`,
      },
      { type: "h2", text: "Which estates does Inherita work with?" },
      {
        type: "p",
        html: "Inherita works with estates that are professionally administered — that is, where a solicitor, trustee company, or other professional is acting as executor or administering the estate. We do not currently advance against estates where administration is entirely self-managed.",
      },
      {
        type: "p",
        html: "The estate must include property, cash, or listed securities as its primary assets. We apply a conservative valuation methodology and advance up to 50% of the net discounted estate value attributable to the borrowing beneficiary.",
      },
      { type: "h2", text: "How to refer a client" },
      {
        type: "p",
        html: "If you have a client who might benefit from an inheritance advance, the simplest approach is to direct them to <a href='/'>inherita.com.au</a>. They can check their eligibility, use the <a href='/#calculator'>estimate tool</a>, and apply directly. You do not need to be involved in the application process.",
      },
      {
        type: "p",
        html: "If you'd prefer to have a conversation first — about the legal structure, the deed, or how we work with estate lawyers — we welcome that. We work with solicitors across Australia and are happy to answer questions before any referral is made.",
      },
    ],
    faqs: undefined,
    cta: {
      text: "We work closely with estate lawyers across Australia. If your clients need liquidity before settlement, we'd like to hear from you.",
      linkText: "Partner with Inherita →",
      href: "/partners",
    },
  },

  // ─── Article 8 ───────────────────────────────────────────────────────────────
  {
    slug: "deceased-estate-property-financial-advisers-accountants",
    num: 8,
    audience: "referrer",
    title:
      "When a deceased estate includes a property: what financial advisers and accountants need to know",
    summary:
      "Property is the dominant asset class in Australian deceased estates.",
    h1: "When a deceased estate includes a property: what financial advisers and accountants need to know",
    metaTitle:
      "Deceased Estate Property: What Financial Advisers and Accountants Need to Know | Inherita",
    metaDescription:
      "When a client inherits a property-only estate, they can face 12+ months of financial pressure. Here's what advisers and accountants need to know — and how to help.",
    readTime: 5,
    hasFAQSchema: false,
    quickAnswer: undefined,
    body: [
      {
        type: "p",
        html: "Property is the dominant asset class in Australian deceased estates. When your client inherits a share of a residential property — often the family home — they face a problem that financial products weren't traditionally built to solve: they're asset-rich and cash-poor, often for more than a year, with no mechanism to access the value they're entitled to.",
      },
      {
        type: "p",
        html: "This article is written for financial advisers and accountants who work with clients in this situation. It covers the financial pressure points, what conventional options don't work, and how an inheritance advance can provide liquidity while the estate is being administered.",
      },
      { type: "h2", text: "The property estate problem" },
      {
        type: "p",
        html: "Inheriting a property as part of a deceased estate means waiting. Until the estate is administered — probate granted, debts cleared, property sold, proceeds distributed — the beneficiary has no access to the asset or its value.",
      },
      {
        type: "p",
        html: "In Australia, property-only estates typically take 9 to 18 months to settle. During that period, clients may be managing:",
      },
      {
        type: "ul",
        items: [
          "Mortgage arrears on their own home",
          "Reduced income (particularly if they've taken time off work to manage the estate)",
          "Ongoing costs of the estate property itself — rates, insurance, maintenance",
          "Legal fees from the estate administration process",
        ],
      },
      {
        type: "p",
        html: "For clients who are retired or on a fixed income, this period can create genuine hardship. And because the problem is temporary — the funds are coming, eventually — it's poorly served by long-term debt products.",
      },
      { type: "h2", text: "Why conventional options don't work" },
      {
        type: "p",
        html: "Advisers often explore the obvious alternatives first. Here's why they typically fall short:",
      },
      {
        type: "ul",
        items: [
          "<strong>Personal loans.</strong> Assessed on income. Clients who are retired, part-time, or not currently working often don't qualify — or qualify only for high-rate products that create their own problems.",
          "<strong>Home equity / redraw.</strong> If the client has equity in their own home, a redraw or line of credit may be available — but this adds debt to an asset they may not want encumbered, and many older Australians have already paid off their mortgage or are reluctant to use their home as security.",
          "<strong>Credit cards.</strong> Suitable only for small, short-term needs. Not appropriate for bridging a 12-month estate settlement gap.",
          "<strong>Interim distribution.</strong> Possible if the executor agrees and the estate has liquid assets — but property-only estates rarely have enough cash to support this.",
        ],
      },
      {
        type: "h2",
        text: "How an inheritance advance works for your client",
      },
      {
        type: "p",
        html: "An inheritance advance is a consumer credit product assessed on the estate — not on the client's personal income or credit position. Inherita advances up to 50% of the client's confirmed entitlement, with repayment coming directly from the estate at settlement.",
      },
      {
        type: "p",
        html: "The client makes no monthly repayments. The advance, fees, and accrued interest are settled in one transaction from their share of the estate proceeds. Their total repayment is capped at their entitlement — they cannot repay more than they receive.",
      },
      {
        type: "p",
        html: "For a client inheriting a $300,000 share of an estate, a $75,000 advance (25% of entitlement) at indicative rates over 9 months would cost approximately $16,000–18,000 in total fees and interest — leaving them with around $282,000–284,000 at settlement.",
      },
      {
        type: "callout",
        html: "<strong>What advisers and accountants cannot do.</strong> Recommending a specific credit product to a client requires an Australian Credit Licence or credit representative authorisation. If you don't hold appropriate credit authorisation, the correct approach is to inform the client that an inheritance advance product exists and that they can assess it independently — not to recommend it as the right product for their situation. Inherita's website includes an <a href='/apply'>eligibility check</a> and <a href='/#calculator'>estimator</a> that clients can use without any adviser involvement.",
      },
      { type: "h2", text: "How to refer a client appropriately" },
      {
        type: "p",
        html: "The simplest approach is to mention that the product exists and direct the client to <a href='/'>inherita.com.au</a> to assess their own eligibility. You're not making a financial recommendation — you're pointing them toward a resource. The client makes the decision.",
      },
      {
        type: "p",
        html: "If you'd like to understand the product in more detail before having that conversation with a client — including the legal structure, the fee model, and how it interacts with the estate administration process — Inherita welcomes that conversation directly.",
      },
    ],
    faqs: undefined,
    cta: {
      text: "If your clients are beneficiaries of an estate that includes property, Inherita can help bridge the gap before settlement.",
      linkText: "Request our adviser guide →",
      href: "/partners",
    },
  },

  // ─── Article 9 ───────────────────────────────────────────────────────────────
  {
    slug: "selling-deceased-estate-property-real-estate-agents",
    num: 9,
    audience: "referrer",
    title:
      "Selling a deceased estate property: what real estate agents need to know",
    summary:
      "Deceased estate sales are a significant part of the Australian residential property market — and they come with a set of dynamics that experienced agents know well.",
    h1: "Selling a deceased estate property: what real estate agents need to know",
    metaTitle:
      "Selling a Deceased Estate Property: What Real Estate Agents Need to Know | Inherita",
    metaDescription:
      "Deceased estate sales come with unique dynamics — and financial pressure on beneficiaries can stall them. Here's what agents need to know and how to help.",
    readTime: 5,
    hasFAQSchema: false,
    quickAnswer: undefined,
    body: [
      {
        type: "p",
        html: "Deceased estate sales are a significant part of the Australian residential property market — and they come with a set of dynamics that experienced agents know well. The executor rather than the owner. Multiple beneficiaries with different priorities. Longer timelines. Emotional complexity alongside the commercial transaction.",
      },
      {
        type: "p",
        html: "One dynamic that's less often discussed is how financial pressure on beneficiaries can affect the sale itself — and what agents can do about it.",
      },
      {
        type: "h2",
        text: "How deceased estate sales differ from standard sales",
      },
      {
        type: "p",
        html: "The key differences estate agents encounter:",
      },
      {
        type: "ul",
        items: [
          "<strong>The decision-maker is the executor.</strong> The agent works with the executor (or their solicitor) rather than the property owner. Executors have legal obligations and may be more risk-averse than a standard vendor.",
          "<strong>Multiple beneficiaries means multiple opinions.</strong> Even when the executor has authority to proceed, beneficiaries often have strong views about timing, pricing, and presentation. Managing these relationships is part of the agent's role.",
          "<strong>Probate must precede settlement.</strong> A sale can be listed and offers accepted before probate is granted, but the contract typically includes a condition that settlement cannot occur until probate is obtained. This adds uncertainty to the timeline.",
          "<strong>The property may have been unoccupied.</strong> Presentation, maintenance, and the condition of the property after a period of vacancy require additional attention.",
        ],
      },
      {
        type: "h2",
        text: "Why beneficiary financial pressure stalls estate sales",
      },
      {
        type: "p",
        html: "This is the dynamic that agents often encounter without having a name for it. A beneficiary — typically an adult child of the deceased — is waiting for the estate to settle while managing their own financial pressure. Mortgage payments, living expenses, and the costs of managing the estate property itself are accumulating.",
      },
      {
        type: "p",
        html: "Under this pressure, beneficiaries sometimes make decisions that slow the sale:",
      },
      {
        type: "ul",
        items: [
          "Pushing for a quick sale at a price below market value to access funds sooner",
          "Alternatively, insisting on holding out for a higher price because they feel the urgency of their situation justifies it",
          "Disagreeing with siblings about timing because their personal financial positions are different",
          "Delaying decisions about presentation and repairs because they can't fund the upfront cost",
        ],
      },
      {
        type: "p",
        html: "In each case, the root cause is the same: a beneficiary who is entitled to significant funds but cannot access them yet.",
      },
      { type: "h2", text: "What agents can do" },
      {
        type: "callout",
        html: "An inheritance advance lets a beneficiary access up to 50% of their confirmed inheritance entitlement while the estate is being administered — without waiting for the property to sell. The advance is repaid from the estate at settlement. The beneficiary makes no monthly repayments. It doesn't require the executor's approval, though the executor is notified and signs a deed at the time of the advance.",
      },
      {
        type: "p",
        html: "For agents, this matters because a beneficiary with access to funds is a beneficiary who can:",
      },
      {
        type: "ul",
        items: [
          "Afford to wait for the right price rather than accepting an early low offer",
          "Fund presentation repairs and styling before the property goes to market",
          "Manage their own financial pressure without making it the estate's problem",
          "Agree with siblings on a timeline rather than being driven by different cash-flow positions",
        ],
      },
      { type: "h2", text: "How to raise it with clients" },
      {
        type: "p",
        html: "You don't need to know the details of the product to mention it. A simple, natural way to introduce it:",
      },
      {
        type: "script-box",
        html: `<em>"One thing worth knowing — if you're managing financial pressure while you wait for the estate to settle, there are services that can advance you a portion of your inheritance now, before the property sells. It's worth having a look at if cash flow is a concern. Inherita is one option — you can check your eligibility online at <a href='/'>inherita.com.au</a>."</em>`,
      },
      {
        type: "p",
        html: "That's it. You're not providing financial advice. You're pointing a client toward a resource that might help them — which ultimately helps the sale proceed on better terms.",
      },
      { type: "h2", text: "What agents don't need to do" },
      {
        type: "p",
        html: "You don't need to understand the legal structure of the product in detail. You don't need to be a financial adviser. You don't need to recommend it as the right choice for any particular client. Simply mentioning that the option exists, and directing clients to inherita.com.au to check their own eligibility, is both appropriate and potentially very useful to the people you're working with.",
      },
    ],
    faqs: undefined,
    cta: {
      text: "If your clients are waiting on a deceased estate sale, Inherita can advance funds against their confirmed inheritance — helping them get to settlement without financial pressure forcing their hand.",
      linkText: "Learn how to refer →",
      href: "/partners",
    },
  },

  // ─── Article 10 ──────────────────────────────────────────────────────────────
  {
    slug: "client-inherited-property-cant-afford-mortgage",
    num: 10,
    audience: "referrer",
    title:
      "My client has inherited a property but can't afford the mortgage in the meantime. What are their options?",
    summary:
      "This scenario is more common than it might seem: a client is a named beneficiary of a deceased estate that includes a property.",
    h1: "My client has inherited a property but can't afford the mortgage in the meantime. What are their options?",
    metaTitle:
      "Client Inherited a Property But Can't Afford the Mortgage? Their Options | Inherita",
    metaDescription:
      "For mortgage brokers: when a client inherits a property but faces mortgage stress during administration, here's what works — and what doesn't.",
    readTime: 5,
    hasFAQSchema: true,
    quickAnswer: undefined,
    body: [
      {
        type: "p",
        html: "This scenario is more common than it might seem: a client is a named beneficiary of a deceased estate that includes a property. The estate will eventually distribute significant funds — but in the meantime, they're managing mortgage payments on their own home while waiting for the estate to finalise. If their income has reduced, or they've drawn down their savings to cover the gap, the pressure is real.",
      },
      {
        type: "p",
        html: "As a mortgage broker, you may be seeing this as an arrears issue, a hardship application, or a refinance inquiry. Before going down those paths, it's worth knowing what options exist specifically for beneficiaries in this situation.",
      },
      { type: "h2", text: "Why standard mortgage solutions don't fit" },
      {
        type: "p",
        html: "The challenge with the standard toolkit is that it's designed for ongoing financial problems — not temporary ones with a known resolution date.",
      },
      {
        type: "ul",
        items: [
          "<strong>Hardship arrangements</strong> with the existing lender may provide temporary relief, but they typically extend the loan term, increase total interest paid, and can affect the client's credit file. They're designed for financial difficulty with an uncertain resolution — not for someone waiting on a confirmed inheritance.",
          "<strong>Refinancing</strong> to a lower rate or a more flexible product is worth exploring, but it doesn't solve the cash flow problem — it may reduce the monthly payment slightly, but it doesn't address the underlying gap between income and expenses during the administration period.",
          "<strong>Personal loans</strong> add another debt obligation and are assessed on income — often the wrong tool when the client's income is the constraint.",
        ],
      },
      {
        type: "h2",
        text: "How an inheritance advance works alongside the mortgage",
      },
      {
        type: "callout",
        html: "An inheritance advance is not a replacement for the mortgage — it's a separate facility that provides the client with liquidity from their confirmed inheritance entitlement, allowing them to meet their existing obligations (including the mortgage) while the estate is being administered.",
      },
      {
        type: "p",
        html: "Here's the practical picture. A client with a $150,000 mortgage on their own home and a confirmed inheritance entitlement of $200,000 (their share of a deceased estate) could advance, say, $60,000 against that entitlement. That $60,000 sits in their account and covers mortgage payments, living expenses, and any other financial pressure for the duration of the estate administration — typically 9 to 12 months.",
      },
      {
        type: "p",
        html: "When the estate settles, the executor repays Inherita from the client's share of the estate before distributing the balance to the client. The client's mortgage is completely separate — it's their own obligation, unaffected by the advance.",
      },
      { type: "h2", text: "What to explain to the client" },
      {
        type: "p",
        html: "The key points for a broker conversation:",
      },
      {
        type: "ul",
        items: [
          "The advance is assessed on the estate — not on their income or credit position",
          "They make no monthly repayments on the advance during the term",
          "The total repayment is capped at their inheritance entitlement — they cannot owe more than they receive",
          "The advance is repaid from the estate at settlement, before their distribution — it doesn't come from their personal funds",
          "The advance and the mortgage are completely separate — the lender is not involved",
        ],
      },
      { type: "h2", text: "What you as a broker need to know" },
      {
        type: "p",
        html: "You don't need to be the expert on inheritance advances. Your role is to identify that the product exists and might be relevant, and to direct the client to assess it themselves. You're not recommending it — you're pointing toward a resource.",
      },
      {
        type: "p",
        html: "If the client wants to understand the costs before committing, Inherita's <a href='/#calculator'>estimate tool</a> lets them enter their expected inheritance amount and advance percentage and see a full cost breakdown. There's no commitment required to use the estimator.",
      },
    ],
    faqs: {
      title: "Frequently asked questions",
      items: [
        {
          q: "Will the advance affect the client's credit file?",
          a: "Inherita conducts a credit check as part of the assessment. The advance itself appears as a credit obligation on the client's file for the duration of the term. For most broker purposes — where the client is not simultaneously seeking new mortgage finance — this is not a material concern.",
        },
        {
          q: "What if the estate is delayed beyond the expected timeline?",
          a: "Interest accrues for the actual term of the advance. A longer estate administration period increases the total cost — but the total repayment remains capped at the client's inheritance entitlement. The client's mortgage obligations are completely unaffected by any estate delay.",
        },
        {
          q: "Does the executor need to approve the advance?",
          a: "The executor signs a deed at the time the advance is established — acknowledging the arrangement and committing to repay Inherita from the client's share at settlement. They do not have veto power over the client's decision to proceed.",
        },
      ],
    },
    cta: {
      text: "Inherita works alongside your clients' existing mortgage — we advance against the inheritance so their mortgage stays on track.",
      linkText: "Partner with Inherita →",
      href: "/partners",
    },
  },

  // ─── Article 11 ──────────────────────────────────────────────────────────────
  {
    slug: "dying-without-a-will-australia",
    num: 11,
    audience: "borrower",
    title: "What happens if someone dies without a will in Australia?",
    summary:
      "Roughly half of Australian adults don't have a valid will. When someone dies without one, intestacy rules — not their wishes — decide who inherits.",
    h1: "What happens if someone dies without a will in Australia?",
    metaTitle: "Dying Without a Will in Australia: What Happens Next? | Inherita",
    metaDescription:
      "When someone dies without a will in Australia, intestacy rules decide who inherits. Here's how it works, who gets what, and why it takes longer.",
    readTime: 5,
    hasFAQSchema: true,
    quickAnswer:
      "When someone dies without a will in Australia, their estate is distributed under intestacy rules set by each state. A partner and children usually inherit first, but the exact split depends on which state the deceased lived in and their family structure.",
    body: [
      {
        type: "p",
        html: "Roughly half of Australian adults don't have a valid will. When someone dies without one, they're said to have died <strong>intestate</strong> — and instead of their wishes deciding who gets what, a set of legislated rules takes over. For beneficiaries, an intestate estate almost always takes longer to settle and involves more paperwork than an estate with a clear will.",
      },
      { type: "h2", text: "What does \"dying intestate\" mean?" },
      {
        type: "p",
        html: "Dying intestate means dying without a legally valid will. It also covers situations where a will exists but is invalid — for example, if it wasn't properly signed and witnessed, or if it doesn't dispose of all the deceased's assets (partial intestacy).",
      },
      {
        type: "p",
        html: "When this happens, the estate is administered under the intestacy laws of the state or territory where the deceased was domiciled. Each state has its own succession legislation — the <em>Succession Act 2006</em> in NSW, the <em>Administration and Probate Act 1958</em> in Victoria, and equivalents elsewhere.",
      },
      { type: "h2", text: "Who inherits when there's no will?" },
      {
        type: "p",
        html: "The rules vary by state, but the general order of entitlement is broadly consistent:",
      },
      {
        type: "ul",
        items: [
          "<strong>Spouse or de facto partner</strong> — usually inherits first. If there are no children, the partner typically takes the entire estate.",
          "<strong>Spouse plus children</strong> — the partner usually receives a statutory legacy (a fixed dollar amount plus personal effects and a share of the residue), with the children sharing the rest. Where all children are also the partner's biological or adopted children, several states now give the entire estate to the partner.",
          "<strong>Children only, no partner</strong> — the estate is divided equally between the children.",
          "<strong>No partner or children</strong> — parents, then siblings, then more distant relatives (nieces, nephews, grandparents, aunts, uncles, cousins) inherit in that order.",
          "<strong>No eligible relatives at all</strong> — the estate passes to the state (this is known as <em>bona vacantia</em>).",
        ],
      },
      {
        type: "p",
        html: "These rules can produce outcomes the deceased would not have chosen. A long-term unmarried partner who wasn't in a legally-recognised de facto relationship, a stepchild who wasn't formally adopted, or a close friend caring for the deceased — none of these people inherit under intestacy rules, regardless of the deceased's actual relationships.",
      },
      {
        type: "callout",
        html: "Intestacy rules don't care about the deceased's intentions. They only care about legal status: married or de facto, biological or adopted, related by blood.",
      },
      { type: "h2", text: "Who administers the estate?" },
      {
        type: "p",
        html: "Without a will, there's no named executor. Instead, an eligible person — usually the surviving partner or an adult child — applies to the Supreme Court for <strong>letters of administration</strong>. This is the intestacy equivalent of a grant of probate, and it gives the applicant legal authority to collect assets, pay debts, and distribute the estate.",
      },
      {
        type: "p",
        html: "Applying for letters of administration is generally slower than applying for probate. The applicant needs to prove there's no valid will (which involves searching thoroughly), identify all eligible beneficiaries under intestacy rules, and satisfy the court that they're the right person to administer the estate. If multiple people are equally entitled to apply, they need to agree — or the court decides.",
      },
      { type: "h2", text: "Why intestate estates usually take longer" },
      {
        type: "p",
        html: "Compared to a well-drafted will, an intestate estate typically adds several months to the timeline. Common causes of delay include:",
      },
      {
        type: "ul",
        items: [
          "Time spent searching for a will before concluding there isn't one",
          "Identifying and locating all beneficiaries under intestacy — particularly where the deceased has children from earlier relationships or estranged family members",
          "Establishing whether a de facto relationship existed, if there's any dispute",
          "Disputes between beneficiaries about who should administer the estate",
          "Additional documentation required by the Supreme Court for letters of administration",
        ],
      },
      {
        type: "p",
        html: "For a straightforward intestate estate — a married couple, adult children, no property in dispute — letters of administration might come through in 6 to 10 weeks. For a complex intestate estate, it can take 6 months or more just to reach the point where the administrator can start distributing assets. See our guide on <a href='/insights/how-long-does-estate-settlement-take-australia'>estate settlement timelines</a> for the broader picture.",
      },
      { type: "h2", text: "What if you're a beneficiary of an intestate estate?" },
      {
        type: "p",
        html: "If you're entitled to inherit from someone who died without a will, your inheritance is legally yours the moment the administrator has authority — but you won't receive it until the estate is administered. That means paying debts, potentially selling property, and waiting for the administrator to complete the process.",
      },
      {
        type: "p",
        html: "Beneficiaries of intestate estates face the same cash-flow pressures as beneficiaries of any other estate: mortgage payments, funeral costs, holding costs on inherited property, and everyday living expenses that don't pause while the estate is being wound up.",
      },
      {
        type: "p",
        html: "An <a href='/inheritance-advance'>inheritance advance</a> can be used to bridge this gap. Because the advance is assessed on your confirmed entitlement from the estate — not your income — it's available to beneficiaries of intestate estates as well as testate ones, provided the administrator's entitlement is clear and letters of administration are progressing.",
      },
    ],
    faqs: {
      title: "Frequently asked questions",
      items: [
        {
          q: "Can I contest an intestacy distribution?",
          a: "Yes. Family provision laws still apply to intestate estates. If you were financially dependent on the deceased but don't inherit under intestacy rules, you can apply to the court for provision from the estate. Time limits are strict — usually 6 to 12 months from the grant of administration.",
        },
        {
          q: "Does the surviving partner always inherit everything?",
          a: "No. Only in specific circumstances — usually where there are no children, or where all the children are also the partner's biological or adopted children. In blended-family situations, the partner shares the estate with the deceased's children from earlier relationships.",
        },
        {
          q: "What if the deceased left a will that only covered some assets?",
          a: "The assets covered by the will are distributed according to the will. Anything else falls under intestacy rules and is distributed accordingly. This is called partial intestacy and is more common than people realise.",
        },
      ],
    },
    cta: {
      text: "Waiting on letters of administration and need cash flow now? Inherita advances up to 50% of your confirmed entitlement from an intestate estate. No income check. No monthly repayments.",
      linkText: "Check your eligibility →",
      href: "/apply",
    },
  },

  // ─── Article 12 ──────────────────────────────────────────────────────────────
  {
    slug: "do-you-pay-tax-on-inheritance-australia",
    num: 12,
    audience: "borrower",
    title: "Do you pay tax on inheritance in Australia?",
    summary:
      "Australia abolished inheritance tax in 1979 — but capital gains, superannuation death benefits, and rental income can still trigger tax for beneficiaries.",
    h1: "Do you pay tax on inheritance in Australia?",
    metaTitle: "Do You Pay Tax on Inheritance in Australia? | Inherita",
    metaDescription:
      "Australia has no inheritance tax — but capital gains, super death benefits, and rental income can still trigger tax for beneficiaries.",
    readTime: 6,
    hasFAQSchema: true,
    quickAnswer:
      "Australia does not have an inheritance tax or estate tax. However, beneficiaries may still owe tax on inherited assets — most commonly capital gains tax on inherited property when it's later sold, and income tax on superannuation death benefits paid to non-dependants.",
    body: [
      {
        type: "p",
        html: "One of the most common questions beneficiaries ask is whether they'll be taxed on what they inherit. The short answer is reassuring — Australia abolished inheritance tax in 1979. But the longer answer is more nuanced, because several other taxes can apply to inherited assets depending on what you inherit and what you do with it.",
      },
      { type: "h2", text: "Australia has no inheritance or estate tax" },
      {
        type: "p",
        html: "Unlike the United Kingdom, the United States, or many European countries, Australia does not levy a tax on the transfer of assets at death. When you inherit cash, shares, property, or personal possessions, the inheritance itself is not taxable income and doesn't need to be reported on your tax return.",
      },
      {
        type: "p",
        html: "This applies whether you inherit $10,000 or $10 million. There's no threshold, no scale, and no reporting requirement on the receipt of an inheritance.",
      },
      {
        type: "callout",
        html: "Receiving an inheritance is not taxable. What you do with the inherited asset afterwards can be.",
      },
      { type: "h2", text: "Capital gains tax on inherited property" },
      {
        type: "p",
        html: "This is where most beneficiaries encounter tax. When you inherit property, you don't pay CGT at the point of inheritance — but you may pay it later when you sell.",
      },
      {
        type: "p",
        html: "The rules depend on when the deceased acquired the property and whether it was their main residence:",
      },
      {
        type: "ul",
        items: [
          "<strong>Property acquired by the deceased before 20 September 1985</strong> (pre-CGT). When you sell, your cost base is the market value at the date of death.",
          "<strong>Property acquired on or after 20 September 1985.</strong> You inherit the deceased's cost base — what they originally paid, plus improvements and holding costs.",
          "<strong>Deceased's main residence.</strong> If you sell within 2 years of the date of death, the sale is generally CGT-exempt. If you sell later, CGT may apply, calculated from the date of death.",
        ],
      },
      {
        type: "p",
        html: "The 2-year main residence rule is the most important one to be aware of. If the deceased's home was their principal place of residence and you sell within 2 years, you generally pay no CGT — regardless of how much the property has appreciated. Miss that window and you can be looking at a significant tax bill. See our guide on <a href='/insights/what-happens-family-home-when-someone-dies-australia'>what happens to the family home</a> for more detail.",
      },
      { type: "h2", text: "Superannuation death benefits" },
      {
        type: "p",
        html: "Superannuation is treated differently from other inheritances because it's not technically part of the deceased's estate — it's held in trust, and the trustee decides who to pay it to (subject to any binding death benefit nomination).",
      },
      {
        type: "p",
        html: "Whether a super death benefit is taxed depends on who receives it:",
      },
      {
        type: "ul",
        items: [
          "<strong>Tax dependants</strong> (spouse, de facto partner, minor children, financial dependants, interdependent partners) — receive death benefits tax-free.",
          "<strong>Non-tax dependants</strong> (typically adult independent children) — pay tax on the taxable component of the super benefit. The rate is 15% plus Medicare levy on the taxed element, and 30% plus Medicare levy on any untaxed element.",
        ],
      },
      {
        type: "p",
        html: "This distinction — tax dependant versus non-tax dependant — is one of the most consequential in Australian estate law. An adult independent child inheriting a $500,000 super balance could pay $80,000 or more in tax, while a spouse inheriting the same balance pays nothing.",
      },
      { type: "h2", text: "Income earned by inherited assets" },
      {
        type: "p",
        html: "If you inherit an asset that produces income — a rental property, dividend-paying shares, an interest-bearing account — the income is taxable to you from the date you receive the asset. Income earned by the estate before distribution is taxed to the estate, not to you.",
      },
      {
        type: "p",
        html: "For inherited shares, you also step into the deceased's cost base for CGT purposes when you eventually sell. Dividends received after distribution are yours and go on your tax return.",
      },
      { type: "h2", text: "Stamp duty on inherited property" },
      {
        type: "p",
        html: "In most states, transferring property from an estate to a beneficiary named in the will (or entitled under intestacy) does not attract stamp duty — a nominal transfer fee applies instead. However, if beneficiaries agree to transfer property between themselves (for example, one buys out the others), stamp duty may apply to that transfer.",
      },
      { type: "h2", text: "How inheritance advances are treated for tax" },
      {
        type: "p",
        html: "An <a href='/inheritance-advance'>inheritance advance</a> is not itself taxable. It's an advance against your inheritance, not income. The full inheritance still passes through the estate to you, and any tax consequences of the underlying assets (CGT on later sale of property, for example) are unchanged by the fact that you accessed part of your entitlement early.",
      },
    ],
    faqs: {
      title: "Frequently asked questions",
      items: [
        {
          q: "Do I need to declare an inheritance on my tax return?",
          a: "Not the inheritance itself. But income earned by inherited assets after the date of transfer, capital gains from selling inherited assets, and taxable super death benefit components all need to be declared.",
        },
        {
          q: "What if I inherit from overseas?",
          a: "Australia doesn't tax the inheritance itself, but the country where the deceased lived might. If the foreign estate paid inheritance tax before transferring assets to you, you receive what's left. Ongoing income from foreign inherited assets is generally assessable in Australia.",
        },
        {
          q: "Should I get advice?",
          a: "Yes — particularly for inherited property, superannuation, or business interests. The rules are workable but the details matter, and the tax outcomes of small decisions (like when to sell inherited property) can be significant.",
        },
      ],
    },
    cta: {
      text: "Inheriting a property and worried about the 2-year CGT clock? Inherita advances up to 50% of your entitlement so you can hold, sell, or restructure on your own timeline — not the estate's.",
      linkText: "Check your eligibility →",
      href: "/apply",
    },
    disclaimer:
      "This is general information only and does not constitute legal, tax, or financial advice. Speak to a qualified professional about your circumstances.",
  },

  // ─── Article 13 ──────────────────────────────────────────────────────────────
  {
    slug: "family-provision-claim-australia",
    num: 13,
    audience: "borrower",
    title: "What is a family provision claim, and how does it affect my inheritance?",
    summary:
      "A family provision claim can freeze an estate for a year or more. Here's who can claim, how it works, and what it means for other beneficiaries.",
    h1: "What is a family provision claim, and how does it affect my inheritance?",
    metaTitle: "Family Provision Claims in Australia: A Guide for Beneficiaries | Inherita",
    metaDescription:
      "A family provision claim can freeze an estate for a year or more. Here's who can claim, how it works, and what it means for other beneficiaries.",
    readTime: 5,
    hasFAQSchema: false,
    body: [
      {
        type: "p",
        html: "A family provision claim is one of the most disruptive things that can happen to an estate. Even a straightforward claim can add 12 months to administration. A contested one can take years. If you're a beneficiary of an estate that's facing (or might face) a claim, understanding how the process works helps you plan — and helps you know what your options are while you wait.",
      },
      { type: "h2", text: "What is a family provision claim?" },
      {
        type: "p",
        html: "A family provision claim is an application to the Supreme Court by an eligible person seeking a share, or a larger share, of a deceased estate than the will (or intestacy rules) provided. Every Australian state and territory has legislation allowing certain people to bring these claims — the specifics vary, but the underlying principle is the same: the law recognises that a deceased person owes moral obligations to certain people, and those obligations can override the terms of the will.",
      },
      {
        type: "p",
        html: "The claim is against the estate, not against other beneficiaries personally. If the court orders further provision to the claimant, that provision comes out of the estate — reducing what other beneficiaries receive.",
      },
      { type: "h2", text: "Who can make a claim?" },
      {
        type: "p",
        html: "Eligibility varies by state, but common categories include:",
      },
      {
        type: "ul",
        items: [
          "The deceased's spouse or de facto partner (current or former)",
          "Children (biological, adopted, and in some states stepchildren)",
          "Grandchildren, in limited circumstances",
          "Dependants who were being wholly or partly maintained by the deceased",
          "Members of the deceased's household",
        ],
      },
      {
        type: "p",
        html: "The court considers a range of factors: the claimant's financial situation, their relationship with the deceased, contributions they made, competing claims, and the size of the estate. There's no automatic entitlement — the claimant has to demonstrate a genuine need and a moral claim on the estate.",
      },
      { type: "h2", text: "Time limits" },
      {
        type: "p",
        html: "Family provision claims must be brought within strict time limits — usually 6 to 12 months from the grant of probate or letters of administration, depending on the state. In NSW it's 12 months from the date of death; in Victoria it's 6 months from the grant of probate; other states sit between. Courts can extend these time limits in exceptional circumstances, but late claims are much harder to bring.",
      },
      {
        type: "callout",
        html: "Executors typically hold off on distributing an estate until the family provision claim period has expired. This alone can add 6 to 12 months to how long you wait for your inheritance.",
      },
      { type: "h2", text: "What happens to the estate while a claim is on foot?" },
      {
        type: "p",
        html: "Once a claim is made, the executor's ability to distribute the estate is significantly constrained. Distributing assets while a claim is pending exposes the executor to personal liability if the court later orders further provision to the claimant.",
      },
      { type: "p", html: "In practice, this means:" },
      {
        type: "ul",
        items: [
          "Assets that were going to be sold are usually still sold, and proceeds are held by the estate.",
          "Distributions to beneficiaries are usually paused entirely, or limited to small interim payments.",
          "Property that was going to be transferred in specie is often held pending resolution.",
          "The estate may be required to remain open for years if the claim is heavily contested.",
        ],
      },
      { type: "h2", text: "How claims are resolved" },
      {
        type: "p",
        html: "The majority of family provision claims settle before going to a final hearing. Mediation is common — most Australian courts require the parties to attempt mediation before setting a hearing date. A negotiated settlement typically involves the claimant receiving a lump sum (or a share of a specific asset) in exchange for withdrawing the claim.",
      },
      {
        type: "p",
        html: "Where the parties can't agree, the matter proceeds to hearing. This is slow (typically 12 to 24 months from filing) and expensive — costs can run to $100,000 or more, often paid from the estate.",
      },
      { type: "h2", text: "What if you're a beneficiary and a claim has been made?" },
      { type: "p", html: "You have three broad options:" },
      {
        type: "ul",
        items: [
          "<strong>Support settlement.</strong> Where the claim has merit and the estate can absorb it, most beneficiaries prefer to settle. The alternative — legal costs eating into the estate — usually leaves everyone worse off.",
          "<strong>Defend actively.</strong> Where the claim looks weak or opportunistic, beneficiaries can instruct the executor to defend. This is expensive and slow but sometimes necessary.",
          "<strong>Wait.</strong> Whatever the strategy, beneficiaries typically face a long delay before receiving their inheritance. In many cases, an <a href='/inheritance-advance'>inheritance advance</a> is used to bridge that period — assessed on the beneficiary's minimum likely entitlement after the claim is resolved.",
        ],
      },
      { type: "h2", text: "Can I get an advance if a family provision claim is on foot?" },
      {
        type: "p",
        html: "Sometimes. It depends on the strength and size of the claim and how much of the estate is likely to be affected. Where there's a broad range of possible outcomes, Inherita will typically assess against the lower end — that is, the minimum a beneficiary is likely to receive even if the claim succeeds. Where the claim is minor or speculative, the assessment is closer to the pre-claim entitlement.",
      },
      {
        type: "p",
        html: "Every claim is different, and we work with the executor and (where necessary) the estate's solicitor to form a view. If the claim is highly contested or the potential impact is very large, an advance may not be possible until there's more clarity.",
      },
    ],
    cta: {
      text: "Estate held up by a family provision claim? Inherita can advance against your minimum likely entitlement so you're not stuck in limbo while the claim resolves.",
      linkText: "Check your eligibility →",
      href: "/apply",
    },
    disclaimer:
      "This is general information only and does not constitute legal advice. If you are considering making or defending a family provision claim, speak to an estate litigation solicitor about your circumstances.",
  },

  // ─── Article 14 ──────────────────────────────────────────────────────────────
  {
    slug: "what-is-probate-australia",
    num: 14,
    audience: "borrower",
    title: "What is probate, and why does my inheritance depend on it?",
    summary:
      "Probate is the court order that lets an executor administer an estate. Here's what it is, how long it takes, and why beneficiaries wait for it.",
    h1: "What is probate, and why does my inheritance depend on it?",
    metaTitle: "What Is Probate in Australia? A Guide for Beneficiaries | Inherita",
    metaDescription:
      "Probate is the court order that lets an executor administer an estate. Here's what it is, how long it takes, and why beneficiaries wait for it.",
    readTime: 5,
    hasFAQSchema: true,
    quickAnswer:
      "Probate is a court order confirming that a will is valid and giving the executor legal authority to administer the estate. It's usually needed before major assets — property, large bank balances, share portfolios — can be transferred to beneficiaries.",
    body: [
      {
        type: "p",
        html: "Probate is one of those words that comes up constantly in estate matters but is rarely explained clearly. If an executor has told you they're \"waiting for probate\", or a bank has told you they can't release funds \"until probate is granted\", it helps to understand what's actually happening — and why it matters for when you receive your inheritance.",
      },
      { type: "h2", text: "What is probate?" },
      {
        type: "p",
        html: "Probate is a formal court order — called a <strong>grant of probate</strong> — issued by the Supreme Court of the state where the deceased was domiciled. The grant does two things: it confirms that the will is valid, and it authorises the person named as executor to act on behalf of the estate.",
      },
      {
        type: "p",
        html: "Once probate is granted, the executor has legal standing to collect the estate's assets, pay its debts, and distribute what remains to the beneficiaries.",
      },
      { type: "h2", text: "Why is probate needed?" },
      {
        type: "p",
        html: "Banks, share registries, superannuation funds, and land titles offices need certainty that they're dealing with the right person before they release assets. A grant of probate provides that certainty. Without it, these institutions won't transfer significant assets — even if the executor is clearly named in the will.",
      },
      {
        type: "p",
        html: "Probate is a protection mechanism. It protects the institutions releasing assets, and it protects beneficiaries from someone acting on a forged or superseded will.",
      },
      { type: "h2", text: "When is probate required?" },
      {
        type: "p",
        html: "Not every estate needs probate. Small, simple estates — say, a deceased with only a modest bank balance and no property — can often be administered without a grant, using an indemnity or statutory declaration process at the bank.",
      },
      { type: "p", html: "Probate is typically required when the estate includes:" },
      {
        type: "ul",
        items: [
          "Real property in the deceased's sole name",
          "Bank balances above the institution's threshold (usually $20,000 to $50,000, varies by bank)",
          "Share portfolios or managed funds",
          "Some superannuation death benefits (where the fund requires it)",
        ],
      },
      {
        type: "p",
        html: "The executor usually applies for probate as soon as reasonably possible after death — often within 6 to 12 weeks, once the death certificate is available and the will has been located.",
      },
      { type: "h2", text: "How long does probate take?" },
      {
        type: "p",
        html: "Once the application is filed with the Supreme Court, processing time depends on the state:",
      },
      {
        type: "ul",
        items: [
          "<strong>New South Wales</strong> — typically 4 to 6 weeks",
          "<strong>Victoria</strong> — typically 4 to 8 weeks",
          "<strong>Queensland</strong> — typically 4 to 8 weeks",
          "<strong>Western Australia</strong> — typically 3 to 6 weeks",
          "<strong>South Australia</strong> — typically 4 to 6 weeks",
        ],
      },
      {
        type: "p",
        html: "These times assume a straightforward application. Missing documents, unclear witnessing, or objections lodged by other parties can extend the timeline significantly.",
      },
      {
        type: "callout",
        html: "Probate is only the beginning. Getting the grant is usually 4 to 8 weeks, but the estate administration that follows — selling property, paying debts, filing tax returns — is what takes most of the time.",
      },
      { type: "h2", text: "Who applies for probate?" },
      {
        type: "p",
        html: "The executor named in the will applies. If there are multiple executors, they usually apply jointly, though one can apply with leave reserved for the others. The application is made to the Supreme Court of the state where the deceased was domiciled — the executor's state doesn't matter.",
      },
      {
        type: "p",
        html: "Most executors instruct a solicitor to prepare the application, though it's possible to apply as a self-represented executor. Court fees vary from $60 to $6,000 depending on the estate's size and the state, and solicitor's fees typically add several thousand dollars more.",
      },
      { type: "h2", text: "What if the deceased had assets in more than one state?" },
      {
        type: "p",
        html: "The executor applies for probate in the state where the deceased was domiciled. To deal with assets in other states, they apply for a <strong>reseal</strong> of the grant in each additional state where property is located. Resealing is generally faster than a fresh probate application but adds cost and time.",
      },
    ],
    faqs: {
      title: "Frequently asked questions",
      items: [
        {
          q: "How much does probate cost in Australia?",
          a: "Court filing fees range from about $60 (for small estates in some states) to $6,000+ for large estates. Solicitor's fees for a straightforward probate application typically run $2,000 to $5,000. These costs are paid by the estate.",
        },
        {
          q: "Can I get money from the estate before probate is granted?",
          a: "Not from the estate directly — the executor doesn't have authority to distribute before the grant. However, an <a href='/inheritance-advance'>inheritance advance</a> can be obtained during the probate period, based on your confirmed entitlement under the will.",
        },
        {
          q: "What happens if probate is refused?",
          a: "The court can refuse a grant if the will is invalid, ambiguous, or contested. This is rare. Where the court has concerns, it usually requests further evidence rather than refusing outright.",
        },
        {
          q: "How long does the whole process take, not just probate?",
          a: "From death to final distribution is typically 9 to 12 months. Probate itself is 4 to 8 weeks of that. See our full guide on <a href='/insights/how-long-does-estate-settlement-take-australia'>estate settlement timelines</a>.",
        },
      ],
    },
    cta: {
      text: "Waiting on a grant of probate? An Inherita advance can bridge the gap between now and when the estate distributes — assessed on the will, not your income.",
      linkText: "Check your eligibility →",
      href: "/apply",
    },
  },

  // ─── Article 15 ──────────────────────────────────────────────────────────────
  {
    slug: "superannuation-death-benefits-payout-time",
    num: 15,
    audience: "borrower",
    title: "Superannuation death benefits: how they're paid out and how long it takes",
    summary:
      "Superannuation is often one of the largest single assets in an estate — and one of the most misunderstood. Here's how death benefits are paid out.",
    h1: "Superannuation death benefits: how they're paid out and how long it takes",
    metaTitle: "How Long Do Super Death Benefits Take to Pay Out? | Inherita",
    metaDescription:
      "Super death benefits typically take 3–6 months to pay out. Here's how the trustee decides who gets what, and what beneficiaries can do.",
    readTime: 5,
    hasFAQSchema: false,
    quickAnswer:
      "A superannuation death benefit typically takes 3 to 6 months to pay out. With a valid binding death benefit nomination, some funds pay within 4 to 8 weeks. Without a nomination, the trustee's discretionary process can take 6 to 12 months.",
    body: [
      {
        type: "p",
        html: "Superannuation is often one of the largest single assets in an estate — and one of the most misunderstood. Unlike other assets, super doesn't automatically form part of the deceased's estate. It sits in a trust structure, and the trustee decides where it goes. That distinction shapes both how long it takes to pay out and who ultimately receives it.",
      },
      { type: "h2", text: "Super is not part of the estate by default" },
      {
        type: "p",
        html: "When someone dies, their bank accounts, property, shares, and personal possessions form part of their estate and pass under their will. Superannuation is different. The super fund holds the balance in trust for members, and on death, the trustee decides who to pay it to — subject to legislation and the fund's rules.",
      },
      { type: "p", html: "The trustee can pay a death benefit to:" },
      {
        type: "ul",
        items: [
          "The deceased's dependants (spouse, children, financial dependants, interdependency partners)",
          "The deceased's legal personal representative (i.e. the executor, to be dealt with under the will)",
        ],
      },
      {
        type: "p",
        html: "The trustee cannot pay a death benefit to non-dependants directly. If the deceased wanted a non-dependant (e.g. a sibling or friend) to receive their super, the only way was for the benefit to be paid to the estate and then distributed under the will.",
      },
      { type: "h2", text: "Binding death benefit nominations" },
      {
        type: "p",
        html: "Members can direct the trustee's decision using a binding death benefit nomination — a form completed while alive that tells the trustee who to pay the benefit to. There are two types:",
      },
      {
        type: "ul",
        items: [
          "<strong>Lapsing nominations</strong> — expire every 3 years and must be renewed to remain valid.",
          "<strong>Non-lapsing nominations</strong> — remain in force until revoked or the member dies (only some funds offer these).",
        ],
      },
      {
        type: "p",
        html: "Where there's a valid binding nomination and it names eligible beneficiaries, the trustee must follow it. The claim process is straightforward and typically completes within 4 to 8 weeks.",
      },
      {
        type: "p",
        html: "Where there's no nomination, or the nomination has lapsed, or it names ineligible beneficiaries, the trustee falls back on its discretion. That's where things slow down significantly.",
      },
      { type: "h2", text: "The trustee discretion process" },
      {
        type: "p",
        html: "Without a valid nomination, the trustee has to work out who is entitled to receive the benefit and in what proportions. This involves:",
      },
      {
        type: "ul",
        items: [
          "Identifying all potential beneficiaries (dependants and the estate)",
          "Inviting claims from those beneficiaries",
          "Making a preliminary decision and notifying all parties",
          "Allowing a 28-day objection period",
          "Considering any objections and making a final decision",
          "Paying the benefit",
        ],
      },
      {
        type: "p",
        html: "This process is prescribed by law and can't be shortcut. Even a straightforward case takes 4 to 6 months. A contested case — for example, a claim from an estranged adult child alongside a surviving spouse — can take 12 months or longer.",
      },
      {
        type: "callout",
        html: "The single biggest determinant of how long a super death benefit takes to pay is whether there's a valid binding nomination. If there is, weeks. If there isn't, months.",
      },
      { type: "h2", text: "Tax treatment" },
      {
        type: "p",
        html: "How much of the benefit reaches the recipient depends on their tax dependency status:",
      },
      {
        type: "ul",
        items: [
          "<strong>Tax dependants</strong> (spouse, de facto partner, minor children, financial dependants, interdependent partners) receive the benefit tax-free.",
          "<strong>Non-tax dependants</strong> — usually adult independent children — pay tax on the taxable component. The rate is 15% plus Medicare levy on the taxed element and 30% plus Medicare levy on any untaxed element.",
        ],
      },
      {
        type: "p",
        html: "This tax treatment applies whether the benefit is paid directly or paid via the estate. Where a benefit is paid to the estate and then distributed to non-dependants under the will, the estate pays the tax before distribution.",
      },
      { type: "h2", text: "Can super death benefits be advanced?" },
      {
        type: "p",
        html: "Sometimes. The core question is whether your entitlement is confirmed. A valid binding nomination naming you as beneficiary makes advancement much more straightforward — the nomination is essentially a confirmed entitlement. Without a nomination, we need to assess how strong your claim is under the trustee's discretionary process, and there's usually more waiting involved before an advance is possible.",
      },
      {
        type: "p",
        html: "Where the super benefit is being paid to the estate (either because the nomination directed it, or because there's no nomination and the trustee decided the estate is the appropriate recipient), we treat it like any other estate asset for the purpose of an <a href='/inheritance-advance'>inheritance advance</a>.",
      },
      { type: "h2", text: "What beneficiaries can do" },
      { type: "p", html: "If you're expecting a super death benefit:" },
      {
        type: "ul",
        items: [
          "Contact the fund promptly to lodge a claim. Provide the death certificate and proof of identity.",
          "Ask whether the deceased had a valid binding nomination — this determines the process and timeline.",
          "If the fund is exercising discretion, respond to any claim requests promptly. Delays here compound.",
          "If you're a non-tax dependant, get advice on whether to receive the benefit as a lump sum or (where available) an income stream — the tax outcomes can differ.",
        ],
      },
    ],
    cta: {
      text: "Waiting on a super payout and need cash flow now? Where your entitlement is clear — through a binding nomination or via the estate — Inherita can advance against it.",
      linkText: "Check your eligibility →",
      href: "/apply",
    },
  },

  // ─── Article 16 ──────────────────────────────────────────────────────────────
  {
    slug: "inheritance-advance-vs-personal-loan",
    num: 16,
    audience: "borrower",
    title: "Inheritance advance vs personal loan vs family loan: what's the difference?",
    summary:
      "Three ways to bridge the gap while an estate settles. Here's how inheritance advances, personal loans, and family loans differ — and when to use each.",
    h1: "Inheritance advance vs personal loan vs family loan: what's the difference?",
    metaTitle: "Inheritance Advance vs Personal Loan vs Family Loan | Inherita",
    metaDescription:
      "Three ways to bridge the gap while an estate settles. Here's how inheritance advances, personal loans, and family loans differ.",
    readTime: 5,
    hasFAQSchema: false,
    body: [
      {
        type: "p",
        html: "If you're waiting on an estate to settle and need cash flow before your inheritance arrives, you have three broadly available options: an inheritance advance, a personal loan, or a loan from family. Each solves the same immediate problem — accessing money now — but they work very differently, and the right choice depends on your situation.",
      },
      { type: "h2", text: "Inheritance advance" },
      {
        type: "p",
        html: "An inheritance advance is a specialised facility where a lender advances a portion of your confirmed inheritance now, and is repaid directly from the estate when it settles. The advance is assessed on the estate's assets and your confirmed entitlement — not on your income, credit history, or personal assets.",
      },
      { type: "p", html: "Key features:" },
      {
        type: "ul",
        items: [
          "<strong>No monthly repayments.</strong> Nothing to pay until the estate settles.",
          "<strong>No income assessment.</strong> Your employment status doesn't matter.",
          "<strong>Repayment capped at your inheritance.</strong> You'll never repay more than you receive from the estate.",
          "<strong>Cost is fixed upfront.</strong> You know at the start what the total cost will be at each estimated settlement date.",
        ],
      },
      {
        type: "p",
        html: "Best for: beneficiaries with a confirmed entitlement, no easy access to other credit, or who don't want to service monthly repayments during a period of grief and disruption.",
      },
      { type: "h2", text: "Personal loan" },
      {
        type: "p",
        html: "A personal loan is a standard unsecured (or sometimes secured) loan from a bank or non-bank lender. The lender assesses your income, existing debts, credit history, and ability to make monthly repayments. If approved, you receive the funds and begin repaying on a fixed schedule — usually monthly, over 1 to 7 years.",
      },
      { type: "p", html: "Key features:" },
      {
        type: "ul",
        items: [
          "<strong>Monthly repayments start immediately.</strong> You need income to service them.",
          "<strong>Full credit and income assessment.</strong> Recent job loss, self-employment, or a patchy credit file can make approval difficult.",
          "<strong>Rates vary widely.</strong> From around 8% p.a. for prime borrowers to 20%+ for higher-risk borrowers.",
          "<strong>No link to the estate.</strong> The loan is yours personally, and you're responsible whether the estate pays out or not.",
        ],
      },
      {
        type: "p",
        html: "Best for: beneficiaries with strong income and credit who prefer a familiar structure and lower headline rate, and who can comfortably service monthly repayments.",
      },
      { type: "h2", text: "Family loan" },
      {
        type: "p",
        html: "A family loan is a private arrangement between you and another family member — often a co-beneficiary, a parent, or a sibling — who has the means to lend you money against your expected inheritance. When the estate pays out, you repay them from your share.",
      },
      { type: "p", html: "Key features:" },
      {
        type: "ul",
        items: [
          "<strong>Terms are whatever you agree.</strong> Interest, timing, and repayment are all negotiable.",
          "<strong>Usually the cheapest option</strong>, if the family member is willing to lend interest-free or at a low rate.",
          "<strong>No formal assessment.</strong> No credit check, no income verification.",
          "<strong>Relationship risk.</strong> If the estate takes longer than expected, or produces less than expected, the loan can create real family tension.",
        ],
      },
      {
        type: "p",
        html: "Best for: beneficiaries with a family member who has both the funds and the willingness to lend, and where the relationship can absorb the arrangement.",
      },
      { type: "h2", text: "How they compare" },
      {
        type: "compare-table",
        headers: ["Feature", "Inheritance advance", "Personal loan", "Family loan"],
        rows: [
          ["<strong>Monthly repayments</strong>", "None", "Required", "Depends on terms"],
          ["<strong>Income assessment</strong>", "No", "Yes", "No"],
          ["<strong>Credit check</strong>", "No", "Yes", "No"],
          ["<strong>Security</strong>", "Estate entitlement", "Usually unsecured", "Informal"],
          ["<strong>Speed</strong>", "Days", "1–2 weeks", "Days"],
          ["<strong>Repayment source</strong>", "Estate", "Your income", "Your inheritance"],
          ["<strong>Relationship risk</strong>", "None", "None", "Meaningful"],
        ],
      },
      { type: "h2", text: "Which one is right for you?" },
      { type: "p", html: "There isn't a universal answer. But three questions usually clarify the choice:" },
      {
        type: "ul",
        items: [
          "<strong>Can you comfortably service monthly repayments?</strong> If yes, a personal loan is on the table. If no, an inheritance advance avoids that requirement entirely.",
          "<strong>Do you have a family member willing and able to lend?</strong> If yes, that's often the cheapest option — but only if you're confident the estate will pay out roughly on time and the relationship can absorb any delays.",
          "<strong>How confident are you in the estate's assets and timeline?</strong> The more confident, the more flexible your options. If the estate is complex or contested, an <a href='/inheritance-advance'>inheritance advance</a> handles that uncertainty better than the alternatives — because repayment is capped at what you actually receive.",
        ],
      },
    ],
    cta: {
      text: "Not sure which option fits your situation? An Inherita quote takes 24 hours and doesn't commit you to anything. You can compare the total cost against a personal loan or family loan before deciding.",
      linkText: "Check your eligibility →",
      href: "/apply",
    },
  },

  // ─── Article 17 ──────────────────────────────────────────────────────────────
  {
    slug: "financial-advisers-inheritance-cash-flow-clients",
    num: 17,
    audience: "referrer",
    title: "How financial advisers can talk to clients about inheritance timing and cash flow gaps",
    summary:
      "Practical guidance for financial advisers whose clients are waiting on estate distributions — options, tax considerations, and how to structure the conversation.",
    h1: "How financial advisers can talk to clients about inheritance timing and cash flow gaps",
    metaTitle: "Talking to Clients About Inheritance Cash Flow Gaps | Inherita",
    metaDescription:
      "Practical guidance for advisers whose clients are waiting on an estate distribution — options, tax considerations, and how to frame the conversation.",
    readTime: 6,
    hasFAQSchema: false,
    body: [
      {
        type: "p",
        html: "Most advisers eventually sit across from a client whose parent has just died. The conversation usually starts with the emotional reality of grief and moves quickly into the practical: what does the estate look like, when will it pay out, and what do we do in the meantime. The last part — the cash flow gap between the death and the distribution — is where advisers add the most value, and where the standard toolkit is often thinnest.",
      },
      { type: "h2", text: "The gap most clients don't anticipate" },
      {
        type: "p",
        html: "Most clients underestimate how long estate administration takes. They know a will exists, they know they're a beneficiary, and they assume distribution follows within a few months. The reality — 9 to 12 months on average, and 18 months or more where property is involved or the estate is contested — is a surprise. And it lands on top of grief, a shift in family dynamics, and often unexpected cash outflows: funeral costs, mortgage payments on inherited property, travel, and time off work. See our guide on <a href='/insights/how-long-does-estate-settlement-take-australia'>estate settlement timelines</a> for the detail worth sharing with clients.",
      },
      {
        type: "p",
        html: "For clients whose financial plan didn't anticipate this transition, the gap can drive suboptimal decisions: selling long-held investments at the wrong time, drawing down super early, taking on personal debt at high rates, or making rushed decisions about inherited property because holding costs are eating into liquidity.",
      },
      { type: "h2", text: "Framing the conversation" },
      { type: "p", html: "Three questions usually structure the discussion:" },
      {
        type: "ul",
        items: [
          "<strong>What are the client's actual cash flow needs over the next 12 to 18 months?</strong> Not just the shortfall today, but the shortfall projected across the likely administration period. Include holding costs on inherited property, ongoing living expenses if income has been disrupted by caring responsibilities, and any specific short-term goals (school fees, a planned purchase, debt paydown).",
          "<strong>What is the estate's likely liquidity profile?</strong> An estate with significant cash and liquid investments can often make interim distributions. An estate whose value is concentrated in property has less flexibility, and beneficiaries typically wait until property sells.",
          "<strong>What's the tax cost of raising cash from other sources?</strong> Selling personal investments to bridge the gap might crystallise capital gains that could have been deferred. Drawing from super has tax implications and permanent balance impacts. This is often the piece clients haven't thought through.",
        ],
      },
      {
        type: "callout",
        html: "The conversation isn't \"should the client access their inheritance early.\" It's \"what's the least costly way to fund the next 12 to 18 months, given the estate's timing.\" An inheritance advance is one option in that comparison.",
      },
      { type: "h2", text: "How inheritance advances fit into the toolkit" },
      {
        type: "p",
        html: "Where the estate is confirmed but the timing is uncertain, an inheritance advance can be an efficient way to unlock a portion of the entitlement now without the client having to disturb their existing financial position. The advance is:",
      },
      {
        type: "ul",
        items: [
          "<strong>Assessed on the estate</strong>, not the client's personal income or credit — which matters for clients whose income has been disrupted or who are already at capacity on personal borrowings.",
          "<strong>Non-recourse to the client's personal assets.</strong> The advance is repaid from the estate. If the estate produces less than expected, the client's repayment is capped at what they actually receive.",
          "<strong>Fixed in cost upfront.</strong> No variable rate risk, no compounding uncertainty. The client knows the total cost at each estimated settlement date at the outset.",
        ],
      },
      {
        type: "p",
        html: "Where a client's shortfall is $30,000 and their inheritance is $400,000, an advance is often cheaper on a total-cost basis than selling growth investments to raise the same amount — particularly if the sale would crystallise CGT.",
      },
      { type: "h2", text: "Where an advance isn't the right fit" },
      { type: "p", html: "Advances aren't universally appropriate. Cases where other options are usually better:" },
      {
        type: "ul",
        items: [
          "<strong>Very short administration periods.</strong> If the estate will settle in under 2 months and the client can bridge that with existing liquidity or a small buffer, the cost of an advance isn't justified.",
          "<strong>Contested estates with unclear entitlement.</strong> Where a family provision claim could materially reduce the client's share, an advance may not be available or may be sized down significantly.",
          "<strong>Clients with strong short-term liquidity.</strong> If the client has offset balances or accessible term deposits that don't disturb long-term positioning, that's usually cheaper.",
        ],
      },
      { type: "h2", text: "Tax and structural considerations" },
      { type: "p", html: "A few points worth flagging in client discussions:" },
      {
        type: "ul",
        items: [
          "An inheritance advance is not itself taxable. It's an advance against an entitlement, not income.",
          "Tax outcomes of the underlying inherited assets are unchanged by an advance. CGT on inherited property still applies as it would have; super tax treatment for non-dependants still applies.",
          "Where the client is inheriting property they intend to hold long-term, an advance can preserve the 2-year CGT main residence exemption window if the alternative is selling other assets under pressure.",
          "Advances don't affect Centrelink means-testing in the same way that a personal loan might — but confirm treatment case by case, particularly for age pension clients.",
        ],
      },
      { type: "h2", text: "Working with Inherita as a referral partner" },
      {
        type: "p",
        html: "Advisers who work with Inherita typically use the platform in three ways: (1) as a reference option to include in cash flow discussions with beneficiary clients, (2) as a direct referral where the client has a clear entitlement and a defined shortfall, and (3) as a follow-up to more urgent conversations where clients need to make property or investment decisions quickly.",
      },
      {
        type: "p",
        html: "We work directly with the client and (with consent) their solicitor and executor. Advisers stay in the loop and don't need to be involved operationally. If you'd like to understand more about how the assessment works and what kinds of estates fit, our <a href='/partners'>partners page</a> has more detail.",
      },
    ],
    cta: {
      text: "Have a client waiting on a distribution? We're happy to have a no-obligation conversation about whether an advance fits their situation.",
      linkText: "Get in touch →",
      href: "/contact",
    },
  },

  // ─── Article 18 ──────────────────────────────────────────────────────────────
  {
    slug: "executor-guide-managing-beneficiary-expectations",
    num: 18,
    audience: "referrer",
    title: "A guide for executors: managing beneficiary expectations during a long estate administration",
    summary:
      "A practical guide for executors on communicating with beneficiaries during a slow estate — timing, updates, and interim distributions.",
    h1: "A guide for executors: managing beneficiary expectations during a long estate administration",
    metaTitle: "Executor's Guide: Managing Beneficiary Expectations | Inherita",
    metaDescription:
      "A practical guide for executors on communicating with beneficiaries during a slow estate — timing, updates, and interim distributions.",
    readTime: 6,
    hasFAQSchema: false,
    body: [
      {
        type: "p",
        html: "Being an executor is often described as an honour. It's also, in reality, a job — one that combines legal responsibility, family dynamics, and (sometimes) years of steady work under pressure. The hardest part isn't usually the legal process. It's managing the expectations of beneficiaries who don't understand why things take so long, and who apply increasing pressure the longer the estate remains open.",
      },
      { type: "h2", text: "Why beneficiaries push" },
      {
        type: "p",
        html: "Most beneficiary pressure isn't about greed — it's about need. A beneficiary might be facing mortgage stress, holding costs on inherited property, funeral debts they've covered personally, or reduced income from time off work during a parent's final illness. Grief makes financial pressure sharper, and delay makes it worse.",
      },
      {
        type: "p",
        html: "Understanding the underlying pressure changes how you respond. A beneficiary asking \"when will this be finished\" for the fifth time often really means \"I need to know what to do about the mortgage that's due next week.\"",
      },
      { type: "h2", text: "Setting expectations early" },
      {
        type: "p",
        html: "The best time to manage beneficiary expectations is in the first weeks of administration — before the frustration has built. A short written note to beneficiaries, sent once you have the death certificate and before probate is applied for, typically covers:",
      },
      {
        type: "ul",
        items: [
          "Your role as executor, and (in broad terms) what you'll be doing",
          "The realistic timeline: 9 to 12 months for a standard estate, longer if property or disputes are involved — see our <a href='/insights/how-long-does-estate-settlement-take-australia'>estate settlement timeline guide</a> for the detail",
          "Why probate must come first (usually 4 to 8 weeks after application)",
          "What has to happen between probate and distribution",
          "How and when you'll communicate updates",
        ],
      },
      {
        type: "p",
        html: "Setting the 9 to 12 month expectation up front does more than manage impatience — it protects the beneficiaries who need to plan around it. A beneficiary who knows the estate won't distribute for a year makes different decisions than one who expects money in three months.",
      },
      {
        type: "callout",
        html: "Beneficiaries who receive one clear, honest early communication tend to be much easier to work with 6 months later than beneficiaries who received nothing and are now imagining the worst.",
      },
      { type: "h2", text: "The rhythm of updates" },
      {
        type: "p",
        html: "Regular updates — even when there's no significant news — prevent the vacuum that beneficiary anxiety fills. A short update every 6 to 8 weeks is usually enough. Include:",
      },
      {
        type: "ul",
        items: [
          "What has happened since the last update",
          "What's currently in progress and roughly when it will complete",
          "What's next on the timeline",
          "Anything the beneficiaries need to do or be aware of",
        ],
      },
      {
        type: "p",
        html: "Where progress has stalled — waiting on the ATO, waiting on a property valuation, waiting on a claim to expire — say so and explain why. \"Waiting\" is a much easier update to accept than silence.",
      },
      { type: "h2", text: "When to consider an interim distribution" },
      {
        type: "p",
        html: "Where the estate has liquid assets and all known debts are provided for, an interim distribution can be a good option. It reduces beneficiary pressure, provides genuine relief, and doesn't compromise the executor's obligations — provided appropriate reserves are held back for unpaid tax, ongoing costs, and potential claims.",
      },
      {
        type: "p",
        html: "Common circumstances where interim distributions work well:",
      },
      {
        type: "ul",
        items: [
          "The estate has significant cash on hand after debts are settled but before property has sold",
          "Probate has been granted and the family provision claim period has expired (or is close to expiring)",
          "The beneficiaries' entitlements are clear and undisputed",
          "You've received tax advice that a partial distribution won't create issues",
        ],
      },
      {
        type: "p",
        html: "Where an interim distribution isn't feasible, it's worth telling beneficiaries clearly what would need to change for one to be possible. That transparency itself reduces pressure.",
      },
      { type: "h2", text: "What to do when a beneficiary is genuinely stuck" },
      {
        type: "p",
        html: "Sometimes a beneficiary is facing real, imminent financial pressure that the estate simply can't relieve — property hasn't sold, an interim distribution isn't available, and you can't accelerate the process. In those cases, it's worth being aware that beneficiaries have external options beyond what the estate can provide:",
      },
      {
        type: "ul",
        items: [
          "A personal loan, if their credit and income allow",
          "A family loan from a co-beneficiary or relative",
          "An <a href='/inheritance-advance'>inheritance advance</a>, which is repaid directly from the estate at settlement",
        ],
      },
      {
        type: "p",
        html: "An executor doesn't need to recommend a particular option — but pointing a struggling beneficiary toward the fact that options exist, and letting them work it out with their own advisers, often defuses the situation. Where a beneficiary uses an inheritance advance, the executor is typically notified and pays the advance provider from the beneficiary's distribution at settlement.",
      },
      { type: "h2", text: "Dealing with the difficult beneficiary" },
      { type: "p", html: "Every estate has one, and every executor knows it. A few practical points:" },
      {
        type: "ul",
        items: [
          "<strong>Keep everything in writing.</strong> Verbal commitments and misremembered conversations are the source of most executor disputes. Update all beneficiaries by email, keep the record.",
          "<strong>Don't respond to pressure with acceleration.</strong> The temptation to skip steps to satisfy a demanding beneficiary is real. Don't. Executor liability is personal, and shortcuts create risk.",
          "<strong>Involve the solicitor when things escalate.</strong> A letter from an estate solicitor explaining the process often lands very differently than the same explanation from the executor personally.",
          "<strong>Remember the estate's obligations run to all beneficiaries.</strong> Favouring one to keep the peace is a governance failure.",
        ],
      },
    ],
    cta: {
      text: "Do you have a beneficiary who's under real financial pressure while the estate is being administered? Inherita's advance is designed for exactly this situation — repayable directly from the estate, with no impact on your executor obligations.",
      linkText: "Learn more about how it works →",
      href: "/partners",
    },
  },

  // ─── Article 19 ──────────────────────────────────────────────────────────────
  {
    slug: "smsf-adviser-member-death-mid-pension",
    num: 19,
    audience: "referrer",
    title: "SMSF advisers: what happens when an SMSF member dies mid-pension",
    summary:
      "When an SMSF member dies while drawing a pension, trustees face compressed timelines and compliance obligations. Here's what advisers need to work through.",
    h1: "SMSF advisers: what happens when an SMSF member dies mid-pension",
    metaTitle: "SMSF Member Death Mid-Pension: A Guide for Advisers | Inherita",
    metaDescription:
      "When an SMSF member dies mid-pension, trustees face compressed timelines and compliance obligations. Here's what advisers need to work through.",
    readTime: 6,
    hasFAQSchema: false,
    body: [
      {
        type: "p",
        html: "When an SMSF member dies while drawing a pension, the trustee faces a compressed set of decisions and obligations — most of which have to be worked through in the first few months, often while the surviving spouse or family is still adjusting to the death. For advisers, the mid-pension death case is where the standard death benefit process meets the pension rules, and the interaction between the two creates traps.",
      },
      { type: "h2", text: "The immediate compliance obligations" },
      {
        type: "p",
        html: "Once the trustee is notified of the member's death, several things need to happen relatively quickly:",
      },
      {
        type: "ul",
        items: [
          "<strong>The pension ceases</strong> (unless it's a reversionary pension automatically continuing to a reversionary beneficiary) — usually from the date of death, subject to fund deed.",
          "<strong>Minimum pension payment obligations up to the date of death</strong> must have been met for the concessional treatment of investment earnings to continue for that year.",
          "<strong>Fund investment earnings after death</strong> may lose their tax-exempt status unless the fund is treated as continuing in pension phase for the deceased member — this depends on whether there's a reversionary pension or a death benefit being paid as an income stream.",
          "<strong>The death benefit</strong> must be paid \"as soon as practicable\" — a phrase the ATO interprets generously in normal cases but with less patience where delays are avoidable.",
        ],
      },
      {
        type: "callout",
        html: "The single biggest planning point on an SMSF pension is whether it's reversionary. A properly structured reversionary pension continues to a nominated beneficiary automatically, keeps the fund in pension phase, and removes most of the timing pressure from the trustee.",
      },
      { type: "h2", text: "Reversionary vs non-reversionary pensions" },
      {
        type: "p",
        html: "The distinction is worth restating clearly because it changes almost everything about what happens next:",
      },
      {
        type: "ul",
        items: [
          "<strong>Reversionary pension.</strong> The pension automatically reverts to the nominated beneficiary — usually a spouse — on the member's death. The fund stays in pension phase, investment earnings remain tax-exempt (subject to the transfer balance cap), and there's no immediate cashout requirement. The reversionary beneficiary has 12 months before the reversionary balance counts against their own transfer balance cap.",
          "<strong>Non-reversionary pension.</strong> The pension ceases on death. The remaining balance becomes a death benefit that must be paid to eligible beneficiaries. The trustee decides who receives it — potentially subject to binding nominations — and pays it out either as a lump sum or (where the recipient is a dependant) as a new income stream in the recipient's name.",
        ],
      },
      { type: "h2", text: "The timing issue for beneficiaries" },
      {
        type: "p",
        html: "Where the death benefit is being paid as a lump sum to the estate, or to a non-dependant adult child, the beneficiary is looking at several months of processing before receiving funds. Even a straightforward SMSF death benefit takes 3 to 6 months from date of death to payment, because the trustee has to:",
      },
      {
        type: "ul",
        items: [
          "Confirm the member's binding nomination (if any) and its validity",
          "Identify all potential beneficiaries and invite claims where discretion applies",
          "Value the fund's assets as at the date of death",
          "Realise assets if the fund is illiquid (SMSF property is a common bottleneck)",
          "Prepare and lodge the required tax documentation",
          "Complete the fund's annual audit and return",
        ],
      },
      {
        type: "p",
        html: "Where the SMSF holds significant property, this can extend to a year or more — because the property may need to be sold before the death benefit can be paid in cash. This is often the moment where the beneficiary hits genuine cash flow pressure: they know the money is coming, they know the amount is significant, but they can't access it and can't plan around a hard date. See our guide on <a href='/insights/superannuation-death-benefits-payout-time'>super death benefit payout timelines</a> for the retail-fund equivalent.",
      },
      { type: "h2", text: "Non-dependant tax on SMSF death benefits" },
      {
        type: "p",
        html: "The same tax rules apply to SMSF death benefits as to retail fund benefits. Adult independent children of the deceased pay tax on the taxable component of the benefit at 15% plus Medicare on the taxed element, and 30% plus Medicare on any untaxed element.",
      },
      {
        type: "p",
        html: "For an SMSF that has accumulated large balances through years of contributions and asset growth, this can be a very large number. Advisers who have worked through recontribution strategies during the member's lifetime — deliberately converting taxable components to tax-free components — are usually rewarded on death, and the strategy is worth revisiting for older clients still in accumulation phase.",
      },
      { type: "h2", text: "Where an inheritance advance can bridge the gap" },
      {
        type: "p",
        html: "Where an SMSF death benefit is being paid to the estate — either because the nomination directed it, or because there's no valid nomination and the trustee determined the estate is the appropriate recipient — the benefit forms part of the estate for distribution purposes. An <a href='/inheritance-advance'>inheritance advance</a> can then be assessed against the beneficiary's confirmed entitlement, in the same way it would be for any other estate asset.",
      },
      {
        type: "p",
        html: "Where the benefit is being paid directly to a non-dependant adult child, the situation is slightly different — the payment is a super death benefit rather than an estate distribution. In those cases, we assess against the fund's confirmed intention (either via binding nomination or after the trustee's discretionary process has completed) rather than the raw expectation.",
      },
      { type: "h2", text: "Practical points for advisers" },
      { type: "p", html: "A few things worth building into an SMSF death process:" },
      {
        type: "ul",
        items: [
          "<strong>Ask about reversionary status before you need to know.</strong> Confirm on every review whether the pension is reversionary and, if so, that the beneficiary details are current.",
          "<strong>Track the fund's liquidity profile.</strong> A fund with 80% of its assets in a single property has a very different death planning problem than a fund with liquid investments.",
          "<strong>Get binding nominations reviewed regularly.</strong> Lapsing nominations are the source of a large share of avoidable SMSF death disputes.",
          "<strong>Talk to clients about the cash flow reality</strong> for non-dependant beneficiaries. Adult children waiting on a large SMSF death benefit have options — but they need to know them ahead of time, not while under pressure.",
        ],
      },
    ],
    cta: {
      text: "Have a client waiting on an SMSF death benefit that's tied up in illiquid assets? Inherita can advance against a confirmed entitlement — via the estate, or via a confirmed super pay-out.",
      linkText: "Get in touch →",
      href: "/contact",
    },
  },

  // ─── Article 20 ──────────────────────────────────────────────────────────────
  {
    slug: "inheritance-advance-property-deposit",
    num: 20,
    audience: "borrower",
    title: "Using an inheritance advance to fund a property deposit",
    summary:
      "Property markets don't wait for estates to settle. Here's how an inheritance advance can fund a deposit while the estate is still being administered.",
    h1: "Using an inheritance advance to fund a property deposit",
    metaTitle: "Using an Inheritance Advance for a Property Deposit | Inherita",
    metaDescription:
      "Buying property before your inheritance settles? An inheritance advance can fund the deposit while the mortgage still works — here's how to structure it.",
    readTime: 6,
    hasFAQSchema: true,
    quickAnswer:
      "An inheritance advance can be used to fund a property deposit while an estate is being settled. The advance is repaid from the estate at distribution — not from your income — which keeps your borrowing capacity for the mortgage intact. The key is getting the structure right with your mortgage broker before you commit.",
    body: [
      {
        type: "p",
        html: "Property markets don't wait for estates to settle. If you've found a home you want to buy — or you're being outbid because you don't have your deposit ready — the 9 to 12 months of estate administration between now and your inheritance can feel like a very expensive delay. For some beneficiaries, an inheritance advance is a way to close that gap: it unlocks a portion of the entitlement now, funds the deposit, and is repaid from the estate when it settles.",
      },
      {
        type: "p",
        html: "This is one of the more common ways beneficiaries use an advance — and it's also the use case where getting the structure right matters most, because the deposit is only one part of the transaction. The mortgage that sits behind it has to work too.",
      },
      { type: "h2", text: "Why timing matters for property buyers" },
      {
        type: "p",
        html: "The gap between finding a property and settling on it is usually 4 to 8 weeks — nowhere near enough time for a typical estate to distribute. Beneficiaries in this situation typically fall into one of a few groups:",
      },
      {
        type: "ul",
        items: [
          "First home buyers whose deposit comes largely or entirely from the expected inheritance",
          "Existing owners upgrading or downsizing, where the inheritance was meant to bridge the deposit and stamp duty on the new property",
          "Buyers wanting to purchase without selling their current property first, using the inheritance instead of bridging finance",
          "Investors wanting to add a property while prices or a specific opportunity are available",
        ],
      },
      {
        type: "p",
        html: "In each case, the underlying financial position is the same — the money is coming, the beneficiary is entitled to it, and the estate's timing is the only thing standing between them and the purchase.",
      },
      { type: "h2", text: "How the advance fits into a property purchase" },
      {
        type: "p",
        html: "An inheritance advance provides a lump sum now, drawn against your confirmed entitlement from the estate. That lump sum can be used for any purpose — including funding a property deposit. Because the advance is repaid from the estate rather than from your income, it doesn't create an ongoing repayment obligation that would reduce your borrowing capacity for the mortgage.",
      },
      { type: "p", html: "The typical structure looks like:" },
      {
        type: "ul",
        items: [
          "Inherita advances a portion of your entitlement — say, 30% to 50% of the confirmed inheritance — to cover the deposit and associated costs (stamp duty, legal, moving).",
          "Your mortgage broker arranges the balance of the purchase price through a standard home loan, assessed against your income and existing commitments.",
          "You settle on the property using the deposit from the advance plus the mortgage funds.",
          "When the estate settles, the advance is repaid directly from your inheritance. You keep whatever's left over.",
        ],
      },
      {
        type: "callout",
        html: "The key to making this work is that the advance is treated correctly by the mortgage lender. Some lenders treat it as a gift; some treat it as genuine savings if the estate is documented; some want to see the underlying entitlement. A broker familiar with the structure will know which lender to approach.",
      },
      { type: "h2", text: "Working with your mortgage broker" },
      {
        type: "p",
        html: "The biggest planning point is the mortgage — not the advance. Most beneficiaries think about the deposit gap first, but the mortgage is where structural issues can derail the purchase. Some considerations to work through with your broker:",
      },
      {
        type: "ul",
        items: [
          "<strong>How the deposit is characterised.</strong> If your broker submits the advance as a personal loan, the mortgage lender will treat it as a debt and reduce your borrowing capacity accordingly. If it's characterised as an advance against a confirmed inheritance entitlement — with documentation from the estate solicitor — some lenders will treat it more favourably.",
          "<strong>Servicing.</strong> An inheritance advance has no monthly repayments — but the mortgage lender may still want to see how you'd service the mortgage if the estate distribution were delayed. Being able to show income covers the mortgage in the interim removes that concern.",
          "<strong>Genuine savings requirements.</strong> Some lenders require 5% of the purchase price to be \"genuine savings\" — money you've held for 3+ months. An inheritance advance won't satisfy that on its own, so if you're relying entirely on the advance for the deposit, choose a lender who accepts equity-substitute structures.",
          "<strong>LMI implications.</strong> If the advance takes your deposit to 20% and avoids LMI, the total cost of ownership drops meaningfully. If it takes you from 5% to 12%, the LMI saving may or may not exceed the cost of the advance — worth modelling.",
        ],
      },
      { type: "h2", text: "How much can be advanced?" },
      {
        type: "p",
        html: "Inherita typically advances up to 50% of your confirmed entitlement, subject to the estate's structure. In practice, most property-deposit cases involve advancing enough for the deposit, stamp duty, and a modest buffer — not the maximum available. Advancing more than you need adds cost with no benefit, so we work backward from the deposit target rather than forward from the entitlement.",
      },
      {
        type: "p",
        html: "The confirmed entitlement matters. Where a will names you clearly and the estate is straightforward, we can assess quickly. Where the estate is contested or your share is uncertain, we assess against the minimum you're likely to receive after all reasonable adjustments. That may reduce the amount available.",
      },
      { type: "h2", text: "What if the estate takes longer than expected?" },
      {
        type: "p",
        html: "Cost is a function of time. The Inherita advance has a fixed cost at each estimated settlement date, and if the estate takes longer, interest accrues until settlement. Your repayment is always capped at your share of the estate — so extra time never means paying out of pocket.",
      },
      {
        type: "p",
        html: "For property purchases specifically, this matters because settlement risk is real. Executors can and do face delays, and beneficiaries planning around a specific date should build in a buffer. See our guide on <a href='/insights/how-long-does-estate-settlement-take-australia'>estate settlement timelines</a>. If you expect distribution in 6 months, plan around 9. If you expect 9, plan around 12.",
      },
    ],
    faqs: {
      title: "Frequently asked questions",
      items: [
        {
          q: "Can I use the advance for stamp duty and legals as well as the deposit?",
          a: "Yes. The advance is a lump sum — you can use it for any part of the acquisition cost.",
        },
        {
          q: "Will my mortgage lender allow this?",
          a: "Most will, if the deposit is structured correctly. This is a broker-led question and worth having early — before you commit to a purchase.",
        },
        {
          q: "What happens to my inheritance after the advance is repaid?",
          a: "Whatever's left after repayment is yours, distributed in the normal way. If you advanced $200,000 against an entitlement of $500,000, roughly $300,000 (less accrued cost) is still yours at settlement.",
        },
        {
          q: "Is there a minimum or maximum advance?",
          a: "Minimums start from around $20,000. Maximums depend on the size of your confirmed entitlement and the estate structure. Talk to us about your specific situation.",
        },
      ],
    },
    cta: {
      text: "Buying property before your inheritance settles? Inherita can advance the deposit against your confirmed entitlement — with no monthly repayments and no impact on your borrowing capacity for the mortgage.",
      linkText: "Check your eligibility →",
      href: "/apply",
    },
  },
];

export function getArticle(slug: string): Article | null {
  return articles.find((a) => a.slug === slug) ?? null;
}

export function getAllSlugs(): string[] {
  return articles.map((a) => a.slug);
}
