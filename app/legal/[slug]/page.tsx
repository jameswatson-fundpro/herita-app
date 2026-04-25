import Link from 'next/link';
import { notFound } from 'next/navigation';
import { SiteNav } from '@/components/site-nav';
import { SiteFooter } from '@/components/site-footer';
import { SITE } from '@/lib/site';

const CONTENT: Record<string, { title: string; updated: string; sections: { heading: string; body: string[] }[] }> = {
  privacy: {
    title: 'Privacy Policy',
    updated: 'January 2025',
    sections: [
      { heading: 'Introduction', body: [
        `${SITE.brand.legalName} ("Herita", "we", "us") is committed to protecting your personal information in accordance with the Privacy Act 1988 (Cth) and the Australian Privacy Principles.`,
        `This policy explains what personal information we collect, why we collect it, how we use and disclose it, and how you can access or correct it.`,
      ] },
      { heading: 'Information we collect', body: [
        `We collect personal and sensitive information necessary to assess your application, verify identity, and administer your facility. This includes contact details, identity documents, financial information, estate documentation, and information about your relationship to the estate.`,
        `Where information relates to a third party (such as the deceased, an executor, or another beneficiary), we collect it only with appropriate authority.`,
      ] },
      { heading: 'How we use your information', body: [
        `We use your information to assess applications, verify identity and entitlement, administer the facility, comply with our obligations under the National Consumer Credit Protection Act 2009 (Cth), and communicate with you about your application or facility.`,
      ] },
      { heading: 'Disclosure', body: [
        `We may disclose your information to executors, solicitors, and trustee firms involved in the estate; to identity-verification providers; to our funders and security registries; and to professional advisers and regulators where required by law.`,
      ] },
      { heading: 'Security and storage', body: [
        `Information is stored securely on Australian-hosted infrastructure with restricted access. We retain records as required by law and dispose of them securely when no longer needed.`,
      ] },
      { heading: 'Access, correction and complaints', body: [
        `You may request access to or correction of your information at any time by emailing privacy@herita.com.au. If you have a complaint, see our Complaints Policy or contact the Office of the Australian Information Commissioner at oaic.gov.au.`,
      ] },
    ],
  },
  'credit-guide': {
    title: 'Credit Guide',
    updated: 'January 2025',
    sections: [
      { heading: 'About us', body: [
        `${SITE.brand.legalName} (ACN ${SITE.brand.acn}) is an Authorised Credit Representative (Credit Representative number to be advised) of the holder of Australian Credit Licence ${SITE.brand.acl}.`,
      ] },
      { heading: 'Our credit activities', body: [
        `We provide non-recourse advances secured against confirmed inheritance entitlements, and estate facilities to executors. We do not provide advice on whether a particular product is suitable for your circumstances; you should obtain independent legal and financial advice before entering into a credit contract.`,
      ] },
      { heading: 'Fees and charges', body: [
        `A setup fee of 2% of the advance is charged at funding. Interest accrues monthly at the rate set out in your offer. All fees and interest are repaid from the estate at settlement; no monthly repayments are required during the term.`,
      ] },
      { heading: 'Commissions', body: [
        `We do not pay commissions to introducers or referrers in a manner that creates a conflict with your interests. Where a referral fee is paid, it is disclosed in your offer document.`,
      ] },
      { heading: 'Internal and external dispute resolution', body: [
        `If you have a complaint, please contact us first — see our Complaints Policy. If we cannot resolve your complaint, you may escalate to the Australian Financial Complaints Authority (AFCA) at afca.org.au.`,
      ] },
    ],
  },
  terms: {
    title: 'Terms of Use',
    updated: 'January 2025',
    sections: [
      { heading: 'Use of this website', body: [
        `By using herita.com.au you agree to these Terms. The site is provided for general information only and does not constitute financial product advice. We may amend these Terms from time to time; the current version applies.`,
      ] },
      { heading: 'No advice', body: [
        `Information on this site is general in nature and does not take into account your objectives, financial situation or needs. Calculator outputs are indicative only — your actual offer will reflect the assessment of your application.`,
      ] },
      { heading: 'Intellectual property', body: [
        `All content on this site, including text, graphics, logos and the Herita word and figurative marks, is owned by ${SITE.brand.legalName} or its licensors. You may view and print pages for your own non-commercial use.`,
      ] },
      { heading: 'Liability', body: [
        `To the maximum extent permitted by law, we exclude liability for any loss arising from use of this site, except liability that cannot lawfully be excluded.`,
      ] },
    ],
  },
  complaints: {
    title: 'Complaints Policy',
    updated: 'January 2025',
    sections: [
      { heading: 'Talk to us first', body: [
        `If something has gone wrong, please tell us. Email complaints@herita.com.au or call us during business hours. We will acknowledge your complaint within one business day.`,
      ] },
      { heading: 'Our process', body: [
        `A senior team member, independent of the matter where possible, reviews every complaint. We aim to resolve complaints within 21 days; complex matters may take up to 30 days, in which case we will keep you informed.`,
      ] },
      { heading: 'External review', body: [
        `If we cannot resolve your complaint, or you are not satisfied with our response, you may refer the matter to the Australian Financial Complaints Authority — afca.org.au — at no cost to you.`,
      ] },
    ],
  },
  'target-market': {
    title: 'Target Market Determination',
    updated: 'January 2025',
    sections: [
      { heading: 'About this document', body: [
        `This Target Market Determination (TMD) is issued under section 994B of the Corporations Act 2001 (Cth) and describes the class of consumers for whom our products are likely to be appropriate.`,
      ] },
      { heading: 'Inheritance Advance — target market', body: [
        `Beneficiaries of a deceased estate where probate has been granted or is reasonably expected, where the consumer requires liquidity ahead of estate settlement, and where the advance is secured against the consumer's confirmed share of the estate.`,
        `The product is not designed for consumers seeking ongoing credit, consumers without a confirmed entitlement, or estates subject to material dispute.`,
      ] },
      { heading: 'Executor Estate Loan — target market', body: [
        `Executors of professionally administered estates who require funding to cover legitimate estate administration costs. The product is not designed for executors seeking funding for personal expenses or for estates with insufficient liquid assets at settlement.`,
      ] },
      { heading: 'Distribution and review', body: [
        `Distribution is direct via this website and via referrals from regulated estate professionals. We review this TMD at least annually and on the occurrence of any review trigger as described in our internal procedures.`,
      ] },
    ],
  },
};

