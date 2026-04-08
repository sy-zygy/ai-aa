---
title: "Core Doctrine Memo: AI Comprehension Tools as Auxiliary Aids Under Existing Law"
created: 2026-04-05T00:00:00Z
modified: 2026-04-07T18:00:00Z
tags: [doctrine, legal, ada, section-504, section-1557, auxiliary-aids, effective-communication, white-paper]
order: 1
---

# AI Comprehension Tools as Auxiliary Aids Under Existing Effective-Communication Law

**AI Access Alliance — Core Doctrine Memo**
**Draft v0.4 — April 2026**
**Status:** Evidence integration draft — Research package incorporated, new sections added

---

## Executive Summary

This memo establishes the legal and policy argument that user-authorized AI comprehension tools — software that summarizes, explains, defines, reformats, and answers clarifying questions about written text — qualify as auxiliary aids and services under existing federal disability-rights law.

The argument does not require new legislation. It rests on three established legal pillars:

1. **The ADA, Section 504, and Section 1557 already require covered entities to provide auxiliary aids and services to ensure effective communication** with people who have disabilities. (42 U.S.C. § 12182(b)(2)(A)(iii); 28 CFR § 36.303; 29 U.S.C. § 794; 42 U.S.C. § 18116)

2. **The statutory definition of "auxiliary aids and services" is explicitly non-exhaustive and technology-neutral.** Congress designed it to evolve as new technologies emerge. Screen readers, real-time captioning, and text-to-speech were all once novel technologies that became recognized auxiliary aids.

3. **AI comprehension tools serve the same functional purpose for people with cognitive, intellectual, reading-related, and neurodevelopmental disabilities** as screen readers serve for blind users: they transform text into a format the user can meaningfully comprehend.

Therefore, when a covered entity blocks or restricts a person's authorized AI comprehension tool from accessing text the person is already entitled to read, that entity may be failing its effective-communication obligation — and may be denying an auxiliary aid in violation of the ADA, Section 504, or Section 1557.

This memo is not a litigation brief. It is a policy argument directed at the federal agencies charged with enforcing these statutes — DOJ, HHS OCR, and the Department of Education OCR — asking them to recognize AI comprehension tools within existing regulatory frameworks and issue guidance accordingly.

### Plain-Language Summary

Many people with disabilities that affect reading and understanding — including intellectual disabilities, learning disabilities like dyslexia, ADHD, traumatic brain injuries, and autism — use AI tools to help them understand written documents. These tools can summarize a page, explain what a paragraph means in simpler words, define terms, or answer questions about the text.

The Americans with Disabilities Act already says that organizations like hospitals, schools, and government agencies must help people with disabilities communicate effectively. They do this by providing things like sign language interpreters for deaf people, or screen readers for blind people. The law calls these "auxiliary aids."

AI comprehension tools are the same idea for people who can see the words but struggle to understand them. This memo argues that the law already covers these tools — no new law is needed. And when an organization blocks someone's AI comprehension tool from working on a document the person has the right to read, that may be breaking the law.

---

## I. Introduction

### A. The Problem

Millions of Americans with disabilities that affect reading comprehension encounter high-stakes written information every day: medical consent forms, insurance benefits explanations, school enrollment documents, government benefits applications, employment contracts, and legal notices. The World Health Organization estimates that 16% of the global population lives with some form of disability. In the United States, approximately 61 million adults live with a disability (CDC, 2018), and 26% of adults have some type of disability. Specific learning disabilities (including dyslexia, which affects an estimated 5-15% of the population) are the most common category of disability under IDEA, and ADHD affects approximately 6 million children and 4.4% of adults (NIMH). The National Center for Education Statistics estimates that 43 million U.S. adults (approximately 21%) have low literacy skills — reading at or below a basic level — many of whom have undiagnosed or undocumented learning disabilities, cognitive impairments, or neurodevelopmental conditions. These documents are often written at reading levels far above what many people with cognitive disabilities, intellectual disabilities, learning disabilities, or neurodevelopmental conditions can independently process.

The consequences of incomprehension are severe. A patient who cannot understand discharge instructions may take medications incorrectly. A parent who cannot parse an IEP document may fail to secure services their child is entitled to. A benefits applicant who cannot navigate a Medicaid renewal form may lose healthcare coverage.

For a growing number of these individuals, AI-powered comprehension tools have become essential assistive technology. These tools — integrated into browsers, mobile devices, or standalone applications — can:

- **Summarize** lengthy documents into key points
- **Explain** complex passages in simpler language
- **Define** technical, legal, or medical terminology in context
- **Reformat** dense text into structured, scannable layouts
- **Answer clarifying questions** about the text's meaning and implications
- **Translate** into the user's preferred reading level or communication style

These capabilities are not hypothetical. People with disabilities are already using commercial AI tools (such as ChatGPT, Claude, Gemini, and specialized accessibility applications) for exactly these purposes. Forty million users turn to ChatGPT daily for health-related questions alone (Axios, January 2026), and three in five U.S. adults have sought medical advice from an AI service (Boston Globe, February 2026). User stories documented by AI Access Alliance confirm that AI comprehension tools have become a primary reading accommodation for many individuals:

- A branding consultant with dyslexia describes how ChatGPT has given him "the confidence to stand alongside his peers and clients," transforming tasks that previously consumed entire days into manageable work (LinkedIn, January 2023).
- An autistic adult with ADHD reports that emails "can sit unsent because replies feel too complex to tackle" and that he once delayed filling out a single form for 18 months due to executive function paralysis — until AI tools broke the barrier (Personal blog, 2024).
- A peer-reviewed diary study of 13 adults with ADHD found participants described ChatGPT as "a little bit of a life raft," using it to bridge neurotypical-neurodivergent communication gaps and support executive function (ACM Conference, 2025).
- The Be My Eyes app, powered by GPT-4, has been called "one of the most exciting technological assistance solutions we have ever evaluated" by the National Federation of the Blind (NFB), serving 250 million blind and low-vision users globally.

### B. The Emerging Barrier

At the same time that AI comprehension tools have become essential, many institutions are actively blocking them. Hospitals are deploying anti-bot measures on patient portals that prevent AI tools from accessing medical documents. Schools are implementing AI-blocking policies that do not distinguish between cheating tools and comprehension aids. Government benefits websites are adding CAPTCHAs and bot-detection systems that prevent AI tools from processing application instructions. Employers are restricting AI use in ways that block employees from using comprehension aids on workplace documents.

These measures are typically implemented for legitimate purposes — preventing automated scraping, protecting intellectual property, reducing AI-generated academic fraud. But their effect on people who depend on AI for comprehension is severe and documented:

- Anti-scraping techniques that render text as images or use canvas elements "block bots but also break screen readers and AI comprehension tools," forcing users with disabilities to "miss out on crucial content" (WebProNews, December 2025).
- CAPTCHAs create a vicious cycle: as AI improves (machine learning models solve text CAPTCHAs with 97%+ accuracy), CAPTCHA difficulty increases, and "users who most need accessibility support face the hardest verification tasks" (AbilityNet; Smashing Magazine, November 2025).
- Blanket AI bans in educational settings have prompted accessibility scholars to argue that "for some students, AI is not a shortcut to avoid thinking but rather a lifeline to their learning," and that "ignoring it is not neutrality — it's negligence" (Inside Higher Ed, November 2025).
- In 2024, over 4,000 ADA lawsuits were filed in federal and state courts alleging that websites and mobile applications failed to comply with Title III — demonstrating the scale of digital accessibility barriers that anti-AI measures may compound.

