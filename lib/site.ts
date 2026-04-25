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
    lead: 'Estate settlement takes time. We advance funds against your confirmed inheritance — no monthly repayments, and everything settles when the estate finalises.',
  },
  trustKpis: [
    ['Advance up to', '50%'],
    ['Initial decision', '48 hours'],
    ['Repayment', 'From estate only'],
    ['Your liability', 'Capped at your share'],
  ] as const,
  howItWorks: [
    ['Tell us about the estate', 'Complete a straightforward online application — usually around 10 minutes. We ask about the estate, not your income or employment.'],
    ['Share your documents', "Upload the estate documents you have — a Will, death certificate, or probate paperwork. We'll tell you exactly what we need."],
    ['Receive a decision', "Our team reviews every application personally. You'll have an initial answer within 48 hours."],
    ['Access your funds', 'Once approved, funds are transferred directly to your account the next business day.'],
  ] as const,
  whyInherit: [
    ['Capped at your share, always', 'The total you repay will never exceed your inheritance. Non-recourse lending, secured against the estate only — your other assets are never at risk.'],
    ['Assessed on your inheritance, not your income', "No payslips required. We assess what you're entitled to from the estate — nothing more."],
    ['No repayments until the estate settles', 'The advance, fees, and interest are all repaid when the estate finalises. Nothing comes out of your pocket in the meantime.'],
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
