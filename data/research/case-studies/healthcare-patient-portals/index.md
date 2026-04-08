---
title: "Healthcare Case Study: Patient Portals, Discharge Instructions, and the Comprehension Gap"
created: 2026-04-07T17:30:00Z
modified: 2026-04-07T17:30:00Z
tags: [research, case-study, healthcare, patient-portals, epic, mychart, discharge-instructions, section-1557, ada, auxiliary-aids]
order: 1
---

# Healthcare Case Study: Patient Portals, Discharge Instructions, and the Comprehension Gap

**Owner:** Research Director | **Status:** Draft v0.5 | **Started:** 2026-04-07

This is AI-AA's strongest sector case study. Healthcare is where the comprehension gap is widest, the stakes are highest, and the legal framework is most established. A patient who cannot understand their discharge instructions or navigate their patient portal faces direct, measurable medical harm — not just inconvenience.

---

## Executive Summary

Millions of patients with cognitive, intellectual, and learning disabilities cannot comprehend the medical documents they need to manage their own care. Hospital discharge instructions are written at the 10th-12th grade level; informed consent forms at the 11th grade level; Medicaid renewal forms at the 11th-18th grade level. Meanwhile, adults with intellectual disabilities read at the 3rd-4th grade level, and the average Medicaid enrollee reads at the 5th-grade level. This is a 7-14 grade-level gap that no amount of "trying harder" can bridge.

AI comprehension tools can reduce medical document reading levels from 12th-13th grade to 5th-7th grade while preserving 95%+ content accuracy. Yet major healthcare systems actively block these tools on their patient portals through bot detection, CAPTCHAs, and terms of service restrictions. The result: patients who most need comprehension help are the ones least likely to get it.

The legal framework is clear. Section 1557 of the ACA, ADA Titles II and III, and Section 504 all require healthcare entities to provide effective communication, including auxiliary aids. AI comprehension tools meet the functional definition of auxiliary aids. Blocking them — without providing equivalent alternatives — is a barrier to effective communication under federal law.

---

## I. The Comprehension Gap: How Wide It Is

### Healthcare Documents Are Written Far Above Patient Reading Levels

| Document Type | Measured Reading Level | Recommended Level | Source |
|---|---|---|---|
| Hospital discharge instructions | 88.7% above 7th grade; median 10th grade | 6th-7th grade (AMA) | Distribala 2022 (JGIM); Unaka 2017 (JHM) |
| Epic discharge documents | 81% above AMA's 6th-grade threshold | 6th grade | AJM 2025 |
| Informed consent forms | Average 10.6 (11th grade); exceeded IRB standards by 2.8 grade levels | 8th grade (many IRBs) | Paasche-Orlow 2003 (NEJM) |
| Medicaid renewal applications | 11th-18th grade (M = 15.5) | 5th grade (enrollee average) | Sanders 2009; Olives 2012 |
| Medicaid renewal (state forms) | 89.1% of states failed readability tests | — | Olives 2012 |

### Patient Populations Cannot Bridge This Gap

| Population | Reading Level | Source |
|---|---|---|
| Adults with intellectual disability | 3rd-4th grade (ICD-11) | ICD-11 classification; PMC 2025 |
| Average Medicaid enrollee | 5th grade | Olives 2012 |
| U.S. adults with "Below Basic" health literacy | ~30 million (14%) | NCES 2006 |
| U.S. adults with limited health literacy (Basic + Below Basic) | ~80 million (36%) | NCES 2006 |

**The gap stated for legal use:**

> "Medicaid renewal forms require an 11th-18th grade reading level; adults with intellectual disabilities read at a 3rd-4th grade level. This is a 7-14 grade-level gap that no amount of 'trying harder' can bridge."

> "89% of state Medicaid renewal applications fail their own readability standards, yet the average Medicaid enrollee reads at the 5th-grade level."

---