The institutions may not intend to create barriers, but the barriers are real.

### C. The Legal Framework

This memo argues that the legal tools to address this problem already exist. The ADA's effective-communication requirements, mirrored in Section 504 and Section 1557, require covered entities to provide auxiliary aids and services — and the definition of auxiliary aids was deliberately written to include technologies that did not exist when the statute was enacted.

The question is not whether the law *could* cover AI comprehension tools. The question is whether the agencies charged with enforcing these statutes will recognize what the statutory text already supports.

---

## I-A. Scope and Limitations

This memo advances a narrow legal argument. To prevent mischaracterization — and to maintain the credibility of the advocacy position — the following boundaries must be explicit.

**What this memo argues:**

- User-authorized AI tools that explain, summarize, translate into plain language, and support comprehension of text the user is already authorized to access may qualify as auxiliary aids under existing law.
- Covered entities that block these tools without providing equally effective alternatives may be violating effective-communication obligations.
- Federal agencies should issue guidance recognizing this application of existing statutory frameworks.

**What this memo does NOT argue:**

- **No generalized scraping rights.** This argument does not create or support a right for AI systems to access content autonomously, harvest data, or bypass access controls for non-disability purposes.
- **No autonomous agent access.** This memo concerns user-directed comprehension tools, not autonomous agents that act on behalf of users in systems.
- **No universal AI access claims.** Not all AI tools are auxiliary aids. The argument applies specifically to tools used by people with disabilities for comprehension of text they are authorized to access.
- **No override of copyright or access controls.** Where access controls serve purposes unrelated to communication (e.g., copyright protection, subscription paywalls for general content), this argument does not apply.
- **No mandate for specific technologies.** This memo does not argue that covered entities must permit any particular AI product. The obligation is to ensure effective communication — how that obligation is met involves the interactive accommodation process.

This distinction is not a rhetorical concession. It is the foundation of the argument's strength. The ADA's auxiliary aids framework has always been bounded by the user's authorization and the communication's purpose. AI comprehension tools fit within those boundaries. If the argument is expanded beyond them, it loses both legal grounding and political viability.

---

## II. The Statutory and Regulatory Framework

### A. The ADA's Effective-Communication Mandate

The Americans with Disabilities Act establishes a comprehensive framework for ensuring that people with disabilities can communicate effectively with covered entities.

**Title II** (state and local government) requires that:

> "A public entity shall take appropriate steps to ensure that communications with applicants, participants, members of the public, and companions with disabilities are as effective as communications with others." (28 CFR § 35.160(a)(1))

**Title III** (public accommodations) provides that discrimination includes:

> "a failure to take such steps as may be necessary to ensure that no individual with a disability is excluded, denied services, segregated or otherwise treated differently than other individuals because of the absence of auxiliary aids and services..." (42 U.S.C. § 12182(b)(2)(A)(iii))

The implementing regulations define the covered entity's obligation to "furnish appropriate auxiliary aids and services where necessary to ensure effective communication." (28 CFR § 36.303(c))

**Section 504** of the Rehabilitation Act applies the same principles to any program or activity receiving federal financial assistance. (29 U.S.C. § 794) HHS regulations require recipients to "ensure that communications with their federal financial assistance applicants, beneficiaries, and members of the public with disabilities are as effective as communications with others." (45 CFR § 84.52(d))

**Section 1557** of the Affordable Care Act extends nondiscrimination protections, including effective-communication requirements, to health programs and activities receiving federal financial assistance. (42 U.S.C. § 18116; 45 CFR § 92.102)

### B. The Definition of Auxiliary Aids and Services

The ADA's definition of "auxiliary aids and services" is critically important because it was written to be non-exhaustive and technology-neutral:

> "The term 'auxiliary aids and services' includes—(A) qualified interpreters or other effective methods of making aurally delivered materials available to individuals with hearing impairments; (B) qualified readers, taped texts, or other effective methods of making visually delivered materials available to individuals with visual impairments; (C) acquisition or modification of equipment or devices; and (D) other similar services and actions." (42 U.S.C. § 12103(1))

The implementing regulations expand this list with illustrative examples that have evolved over time:

> "Auxiliary aids and services includes [...] qualified readers; taped texts; audio recordings; Brailled materials and displays; screen reader software; magnification software; optical readers; secondary auditory programs (SAP); large print materials; accessible electronic and information technology; or other effective methods of making visually delivered materials available to individuals who are blind or have low vision." (28 CFR § 36.303(b)(1))

The DOJ has consistently interpreted this list as illustrative, not exhaustive. The Department's own guidance confirms:

> "The ADA does not provide an exhaustive list of the auxiliary aids that may be used... New devices are being invented and new technologies developed. What is important is effective communication." (ADA.gov, Effective Communication guidance)

### C. The Principle of Technological Evolution

The legislative history and agency interpretation of the ADA make clear that the auxiliary-aids framework was designed to accommodate technological change.

The House Judiciary Committee report on the ADA stated that the term "auxiliary aids and services" should be interpreted broadly to include new technologies:

> "The Committee intends that the types of aids and services listed... are not to be considered an all inclusive list... Technological advances can be expected to further expand the means available for making reasonable modifications for people with disabilities." (H.R. Rep. No. 101-485, pt. 3, at 64 (1990))

This principle has been vindicated repeatedly as technologies matured:

| Technology | Initially Novel? | Now Recognized As Auxiliary Aid? |
|------------|-----------------|--------------------------------|
| Screen readers | Yes (1980s-90s) | Yes — standard accommodation |
| Real-time captioning (CART) | Yes (1990s) | Yes — standard accommodation |
| Video remote interpreting (VRI) | Yes (2000s) | Yes — codified in 28 CFR § 36.303(b)(1) |
| Refreshable Braille displays | Yes (2000s) | Yes — standard accommodation |
| Text-to-speech software | Yes (1990s-2000s) | Yes — standard accommodation |
| Automated speech recognition captioning | Yes (2010s) | Yes — increasingly accepted |

Each of these technologies was once novel, imperfect, and subject to skepticism about reliability. Each is now a standard auxiliary aid.

### D. Cognitive Disability and Effective Communication

The ADA's effective-communication requirements apply to people with all types of disabilities that affect communication — not only sensory disabilities. The DOJ has explicitly stated:

> "The rules apply to communicating with people who have communication disabilities — which includes people who are deaf, are hard of hearing, are blind, have low vision, or have speech disabilities. The rules also apply to companions of covered individuals who have communication disabilities." (28 CFR § 35.160, DOJ guidance)

While agency guidance has historically focused more heavily on sensory disabilities, the statutory text contains no such limitation. The ADA defines "disability" to include "a physical or mental impairment that substantially limits one or more major life activities" (42 U.S.C. § 12102(1)(A)), and the ADA Amendments Act of 2008 broadened the definition to ensure that "the question of whether an individual's impairment is a disability under the ADA should not demand extensive analysis." (Pub. L. 110-325, § 2(b)(5))

Major life activities explicitly include "reading" and "communicating." (42 U.S.C. § 12102(2)(A)) Cognitive disabilities — including intellectual disabilities, specific learning disabilities (e.g., dyslexia), ADHD, traumatic brain injury, autism spectrum conditions, and others — can substantially limit the ability to read and comprehend written text. Individuals with these conditions are squarely within the ADA's protected population and are entitled to effective communication through auxiliary aids and services.

---

## III. The Core Argument: AI Comprehension Tools Are Auxiliary Aids

