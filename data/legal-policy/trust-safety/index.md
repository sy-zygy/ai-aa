---
title: Trust & Safety Guardrails
created: 2026-04-05T00:00:00Z
modified: 2026-04-05T00:00:00Z
tags: [trust-safety, guardrails, scraping, authorization, data-minimization, standards]
order: 5
---

# Trust & Safety Guardrails

**Owner:** Policy Director | **Status:** Planning | **Updated:** 2026-04-05

This section will contain the framework for distinguishing legitimate AI comprehension assistance from unauthorized scraping, autonomous action, or circumvention of access controls.

## Why This Matters

The single most dangerous objection to AI-AA's position is: *"This is really about scraping rights dressed up as accessibility."* The trust-and-safety framework is how we preempt that objection. If we cannot clearly distinguish user-authorized comprehension aids from unauthorized data extraction, our entire legal argument becomes vulnerable.

## Framework Principles (Draft)

### 1. User Authorization

The AI comprehension tool acts at the direction of a specific user who has a disability-related need for comprehension assistance. The user must:
- Affirmatively activate the tool for specific content
- Be already authorized to access the content being processed
- Retain control over what the tool processes and how

### 2. Purpose Limitation

The tool's purpose is limited to aiding the user's comprehension of the specific text. It does not:
- Store content for purposes other than the user's immediate comprehension needs
- Transmit content to third parties for training, indexing, or commercial purposes
- Take autonomous actions based on the content (e.g., automatically filling out forms, submitting applications, making purchases)

### 3. Data Minimization

The tool processes only the minimum text necessary for the user's comprehension request. It does not:
- Bulk-download or cache entire websites
- Scrape content beyond what the user has navigated to
- Retain processed text after the comprehension session ends (with appropriate exceptions for user-saved summaries)

### 4. Transparency

The tool identifies itself appropriately when accessing content and does not disguise its nature as an assistive technology. Covered entities should be able to distinguish authorized comprehension tools from general-purpose crawlers.

### 5. Reliability Safeguards

The tool meets reasonable accuracy standards for the document types it processes:
- Clear disclaimers when the tool's output may be uncertain
- User-facing warnings for high-stakes document types
- Mechanisms for users to access the original text alongside the tool's interpretation
- Quality benchmarks appropriate to the use context

### 6. Audit Trail

The tool maintains sufficient records to demonstrate that it was used for legitimate comprehension assistance, without compromising user privacy. This may include:
- Logs of user activation (not content processed)
- Accommodation request records (for institutional settings)
- Compliance with applicable privacy frameworks (HIPAA, FERPA, etc.)

## The Bright Line

| Legitimate Comprehension Aid | Not A Comprehension Aid |
|-----------------------------|------------------------|
| User activates AI to summarize their own medical records | AI crawler scrapes hospital website for data harvesting |
| Student uses AI to explain an assignment in simpler terms | AI bot generates answers to test questions |
| Benefits applicant uses AI to understand form instructions | Automated system fills out benefits applications without human direction |
| Employee uses AI to comprehend workplace policy document | AI system monitors and analyzes all employee communications |
| Parent uses AI to understand IEP document | AI system generates IEP recommendations without parental direction |

## Relationship to Other Deliverables

- The [[Core Doctrine Memo]] establishes *why* AI comprehension tools qualify as auxiliary aids
- This framework establishes *what qualifies* as a legitimate AI comprehension tool
- The [[Model Policies]] translate both into institutional policy templates

---

*This framework will be developed into a full technical specification after the Core Doctrine Memo is finalized. Input from the Expert Advisory Group will be incorporated.*