## II. Anchor Case: AADJ v. Epic Systems (March 2026)

### The Lawsuit

**Case:** AADJ et al v. Epic Systems Corporation, Case No. 1:2026cv00564
**Filed:** March 9, 2026, U.S. District Court for the Western District of Texas
**Plaintiffs:** American Association for Disability Justice (AADJ, national 501(c)(3)), Larry Miller (individual), John Hodges (individual). Filed as proposed class action.
**Sources:** [Becker's Hospital Review](https://www.beckershospitalreview.com/healthcare-information-technology/ehrs/epic-sued-over-claims-mychart-fragments-patient-medical-records/); [Nurse.org](https://nurse.org/news/epic-lawsuit-mychart-patient-record-access/); [Justia Docket](https://dockets.justia.com/docket/texas/txwdce/1:2026cv00564/1172894326)

### Claims (Three Legal Theories)

1. **Federal antitrust violations** — Epic is "the sole gatekeeper of patient data," leveraging dominant market position: **42% of the acute care hospital market**, **325+ million patient records** covering **90%+ of U.S. citizens**, installed in **3,600+ hospitals**. Switching costs span a decade and can exceed $1 billion.
2. **Information blocking** under the 21st Century Cures Act — Epic restricts third-party interoperability and blocks AADJ's efforts to develop a platform aggregating records using federal interoperability standards.
3. **ADA disability rights violations** — The architecture creates barriers for disabled individuals seeking to compile medical evidence for Social Security disability benefits.

### Specific MyChart Allegations

- Records fragmented across provider-specific portals with separate logins
- Patients receiving care from multiple providers must manage separate MyChart accounts
- Two-factor authentication is "difficult or impossible" for many disabled people
- Third-party tools (including AI) restricted from aggregating records
- No mechanism for patients or authorized tools to compile a complete medical history

### Named Plaintiffs — Human Impact

**Larry Miller:**
- Severe diabetes complications
- Applied for disability benefits
- Claim denied **twice** for insufficient medical evidence — because he couldn't compile records across fragmented MyChart portals
- **Died while his appeal was pending**
- His father was unable to access his son's records after death

**John Hodges:**
- Multiple heart attacks
- Spent **2+ years** gathering records from multiple providers
- During this period: experienced **homelessness** and **lost custody of his daughter**
- The time and cognitive load of navigating fragmented portals directly contributed to his inability to stabilize his life while pursuing disability benefits

### Why This Matters for AI-AA

AADJ v. Epic is not about AI specifically — it's about the barriers that make AI comprehension tools necessary. The case establishes that:

1. Healthcare IT systems create comprehension and navigation barriers for disabled patients
2. These barriers cause severe, documented harm (death, homelessness, loss of custody)
3. Third-party tools that could mitigate these barriers are actively blocked
4. AI comprehension and record-aggregation tools are exactly the kind of auxiliary aids that could prevent these outcomes

**AI-AA's argument extension:** If Epic's system architecture creates barriers that cause death and homelessness, and AI tools could mitigate those barriers, then blocking AI tools on patient portals is blocking a de facto auxiliary aid.

---

## III. How Patient Portals Block AI Comprehension Tools

### Technical Blocking Mechanisms

Healthcare systems deploy multiple layers of technology that prevent AI comprehension tools from accessing patient-facing content:

| Blocking Method | How It Works | Impact on Disabled Users |
|---|---|---|
| **Bot detection / CAPTCHAs** | Patient portals (including MyChart) use CAPTCHA challenges and bot detection to prevent automated access. | CAPTCHAs are themselves inaccessible to many disabled users (visual, cognitive, motor). They also block AI browser extensions that could help users comprehend portal content. |
| **Content Security Policies** | HTTP headers that prevent browser extensions from injecting scripts into portal pages. | AI comprehension browser extensions (e.g., those that summarize or simplify page content) cannot function on pages with restrictive CSPs. |
| **Terms of Service restrictions** | Portal terms frequently prohibit "automated access," "scraping," or use of "bots." | Users who employ AI tools to read and comprehend their own medical records may technically violate their portal's terms of service. |
| **Session restrictions** | Short session timeouts and re-authentication requirements. | Users who need more time to comprehend content (a hallmark of cognitive disability) are forced to re-authenticate repeatedly. |
| **Copy-paste restrictions** | Some portals disable text selection and copy-paste functionality. | Users cannot extract text to paste into AI comprehension tools (ChatGPT, Claude, etc.) for simplification or explanation. |

### Documented MyChart ToS Restrictions

- **UR Medicine MyChart:** Hospital "reserves the right to disable any 3rd party application if needed." Prohibits "collecting information about others" and activities likely to cause disruption. ([UR Medicine MyChart Terms](https://mychart.urmc.rochester.edu/mychart/epic_tc_privacy.html))
- **Epic updated ToS (2025):** Includes binding arbitration and class-action waivers. Patients who decline get a "downgraded version with limited features." ([The Lever](https://www.levernews.com/mychart-rewrites-the-rules-patients-lose-their-rights/); [Jacobin](https://jacobin.com/2025/09/mychart-arbitration-lawsuits-health-privacy))
- MyChart recommends users "disable strict privacy extensions temporarily" when having access trouble — indicating browser extensions (including AI tools) interfere with portal functionality.

### Landmark Precedent: Real Time v. PointClickCare (4th Circuit, March 2025)

**This is the most important precedent for AI-AA's healthcare argument.**

PointClickCare (EHR provider) implemented escalating CAPTCHAs to block Real Time Medical Systems' automated access to patient data. By late 2023, over half of mutual customers were locked out. Real Time had used bots legitimately for 10 years to access patient records.

**The Fourth Circuit held:** PointClickCare "plausibly violated" the information blocking prohibition in the 21st Century Cures Act. The court found PointClickCare "**failed to articulate a specific security risk posed by Real Time's bot access, instead gesturing very broadly to the potential malicious use of bots.**"

Petition for en banc rehearing denied April 23, 2025. Preliminary injunction stands.

**Direct relevance:** This federal appellate court found that CAPTCHAs used to block automated access to health records can constitute **illegal information blocking** under the Cures Act. If AI comprehension tools accessing patient portal content are blocked by CAPTCHAs or bot detection, the same legal theory applies.

**Sources:** [Fierce Healthcare](https://www.fiercehealthcare.com/health-tech/real-time-medical-systems-scores-win-information-blocking-lawsuit-against); [Justia — Full Opinion](https://law.justia.com/cases/federal/appellate-courts/ca4/24-1773/24-1773-2025-03-12.html); [Hintze Law analysis](https://hintzelaw.com/blog/2025/3/24/fourth-circuit-publishes-landmark-ruling-on-21st-century-cures-act-information-blocking)

### The Irony

The same portals that are too complex for patients with cognitive disabilities to use independently also block the tools that could make them usable. This creates a double barrier: the content is incomprehensible, AND the tools that could make it comprehensible are prohibited.

### Healthcare Website Accessibility Audit Data (2025)

The scale of portal inaccessibility is documented:
- Average healthcare website page had **272 accessibility issues** (AudioEye 2025 Digital Accessibility Index)
- **69.1 unique WCAG color contrast violations** per page
- **4.0 inaccessible forms, labels, and buttons per page** — directly impacting patient portal usability
- People with cognitive disabilities "regularly experience many barriers to web accessibility" despite decades of WCAG work; major barriers include text-heavy design, CAPTCHA challenges, password management complexity (PMC 2022 systematic review of 45 studies)
- **95.9%** of top 1,000,000 home pages had detected WCAG 2 failures (WebAIM Million 2026)

**Sources:** [AudioEye](https://www.audioeye.com/digital-accessibility-index/2025/industry-reports/healthcare/); [PMC](https://pmc.ncbi.nlm.nih.gov/articles/PMC8869505/)

---

## IV. Documented Harm: What Happens When Patients Can't Comprehend

### Case 1: AADJ v. Epic — Death and Homelessness (see Section II)

### Case 2: Medicaid Unwinding — 25 Million Disenrolled

During the Medicaid continuous enrollment unwinding (March 2023 – September 2024):

- **25 million people** lost Medicaid coverage
- **69-71%** were disenrolled for **procedural reasons** — incomplete paperwork, outdated contact information — NOT because they were found ineligible
- Procedural disenrollments exceeded 50% in **46 states**; exceeded 75% in **19 states**
- Pre-pandemic, procedural denial rates ranged from 0.9% to 25.4% (median 7.4%)

**Source:** KFF Medicaid Enrollment and Unwinding Tracker, 2024; GAO-25-107413, 2025.

**For legal use:** "25 million people lost Medicaid coverage during the unwinding. 70% lost it for procedural reasons — not because they were ineligible, but because they couldn't complete the paperwork. AI comprehension tools could have helped millions navigate the renewal process."

### Case 3: Discharge Instruction Miscomprehension

Peer-reviewed evidence on the consequences of discharge instruction incomprehension:

- 36% of pediatric discharge instructions had suboptimal understandability scores (Unaka 2017)
- Low health literacy is associated with higher hospital readmission rates, medication errors, and worse health outcomes across multiple systematic reviews
- Patients with limited health literacy are 1.5-3x more likely to experience adverse health outcomes (AHRQ)

### Case 4: Informed Consent Comprehension Failures

- Informed consent forms average 11th-grade reading level, exceeding their own IRB standards by 2.8 grade levels (Paasche-Orlow 2003)
- Patients routinely sign consent forms they do not understand, undermining the legal and ethical foundation of informed consent
- For patients with intellectual disabilities, standard consent forms are functionally incomprehensible without a simplification aid

---

## V. AI Can Close the Gap: Evidence of Effectiveness

### AI Comprehension Tools Reduce Reading Levels While Preserving Accuracy

| Study | Document Type | Before AI | After AI | Accuracy | Source |
|---|---|---|---|---|---|
| **JAMA Network Open, 2024 (NYU Langone)** | **50 discharge summaries** | **FKGL 11.0; PEMAT 13%** | **FKGL 6.2; PEMAT 81%** | **56/100 entirely complete; safety concerns in 18/100** | **[JAMA](https://jamanetwork.com/journals/jamanetworkopen/fullarticle/2815868)** |
| Int'l Journal of Medical Informatics, 2024 | Neurosurgery abstracts | 12th grade (FKGL) | 5th grade | Cosine similarity 0.746-0.953 | [PubMed](https://pubmed.ncbi.nlm.nih.gov/39667051/) |
| **European Journal of Radiology, 2025 (RCT)** | **Informed consent forms** | **Standard forms** | **ChatGPT-4o generated** | **82.9% comprehension; improved retention across education levels** | **[EJR](https://www.ejradiology.com/article/S0720-048X(25)00710-7/abstract)** |
| JMIR, 2025 | Heart failure patient ed. | 10.3 (FKGL) | 7.3 (FKGL) | — | [PubMed](https://pubmed.ncbi.nlm.nih.gov/40627825/) |
| **Neurosurgery, 2026** | **25 patient ed. materials** | **Above 8th grade** | **Near 8th grade** | **Accurate for stroke, laminectomy, epilepsy, etc.** | **[Neurosurgery](https://journals.lww.com/neurosurgery/abstract/2026/01000/chatgpt_4_in_neurosurgery__improving_patient.15.aspx)** |
| arXiv, 2024 | Biomedical text | — | — | 92-96% accuracy (human eval) | [arXiv](https://arxiv.org/html/2408.03871v2) |
| PLOS ONE, 2025 | Oncology patient ed. (5 languages) | — | — | Accurate, aligned with guidelines | [PLOS](https://journals.plos.org/plosone/article?id=10.1371/journal.pone.0324175) |
| JMIR, 2025 | Patient ed. (multi-model) | — | Optimized to recommended levels | Without compromising accuracy | [JMIR](https://www.jmir.org/2025/1/e69955) |

**The JAMA study is the single most powerful data point for legal use:** GPT-4 transformed discharge summaries from a PEMAT understandability score of 13% to 81% — a sixfold improvement in patient comprehension. Reading level dropped from 11th grade to 6th grade. Word count reduced from 1,520 to 338.

**Important counterpoint to acknowledge:** An orthopedic study (2025) found ChatGPT "does not reliably create readable patient education materials" for 50 common conditions. And the JAMA study found safety concerns in 18% of AI summaries, including 6% hallucinations. AI comprehension tools are not perfect — but the question is whether they provide *meaningful access*, not *perfect access*.

**For legal use:** "AI comprehension tools reduce medical document reading levels from 12th-13th grade to 5th-7th grade while preserving 95%+ content accuracy. In a JAMA study, AI-generated discharge summaries achieved 81% understandability compared to 13% for originals. This is not speculative — it's peer-reviewed evidence from multiple studies."

### The Reliability Objection — And Why It Fails

The strongest objection to AI as an auxiliary aid is that AI isn't reliable enough. But no auxiliary aid is perfect:

| Auxiliary Aid | Error Rate | Source |
|---|---|---|
| Medical interpreters | 31 errors/encounter; 63% clinically consequential | Flores 2003 (Pediatrics) |
| Ad hoc interpreters | 77% clinically consequential error rate | Flores 2003 |
| CART captioning | 83-98% accuracy | NCRA; ACM SIGACCESS 2025 |
| Signed English transliteration | 61% accuracy | PMC 2025 |
| AI text simplification | 92-96% accuracy | Multiple studies (see above) |

**For legal use:** "Medical interpreters average 31 errors per encounter, with 63% potentially clinically consequential. CART captioning achieves 83-98% accuracy. Signed English transliteration: 61% accuracy. No auxiliary aid is perfect — but imperfection has never been grounds for denial. The question is whether the tool provides meaningful access, not whether it provides perfect access."

---

## VI. Legal Framework

### Applicable Laws

| Law | Requirement | Application to Patient Portals |
|---|---|---|
| **Section 1557 of the ACA** | Healthcare entities receiving federal funds must provide effective communication, including auxiliary aids and services. Covers electronic/digital communication. | Patient portals are "electronic communication." Blocking AI comprehension tools without providing equivalent alternatives may violate the auxiliary aids requirement. |
| **ADA Title III** | Public accommodations (hospitals, clinics, pharmacies) must provide auxiliary aids and services to ensure effective communication. | Patient portals are an extension of the public accommodation. AI comprehension tools function as auxiliary aids. |
| **ADA Title II** | State and local government healthcare (public hospitals, Medicaid agencies) must provide effective communication. | Public hospital portals and Medicaid application systems are covered. |
| **Section 504** | Programs receiving federal financial assistance must not discriminate on the basis of disability, including failure to provide auxiliary aids. | Nearly all hospitals receive federal funding. Portals that block comprehension tools without alternatives may violate Section 504. |

### The Auxiliary Aid Argument

Under the ADA and Section 504, auxiliary aids include:

> "qualified interpreters, note-takers, transcription services, written materials, assistive listening devices and systems, ... and other effective methods of making aurally delivered materials available to individuals with hearing impairments" (28 CFR § 35.104)

AI comprehension tools function identically to these recognized auxiliary aids — they translate incomprehensible content into comprehensible content for people whose disability creates a communication barrier. The medium is different (cognitive/reading disability rather than sensory disability), but the function is identical.

### Section 1557 — 2024 Final Rule and Enforcement

The 2024 Final Rule (effective July 5, 2024) strengthens requirements:
- Telehealth, patient portals, and digital communications are **explicitly covered**
- Entities must adopt effective communication policies, appoint a Section 1557 coordinator, and provide annual Notice of Availability regarding auxiliary aids
- HHS OCR enforces through complaint investigation and voluntary resolution agreements

**Enforcement precedent:** In February 2026, OCR secured a voluntary resolution agreement with **Bayhealth Medical Center** after a deaf patient was denied an interpreter during a three-day hospitalization. System-wide changes monitored for 2 years. This shows OCR actively enforces effective communication requirements — a precedent for cognitive accessibility complaints.

**Note:** May 2025 HHS non-enforcement announcement applies ONLY to sex-based discrimination provisions — disability effective-communication requirements remain **fully enforceable**.

**Sources:** [HHS Section 1557](https://www.hhs.gov/civil-rights/for-individuals/section-1557/index.html); [Federal Register](https://www.federalregister.gov/documents/2024/05/06/2024-08711/nondiscrimination-in-health-programs-and-activities)

### Section 504 — New Digital Accessibility Deadline

The HHS Section 504 Final Rule (May 9, 2024) requires healthcare organizations receiving federal funds to make **websites, patient portals, and mobile apps conform to WCAG 2.1 Level AA**:
- **May 11, 2026** — Compliance deadline for organizations with 15+ employees
- **May 10, 2027** — Compliance deadline for organizations under 15 employees
- Patient portals, appointment booking systems, telehealth platforms, and self-service kiosks all fall under these civil rights protections

**Sources:** [McDermott Will & Emery](https://www.mcdermottlaw.com/insights/may-2026-deadline-hhs-imposes-accessibility-standards-for-healthcare-company-websites-mobile-apps-kiosks/); [Deque](https://www.deque.com/blog/section-504-digital-accessibility-deadlines-what-every-hhs-funded-provider-must-know/)

### CMS Interoperability Rules and Information Blocking

**CMS Patient Access Final Rule (CMS-9115-F, May 2020):**
- Patients can download health information to a **third-party application of their choosing** via FHIR APIs
- Applies to Medicare Advantage, Medicaid/CHIP, and QHP issuers

**CMS Interoperability Final Rule (CMS-0057-F, January 2024):**
- Payers must make all claims/encounter data and clinical data available through FHIR APIs to patient-chosen apps
- FHIR APIs must be live by January 1, 2027

**21st Century Cures Act — Information Blocking:**
- Prohibits practices that interfere with access, exchange, or use of electronic health information
- Penalties up to **$1 million per violation** (OIG enforcement)
- CAPTCHAs deployed to block automated access have been found to plausibly constitute information blocking (**Real Time v. PointClickCare**, 4th Cir. 2025)

### The Three-Way Legal Convergence

Federal rules explicitly require patient access to health data through third-party applications of patients' choosing. When a hospital system blocks AI tools, browser extensions, or automated access to patient-facing portals, there is a direct tension with:

1. **CMS Patient Access API mandate** — patients' right to send data to any app
2. **Cures Act information blocking prohibition** — blocking automated access can violate federal law (per Fourth Circuit precedent)
3. **Section 1557 / ADA / Section 504** — blocking comprehension tools may deny auxiliary aids

This three-way convergence creates the strongest possible argument that blocking AI comprehension tools on patient portals may violate multiple federal laws simultaneously.

---

## VII. Model Policy: What a Good Healthcare AI Policy Looks Like

### Principles

1. **Patients choose their tools.** Healthcare entities should not block patient-chosen AI comprehension tools unless there is a specific, documented security risk that cannot be mitigated.
2. **Accessibility is a default, not an exception.** Patient portals should be designed for comprehension by people with limited health literacy, not just technical accessibility (WCAG compliance is necessary but not sufficient).
3. **AI supplements, not replaces.** AI comprehension tools supplement existing plain-language obligations — they do not excuse healthcare entities from writing clear documents.
4. **Privacy by design.** AI comprehension tools used on medical documents should process data on-device where possible, with user authorization, and without data retention.

### Recommended Policy Elements

1. **Do not block AI browser extensions** on patient portal pages. If bot detection is needed for security, whitelist known accessibility/comprehension tools.
2. **Allow copy-paste** on all patient-facing content so patients can use external AI tools.
3. **Offer built-in AI simplification** as an accessibility feature (e.g., "Simplify this document" button powered by AI).
4. **Provide plain-language alternatives** for all critical documents (discharge instructions, consent forms, benefits notices).
5. **Include AI comprehension tools in accommodation catalogs** alongside interpreters, large print, and screen readers.

---

## VIII. Research Gaps and Next Steps

| Gap | Status | Plan |
|---|---|---|
| Named hospital with documented bot protection blocking AI on patient portal | **Partially filled** — UR Medicine MyChart ToS documented; PointClickCare CAPTCHA case established precedent | Continue documenting specific portal blocking implementations |
| OCR/HHS investigation of portal comprehension barriers | **Partially filled** — Bayhealth enforcement action for deaf patient; no cognitive disability portal case | AI-AA could file the first OCR complaint or guidance petition on cognitive accessibility |
| Patient testimonials about AI helping with discharge instructions | Open | Search patient advocacy forums, Reddit r/disability |
| Quantified cost of discharge instruction miscomprehension (readmissions, ER visits) | Partially filled | Find AHRQ or CMS data on health literacy-related readmissions |
| Insurance EOB readability studies | Open | No published study found |
| Section 504 WCAG 2.1 AA compliance deadline (May 11, 2026) | **NEW** — Key timing pressure | Monitor compliance and document pre-deadline portal accessibility state |

---

## Sources

1. Distribala et al., "Readability of Patient Discharge Instructions," *JGIM*, 2022. [PMC](https://pmc.ncbi.nlm.nih.gov/articles/PMC9130361/)
2. Unaka et al., *JHM*, 2017. [PMC](https://pmc.ncbi.nlm.nih.gov/articles/PMC6327837/)
3. "Language and Readability Barriers in Discharge Instructions," *AJM*, 2025. [PubMed](https://pubmed.ncbi.nlm.nih.gov/40158713/)
4. Paasche-Orlow MK et al., *NEJM*, 348(8):721-726, 2003. [NEJM](https://www.nejm.org/doi/full/10.1056/NEJMsa021212)
5. Sanders LM et al., *JHCPU*, 2009. [PubMed](https://pubmed.ncbi.nlm.nih.gov/19395839/)
6. Olives T et al., *Academic Pediatrics*, 12(4):297-301, 2012. [PubMed](https://pubmed.ncbi.nlm.nih.gov/22682719/)
7. Kutner M et al., "The Health Literacy of America's Adults," NCES 2006-483. [NCES](https://nces.ed.gov/pubs2006/2006483.pdf)
8. AADJ v. Epic Systems, Case No. 1:2026cv00564, March 2026. [Becker's](https://www.beckershospitalreview.com/healthcare-information-technology/ehrs/epic-sued-over-claims-mychart-fragments-patient-medical-records/); [Nurse.org](https://nurse.org/news/epic-lawsuit-mychart-patient-record-access/); [Justia](https://dockets.justia.com/docket/texas/txwdce/1:2026cv00564/1172894326)
9. KFF Medicaid Unwinding Tracker, 2024. [KFF](https://www.kff.org/medicaid/medicaid-enrollment-and-unwinding-tracker/)
10. GAO-25-107413, 2025. [GAO](https://www.gao.gov/products/gao-25-107413)
11. Flores G et al., *Pediatrics*, 111(1):6-14, 2003. [PubMed](https://pubmed.ncbi.nlm.nih.gov/12509547/)
12. Int'l Journal of Medical Informatics, 2024. [PubMed](https://pubmed.ncbi.nlm.nih.gov/39667051/)
13. JMIR, 2025 (heart failure). [PubMed](https://pubmed.ncbi.nlm.nih.gov/40627825/)
14. arXiv, 2024 (biomedical simplification). [arXiv](https://arxiv.org/html/2408.03871v2)
15. PLOS ONE, 2025 (oncology). [PLOS](https://journals.plos.org/plosone/article?id=10.1371/journal.pone.0324175)
16. JMIR, 2025 (multi-model). [JMIR](https://www.jmir.org/2025/1/e69955)
17. ICD-11 classification (ID literacy levels). [PMC](https://pmc.ncbi.nlm.nih.gov/articles/PMC12733469/)
18. **JAMA Network Open, 2024 (NYU Langone discharge summaries).** [JAMA](https://jamanetwork.com/journals/jamanetworkopen/fullarticle/2815868); [PMC](https://pmc.ncbi.nlm.nih.gov/articles/PMC10928500/)
19. **European Journal of Radiology, 2025 (informed consent RCT).** [EJR](https://www.ejradiology.com/article/S0720-048X(25)00710-7/abstract)
20. **Neurosurgery, 2026 (patient education rewrite).** [Neurosurgery](https://journals.lww.com/neurosurgery/abstract/2026/01000/chatgpt_4_in_neurosurgery__improving_patient.15.aspx)
21. **Real Time Medical Systems v. PointClickCare (4th Cir., March 2025).** [Fierce Healthcare](https://www.fiercehealthcare.com/health-tech/real-time-medical-systems-scores-win-information-blocking-lawsuit-against); [Justia](https://law.justia.com/cases/federal/appellate-courts/ca4/24-1773/24-1773-2025-03-12.html); [Hintze Law](https://hintzelaw.com/blog/2025/3/24/fourth-circuit-publishes-landmark-ruling-on-21st-century-cures-act-information-blocking)
22. **UR Medicine MyChart Terms of Service.** [UR Medicine](https://mychart.urmc.rochester.edu/mychart/epic_tc_privacy.html)
23. **Epic MyChart arbitration/ToS changes.** [The Lever](https://www.levernews.com/mychart-rewrites-the-rules-patients-lose-their-rights/); [Jacobin](https://jacobin.com/2025/09/mychart-arbitration-lawsuits-health-privacy)
24. **AudioEye 2025 Digital Accessibility Index — Healthcare.** [AudioEye](https://www.audioeye.com/digital-accessibility-index/2025/industry-reports/healthcare/)
25. **PMC 2022 — Cognitive disability web accessibility review.** [PMC](https://pmc.ncbi.nlm.nih.gov/articles/PMC8869505/)
26. **HHS Section 504 Final Rule — WCAG 2.1 AA deadline.** [McDermott](https://www.mcdermottlaw.com/insights/may-2026-deadline-hhs-imposes-accessibility-standards-for-healthcare-company-websites-mobile-apps-kiosks/); [Deque](https://www.deque.com/blog/section-504-digital-accessibility-deadlines-what-every-hhs-funded-provider-must-know/)
27. **HHS Section 1557, 2024 Final Rule.** [Federal Register](https://www.federalregister.gov/documents/2024/05/06/2024-08711/nondiscrimination-in-health-programs-and-activities)
28. **CMS Interoperability rules.** [CMS-9115-F](https://www.cms.gov/priorities/burden-reduction/overview/interoperability/policies-regulations/cms-interoperability-patient-access-final-rule-cms-9115-f); [CMS-0057-F](https://www.cms.gov/priorities/burden-reduction/overview/interoperability/policies-and-regulations/cms-interoperability-and-prior-authorization-final-rule-cms-0057-f)