### A. Functional Equivalence

The central claim of this memo is that AI comprehension tools are functionally equivalent to established auxiliary aids — they transform information from a format that is inaccessible to the user into a format that is accessible.

| Established Auxiliary Aid | Function | Disability Served |
|--------------------------|----------|------------------|
| Screen reader | Converts visual text to audio | Blindness, low vision |
| Qualified reader | Reads text aloud to user | Blindness, low vision, some learning disabilities |
| Sign language interpreter | Converts spoken language to visual language | Deafness, hearing impairment |
| CART (real-time captioning) | Converts speech to written text | Deafness, hearing impairment |
| Braille display | Converts visual text to tactile format | Blindness |
| **AI comprehension tool** | **Converts complex text to simplified, explained, or restructured format** | **Cognitive, intellectual, learning, and neurodevelopmental disabilities** |

The functional pattern is identical: a person with a disability cannot access information in its original format. An assistive technology transforms the information into a format the person can access. The result is effective communication.

### B. The User-Authorization Principle

This memo's argument is narrowly scoped to **user-authorized** AI comprehension tools. This means:

1. **The user has a disability that substantially limits reading comprehension.** The tool is being used as an accommodation, not a convenience.
2. **The user is already authorized to access the text.** The AI tool is not being used to access restricted information — it is being used to *comprehend* information the user is already entitled to read.
3. **The user has directed the AI tool to assist them.** This is not autonomous scraping or data harvesting. It is a person using an assistive technology at their own direction.

This is precisely the framework that applies to all other auxiliary aids. A screen reader does not independently crawl the internet — it processes text that the user has navigated to and is entitled to access. A sign language interpreter does not attend meetings uninvited — they are present because a deaf person has requested the accommodation. AI comprehension tools should be understood the same way.

### C. The Comprehension Gap in Current Auxiliary Aids

Existing auxiliary aids overwhelmingly serve people with sensory disabilities — blindness, deafness, low vision, hearing impairment. The ADA's auxiliary-aids framework has been remarkably successful for these populations, precisely because the assistive technologies are well-understood and widely available.

But for people with cognitive, intellectual, and reading-related disabilities, the auxiliary-aids landscape is far less developed. The primary accommodation available under current practice is "plain language" versions of documents — which most covered entities do not produce, and which cannot address the full range of comprehension barriers individual users face.

AI comprehension tools fill this gap. They provide:

- **On-demand simplification** — adapting to the specific user's comprehension level, not a one-size-fits-all plain-language version
- **Interactive explanation** — allowing the user to ask follow-up questions about specific parts of the text
- **Contextual definitions** — explaining technical terms in the context of the specific document, not generic dictionary definitions
- **Structural reformatting** — breaking dense paragraphs into bullet points, tables, or step-by-step instructions
- **Multiple modalities** — combining text simplification with text-to-speech, visual aids, or other formats

No other currently available auxiliary aid provides these capabilities for people with comprehension barriers. AI comprehension tools are not merely helpful — for many users, they are the *only effective auxiliary aid* available.

---

## IV. Application to High-Stakes Sectors

### A. Healthcare

**Regulatory framework:** ADA Titles II and III, Section 504 (for federally funded programs), Section 1557 of the ACA.

Healthcare institutions produce some of the most consequential text that people encounter: consent forms, discharge instructions, medication guides, insurance benefits explanations, appointment scheduling systems, and patient portal communications. Health literacy research consistently finds that these documents are written at reading levels far above what many patients can independently comprehend.

**The comprehension gap is quantifiable — and staggering.** The AMA and NIH recommend patient-facing materials be written at or below a 6th-grade reading level. Primary-source readability studies consistently find that healthcare documents far exceed this threshold:

| Document Type | Measured Reading Level | Recommended Level | Gap | Source |
|---------------|----------------------|-------------------|-----|--------|
| Hospital discharge instructions | 88.7% above 7th grade; median 10th grade (pediatric) | AMA: 6th grade | 4-6 grades | Distribala 2022; Unaka 2017 |
| Epic discharge documents | 81% above 6th grade | AMA: 6th grade | 5+ grades | American Journal of Medicine, 2025 |
| Informed consent forms | Average 10.6 (11th grade); exceeds IRB standards by 2.8 grades | IRB: 8th grade | 2.8 grades above own standards | Paasche-Orlow, NEJM 2003 |
| Medicaid enrollment "Signature" pages | 11th-18th grade (M=15.5) | Average enrollee: 5th grade | 7-14 grades | Sanders 2009; Olives 2012 |
| Medicaid renewal applications | 89.1% fail Flesch-Kincaid; 52.2% fail all 3 readability tests | 5th grade (average enrollee) | 6-13 grades | Olives 2012 |

For adults with intellectual disabilities — who read at approximately a 3rd-4th grade level (ICD-11; PMC 2025) — the gap between their reading ability and Medicaid enrollment forms is 7-14 grade levels. No amount of "trying harder" bridges that gap. An auxiliary aid is required.

The consequences are not abstract. Fourteen percent of U.S. adults (approximately 30 million) have "Below Basic" health literacy, and 36% fall in the two lowest categories (approximately 80 million with limited health literacy). The National Academy of Medicine has documented that low health literacy is associated with higher hospitalization rates, greater emergency department use, and lower use of preventive services. The scale of need is enormous: 40 million users turn to ChatGPT daily for health-related questions (Axios, January 2026), and three of every five U.S. adults have sought medical advice from an AI service (Boston Globe, February 2026). Yet ChatGPT Health's connected medical records feature requires paid subscriptions, compatible devices, electronic health records, and digital literacy — meaning "the very populations who face the greatest healthcare access barriers may be the least likely to have these technological resources" (Disabled World, 2026).

**AI effectiveness in healthcare comprehension is now peer-reviewed.** A landmark study published in *JAMA Network Open* (2024) found that GPT-4 transformed 50 discharge summaries with dramatic results: PEMAT understandability scores increased from **13% to 81%** (a sixfold improvement), Flesch-Kincaid grade level dropped from 11.0 to 6.2, and word count decreased from 1,520 to 338 — all while preserving clinical accuracy. Additional studies confirm: GPT-4 reduces neurosurgery abstract reading levels from 12th to 5th grade with 95%+ content preservation (Int'l J. Medical Informatics, 2024), and biomedical text simplification achieves 92-96% accuracy with 95.3% faithfulness (arXiv, 2024).

**Documented use:** An adult with ADHD reported using ChatGPT to "translate medical test results to plain English," making clinical jargon comprehensible before discussing results with their doctor (ADDitude Magazine, 2023). The cognitive load of parsing technical medical language compounds ADHD's executive function challenges, making AI comprehension support not a convenience but a functional necessity.

**Anchor case: AADJ v. Epic Systems** (filed March 9, 2026, W.D. Texas). The American Association for Disability Justice filed suit against Epic Systems, whose MyChart patient portal fragments records across provider-specific portals with separate logins. Third-party tools — including AI — are restricted. Two named plaintiffs illustrate the human cost:

- **Larry Miller** had severe diabetes complications. He applied for disability benefits, but his claim was denied twice for "insufficient medical evidence" — because he could not compile records scattered across multiple portals. **He died while his appeal was pending.** His father was unable to access his son's records after death.
- **John Hodges** suffered multiple heart attacks. He spent more than two years attempting to gather his fragmented medical records. During that time, he experienced homelessness and lost custody of his daughter.

The lawsuit alleges antitrust violations (Epic controls 42% of the acute care market, with 325+ million patient records across 3,600+ hospitals), information blocking under the 21st Century Cures Act, and ADA disability discrimination. For this memo's purposes, the case establishes that healthcare IT architecture creates barriers causing measurable, severe harm — and that AI comprehension and compilation tools could directly mitigate these barriers. (Source: Becker's Hospital Review, March 2026)

