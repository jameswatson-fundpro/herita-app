import Link from 'next/link';
import { notFound } from 'next/navigation';
import { SiteNav } from '@/components/site-nav';
import { SiteFooter } from '@/components/site-footer';
import { SITE } from '@/lib/site';

const CONTENT: Record<string, { title: string; updated: string; sections: { heading: string; body: string[] }[] }> = {
  privacy: {
    title: 'Privacy and Credit Reporting Policy and Website Terms of Use',
    updated: '23 May 2025',
    sections: [
      {
        heading: '',
        body: [
          `<p>This policy sets out how Trivaro Lending Pty Ltd ACN 687 211 276 and Trivaro Pty Ltd ACN 685 375 544 (Credit Representative 569230) and our related businesses (<strong>we/us/our</strong>) collect, use and disclose the personal information (including credit-related information) we hold about you, including how your personal information will be treated as you access and interact with this website which is operated by us.</p>`,
        ],
      },
      {
        heading: 'Our commitment to protect your privacy',
        body: [
          `<p>We recognise that any personal information we collect about you will only be used for the purposes we have collected it for or as allowed under the law. It is important to us that you are confident that any personal information we hold about you will be treated in a way which ensures protection of your personal information.</p>`,
          `<p>We are committed to protecting your privacy and personal information by abiding by the Australian Privacy Principles (APPs), the <em>Privacy Act 1988</em> (Cth) (<strong>Privacy Act</strong>), the Privacy (Credit Reporting) Code 2024 (<strong>Credit Reporting Code</strong>) and any other relevant law.</p>`,
        ],
      },
      {
        heading: 'Personal information',
        body: [
          `<p>When we refer to <strong><em>personal information</em></strong>, we mean information from which your identity is reasonably apparent, which may include information or an opinion that relates to you. The personal information we hold that relates to you may also include credit-related information.</p>`,
          `<p><strong><em>Credit-related information</em></strong> means:</p>`,
          `<ul>
            <li><strong><em>Credit information</em></strong>, which is information which includes your identity; the type, terms and maximum amount of credit provided to you, including when that credit was provided and when it was repaid; repayment history information, <strong>financial hardship information</strong> (including information that any repayments are affected by a financial hardship arrangement), default information (including overdue payments); payment information; new arrangement information; details of any serious credit infringements; court proceedings information; personal insolvency information and publicly available information; and</li>
            <li><strong><em>Credit eligibility information,</em></strong> which is credit reporting information supplied to us by a credit reporting body, and any information that we derive from it.</li>
          </ul>`,
          `<p>We use your credit-related information to assess your eligibility to be provided with finance. Usually, credit-related information is exchanged between credit and finance providers and credit reporting bodies.</p>`,
          `<p>The kinds of personal information we may collect about you include your name, date of birth, address, account details, occupation, and any other information we made need to identify you. When you use our website or mobile applications, we may collect information about your location or activity, including IP address, telephone number and whether you have accessed third party sites, the date and time of visits, the pages that are viewed, information about the device used, and other user location information. We collect some of this information using cookies.</p>`,
          `<p>If you are applying for finance or providing a guarantee, we may also collect the ages and number of your dependants and cohabitants, the length of time you have resided at your current address, your employment details, and proof of earnings and expenses. If you apply for any insurance product through us, we may collect information about what is being insured, the beneficiaries, and your health information, including medical and lifestyle information from you or your health professionals. We will only collect health information from you with your consent.</p>`,
        ],
      },
      {
        heading: 'Why we collect your personal information',
        body: [
          `<p>We collect personal information for the purposes of assessing your application for finance and managing that finance, establishing your identity, contacting you, managing our risk, and to comply with our legal obligations.</p>`,
          `<p>We may also collect your personal information for the purposes of direct marketing and managing our relationship with you. Improvements in technology also enable organisations like ours to collect and use information to get a more integrated view of our customers. We may offer you other products and services from time to time.</p>`,
        ],
      },
      {
        heading: 'How we collect your personal information',
        body: [
          `<p>Where reasonable and practical, we will collect your personal information directly from you or via your use of our services. We may collect information about you that is publicly available, such as from public registers or social media, or made available by third parties. We may also collect your personal information from credit reporting bodies, mortgage and finance brokers, employers, and other people such as accountants and lawyers.</p>`,
          `<p>We will only collect personal information that is reasonably necessary for, or directly related to, our functions or activities.</p>`,
          `<p>We will not ask you to supply personal information publicly over Facebook, Twitter or any other social media platform that we use.</p>`,
        ],
      },
      {
        heading: 'Information from third parties',
        body: [
          `<p>Our website may contain links to the websites of third party providers of goods and services (<strong>Third Party Websites</strong>). If you have accessed Third Party Websites through our website, and if those third parties collect information about you, we may also collect or have access to that information as part of our arrangements with those third parties.</p>`,
          `<p>Where you access a Third Party Website from our website, cookie information, information about your preferences or other information you have provided about yourself may be shared between us and the third party.</p>`,
        ],
      },
      {
        heading: 'Advertising and tracking',
        body: [
          `<p>When you view our advertisements on a Third Party Website, the advertising company may use 'cookies' and in some cases 'web beacons' to collect information such as:</p>`,
          `<ul>
            <li>the server your computer is logged onto;</li>
            <li>your browser type;</li>
            <li>the date and time of your visit; and</li>
            <li>the performance of their marketing efforts.</li>
          </ul>`,
          `<p>When you access our website after viewing one of our advertisements on a Third Party Website, the advertising company collects information on how you utilise our website (eg which pages you view) and whether you complete an online application.</p>`,
        ],
      },
      {
        heading: 'Cookies',
        body: [
          `<p>We use 'cookies' to provide you with better and more customised service and with a more effective website.</p>`,
          `<p>A 'cookie' is a small text file placed on your computer by our web page server. A cookie can later be retrieved by our webpage servers. Cookies are frequently used on websites, and you can choose if and how a cookie will be accepted by configuring your preferences and options in your internet browser.</p>`,
          `<p>We use cookies for different purposes such as:</p>`,
          `<ul>
            <li>to allocate a unique number to your internet browsers;</li>
            <li>to customise our website for you;</li>
            <li>for statistical purposes;</li>
            <li>to identify if you have accessed a Third Party Website; and</li>
            <li>for security purposes.</li>
          </ul>`,
        ],
      },
      {
        heading: 'Disclosing your personal information',
        body: [
          `<p>We may disclose your personal information:</p>`,
          `<ul>
            <li>to prospective funders or other intermediaries in relation to your finance requirements;</li>
            <li>to other organisations that are involved in managing or administering your finance, such as third party suppliers, printing and postal services, call centres, lenders, mortgage insurers, trade insurers and credit reporting bodies;</li>
            <li>to associated businesses that may want to market products to you;</li>
            <li>to companies that provide information and infrastructure systems to us;</li>
            <li>to our agents, contractors or external service providers to outsource certain functions, for example, statement production, debt recovery and information technology support;</li>
            <li>to any person who represents you, such as finance brokers, lawyers, mortgage brokers, guardians, persons holding power of attorney and accountants;</li>
            <li>to anyone where you have provided us consent;</li>
            <li>to other guarantors or borrowers (if more than one);</li>
            <li>to borrowers or prospective borrowers, including in relation to any credit you guarantee or propose to guarantee;</li>
            <li>to our auditors, insurers, re-insurers and health care providers;</li>
            <li>to claims related providers, such as assessors and investigators who help us with claims;</li>
            <li>where we are authorised to do so by law, such as under the <em>Anti-Money Laundering and Counter Terrorism Financing Act 2006</em> (Cth), or by government and law enforcement agencies or regulators;</li>
            <li>to investors, agents or advisers, trustees, rating agencies or any entity that has an interest in your finance or our business;</li>
            <li>to other financial institutions, for example to process a claim for mistaken payment;</li>
            <li>to organisations that provide products or services used or marketed by us; or</li>
            <li>to your employer, former employer, referees or identity verification services.</li>
          </ul>`,
          `<p>Prior to disclosing any of your personal information to another person or organisation, we will take all reasonable steps to satisfy ourselves that:</p>`,
          `<ol class="labeled">
            <li><span class="lbl">(a)</span><span>the person or organisation has a commitment to protecting your personal information at least equal to our commitment; or</span></li>
            <li><span class="lbl">(b)</span><span>you have consented to us making the disclosure.</span></li>
          </ol>`,
          `<p>We do not generally disclose personal information obtained from cookies to overseas entities in the course of our activities.</p>`,
          `<p>Please contact us on by phone on 0410 303 775 or by email at inherit@trivaro.com.au if you would like further information.</p>`,
        ],
      },
      {
        heading: 'Credit-related information',
        body: [
          `<p>We exchange credit-related information for the purposes of assessing your application for finance and managing that finance. If you propose to be a guarantor, one of our checks may involve obtaining a credit report about you.</p>`,
          `<p>The credit-related information we hold about you may be held by us in electronic form on our secure servers and may also be held in paper form. We may use cloud storage to store this credit-related information. The cloud storage and the IT servers may be located outside Australia.</p>`,
          `<p>When we obtain credit eligibility information from a credit reporting body about you, we may also seek publicly available information and information about any serious credit infringement that you may have committed.</p>`,
          `<p>We may disclose your credit-related information to overseas entities that provide support functions to us. You may obtain more information about these entities by contacting us. If we disclose your credit-related information to entities that are located overseas, we will take reasonable steps to ensure that the overseas entity does not breach the Australian Privacy Principles in relation to your credit-related information.</p>`,
        ],
      },
      {
        heading: 'Notifiable matters',
        body: [
          `<p>The law requires us to advise you of 'notifiable matters' in relation to how we may use your credit-related information. You may request to have these notifiable matters (and this policy) provided to you in an alternative form.</p>`,
          `<p>We exchange your credit-related information with credit reporting bodies. We use the credit-related information that we exchange with credit reporting bodies to confirm your identity, assess your creditworthiness, assess your application for finance or your capacity to be a guarantor, and manage your finance.</p>`,
          `<p>The information we may exchange with credit reporting bodies includes your identification details, what type of loans you have, how much you have borrowed, whether or not you have met your loan payment obligations, whether you have entered into a financial hardship arrangement (either with us or some other third party), and if you have committed a serious credit infringement (such as fraud).</p>`,
          `<p>If you fail to meet your payment obligations in relation to any finance that we have provided or arranged, or if you have committed a serious credit infringement, we may disclose this information to a credit reporting body.</p>`,
          `<p>You have the right to request access to the credit-related information that we hold about you and make a request for us to correct that credit-related information if needed. See 'Accessing and correcting your personal and credit-related information' below for further information.</p>`,
          `<p>Sometimes your credit-related information will be used by credit reporting bodies for the purposes of 'pre-screening' credit offers on the request of other credit providers. You can contact the credit reporting bodies at any time to request that your credit-related information is not used in this way.</p>`,
          `<p>You may contact the credit reporting bodies to advise them that you believe that you may have been a victim of fraud. Credit reporting bodies must not use or disclose your credit-related information for a period of 21 days after you notify them that you may have been a victim of fraud. You can contact any of the following credit reporting bodies for more information:</p>`,
          `<ul>
            <li>Equifax Pty Limited – www.equifax.com.au – contact on 13 83 32; see privacy policy at https://www.equifax.com.au/privacy;</li>
            <li>Illion (Australia) Pty Limited – www.illion.com.au – contact on 13 23 33; see privacy policy at https://www.illion.com.au/privacy-policy; and</li>
            <li>Experian Australia Credit Services Pty Limited – www.experian.com.au – contact on 1300 783 684; see privacy policy at https://www.experian.com.au/privacy-policy-terms-conditions.</li>
          </ul>`,
        ],
      },
      {
        heading: 'Direct marketing',
        body: [
          `<p>We will not use or disclose sensitive information about your for direct marketing purposes unless you have consented to that kind of use or disclosure.</p>`,
          `<p>We may use your personal information from time to time to provide you with current information about finance, offers you may find of interest, changes to our organisation, or new products or services being offered by us or any company with which we are associated.</p>`,
          `<p>You may at any time opt out of receiving marketing information by phoning us on 0410 303 775 or by writing to us at Level 12, 167 Macquarie Street, Sydney NSW 2000. If we are sending you direct marketing by email, you may also use the unsubscribe function. We will not charge you for giving effect to your request and will take all reasonable steps to meet your request at the earliest possible opportunity.</p>`,
        ],
      },
      {
        heading: 'IP addresses',
        body: [
          `<p>Your IP address is the identifier for your computer when you are using the internet.</p>`,
          `<p>It may be necessary for us to collect your IP address for your interaction with various parts of our website.</p>`,
        ],
      },
      {
        heading: 'Online applications',
        body: [
          `<p>When you send a completed online application to us, we retain the information contained in that application. We are able to then use that information to provide any financial services that you require.</p>`,
          `<p>You can also suspend and save online applications, so you can complete and send the applications at a later time. If you suspend or save your application, the information that you have entered will be retained in our systems so that you may recover the information when you resume your application. Online applications that have been suspended or saved may be viewed by us.</p>`,
        ],
      },
      {
        heading: 'Updating your personal information',
        body: [
          `<p>It is important to us that the personal information we hold about you is accurate and up-to-date. During the course of our relationship with you, we may ask you to inform us if any of your personal information has changed.</p>`,
          `<p>If you wish to make any changes to your personal information, you may contact us. We will generally rely on you to ensure that the information we hold about you is accurate or complete.</p>`,
          `<p>You must notify us of any changes to your personal information that are required by any contracts you have with us.</p>`,
        ],
      },
      {
        heading: 'Accessing and correcting your personal and credit-related information',
        body: [
          `<p>We will provide you with access to the personal and credit-related information we hold about you. You may request access to any of the personal and credit-related information we hold about you at any time. We may charge a fee for our costs of retrieving and supplying the information to you.</p>`,
          `<p>Depending on the type of request that you make we may respond to your request immediately, otherwise we will usually respond within seven days of receiving your request. We may need to contact other entities to properly investigate your request.</p>`,
          `<p>There may be situations where we are not required to provide you with access to your personal or credit-related information, for example, if the information relates to existing or anticipated legal proceedings, if your request is vexatious, or if the information is commercially sensitive.</p>`,
          `<p>If we deny you access to the personal or credit-related information we hold about you, we will explain why.</p>`,
          `<p>If any of the personal or credit-related information we hold about you is incorrect, inaccurate or out-of-date, you may request that we correct the information by phoning us on 0410 303 775 or by writing to us at Level 12, 167 Macquarie Street, Sydney NSW 2000.</p>`,
          `<p>If appropriate, we will correct the personal or credit-related information at the time of your request. Otherwise, we will provide an initial response to you within seven days of receiving your request. Where reasonable, and after our investigation, we will provide you with details about whether we have corrected your personal or credit-related information within 30 days.</p>`,
          `<p>We may need to consult with other finance providers or credit reporting bodies or entities as part of our investigation.</p>`,
          `<p>If we refuse to correct personal or credit-related information, we will provide you with our reasons for not correcting the information.</p>`,
        ],
      },
      {
        heading: 'Business without identifying you',
        body: [
          `<p>In most circumstances, it will be necessary for us to identify you in order to successfully do business with you. However, where it is lawful and practicable to do so, we will offer you the opportunity of doing business with us without providing us with personal information (for example, if you make general inquiries about interest rates or current promotional offers).</p>`,
        ],
      },
      {
        heading: 'Sensitive information',
        body: [
          `<p>We will only collect sensitive information about you with your consent. Sensitive information is personal information that includes information relating to your racial or ethnic origin, political persuasion, memberships in trade or professional associations or trade unions, sexual preferences, criminal record, or health.</p>`,
          `<p>If you elect to provide sensitive information, it will be captured and stored.</p>`,
        ],
      },
      {
        heading: 'Safety and security of your personal information',
        body: [
          `<p>The security of your information is very important to us.</p>`,
          `<p>We regularly review developments in security and encryption technologies. Unfortunately, no data transmission over the internet can be guaranteed as totally secure.</p>`,
          `<p>We will take a range of measures and reasonable steps to protect your personal information. Your personal information will always be stored in a secure environment. We may store your personal information in paper and electronic form. We will also take reasonable steps to protect any personal information in our systems from misuse, loss and unauthorised access, modification or disclosure.</p>`,
          `<p>If we no longer require your information, and we are legally permitted to, we will take all reasonable steps to destroy or de-identify the information.</p>`,
          `<p>We take reasonable steps to preserve the security of cookie and personal information in accordance with this policy. If your browser is suitably configured, it will advise you whether the information you are sending us will be secure (encrypted) or not secure (unencrypted).</p>`,
        ],
      },
      {
        heading: 'Complaints',
        body: [
          `<p>If you are not satisfied with how we have dealt with your personal information, or you have a complaint about our compliance with the Privacy Act and the Credit Reporting Code, you may contact our complaints officer by email on complaints@trivaro.com.au.</p>`,
          `<p>We will acknowledge your complaint within seven days and aim to resolve the complaint as quickly as possible. We will provide you with a decision on your complaint within 30 days.</p>`,
          `<p>If you are not satisfied with the response of our complaints officer, you may make a complaint to the AFCA scheme, which can be contacted by phone on 1800 931 678, by email at info@afca.org.au, or in writing to GPO Box 3, Melbourne VIC 3001, or the Office of the Australian Information Commissioner, which can be contacted at either www.oaic.gov.au or by phone on 1300 363 992.</p>`,
        ],
      },
      {
        heading: 'Further information',
        body: [
          `<p>You may request further information about the way we manage your personal or credit-related information by contacting us.</p>`,
        ],
      },
      {
        heading: 'Changes to our privacy and credit reporting policy',
        body: [
          `<p>We may change this policy from time to time or as the need arises. We will post any changes to this policy on our website.</p>`,
          `<p>You may request this policy in an alternative form by phoning us on 0410 303 775 or by writing to us at Level 12, 167 Macquarie Street, Sydney NSW 2000.</p>`,
          `<p>This policy was last updated on <strong>23 May 2025</strong>.</p>`,
        ],
      },
    ],
  },

  'credit-guide': {
    title: 'Credit Guide',
    updated: 'January 2025',
    sections: [
      {
        heading: '',
        body: [
          `<p>We, Trivaro Pty Ltd ACN 685 375 544 of Level 12, 167 Macquarie Street, Sydney NSW 2000 credit representative (No. 569230) ('we / us / our'), are a credit representative of Venus Capital Pty Ltd ACN 169 312 510 Australian Credit Licence 459305.</p>`,
          `<p>Your lender will be Trivaro Lending Pty Ltd ACN 687 211 276 of Level 12, 167 Macquarie Street, Sydney NSW 2000 ('<strong>Lender</strong>'). We manage loans for the Lender.</p>`,
        ],
      },
      {
        heading: 'We will need information from you',
        body: [
          `<p>Under the NCCP Act, we are obliged to ensure that any loan, lease, or principal increase to a loan we arrange for you is not unsuitable. To decide this, we may need to ask you some questions in order to assess whether the loan or lease is not unsuitable. The law requires us to:</p>`,
          `<ul>
            <li>make reasonable inquiries about your requirements and objectives; and</li>
            <li>make reasonable inquiries about your financial situation; and</li>
            <li>take reasonable steps to verify that financial situation.</li>
          </ul>`,
          `<p>Credit will be unsuitable if at the time of the assessment, it is likely that at the time the loan is made:</p>`,
          `<ul>
            <li>you could not pay or could only pay with substantial hardship; or</li>
            <li>the credit will not meet your requirements and objectives.</li>
          </ul>`,
          `<p>For example, if you can only repay by selling your principal place of residence, it is presumed that the loan will cause substantial hardship unless the contrary is proved. For this reason we must ask you to provide a significant amount of information. It is therefore very important that the information you provide to us is accurate.</p>`,
          `<p>We will provide you with a written copy of our credit assessment of your application within 7 business days if you ask for a copy within the first two years of the date of the credit contract or credit limit increase. If you ask for a copy of our credit assessment after two years but within 7 years of the date of the credit contract or credit limit increase, we will provide you with a copy within 21 business days. We are only required to give you a copy of the credit assessment if you enter into a credit contract or the credit limit is increased. The credit assessment will be provided to you free of charge.</p>`,
        ],
      },
      {
        heading: 'Our internal dispute resolution scheme',
        body: [
          `<p>We hope you are delighted with our services, but if you have any complaints, you should notify us by contacting our Complaints Officer by:</p>`,
          `<ul>
            <li>phoning 0410 303 775;</li>
            <li>emailing complaints@trivaro.com.au; or</li>
            <li>writing to Level 12, 167 Macquarie Street, Sydney NSW 2000; or</li>
            <li>by speaking to any representative of our business who will refer you to the Complaints Officer.</li>
          </ul>`,
          `<p>You should explain the details of your complaint as clearly as you can. You may do this verbally or in writing. When we receive a complaint, we will attempt to resolve it promptly.</p>`,
        ],
      },
      {
        heading: 'Our external dispute resolution scheme',
        body: [
          `<p>If we do not reach agreement on your complaint, you may be able to refer the complaint to the Australian Financial Complaints Authority (<strong>AFCA</strong>) scheme, which can be contacted:</p>`,
          `<ul>
            <li>by phoning on 1800 931 678;</li>
            <li>by email at info@afca.org.au; or</li>
            <li>in writing to GPO Box 3, Melbourne VIC 3001.</li>
          </ul>`,
          `<p>See www.afca.org.au for more information about AFCA.</p>`,
          `<p>The AFCA scheme is a free service established to provide you with an independent mechanism to resolve specific complaints. You can obtain further details about AFCA and obtain details of our privacy policy on request.</p>`,
        ],
      },
      {
        heading: 'Things you should know',
        body: [
          `<p>We don't provide legal or financial advice unless specified in a separate contract. It is important that you understand your legal obligations under the loan and the financial consequences.</p>`,
          `<p>Before you accept your loan offer, make sure you read the credit contract/loan agreement carefully to understand full details of the loan. If you have any doubts, you should obtain independent legal and financial advice before you enter any credit contract.</p>`,
        ],
      },
      {
        heading: 'Questions?',
        body: [
          `<p>If you have any questions about this Credit Guide or anything else about our services, just ask at any time. We're here to help you. You can contact us:</p>`,
          `<ul>
            <li>by phone on 0410 303 775;</li>
            <li>by email at inherit@trivaro.com.au; or</li>
            <li>in writing to Level 12, 167 Macquarie Street, Sydney NSW 2000.</li>
          </ul>`,
        ],
      },
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
      {
        heading: '',
        body: [
          `<div class="callout"><p><strong>This policy provides information about our internal dispute resolution (IDR) process. Our IDR service is provided to you free of charge.</strong></p></div>`,
          `<p>Trivaro Lending Pty Ltd ACN 687 211 276 and Trivaro Pty Ltd ACN 685 375 544 Credit Representative 569230 (<strong>we/us/our</strong>) believe that it is essential for us to have the ability, authority and proper training to hear and respond appropriately to any complaints or disputes raised by our customers.</p>`,
        ],
      },
      {
        heading: 'How you may lodge a complaint',
        body: [
          `<p>You can lodge complaints by contacting our Complaints Officer, by:</p>`,
          `<ul>
            <li>phoning 0410 303 775;</li>
            <li>emailing complaints@trivaro.com.au;</li>
            <li>writing to Level 12, 167 Macquarie Street, Sydney NSW 2000.</li>
          </ul>`,
          `<p>You may also lodge a complaint by speaking to any representative of our business who will refer you to the Complaints Officer.</p>`,
          `<p>You should explain the details of your complaint as clearly as you can. You may do this verbally or in writing.</p>`,
          `<p>In order to assist complainants who might need additional assistance to lodge a complaint, we:</p>`,
          `<ul>
            <li>offer multiple methods for lodging complaints, including phone, email, letter, social media, in person, or online;</li>
            <li>do not require complaints to be in writing;</li>
            <li>ensure that information provided to the public about our IDR process, including this policy, is available in a range of languages and formats (including large print and audiotape);</li>
            <li>provide training to all staff (not just complaints management staff) to enable staff to be able to identify, support and assist complainants who need additional assistance, including cross-cultural training; and</li>
            <li>allow representatives to lodge complaints on behalf of complainants, including financial counsellors, legal representatives, family members and friends.</li>
          </ul>`,
        ],
      },
      {
        heading: 'Dealing with complaints',
        body: [
          `<p>Our process for dealing with complaints is as follows:</p>`,
          `<ol>
            <li><strong>Acknowledgement:</strong> We will acknowledge receipt of your complaint promptly – that is, within one business day of receiving it, or as soon as practicable.</li>
            <li><strong>Assessment and investigation:</strong> We will review your complaint carefully and promptly, taking such steps and reviewing such documents as reasonably necessary.</li>
            <li><strong>IDR response:</strong> We will provide an 'IDR response', which is a written communication that sets out the final outcome of your complaint through our IDR process and your right to take your complaint to AFCA if you are not satisfied with the IDR response. If we reject or partially reject your complaint, we will clearly set out the reasons for our decision.</li>
          </ol>`,
        ],
      },
      {
        heading: 'Response timeframes',
        body: [
          `<p>Generally, we will provide an IDR response to you no later than 30 calendar days after receiving the complaint.</p>`,
          `<p>However, for some specific types of credit-related complaints, the following response timeframes apply.</p>`,
          `<ul>
            <li><strong>Credit-related complaints involving default notices:</strong> No later than 21 calendar days after receiving the complaint;</li>
            <li><strong>Credit-related complaints involving hardship notices or requests to postpone enforcement proceedings:</strong> No later than 21 calendar days after receiving the complaint. Exceptions apply if we do not have sufficient information to make a decision, or if we reach an agreement with you.</li>
          </ul>`,
          `<p>We do not need to provide an IDR response to you if we close your complaint by the end of the fifth business day after receipt because we have:</p>`,
          `<ol class="labeled">
            <li><span class="lbl">(a)</span><span>resolved the complaint to your satisfaction; or</span></li>
            <li><span class="lbl">(b)</span><span>given you an explanation and/or apology we can take no further action to reasonably address your complaint.</span></li>
          </ol>`,
          `<p>However, we must provide a written IDR response for complaints closed by the end of the fifth business day after receipt if:</p>`,
          `<ol class="labeled">
            <li><span class="lbl">(a)</span><span>the complainant requests a written response; or</span></li>
            <li><span class="lbl">(b)</span><span>the complaint is about hardship.</span></li>
          </ol>`,
        ],
      },
      {
        heading: 'Our external dispute resolution scheme – AFCA',
        body: [
          `<p>If we do not reach agreement on your complaint, you may refer your complaint to the Australian Financial Complaints Authority (AFCA). You can contact the AFCA scheme:</p>`,
          `<ul>
            <li>by phone on 1800 931 678;</li>
            <li>by email at info@afca.org.au; or</li>
            <li>in writing to GPO Box 3, Melbourne VIC 3001.</li>
          </ul>`,
          `<p>The AFCA scheme is a free service established to provide you with an independent mechanism to resolve specific complaints.</p>`,
        ],
      },
    ],
  },

  'target-market': {
    title: 'Target Market Determination – Inheritance Advance',
    updated: '3 June 2025',
    sections: [
      {
        heading: '',
        body: [
          `<p>This Target Market Determination (<strong>TMD</strong>) has been prepared in accordance with the <em>Treasury Laws Amendment (Design and Distribution Obligations and Product Intervention Powers) Act 2019</em> and associated Regulations. TMDs are designed to assist issuers to ensure that financial products they issue are likely to be consistent with the <em>likely objectives, financial situation and needs</em> of the consumers for whom they are intended (the target market) and to assist distributors to ensure that financial products are distributed to the target market.</p>`,
          `<p>The TMD is general in nature and should not be construed as financial advice. Consumers should obtain independent advice prior to acquiring the product to ensure that it is appropriate for their particular <em>objectives, financial situation and needs</em>.</p>`,
          `<div class="table-scroll"><table>
            <tbody>
              <tr>
                <th style="width:220px">Product</th>
                <td>Inheritance Advance</td>
              </tr>
              <tr>
                <th>Issuer</th>
                <td>Trivaro Lending Pty Ltd ACN 687 211 276 and Trivaro Pty Ltd ACN 685 375 544 Credit Representative 569230 of Venus Capital Pty Ltd ACN 169 312 510 Australian Credit Licence 459305 (<strong>Trivaro</strong>)</td>
              </tr>
              <tr>
                <th>Date of TMD</th>
                <td><strong>3 June 2025</strong></td>
              </tr>
              <tr>
                <th>Target Market</th>
                <td>
                  <p><strong>Description of target market</strong></p>
                  <p>The features of the Inheritance Advance have been assessed as meeting the <em>likely objectives, financial situation and needs</em> of consumers who:</p>
                  <p>(a)&nbsp; meet the eligibility criteria, namely:</p>
                  <ul style="list-style:none;padding-left:20px">
                    <li>(i)&nbsp;&nbsp; individuals who are 18 years of age or above; and</li>
                    <li>(ii)&nbsp; are an Australian resident or citizen; and</li>
                  </ul>
                  <p>(b)&nbsp; have the following objectives, financial situation and needs:</p>
                  <ul style="list-style:none;padding-left:20px">
                    <li>(i)&nbsp;&nbsp; the consumer requires access to funds for up to a maximum of 24 months before receiving their inheritance;</li>
                    <li>(ii)&nbsp; the consumer requires a loan where standard loan documentation, such as employment status and income, is not a pre-requisite;</li>
                    <li>(iii) the consumer requires no repayments (principal or interest) until they receive their inheritance; and</li>
                    <li>(iv) the consumer requires a simple interest loan.</li>
                  </ul>
                  <p>The product meets the likely objectives, financial situation and needs of consumers in the target market (set out above) because it allows them to access funds in advance of receiving their inheritance, where the funds are charged simple interest only and payable on receipt of the inheritance.</p>
                  <p><strong>Description of product, including key attributes</strong></p>
                  <p>The Inheritance Advance is a bridging loan that provides funds to consumers who are entitled to, but have not yet received the proceeds of, an inheritance.</p>
                  <p>The Inheritance Advance has the following key attributes:</p>
                  <ul>
                    <li>Bridging loan designed to provide short-term finance before the consumer receives their inheritance</li>
                    <li>The consumer is required to assign the distribution of their inheritance to Trivaro</li>
                    <li>Simple interest</li>
                    <li>Maximum loan term of 24 months. Loans that exceed 24 months will only be accepted in special circumstances</li>
                    <li>Minimum loan amount is $25,000</li>
                    <li>Maximum loan amount is 50% of the consumer's expected inheritance (maximum loan amount $1 million)</li>
                    <li>No repayments (principal or interest) throughout the term of the loan. The consumer is liable to repay the loan once their inheritance is distributed (ie bullet payment)</li>
                    <li>Application fee payable</li>
                  </ul>
                  <p><strong>Classes of consumers for whom the product is clearly unsuitable</strong></p>
                  <p>This product is not suitable for consumers who:</p>
                  <ul>
                    <li>will not receive an inheritance;</li>
                    <li>do not meet the eligibility requirements;</li>
                    <li>want regular repayments throughout the term of the loan; and</li>
                    <li>are seeking a long-term funding solution.</li>
                  </ul>
                </td>
              </tr>
              <tr>
                <th>Distribution Conditions</th>
                <td>
                  <p><strong>Distribution conditions</strong></p>
                  <p>The following distribution channels and conditions have been assessed as being appropriate to direct the distribution of the product to the target market:</p>
                  <table>
                    <thead>
                      <tr><th>Channel</th><th>Conditions</th></tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>Direct – online, by phone or in person</td>
                        <td>
                          <p>Only authorised staff are permitted to assist consumers with the product.</p>
                          <p>Authorised staff have the necessary training, skills and knowledge to:</p>
                          <ul>
                            <li>discuss the features, costs, benefits, and risks associated with the product with the consumer;</li>
                            <li>assess whether the consumer is within the target market; and</li>
                            <li>comply with our other regulatory obligations such as ensuring that the product is 'not unsuitable'.</li>
                          </ul>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                  <p>The distribution channels and conditions are appropriate because:</p>
                  <ul>
                    <li>our distributors have been adequately trained to understand the product and our regulatory obligations, including our design and distribution obligations; and</li>
                    <li>our approval system has controls in place to flag applicants who may be outside the target market.</li>
                  </ul>
                </td>
              </tr>
              <tr>
                <th>Review Triggers</th>
                <td>
                  <p>The following review triggers would reasonably suggest that the TMD may no longer be appropriate:</p>
                  <ul>
                    <li>A significant dealing of the product to consumers outside the target market occurs.</li>
                    <li>Complaints are received from more than 10% of our customers in relation to the product in a calendar month.</li>
                    <li>More than 10% of our customers default in relation to the product in a calendar month.</li>
                    <li>Applications for hardship are received from more than 10% of our customers in relation to the product in a calendar month.</li>
                    <li>There is a material change to the product or the terms and conditions of the product which may suggest that the TMD may no longer be appropriate.</li>
                  </ul>
                </td>
              </tr>
              <tr>
                <th>Review Periods</th>
                <td>
                  <p><strong>First review date: 2 June 2026</strong></p>
                  <p><strong>Periodic reviews:</strong> every 12 months, after the initial and each subsequent review</p>
                  <p><strong>Trigger reviews:</strong> review to be completed within 10 business days of the identification of a trigger event.</p>
                </td>
              </tr>
              <tr>
                <th>Distribution Information Reporting Requirements</th>
                <td>
                  <p>The following information must be provided to Trivaro by distributors who engage in retail product distribution conduct in relation to this product:</p>
                  <table>
                    <thead>
                      <tr><th>Type of information</th><th>Description</th><th>Reporting period</th></tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>Complaints</td>
                        <td>Number of complaints and general feedback relating to the product and its performance</td>
                        <td>Every 6 months</td>
                      </tr>
                      <tr>
                        <td>Specific Complaints</td>
                        <td>Details of the complaint, including name and contact details of complainant and substance of the complaint.</td>
                        <td>As soon as practicable and within 10 business days of receipt of complaint.</td>
                      </tr>
                      <tr>
                        <td>Significant dealing(s)</td>
                        <td>Date or date range of the significant dealing(s) and description of the significant dealing (eg why it is not consistent with the TMD)</td>
                        <td>As soon as practicable, and in any case within 10 business days after becoming aware</td>
                      </tr>
                    </tbody>
                  </table>
                </td>
              </tr>
            </tbody>
          </table></div>`,
        ],
      },
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
        <style>{`
          .legal-body p { line-height: 1.7; color: var(--text); font-size: 16px; margin: 0 0 14px; }
          .legal-body ul, .legal-body ol { margin: 0 0 14px; padding-left: 28px; }
          .legal-body li { line-height: 1.7; color: var(--text); font-size: 16px; margin-bottom: 6px; }
          .legal-body ol.labeled { padding-left: 0; list-style: none; }
          .legal-body ol.labeled li { display: flex; gap: 10px; margin-bottom: 8px; }
          .legal-body ol.labeled li .lbl { flex-shrink: 0; min-width: 28px; }
          .legal-body .table-scroll { overflow-x: auto; -webkit-overflow-scrolling: touch; margin: 0 0 14px; }
          .legal-body .table-scroll > table { margin: 0; }
          .legal-body table { width: 100%; border-collapse: collapse; margin: 0 0 14px; font-size: 15px; color: var(--text); }
          .legal-body th, .legal-body td { border: 1px solid var(--hairline, #ddd); padding: 10px 14px; vertical-align: top; text-align: left; }
          .legal-body th { font-weight: 600; }
          .legal-body td p:last-child, .legal-body td ul:last-child, .legal-body td ol:last-child { margin-bottom: 0; }
          .legal-body td table { font-size: 14px; margin-top: 10px; }
          .legal-body td table th, .legal-body td table td { padding: 8px 12px; border-color: rgba(0,0,0,0.1); }
          .legal-body td table th { background: rgba(0,0,0,0.03); }
          .legal-body .callout { border: 1px solid var(--hairline, #ddd); padding: 14px 18px; margin: 0 0 20px; }
          .legal-body .callout p { margin: 0; }
        `}</style>
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
            {c.sections.map((s, si) => (
              <div key={si} style={{ marginBottom: 36 }}>
                {s.heading && (
                  <h2 style={{ fontFamily: 'var(--font-display)', fontWeight: 500, fontSize: 28, margin: '0 0 14px', lineHeight: 1.2 }}>
                    {s.heading}
                  </h2>
                )}
                <div className="legal-body">
                  {s.body.map((html, i) => (
                    html.startsWith('<')
                      ? <div key={i} dangerouslySetInnerHTML={{ __html: html }} />
                      : <p key={i} style={{ lineHeight: 1.7, color: 'var(--text)', fontSize: 16, margin: '0 0 14px' }}>{html}</p>
                  ))}
                </div>
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
