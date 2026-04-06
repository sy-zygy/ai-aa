---
title: "Core Doctrine Memo: AI Comprehension Tools as Auxiliary Aids Under Existing Law"
created: 2026-04-05T00:00:00Z
modified: 2026-04-05T12:00:00Z
tags: [doctrine, legal, ada, section-504, section-1557, auxiliary-aids, effective-communication, white-paper]
order: 1
---

# AI Comprehension Tools as Auxiliary Aids Under Existing Effective-Communication Law

**AI Access Alliance — Core Doctrine Memo**
**Draft v0.3 — April 2026**
**Status:** Sector evidence and legal authority integration draft

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

The comprehension gap is quantifiable. The average American reads at approximately a 7th-8th grade level (NCES, National Assessment of Adult Literacy). The AMA and NIH recommend patient-facing materials be written at or below a 6th-grade reading level. Yet studies consistently find that medical consent forms average a 12th-grade reading level or higher (Journal of General Internal Medicine), hospital discharge instructions average 10th-grade or above, and Medicare/Medicaid enrollment materials routinely exceed 10th-grade reading levels (CMS readability analyses). For people with cognitive or reading-related disabilities, this gap is even wider — and the consequences are not abstract. The National Academy of Medicine has documented that low health literacy is associated with higher hospitalization rates, greater emergency department use, and lower use of preventive services. The scale of need is enormous: 40 million users turn to ChatGPT daily for health-related questions (Axios, January 2026), and three of every five U.S. adults have sought medical advice from an AI service (Boston Globe, February 2026). Yet ChatGPT Health's connected medical records feature requires paid subscriptions, compatible devices, electronic health records, and digital literacy — meaning "the very populations who face the greatest healthcare access barriers may be the least likely to have these technological resources" (Disabled World, 2026).

**Documented use:** An adult with ADHD reported using ChatGPT to "translate medical test results to plain English," making clinical jargon comprehensible before discussing results with their doctor (ADDitude Magazine, 2023). The cognitive load of parsing technical medical language compounds ADHD's executive function challenges, making AI comprehension support not a convenience but a functional necessity.

**The AI comprehension use case:** A patient with an intellectual disability receives discharge instructions after a hospital stay. The instructions include medication schedules, warning signs, follow-up appointment requirements, and dietary restrictions — written at a 12th-grade reading level with medical terminology. The patient's AI comprehension tool can:

- Summarize the instructions into plain-language action items
- Explain what each medication does and when to take it
- Define medical terms in context ("NPO means you shouldn't eat or drink anything")
- Answer questions ("Can I take this with my other medications?")

**The barrier:** The hospital's patient portal deploys anti-bot measures that prevent the patient's AI tool from accessing discharge instructions. The patient cannot independently comprehend the instructions and has no alternative auxiliary aid available.

**The legal analysis:** Under Section 1557 and ADA Title III, the hospital has an obligation to ensure effective communication. If the hospital's anti-bot measures prevent a patient's authorized AI comprehension tool from functioning — and the hospital has not provided an equally effective alternative accommodation — the hospital may be in violation of its effective-communication obligations.

### B. Education

**Regulatory framework:** ADA Title II, Section 504, IDEA (for K-12 special education).

Educational institutions generate enormous volumes of text that students and parents must comprehend: enrollment forms, IEP and 504 plan documents, course materials, financial aid applications, grade reports, and disciplinary notices. IEP documents are particularly challenging: they contain legal terminology from IDEA and state regulations, psychoeducational assessment jargon, grade-level equivalencies, standard deviations, and procedural safeguards notices — routinely written at college reading levels, even though IDEA's purpose is to serve families who include members with disabilities. Notably, 57% of special education teachers used AI to help with IEPs or 504 plans in the 2024-25 school year, up from 39% in 2023-24 (EdWeek, October 2025) — demonstrating that even the professionals who create these documents find AI tools valuable for managing their complexity. The parents and students who must *comprehend* these documents face an even steeper challenge.

The scope of need is substantial. Under IDEA, approximately 7.5 million students (ages 3-21) received special education services in the 2022-23 school year (NCES), each with parents or guardians who must understand IEP or 504 plan documents to participate meaningfully in educational decision-making. Learning disabilities are themselves heritable — parents of children with learning disabilities are more likely to have reading-related disabilities themselves, compounding the comprehension barrier.

**The AI comprehension use case:** A parent with a learning disability is trying to understand their child's IEP document. The IEP contains legal terminology, educational jargon, measurement standards, and procedural rights information. The parent's AI comprehension tool can summarize the key provisions, explain what the goals mean in practical terms, and help the parent identify questions to ask at the next IEP meeting.