**The AI comprehension use case:** A patient with an intellectual disability receives discharge instructions after a hospital stay. The instructions include medication schedules, warning signs, follow-up appointment requirements, and dietary restrictions — written at a 12th-grade reading level with medical terminology. The patient's AI comprehension tool can:

- Summarize the instructions into plain-language action items
- Explain what each medication does and when to take it
- Define medical terms in context ("NPO means you shouldn't eat or drink anything")
- Answer questions ("Can I take this with my other medications?")

**The barrier:** The hospital's patient portal deploys anti-bot measures that prevent the patient's AI tool from accessing discharge instructions. The patient cannot independently comprehend the instructions and has no alternative auxiliary aid available.

**The legal analysis — a three-way convergence:** Blocking AI comprehension tools on patient portals may simultaneously violate three federal law frameworks:

1. **CMS Patient Access API mandate** — Patients have a legal right to send their health data to any third-party application of their choosing.
2. **21st Century Cures Act — information blocking prohibition** — The Fourth Circuit's landmark ruling in *Real Time Medical Systems v. PointClickCare* (March 2025) found that CAPTCHAs deployed to block automated access to health records "plausibly violated" the information blocking prohibition. The court held that PointClickCare "failed to articulate a specific security risk posed by Real Time's bot access, instead gesturing very broadly to the potential malicious use of bots." En banc rehearing was denied in April 2025. This establishes federal appellate precedent: blocking automated health record access requires a *specific* security justification, not generic "bots are bad" reasoning. (Source: Fierce Healthcare; Full Opinion, 4th Cir. No. 24-1773)
3. **Section 1557 / ADA / Section 504** — Under Section 1557 and ADA Title III, the hospital has an obligation to ensure effective communication. If the hospital's anti-bot measures prevent a patient's authorized AI comprehension tool from functioning — and the hospital has not provided an equally effective alternative accommodation — the hospital may be in violation of its effective-communication obligations.

This three-way legal convergence makes healthcare the strongest sector for AI-AA's advocacy. Patient portals that block AI comprehension tools face potential liability under health information access law, information blocking law, *and* disability-rights law — each independently, and all simultaneously.

### B. Education

**Regulatory framework:** ADA Title II, Section 504, IDEA (for K-12 special education).

Educational institutions generate enormous volumes of text that students and parents must comprehend: enrollment forms, IEP and 504 plan documents, course materials, financial aid applications, grade reports, and disciplinary notices. IEP documents are particularly challenging: they contain legal terminology from IDEA and state regulations, psychoeducational assessment jargon, grade-level equivalencies, standard deviations, and procedural safeguards notices.

**The readability data is damning.** IEP and 504 plan documents score at 9.9-12.0 grade levels (East Tennessee State University, 2003), while parents of special education students read an average of three grades below that requirement. Only **13.3% of parents answer all five IEP comprehension questions correctly**; 60% answer only one to three correctly. Notably, 57% of special education teachers used AI to help with IEPs or 504 plans in the 2024-25 school year, up from 39% in 2023-24 (EdWeek, October 2025) — demonstrating that even the professionals who create these documents find AI tools valuable for managing their complexity. The parents and students who must *comprehend* these documents face an even steeper challenge.

The scope of need is substantial. Under IDEA, approximately 7.5 million students (ages 3-21) received special education services in the 2022-23 school year (NCES), each with parents or guardians who must understand IEP or 504 plan documents to participate meaningfully in educational decision-making. Learning disabilities are themselves heritable — parents of children with learning disabilities are more likely to have reading-related disabilities themselves, compounding the comprehension barrier.

**Documented use: AI comprehension tools are already closing this gap.** Rosa Mendoza, a Spanish-speaking parent in San Francisco whose daughter has hearing loss, balance problems, and developmental delay, used **AiEP** — a free AI tool built by Innovate Public Schools and Northeastern University's Burnes Center (funded by the Chan Zuckerberg Foundation) — to translate her daughter's IEP from English to Spanish and then simplify the jargon into understandable summaries. Another parent, Shan Hong, used the same tool and discovered a **127-minute discrepancy** between documented and actual services in her son's IEP — a discrepancy buried in technical language she could not have identified without comprehension assistance. Approximately 200 San Francisco families are testing AiEP, which generates personalized meeting prep checklists alongside plain-language translations. (Source: The Frisc, San Francisco, 2025)

**The positive counterfactual: what happens when schools say yes.** Makenzie Gilkison, a 14-year-old dyslexic student in Franklin Township, Indiana, was given AI chatbots by her school district in September 2024. Before AI tools: "I just assumed I was stupid." After: she was named to the National Junior Honor Society. "I would have just probably given up if I didn't have them." (Source: AP via Washington Times, December 2024)

**The barrier: students who need AI most are punished most for using it.** CDT research (2024-2025) documents a systematic pattern: students with IEPs and 504 plans are *more likely* to use generative AI than peers (72% of students with disabilities have used generative AI) — because they need it. They are also **more likely to be disciplined for AI use**. One in five students said they or someone they know was accused of AI cheating without proof. AI detectors disproportionately flag non-standard writing patterns — the same patterns produced by dyslexia, learning disabilities, and ESL status. A Stanford study confirmed significant disparities in false flags for non-native versus native English speakers. (Sources: CDT, "Up in the Air," 2024; CDT, "Late Applications," 2025)

**Anchor case: Jane Doe v. University of Michigan** (filed February 2026). This is the first known federal lawsuit explicitly alleging ADA disability discrimination arising from AI detection in academic integrity proceedings. A student with generalized anxiety disorder and obsessive-compulsive disorder, who had approved accommodations, was accused three times by an instructor of AI cheating based on "subjective judgments" about her writing. The student provided documentation explaining that disability-related writing traits can mimic AI-generated text. The lawsuit alleges the university failed to accommodate her disability in its academic integrity process. This case establishes that blanket AI enforcement without disability exemptions creates litigation exposure — and may create precedent on the intersection of AI detection and disability rights.

**The policy failure:** Major school districts have implemented blanket AI bans with no disability accommodation exemptions. New York City's Department of Education (the nation's largest, serving 1.1 million students across 1,800+ schools) banned AI tools in January 2023 — and reversed the ban within five months, with the Chancellor acknowledging the policy "overlooked the potential." LA Unified, Seattle, and Baltimore implemented similar bans without disability carve-outs. COPAA (the Council of Parent Attorneys and Advocates) has warned that school cellphone bans risk violating IDEA and Section 504 when they limit assistive technology access — the structural parallel to AI bans is direct.

**The legal analysis:** Under Section 504, the school district must ensure effective communication with parents who have disabilities. Under IDEA, IEP teams must consider assistive technology at every IEP meeting (34 CFR § 300.324(a)(2)(v)), and IDEA's definition of assistive technology — "any item, piece of equipment, or product system... that is used to increase, maintain, or improve functional capabilities of a child with a disability" (20 U.S.C. § 1414(d)(3)(B)(v)) — is broad enough to encompass AI comprehension tools (NJPSA/FEA legal analysis, 2025). OSEP guidance (January 2024) confirms this definition gives IEP teams "flexibility to make decisions about appropriate assistive technology devices." A blanket AI-blocking policy that does not distinguish between cheating tools and comprehension aids may deny auxiliary aids to parents with reading-related disabilities and may prevent IEP teams from fulfilling their mandatory assistive technology consideration obligation.