export function generateStaticParams() {
  return SITE.legal.pages.map((p) => ({ slug: p.slug }));
}

export default function LegalPage({ params }: { params: { slug: string } }) {
  const c = CONTENT[params.slug];
  if (!c) notFound();
  return (
    <>
      <SiteNav />
      <main>
        <section style={{ padding: '60px 0 32px', borderBottom: '1px solid var(--hairline)' }}>
          <div className="container-sm">
            <div className="eyebrow">Legal</div>
            <h1 style={{ fontFamily: 'var(--font-display)', fontWeight: 400, fontSize: 'clamp(44px, 6vw, 72px)', lineHeight: 1, margin: '12px 0 16px', letterSpacing: '-0.01em' }}>
              {c.title}
            </h1>
            <p style={{ color: 'var(--muted)', fontSize: 14 }}>Last updated · {c.updated}</p>
          </div>
        </section>
        <section style={{ padding: '40px 0 70px' }}>
          <div className="container-sm">
            {c.sections.map((s) => (
              <div key={s.heading} style={{ marginBottom: 36 }}>
                <h2 style={{ fontFamily: 'var(--font-display)', fontWeight: 500, fontSize: 28, margin: '0 0 14px', lineHeight: 1.2 }}>
                  {s.heading}
                </h2>
                {s.body.map((p, i) => (
                  <p key={i} style={{ lineHeight: 1.7, color: 'var(--text)', fontSize: 16, margin: '0 0 14px' }}>
                    {p}
                  </p>
                ))}
              </div>
            ))}
            <div style={{ marginTop: 40, paddingTop: 20, borderTop: '1px solid var(--hairline)', display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', gap: 12 }}>
              <Link href="/" style={{ color: 'var(--muted)', fontSize: 14 }}>← Back to home</Link>
              <div style={{ display: 'flex', gap: 18, flexWrap: 'wrap' }}>
                {SITE.legal.pages.filter((p) => p.slug !== params.slug).map((p) => (
                  <Link key={p.slug} href={`/legal/${p.slug}`} style={{ color: 'var(--muted)', fontSize: 14 }}>{p.title}</Link>
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