**The barrier:** The school district's website blocks AI tools as part of a blanket anti-AI policy designed to prevent academic cheating. The parent cannot use their comprehension tool to understand the IEP document. As one accessibility scholar has argued: "If a tool helps level the playing field for students with disabilities or other disadvantages, ignoring it is not neutrality — it's negligence." Blanket AI bans "risk disproportionately harming students with disabilities who rely on text-to-speech and other AI-enabled supports" (Inside Higher Ed, November 2025).

**The legal analysis:** Under Section 504, the school district must ensure effective communication with parents who have disabilities. A blanket AI-blocking policy that does not distinguish between cheating tools and comprehension aids may deny auxiliary aids to parents with reading-related disabilities.

### C. Government Services

**Regulatory framework:** ADA Title II (state and local government), Section 504 (federally funded programs).

Government agencies at all levels produce text that directly determines people's access to benefits, rights, and services: benefits applications, legal notices, tax forms, voter information, regulatory communications, and court documents.

The comprehension barriers in government services are acute. Social Security Administration applications and determination letters use legal and bureaucratic language averaging 12th-grade reading levels or higher. Medicaid renewal forms vary by state but routinely exceed 10th-grade levels. The Plain Writing Act of 2010 (Pub. L. 111-274) requires federal agencies to use "clear Government communication that the public can understand and use," but compliance remains inconsistent and the Act contains no private right of action — leaving people with comprehension barriers without legal recourse when forms are incomprehensible.

**Context:** The National Academy of Social Insurance's Task Force on AI, Emerging Technology, and Disability Benefits (April 2025) has noted that AI's "black box" nature presents "obvious and serious problems if a tool operates in government benefit determinations." But this concern addresses AI used *by agencies* to make decisions about applicants. The converse question — AI used *by applicants* to comprehend their own benefits paperwork — remains unaddressed in policy, despite being the scenario where comprehension barriers cause the most direct harm.

**The AI comprehension use case:** An individual with a traumatic brain injury is trying to complete a Medicaid renewal application. The form requires understanding eligibility criteria, income calculation methods, and documentation requirements. The individual's AI comprehension tool can walk them through the form section by section, explaining what information is needed and why.

**The barrier:** The state Medicaid portal uses bot-detection systems that prevent AI tools from accessing the application interface. The individual cannot use their comprehension tool and fails to complete the renewal, losing healthcare coverage.

**The legal analysis:** Under ADA Title II, the state agency must ensure effective communication with applicants who have disabilities. Failure to accommodate AI comprehension tools — when no equally effective alternative is provided — may violate Title II's effective-communication mandate.

---

## V. Addressing Objections

### A. "AI Tools Aren't Reliable Enough to Be Auxiliary Aids"

**The objection:** AI comprehension tools can hallucinate, misinterpret, or produce inaccurate summaries. They should not be classified as auxiliary aids because they might give users incorrect information.

**The response:** The ADA standard is "effective communication," not perfect communication. The Supreme Court established in *Alexander v. Choate*, 469 U.S. 287, 301 (1985), that Section 504 requires "meaningful access" to benefits — not flawless access. This principle has been consistently applied to auxiliary aids: the aid must be effective, not infallible. Every existing auxiliary aid has documented error rates:

- Human sign language interpreters make interpretation errors — studies of medical interpreting have found clinically significant errors in 12-31% of encounters (Flores et al., *Pediatrics*, 2003; 2012)
- CART captioning regularly contains inaccuracies — even trained providers achieve approximately 96-98% accuracy, meaning 2-4% of words may be incorrect in real-time settings
- Screen readers may misread complex layouts, PDF forms, images of text, or non-standard markup — a persistent barrier that the WebAIM Million annual study documents across over 96% of home pages
- Qualified human readers may mispronounce medical terms, skip content, or misread numbers

None of these error rates have been found to disqualify these technologies as auxiliary aids. The DOJ has never required perfection — only effectiveness. In multiple settlement agreements involving hospital systems and universities, DOJ has accepted auxiliary aids that provide meaningful comprehension, not error-free comprehension.