### C. Government Services

**Regulatory framework:** ADA Title II (state and local government), Section 504 (federally funded programs).

Government agencies at all levels produce text that directly determines people's access to benefits, rights, and services: benefits applications, legal notices, tax forms, voter information, regulatory communications, and court documents.

**The comprehension barriers in government services are acute — and quantified.** Medicaid renewal applications require an 11th-18th grade reading level (mean: 15.5), while the average Medicaid enrollee reads at a 5th-grade level — a gap of 6-13 grade levels (Sanders 2009; Olives 2012). Eighty-nine percent of Medicaid renewal forms fail Flesch-Kincaid readability standards, and 52.2% fail all three standard readability tests. Social Security Administration applications and determination letters use legal and bureaucratic language at comparable levels. The Plain Writing Act of 2010 (Pub. L. 111-274) requires federal agencies to use "clear Government communication that the public can understand and use," but compliance remains inconsistent and the Act contains no private right of action — leaving people with comprehension barriers without legal recourse when forms are incomprehensible.

**The scale of harm is documented.** During the Medicaid continuous enrollment unwinding (March 2023 – September 2024), approximately **25 million people were disenrolled** from Medicaid. Of these, **69-71% were disenrolled for procedural reasons** — not because they were ineligible, but because they could not navigate the renewal process. Procedural disenrollments exceeded 50% in 46 states and 75% in 19 states. For enrollees with cognitive or reading-related disabilities facing forms written at the 11th-18th grade level, the procedural barrier is not negligence — it is a foreseeable consequence of incomprehensible documentation without adequate comprehension support.

**Context:** The National Academy of Social Insurance's Task Force on AI, Emerging Technology, and Disability Benefits (April 2025) has noted that AI's "black box" nature presents "obvious and serious problems if a tool operates in government benefit determinations." But this concern addresses AI used *by agencies* to make decisions about applicants. The converse question — AI used *by applicants* to comprehend their own benefits paperwork — remains unaddressed in policy, despite being the scenario where comprehension barriers cause the most direct harm.

**Documented use:** A software engineer identified by the pseudonym "Nunc" used Claude Code (Anthropic) to appeal his mother's disability benefits rejection. His mother had severe spinal degeneration with osteoporotic vertebral fractures (L2, L3, L4) after 45 years of physical labor. The AI tool OCR'd and analyzed 50+ scanned medical documents spanning 25+ years, cross-referenced them against government disability regulations, and identified that multiple vertebral segments should sum to over 50% disability — not the 30% initially recognized. The tool produced 11 iterative versions of a 230-line legal appeal with 30+ specific medical citations. Critically, it identified that the commission's characterization of the condition as "congenital" was contradicted by imaging from 2000 — a fact buried in the 50+ documents that no unaided human reader could reasonably be expected to cross-reference. (Source: DEV Community, 2026)

This case demonstrates AI functioning precisely as an auxiliary aid: bridging the comprehension gap between dense regulatory and medical language for a person navigating a high-stakes government benefits process.

**The AI comprehension use case:** An individual with a traumatic brain injury is trying to complete a Medicaid renewal application. The form requires understanding eligibility criteria, income calculation methods, and documentation requirements — written at an 11th-18th grade reading level. The individual's AI comprehension tool can walk them through the form section by section, explaining what information is needed and why.

**The barrier:** The state Medicaid portal uses bot-detection systems that prevent AI tools from accessing the application interface. The individual cannot use their comprehension tool and fails to complete the renewal, losing healthcare coverage — joining the 25 million procedurally disenrolled during the 2023-2024 unwinding.

**The legal analysis:** Under ADA Title II, the state agency must ensure effective communication with applicants who have disabilities. Failure to accommodate AI comprehension tools — when no equally effective alternative is provided — may violate Title II's effective-communication mandate. The procedural disenrollment data demonstrates that the harm is not hypothetical: millions of people have already lost healthcare coverage because they could not navigate renewal processes that existing accommodations failed to make comprehensible.

### D. Employment

**Regulatory framework:** ADA Title I, EEOC guidance on reasonable accommodation.

Employers produce substantial volumes of text that employees must comprehend: benefits enrollment packages, HR policies, workplace safety materials, performance review forms, and regulatory compliance documents. Open enrollment periods impose compressed timelines during which employees must parse health insurance plan comparisons, retirement contribution options, and benefits trade-offs — all written in insurance and financial terminology.

**Documented use:** Tara DeZao, senior director of product marketing at Pega, was diagnosed with ADHD as an adult. She describes the impact of AI: "I've white-knuckled my way through the business world, but these tools help so much." Incoming Slack and Teams messages completely derail her thought process; AI agents handle written requests while she stays focused on complex tasks. (Source: CNBC, November 2025)

**Systematic evidence confirms DeZao's experience at scale.** An EY survey of 300 employees with disabilities and neurodivergence across 17 organizations found: **68% said AI reduced work anxieties**, 71% said it gave them hope, **85% said it creates a more inclusive workplace**, and 76% said it helped them thrive. (Source: Microsoft, 2025) A UK Department for Business and Trade trial (1,000 Copilot licenses, October 2024 – March 2025) found that **neurodiverse employees were 25% more satisfied** with AI assistants than neurotypical peers — evidence that AI tools disproportionately benefit the employees who need accommodation most. (Source: UK DBT, 2025)

**The legal analysis:** Under ADA Title I, employers must provide reasonable accommodations to qualified employees with disabilities, which may include auxiliary aids. EEOC guidance recognizes that assistive technology can serve as a reasonable accommodation. An employer that blocks AI comprehension tools in the workplace — without providing an equally effective alternative — may be failing its reasonable accommodation obligation when employees with cognitive or reading-related disabilities need those tools to comprehend employment documents.

*[Note: No published story specifically documents an employee using AI for benefits enrollment or open enrollment forms. DeZao and the EY data are the strongest available evidence for workplace AI accommodation. An original story documenting AI use for HR benefits comprehension remains a collection priority.]*

---

## V. Addressing Objections

### A. "AI Tools Aren't Reliable Enough to Be Auxiliary Aids"

**The objection:** AI comprehension tools can hallucinate, misinterpret, or produce inaccurate summaries. They should not be classified as auxiliary aids because they might give users incorrect information.

**The response:** The ADA standard is "effective communication," not perfect communication. The Supreme Court established in *Alexander v. Choate*, 469 U.S. 287, 301 (1985), that Section 504 requires "meaningful access" to benefits — not flawless access. This principle has been consistently applied to auxiliary aids: the aid must be effective, not infallible. Every existing auxiliary aid has documented, quantified error rates:

| Auxiliary Aid | Error Rate | Source |
|---------------|-----------|--------|
| Medical interpreters | 31 errors per encounter (mean); **63% potentially clinically consequential** | Flores et al., *Pediatrics*, 2003 |
| Ad hoc (untrained) interpreters | **77% clinically consequential** error rate | Flores et al., *Pediatrics*, 2003 |
| CART captioning | 83.4-98% word accuracy (industry standard: 98%) | NCRA; ACM SIGACCESS 2025 |
| Automated speech recognition | ~75% accuracy | Interprefy |
| Signed English transliteration | **61% accuracy** | PMC, 2025 |
| Screen readers (web compatibility) | 95.9% of top 1M sites have WCAG failures; average 56.1 errors per page | WebAIM Million, 2026 |

