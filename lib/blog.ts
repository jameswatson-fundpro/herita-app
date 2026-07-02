export type Block =
  | { type: "p"; html: string }
  | { type: "h2"; text: string }
  | { type: "ul"; items: string[] }
  | { type: "callout"; html: string }
  | { type: "table"; rows: [string, string, ("bold" | "bg-linen" | "bg-alt")?][] }
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
];

export function getArticle(slug: string): Article | null {
  return articles.find((a) => a.slug === slug) ?? null;
}

export function getAllSlugs(): string[] {
  return articles.map((a) => a.slug);
}