Peer-reviewed research supports the use of AI comprehension tools for people with disabilities. A study published in *Disability and Rehabilitation: Assistive Technology* (2023) examined whether ChatGPT can "empower people with dyslexia" and found meaningful comprehension benefits. A study in *JMIR Neurotechnology* (2025) proposes generative AI as a "cognitive copilot" for people with cognitive disabilities, offering personalized support in daily activities and social interactions. The Rocky Mountain ADA Center's Rapid Response Report on ChatGPT and disability (September 2023) found that ChatGPT may "level the playing field" for individuals with disabilities, providing assistance "in a safe and non-judgmental environment, which may be a barrier for some individuals seeking this type of assistance" through traditional channels.

That said, AI-AA supports reasonable reliability safeguards for AI comprehension tools used as auxiliary aids. These may include:

- Accuracy benchmarks for specific document types
- Disclosure requirements when AI-generated explanations may be uncertain
- User-facing warnings for high-stakes document types (medical, legal, financial)
- Human-in-the-loop options for critical decisions

The question of reliability is important, but it is a *quality standard* question — not a threshold question about whether the category of technology qualifies. We do not refuse to classify interpreters as auxiliary aids because some interpreters make mistakes. We set quality standards and allow the accommodation to proceed. *[Note for v1.0: Research Director has been asked to supply AI accuracy benchmarks on comprehension tasks (summarization, simplification, definition) across document types. Preliminary data on interpreter and CART error rates has been incorporated above; additional data on screen reader failure rates on complex forms will strengthen the comparison.]*

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
| Patient blocked from using AI on patient portal | 🔲 Needed | Highest-priority gap for healthcare section |
| Parent with learning disability unable to comprehend IEP | 🔲 Needed | High-priority for education section |
| Benefits applicant with TBI or cognitive disability | 🔲 Needed | High-priority for government section |
| Employee needing AI for workplace documents | 🔲 Needed | Medium-priority |
| Student blocked by school AI policy | 🔲 Needed | High-priority for education section |

### Data — Status

| Data Point | Status | Notes |
|------------|--------|-------|
| 40M daily ChatGPT health users | ✅ Cited | Axios, January 2026 |
| 3 in 5 US adults sought AI medical advice | ✅ Cited | Boston Globe, February 2026 |
| 250M blind/low-vision people globally | ✅ Cited | WHO / Be My Eyes |
| 16% global population lives with disability | ✅ Cited | WHO |
| 57% of SPED teachers used AI for IEPs (2024-25) | ✅ Cited | EdWeek, October 2025 |
| 4,000+ ADA website lawsuits in 2024 | ✅ Cited | Industry reports |
| Reading levels of healthcare documents | 🔲 Needed | Specific studies with grade-level measurements |
| Reading levels of IEP documents | 🔲 Needed | Parent literacy vs. document complexity |
| Reading levels of government benefits forms | 🔲 Needed | SSA, Medicaid, VA form complexity |
| Prevalence data on cognitive/reading disabilities (US) | 🔲 Needed | Detailed population statistics |
| AI accuracy/reliability on comprehension tasks | 🔲 Needed | Benchmarks for specific document types |
| Error rates of existing auxiliary aids | 🔲 Needed | Interpreter, CART, screen reader error rates |

### Institutional Documentation — Status

| Institution Type | Status | Notes |
|-----------------|--------|-------|
| Anti-scraping tools blocking assistive tech | ✅ Documented | WebProNews, December 2025 |
| CAPTCHAs escalating against disabled users | ✅ Documented | AbilityNet; Smashing Magazine, November 2025 |
| School AI bans harming students with disabilities | ✅ Documented | Inside Higher Ed, November 2025 (systemic) |
| Specific patient portal AI-blocking policy | 🔲 Needed | Named institution with documented impact |
| Specific school district AI ban without exemptions | 🔲 Needed | Named district with documented impact |
| Government benefits system AI-blocking measures | 🔲 Needed | Specific system with documented impact |

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

*This document is a working draft (v0.3). This revision strengthens sector application sections with specific reading-level data and prevalence statistics, adds case law authority to the objections section (Alexander v. Choate, Liese v. Indian River County, Olmstead v. L.C.), and incorporates interpreter/CART error rate data. Remaining evidence gaps are tracked in Appendix B; a specific evidence request has been sent to the Research Director (2026-04-06). Subsequent versions will fill remaining evidence gaps (AI accuracy benchmarks, specific institutional blocking cases, additional user stories), incorporate advisory group feedback, and sharpen all citations to primary sources.*

*Next milestone: v0.5 (mid-May 2026) — executive summary finalized for public use; all placeholder data replaced with primary-source citations.*
*Target: v1.0 (end of Q2 2026) — publication-ready, peer-reviewed.*

*Prepared by the Policy Director, AI Access Alliance.*