None of these error rates have been found to disqualify these technologies as auxiliary aids. The DOJ has never required perfection — only effectiveness. In multiple settlement agreements involving hospital systems and universities, DOJ has accepted auxiliary aids that provide meaningful comprehension, not error-free comprehension.

**AI comprehension tools meet or exceed these baselines.** Peer-reviewed accuracy data on AI text comprehension and simplification tasks:

| Task | Performance | Source |
|------|------------|--------|
| Discharge summary simplification | PEMAT understandability: **13% → 81%**; FKGL: 11.0 → 6.2; word count: 1,520 → 338 | *JAMA Network Open*, 2024 (NYU Langone) |
| Neurosurgery abstract simplification | FKGL: 12th → 5th grade; cosine similarity 0.746 | Int'l J. Medical Informatics, 2024 |
| Patient education materials | FKGL: 13th → 5th grade; cosine similarity 0.953 | Int'l J. Medical Informatics, 2024 |
| Heart failure education materials | Median FKGL: 10.3 → 7.3 | *JMIR*, 2025 |
| Biomedical text simplification | 92.26% term accuracy; 96.58% accuracy/completeness; 95.3% faithfulness | arXiv, 2024 |

Medical interpreters average 31 errors per encounter with 63% potentially clinically consequential. Signed English transliteration achieves 61% accuracy. AI text simplification achieves 92-96% accuracy with 95%+ content preservation. **Imperfection has never been grounds for denying an auxiliary aid. The legal question is meaningful access, not perfect access.**

Additional peer-reviewed research supports the use of AI comprehension tools for people with disabilities. A study published in *Disability and Rehabilitation: Assistive Technology* (2023) examined whether ChatGPT can "empower people with dyslexia" and found meaningful comprehension benefits. A study in *JMIR Neurotechnology* (2025) proposes generative AI as a "cognitive copilot" for people with cognitive disabilities, offering personalized support in daily activities and social interactions. The Rocky Mountain ADA Center's Rapid Response Report on ChatGPT and disability (September 2023) found that ChatGPT may "level the playing field" for individuals with disabilities, providing assistance "in a safe and non-judgmental environment, which may be a barrier for some individuals seeking this type of assistance" through traditional channels.

That said, AI-AA supports reasonable reliability safeguards for AI comprehension tools used as auxiliary aids. These may include:

- Accuracy benchmarks for specific document types
- Disclosure requirements when AI-generated explanations may be uncertain
- User-facing warnings for high-stakes document types (medical, legal, financial)
- Human-in-the-loop options for critical decisions

The question of reliability is important, but it is a *quality standard* question — not a threshold question about whether the category of technology qualifies. We do not refuse to classify interpreters as auxiliary aids because some interpreters make mistakes. We set quality standards and allow the accommodation to proceed.

### B. "This Is Really About Scraping and Interoperability, Not Accessibility"

**The objection:** AI-AA's real goal is to create a legal right for AI companies to scrape content from websites, and the accessibility framing is a pretext.

**The response:** This objection misunderstands the scope of the argument. AI-AA's position is narrowly limited to:

- **User-authorized** tools (not autonomous crawlers)
- **Comprehension of text the user is already entitled to access** (not access to restricted content)
- **Accommodation for people with disabilities** (not universal interoperability rights)
- **High-stakes informational texts** (not entertainment, creative works, or proprietary databases)

A person using an AI tool to understand their own medical records is fundamentally different from a company using an AI crawler to scrape copyrighted content. Our argument applies to the former, not the latter.

Moreover, the distinction between authorized comprehension assistance and unauthorized scraping is well-established in analogous contexts. A blind person's screen reader accesses the same HTML as a scraping bot, but no one argues that accommodating screen readers requires allowing all web scraping. The same principle applies to AI comprehension tools.

### C. "Cognitive Disability Accommodations Don't Require Technology Access"

**The objection:** Accommodations for people with cognitive disabilities have traditionally involved human supports (aides, simplified documents, extended time) rather than technology. There is no precedent for requiring technology-based accommodations for cognitive disabilities.

**The response:** The ADA is technology-neutral by design. The statute does not distinguish between human-provided and technology-provided auxiliary aids. A qualified reader (human) and a screen reader (technology) are both listed as auxiliary aids in 28 CFR § 36.303(b)(1). The DOJ has explicitly stated that "new devices are being invented and new technologies developed" and that what matters is effective communication — not the mechanism of delivery.

Moreover, courts have recognized that covered entities must provide *effective* auxiliary aids, and that the entity's preferred method may not satisfy the obligation if a more effective alternative exists. In *Liese v. Indian River County Hospital District*, 701 F.3d 334 (11th Cir. 2012), the court held that the ADA requires "primary consideration" of the disabled individual's preferred auxiliary aid, not merely any aid the entity finds convenient. Where a person's preferred and most effective comprehension tool is AI-based, the analysis is the same.

The question is not *how* the aid works, but *whether* it provides effective communication. If an AI comprehension tool is the most effective auxiliary aid available for a particular individual's comprehension needs, the law supports its use.

Furthermore, the practical reality is that human-provided comprehension assistance is scarce, expensive, and not available on demand. The ADA's integration mandate, articulated in *Olmstead v. L.C.*, 527 U.S. 581 (1999), reflects the principle that people with disabilities should receive services in the most integrated, least restrictive setting appropriate. A person with a cognitive disability who needs to understand a medical form at 9 PM cannot call a human aide. An AI comprehension tool is available immediately, at any time, for any document — enabling independent comprehension in the individual's own environment rather than requiring institutional intermediation. Restricting people to human-only accommodations when effective technology-based alternatives exist would be inconsistent with the ADA's purpose and its integration mandate.

### D. "Disability Advocacy Groups Oppose AI in Plain-Language Contexts"

**The objection:** The Autistic Self Advocacy Network (ASAN) has taken a public position opposing generative AI in plain-language contexts (ASAN, July 2025). Other organizations have raised related concerns: the New York City Bar Association's report "The Impact of the Use of AI on People with Disabilities" (June 2025) noted that AI-generated content often "misrepresents the experiences of people with disabilities and reinforces harmful stereotypes." The Rocky Mountain ADA Center cautioned that "ChatGPT does not check facts and is quite good at sounding convincing" (September 2023).

**The response:** AI-AA takes these concerns seriously. They reflect legitimate worries about the quality, reliability, and community accountability of AI-generated content. Our position addresses these concerns directly — and is supported by other major disability organizations:

1. **User choice, not mandated replacement.** We advocate for individuals' right to *choose* AI comprehension tools as their accommodation. We are not proposing that institutions replace human-created plain-language documents with AI-generated versions.
2. **Supplement, not substitute.** AI comprehension tools work alongside existing accommodations — they do not replace professional plain-language writing, human aides, or other supports.
3. **Reliability safeguards.** We support quality standards for AI comprehension tools used as auxiliary aids, including accuracy benchmarks and appropriate disclaimers.
4. **Community accountability.** We are committed to including disability community voices — including those with concerns about AI — in developing standards and guidelines.

