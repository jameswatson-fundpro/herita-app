// Site copy and constants. Single source of truth for marketing strings.

export const SITE = {
  brand: {
    name: 'Herita',
    legalName: 'Herita Lending Pty Ltd',
    acn: 'XXX XXX XXX',
    acl: 'XXXXXX',
  },
  hero: {
    title: 'Your inheritance,\nwhen you need it.',
    lead: 'Estate settlement takes time. We enable early access to your confirmed inheritance — unlock funds today and repay us when the estate is finalised.',
  },
  trustKpis: [
    ['Advance up to', '50%'],
    ['Initial decision', '48 hours'],
    ['Repayment', 'Direct from the estate (you make no monthly payments)'],
  ] as const,
  howItWorks: [
    ['Tell us about the estate', 'Complete a straightforward online application — usually takes around 10 minutes. We ask about the estate, not your income or employment.'],
    ['Share your documents', "Send us the estate documents — will, death certificate and probate paperwork. We'll tell you exactly what we need."],
    ['Receive a decision', "Our team reviews every application personally. You'll have an initial answer within 48 hours."],
    ['Access your funds', 'Once approved (and contracts are signed), funds are transferred directly to your account the next business day.'],
  ] as const,
  whyInherit: [
    ['Capped at your share, always', 'The total you repay will never exceed your inheritance. Non-recourse lending, secured against the estate.'],
    ['Assessed on your inheritance, not your income', "No payslips required. We assess what you're entitled to from the estate."],
    ['No repayments until the estate settles', 'The advance, fees and interest are all repaid when the estate finalises. Nothing comes out of your pocket in the meantime.'],
  ] as const,
  products: [
    {
      slug: 'inheritance-advance',
      eyebrow: 'For Beneficiaries',
      title: 'Inheritance Advance',
      lead: "Access up to 50% of your inheritance before the estate settles. Assessed on what you're owed, not what you earn.",
      bullets: [
        'Up to 50% of your expected share',
        'No income verification required',
        'No monthly repayments',
        'Non-recourse — repayment capped at your share',
        'Initial decision within 48 hours',
      ],
      secondaryTitle: 'How repayment works',
      secondaryText: 'The advance, fees, and interest are all repaid from the estate when it settles. The product is non-recourse — your liability is limited to your inheritance share, and your other assets are never at risk.',
    },
    {
      slug: 'executor-loan',
      eyebrow: 'For Executors',
      title: 'Executor Estate Loan',
      lead: 'Cover estate administration costs without funding them personally. Legal fees, probate, property maintenance — drawn from the estate, not your pocket.',
      bullets: [
        'Cover probate and legal costs',
        'Fund property maintenance and repairs',
        'No personal liability',
        'Repaid from estate proceeds at settlement',
        'Straightforward application process',
      ],
      secondaryTitle: 'Designed for executors',
      secondaryText: 'Executors are often required to fund administration costs personally and reclaim them from the estate later — a process that can take months. The Executor Estate Loan removes that burden, drawing against the estate.',
    },
  ] as const,
  moneyUses: ['Home deposit', 'Essential repairs', 'Education fees', 'Funeral costs', 'Property maintenance', 'Legal fees'] as const,
  partners: {
    valueProps: [
      ['For your client', 'Up to 50% advance', 'Clients can access half of their expected inheritance now — no income verification, no assets to pledge.'],
      ['For the estate', 'No disruption', 'The advance is repaid directly from the estate at distribution. No impact on other beneficiaries.'],
      ['For you', 'Minimal involvement', 'As executor you sign a short, plain-language deed acknowledging the arrangement. We handle the rest.'],
    ] as const,
    trust: [
      ['Professionally managed estates only', 'We only advance against estates managed by a professional executor. This reduces the risk of disputes.'],
      ['Security registered on the PPSR', 'Our security interest is formally registered, giving all parties confidence in the arrangement.'],
      ['Regulated under the NCCP Act', 'We operate under the National Consumer Credit Protection Act — responsible lending obligations apply to every advance.'],
      ['Conservative lending limits', 'Advances are capped at 50% of assessed estate value, with discount factors per asset class.'],
    ] as const,
  },
  faqs: [
    {
      category: 'About inheritance advances',
      items: [
        {
          q: 'How is an inheritance advance different from a traditional loan?',
          a: 'Traditional loans assess your personal income and assets to determine repayment ability, and typically require security. An inheritance advance evaluates your entitlement from a deceased estate instead. There are no monthly repayments — the advance, fees, and interest are repaid only when the estate distributes.',
        },
        {
          q: 'Who is an inheritance advance for?',
          a: 'Any individual who is a beneficiary of a deceased estate can apply. You do not need to meet standard lending criteria such as minimum income or employment status.',
        },
        {
          q: 'When can I apply?',
          a: "You can apply as soon as you know you are entitled to an inheritance. You will need a will (if one exists), a death certificate, and a basic picture of the estate's assets and liabilities.",
        },
        {
          q: 'What can I use the funds for?',
          a: 'Funds are unrestricted — beneficiaries commonly use advances for home deposits, essential repairs, education fees, funeral costs, or everyday living expenses. Herita is a responsible lender and will consider whether the intended use is in your best interests.',
        },
        {
          q: 'What if there are other beneficiaries?',
          a: 'Multiple beneficiaries can each apply independently based on their own share of the estate. One beneficiary taking an advance does not affect another beneficiary\'s entitlement.',
        },
        {
          q: 'Will the other beneficiaries know I have taken an advance?',
          a: 'Other beneficiaries will not be notified by Herita. The executor of the estate will need to be aware so that repayment can be made from your share at distribution.',
        },
        {
          q: 'Will my advance affect what other beneficiaries receive?',
          a: 'No. Repayment is made from your share of the estate only, leaving other beneficiaries\' distributions unchanged.',
        },
      ],
    },
    {
      category: 'Eligibility',
      items: [
        {
          q: 'My credit history is poor — can I still apply?',
          a: 'Our assessment focuses primarily on the value of your inheritance rather than your personal financial history. We conduct a credit check as part of our responsible lending obligations, but a poor credit history does not automatically disqualify you.',
        },
        {
          q: 'Will you decline my application based on my income or employment?',
          a: 'No. Our lending decisions are based on your assessed inheritance entitlement, not your employment status or income.',
        },
        {
          q: 'Can I apply if there is no will?',
          a: 'Yes, though applications on intestate estates (no will) take longer to assess, as we need to confirm your entitlement through other means.',
        },
        {
          q: 'Do I need a professional executor managing the estate?',
          a: 'Yes. We require at least one professional to be involved in estate administration — a professional executor, probate lawyer, or conveyancing solicitor. This is a security requirement that protects all parties.',
        },
      ],
    },
    {
      category: 'How much you can borrow',
      items: [
        {
          q: 'How much can I borrow?',
          a: 'Up to 50% of your assessed share of the estate, after accounting for estate liabilities and applicable discount factors by asset class. Eligible assets include real property, cash, listed investments, and superannuation. The minimum advance is $30,000.',
        },
        {
          q: 'How quickly will I receive funds?',
          a: 'Once your application is approved and contracts are signed, funds are typically transferred to your account the next business day. We aim to provide an initial decision within 48 hours of receiving your application.',
        },
      ],
    },
    {
      category: 'Costs',
      items: [
        {
          q: 'How much does an advance cost?',
          a: 'Herita charges a one-time setup fee of 2% of the advance amount (minimum $1,500), plus simple monthly interest of 2% per month on the outstanding advance. Both the setup fee and interest are paid only when your inheritance is distributed — nothing is due in the meantime.',
        },
        {
          q: 'Do you charge simple or compound interest?',
          a: 'We charge simple interest only. Interest is calculated on the original advance amount each month — we do not charge interest on accrued interest.',
        },
        {
          q: 'What should I consider before taking an advance?',
          a: 'The advance reduces the total inheritance you ultimately receive, because repayment includes the advance amount, setup fee, and accrued interest. The longer the estate takes to settle, the more interest accumulates. We recommend using our calculator to estimate the total cost before applying.',
        },
      ],
    },
    {
      category: 'Repayment',
      items: [
        {
          q: 'When do I repay the advance?',
          a: 'Repayment is made directly from your share of the estate when it is ready for distribution. You make no payments in the meantime.',
        },
        {
          q: 'Are there early repayment fees?',
          a: 'No. You can repay the advance at any time with no penalty — you pay only the outstanding advance amount plus interest accrued to the repayment date.',
        },
        {
          q: "What happens if my final inheritance doesn't cover the amount owed?",
          a: "Provided you are not in default under your agreement, this risk is borne by Herita, not you. The advance is non-recourse — your liability is limited to your share of the estate, and your other personal assets are never at risk.",
        },
        {
          q: 'What if I change my mind after receiving the funds?',
          a: 'You can repay the advance at any time. There are no early repayment fees — you simply return the advance amount plus interest and the setup fee accrued to the date of repayment.',
        },
      ],
    },
  ],
  legal: {
    pages: [
      { slug: 'privacy', title: 'Privacy Policy' },
      { slug: 'credit-guide', title: 'Credit Guide' },
      { slug: 'terms', title: 'Terms of Use' },
      { slug: 'complaints', title: 'Complaints Policy' },
      { slug: 'target-market', title: 'Target Market Determination' },
    ] as const,
  },
} as const;

export type ProductSlug = (typeof SITE.products)[number]['slug'];