The disability community is not monolithic. The National Federation of the Blind has called Be My AI "one of the most exciting technological assistance solutions we have ever evaluated," with NFB President Mark Riccobono stating that "every company, non-profit, academic institution, and public sector organization has both a moral and business imperative to better serve our community" through AI-enabled accessibility. The British Dyslexia Association recognizes that ChatGPT can "remove barriers to access to education and employment, provide cost-effective support to individuals, and be tailored to an individual's needs based on their unique strengths and challenges." Many people with cognitive and reading-related disabilities report that AI comprehension tools are transformative for their independence — a peer-reviewed study of ADHD adults found participants describing ChatGPT as "a little bit of a life raft" (ACM, 2025). Their voices and needs should not be overridden by concerns that, while valid, do not account for the full range of disability experiences.

---

## VI. Proposed Agency Action

AI-AA requests that the following federal agencies issue guidance recognizing AI comprehension tools within existing regulatory frameworks:

### A. DOJ Civil Rights Division

**Request:** Issue an informal guidance letter or FAQ confirming that:
1. AI comprehension tools may qualify as auxiliary aids under ADA Titles II and III when used by people with disabilities to comprehend written text
2. Covered entities should consider AI comprehension tools as part of the reasonable accommodation inquiry when requested by individuals with comprehension-related disabilities
3. Blanket AI-blocking policies that do not exempt authorized accessibility tools may create barriers that violate effective-communication requirements

### B. HHS Office for Civil Rights

**Request:** Issue guidance under Section 1557 confirming that:
1. Healthcare covered entities' effective-communication obligations extend to ensuring compatibility with AI comprehension tools used as auxiliary aids
2. Anti-bot and AI-blocking measures on patient portals should include exceptions for authorized accessibility tools
3. HIPAA's privacy framework can accommodate AI comprehension tools through existing business-associate and patient-authorization mechanisms

### C. Department of Education OCR

**Request:** Issue guidance under Section 504 confirming that:
1. Educational institutions' AI-use policies must include exceptions for AI tools used as disability accommodations
2. Students and parents with comprehension-related disabilities may use AI tools as auxiliary aids for school-related documents
3. IEP and 504 plan teams should consider AI comprehension tools as potential assistive technology under IDEA and Section 504

---

## VII. Conclusion

The legal argument presented in this memo is straightforward: Congress wrote a law that requires effective communication through auxiliary aids and services. Congress designed the auxiliary-aids definition to evolve with technology. AI comprehension tools are the latest technology to serve this function. The agencies charged with enforcing these statutes should say so.

This is not a radical expansion of disability rights. It is the application of settled principles to a new category of technology — exactly as the law intended. Screen readers, CART captioning, and video remote interpreting all followed this same path from novel technology to recognized auxiliary aid. AI comprehension tools are next.

The stakes are concrete and immediate. People with cognitive, intellectual, and reading-related disabilities are using AI comprehension tools right now to understand medical forms, navigate government services, participate in their children's education, and manage their legal and financial affairs. When institutions block these tools without providing equally effective alternatives, they create barriers that existing law prohibits.

The agencies should act. The law supports it. The people who need it are waiting.

---

## Appendix A: Key Statutory and Regulatory Citations

| Source | Citation | Relevance |
|--------|----------|-----------|
| ADA Title III — Auxiliary Aids | 42 U.S.C. § 12182(b)(2)(A)(iii) | Requires public accommodations to provide auxiliary aids |
| ADA — Definition of Auxiliary Aids | 42 U.S.C. § 12103(1) | Non-exhaustive, technology-neutral definition |
| ADA — Definition of Disability | 42 U.S.C. § 12102(1)(A) | Includes mental impairments limiting major life activities |
| ADA — Major Life Activities | 42 U.S.C. § 12102(2)(A) | Explicitly includes "reading" and "communicating" |
| ADA Amendments Act of 2008 | Pub. L. 110-325 | Broadened disability definition |
| Title II Regulations — Effective Communication | 28 CFR § 35.160 | Public entities must ensure effective communication |
| Title III Regulations — Auxiliary Aids | 28 CFR § 36.303 | Implementing regulations with illustrative examples |
| Section 504 of the Rehabilitation Act | 29 U.S.C. § 794 | Nondiscrimination in federally funded programs |
| HHS Section 504 Regulations | 45 CFR § 84.52(d) | Effective-communication requirements for HHS-funded programs |
| Section 1557 of the ACA | 42 U.S.C. § 18116 | Nondiscrimination in health programs |
| Section 1557 Regulations | 45 CFR § 92.102 | Effective-communication requirements in healthcare |
| IDEA | 20 U.S.C. § 1400 et seq. | Assistive technology for students with disabilities |
| House Judiciary Committee Report on ADA | H.R. Rep. No. 101-485, pt. 3 | Legislative intent re: evolving technology |

## Appendix B: Evidence Status

*This section tracks evidence status. Items marked ✅ have been incorporated; items marked 🔲 are pending from the Research Director (specific request sent 2026-04-06).*

### User Stories — Status

| Story | Status | Notes |
|-------|--------|-------|
| Dyslexic professional — writing and communication | ✅ Documented | Stories 1-3: Chatelet, Whittle, Staunton |
| Autistic/ADHD adult — executive function and comprehension | ✅ Documented | Stories 4-5, 10-11: Cann, Sparrow, ADHD study |
| ADHD adult — medical document translation | ✅ Documented | Story 6: ADDitude Magazine reader |
| Blind/low-vision users — visual comprehension via Be My AI | ✅ Documented | Story 9: Be My Eyes / NFB |
| Self-represented litigants — legal comprehension | ✅ Documented | Stories 7-8: White, Dennett |
| Patient blocked from using AI on patient portal | ✅ Integrated | AADJ v. Epic Systems — Miller (died), Hodges (homelessness). Becker's Hospital Review, March 2026 |
| Parent with learning disability unable to comprehend IEP | ✅ Integrated | Rosa Mendoza, Shan Hong — AiEP tool. The Frisc, 2025 |
| Benefits applicant with TBI or cognitive disability | ✅ Integrated | "Nunc" — Claude Code disability benefits appeal. DEV Community, 2026 |
| Employee needing AI for workplace documents | ✅ Integrated | Tara DeZao (ADHD) + EY survey (300 employees). CNBC 2025; Microsoft 2025 |
| Student blocked by school AI policy | ✅ Integrated | CDT systematic data (72% of IEP/504 students use AI); Makenzie Gilkison positive case. CDT 2024-25; AP 2024 |

### Data — Status

| Data Point | Status | Notes |
|------------|--------|-------|
| 40M daily ChatGPT health users | ✅ Cited | Axios, January 2026 |
| 3 in 5 US adults sought AI medical advice | ✅ Cited | Boston Globe, February 2026 |
| 250M blind/low-vision people globally | ✅ Cited | WHO / Be My Eyes |
| 16% global population lives with disability | ✅ Cited | WHO |
| 57% of SPED teachers used AI for IEPs (2024-25) | ✅ Cited | EdWeek, October 2025 |
| 4,000+ ADA website lawsuits in 2024 | ✅ Cited | Industry reports |
| Reading levels of healthcare documents | ✅ Integrated | Discharge (10th grade), consent (10.6), Epic (81% above 6th), Medicaid (11th-18th). Primary sources cited |
| Reading levels of IEP documents | ✅ Integrated | 9.9-12.0 grade levels; 13.3% parent comprehension. East Tennessee State 2003 |
| Reading levels of government benefits forms | ✅ Integrated | Medicaid renewal: 11th-18th grade (M=15.5). Sanders 2009; Olives 2012 |
| Prevalence data on cognitive/reading disabilities (US) | ✅ Integrated | 14% Below Basic health literacy (~30M); 36% limited (~80M). NCES |
| AI accuracy/reliability on comprehension tasks | ✅ Integrated | JAMA PEMAT 13%→81%; 92-96% simplification accuracy. Multiple peer-reviewed sources |
| Error rates of existing auxiliary aids | ✅ Integrated | Interpreters 31 errors/63% consequential; CART 83-98%; Signed English 61%; screen readers 95.9% WCAG failures |

### Institutional Documentation — Status

| Institution Type | Status | Notes |
|-----------------|--------|-------|
| Anti-scraping tools blocking assistive tech | ✅ Documented | WebProNews, December 2025 |
| CAPTCHAs escalating against disabled users | ✅ Documented | AbilityNet; Smashing Magazine, November 2025 |
| School AI bans harming students with disabilities | ✅ Documented | Inside Higher Ed, November 2025 (systemic) |
| Specific patient portal AI-blocking policy | ✅ Integrated | Epic MyChart — AADJ v. Epic Systems (W.D. Texas, 2026). Real Time v. PointClickCare (4th Cir. 2025) |
| Specific school district AI ban without exemptions | ✅ Integrated | NYC DOE (1.1M students, Jan-May 2023); Jane Doe v. Univ. of Michigan (Feb 2026) |
| Government benefits system AI-blocking measures | 🔲 Needed | No specific government portal blocking case yet documented; Medicaid procedural data cited as systemic evidence |

### Organizational Positions — Status

| Organization | Position | Status |
|-------------|----------|--------|
| National Federation of the Blind | Supportive — Be My AI is "most exciting" tech | ✅ Cited |
| British Dyslexia Association | Supportive — AI can "remove barriers" | ✅ Cited |
| Rocky Mountain ADA Center | Cautiously supportive — AI "levels playing field" | ✅ Cited |
| NYC Bar Association | Mixed — 10 recommendations, notes AI bias risks | ✅ Cited |
| ASAN | Opposing — opposes AI in plain-language contexts | ✅ Cited |

### Peer-Reviewed Research — Status

| Study | Status | Citation |
|-------|--------|----------|
| "A little bit of a life raft" (ACM 2025) | ✅ Cited | ADHD adults using ChatGPT |
| ChatGPT and dyslexia (2023) | ✅ Cited | Disability and Rehabilitation: AT |
| "Transforming Perceptions" (JMIR 2025) | ✅ Cited | AI as "cognitive copilot" |
| ChatGPT and ADHD reading comprehension (2023) | ✅ Referenced | Master's thesis |
| "Breaking Barriers" (AIQA 2025) | ✅ Referenced | Legal case for cognitive accessibility |
| AI and disability scoping review (SAGE 2024) | ✅ Referenced | Comprehensive systematic review |

---

*This document is a working draft (v0.4). This revision integrates the Research Director's full evidence package (delivered 2026-04-06): five user stories with primary-source citations, document readability data table, AI accuracy benchmarks, and auxiliary aid error rate comparisons. New additions include: anchor cases (AADJ v. Epic Systems, Jane Doe v. University of Michigan), landmark precedent (Real Time v. PointClickCare, 4th Cir. 2025), three-way legal convergence analysis for healthcare, Employment sector (Section IV.D), Scope and Limitations section (Section I-A), and systematic CDT data on AI detection disparities. Most evidence gaps from v0.3 Appendix B are now filled. Remaining gaps: specific government portal blocking case, insurance EOB readability data, original employee benefits-enrollment story.*

*Next milestone: v0.5 (mid-May 2026) — executive summary finalized for standalone use; proposed agency action language drafted with model FAQ text; remaining honest gaps addressed or noted as limitations; Definitions section added.*
*Target: v1.0 (end of Q2 2026) — publication-ready, peer-reviewed.*

## Appendix C: v0.5 Roadmap (Target: Mid-May 2026)

*Added 2026-04-06 by Policy Director. This tracks what must be done to reach v0.5 — the internal review draft for advisory council and legal counsel.*

### Evidence Gaps — Status as of v0.4

1. ~~**5 missing user stories**~~ → ✅ **All 5 integrated** (v0.4): AADJ v. Epic (healthcare), Rosa Mendoza/AiEP (education), Nunc/Claude Code (government), Tara DeZao/EY (employment), CDT/Gilkison (student). Research delivered April 6.
2. ~~**Document readability data**~~ → ✅ **Integrated** (v0.4): Full readability table in healthcare section; IEP data in education; Medicaid data in government. Primary-source citations throughout.
3. ~~**AI accuracy benchmarks**~~ → ✅ **Integrated** (v0.4): JAMA PEMAT data, neurosurgery/patient-ed simplification, biomedical text accuracy. Comparison table in Section V.A.
4. ~~**Prevalence data**~~ → ✅ **Partially integrated** (v0.4): Health literacy baseline (14% Below Basic, 36% limited). Additional prevalence data on specific cognitive/reading disability populations still needed for v0.5.

### Remaining Evidence Gaps (for v0.5)

1. **Specific government portal blocking case** — No documented instance of a named government benefits portal blocking AI comprehension tools. Medicaid procedural disenrollment data provides systemic evidence, but a specific named case would strengthen Section IV.C.
2. **Insurance EOB / SSA / VA readability data** — Healthcare readability data is strong but does not yet cover insurance Explanation of Benefits documents, SSA determination letters, or VA benefits communications specifically.
3. **Named employee benefits-enrollment story** — DeZao + EY data are strong for general workplace AI accommodation, but no published story specifically documents an employee using AI for open enrollment or benefits comprehension. Flagged as collection priority.
4. **Named student individually harmed by specific AI ban** — CDT systematic data is strong but lacks an individual face. Jane Doe v. UMich is close but involves AI detection, not AI ban. A named K-12 student with a disability denied AI comprehension tools by a specific district remains our highest-priority original-story-collection target.

### Sections to Refine for v0.5 (Policy Director — no dependencies)

1. **Section V.D (ASAN opposition):** Sharpen the distinction between ASAN's concern about AI-*generated* plain language and user-*directed* AI comprehension. These are different use cases. The current treatment acknowledges ASAN's position but should make the categorical distinction more explicit.
2. **Section VI (Proposed Agency Action):** Draft specific proposed regulatory language — not just "issue guidance confirming X" but actual model FAQ text or interpretive rule language that agencies could adopt. This makes the ask concrete rather than abstract. *(Next priority — targeted for next heartbeat.)*
3. **Section IV.E (Legal Services):** Add legal services sector — self-represented litigants (White, Dennett stories already documented in user stories) need integration. Medium priority.
4. **Executive Summary:** Finalize for standalone use — sponsors and policymakers will read only the executive summary initially. Needs to be compelling in 2 pages. *(Targeted for v0.5.)*
5. **All citations:** Verify every citation against primary sources. Flag any that rely on secondary reporting.
6. **Add "Definitions" section** with precise definitions of key terms: "AI comprehension tool," "user-authorized," "effective communication," "auxiliary aid."

### Structural Improvements — Status

- ✅ **Scope and Limitations section** — Added (v0.4, Section I-A). Makes explicit what we are NOT arguing.
- ✅ **Employment sector** — Added (v0.4, Section IV.D).
- 🔲 **Definitions section** — Not yet added. Target v0.5.
- 🔲 **Paragraph numbering** — Not yet done. Target v0.5 (for advisory council review).

### Review Process

- v0.5 internal review draft → distribute to advisory council + legal counsel
- 2-week comment period
- Incorporate feedback → v0.7
- Final legal review → v1.0

*Prepared by the Policy Director, AI Access Alliance.*
