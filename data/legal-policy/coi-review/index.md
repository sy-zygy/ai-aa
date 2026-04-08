---
title: "Policy Review: Conflict of Interest Policy v0.1"
created: 2026-04-06T12:00:00Z
modified: 2026-04-06T12:00:00Z
tags: [legal-policy, governance, conflict-of-interest, review, recusal]
order: 7
---

# Policy Review: Conflict of Interest Policy v0.1

**From:** Policy Director | **To:** Operations Director | **Date:** 2026-04-06
**Re:** [[Conflict of Interest Policy]] — Draft v0.1

---

## Overall Assessment

The COI policy is well-structured and covers the essential elements required by IRS for 501(c)(3) organizations. The sponsor-specific provisions (Section 6) are particularly strong and align well with the [[Sponsor Governance Policy]]. The policy is ready for legal counsel review with the amendments suggested below.

**Grade: Strong draft.** The issues I've identified are refinements, not structural deficiencies.

---

## Recusal Procedures — Detailed Review

This was flagged as the specific area needing Policy review. My comments on each element:

### Section 5.2 (General Recusal) — Mostly Sound, Three Gaps

**What's good:**
- Clear requirement to leave the meeting (not just abstain from voting)
- Prohibition on informal influence channels — this is often missed in nonprofit COI policies and it's critical for us
- Required documentation in minutes

**Gap 1: Who determines the initial recusal trigger?**

Section 5.2 says the Interested Person "shall leave the meeting during the discussion and vote on the matter giving rise to the conflict." But what happens when the Interested Person does not self-identify? Section 5.1 puts the duty to disclose on the Interested Person, and Section 5.3 puts the determination on Disinterested Directors — but there's no mechanism for a *third party* to raise a potential conflict.

**Recommendation:** Add a provision (Section 5.1A or amend 5.1) stating:

> "Any Director, officer, or committee member may raise a potential conflict of interest concerning another Covered Person. The Board Chair (or presiding officer) shall determine whether the matter warrants disclosure and potential recusal, applying the definitions in Section 2."

This matters because self-disclosure fails exactly when it's needed most — when someone doesn't recognize (or doesn't want to acknowledge) their own conflict.

**Gap 2: Recusal scope — "the matter" is ambiguous for multi-part agenda items.**

If a Board meeting has a single agenda item that touches the conflicted interest in one sub-part, must the Interested Person leave for the entire item or only the sub-part? In practice this will arise when, for example, a board discussion about AI-AA's policy strategy briefly touches on a sponsor's product.

**Recommendation:** Add clarifying language:

> "When the conflict relates to a portion of a broader agenda item, the Board Chair shall determine the scope of recusal and specify which portions of the discussion require the Interested Person's absence. This determination shall be recorded in the minutes."

**Gap 3: No provision for remote/written proceedings.**

Section 5.2 assumes in-person meetings ("leave the meeting"). For a startup nonprofit that will likely conduct significant business via written consent, email, or video call, the recusal procedure needs to cover these modalities.

**Recommendation:** Add:

> "For actions taken by written consent, the Interested Person shall not receive the consent materials related to the conflicted matter and shall not sign the written consent. For virtual meetings, the Interested Person shall leave the virtual meeting room during the relevant discussion."

### Section 6.2 (Sponsor Advisory Council Recusal) — Sound, One Refinement

**What's good:**
- Mandatory recusal from matters "specifically analyzing or referencing their employer's products or practices" — this is the right scope
- 30-day disclosure of employment changes
- Prohibition on policy development participation

**Refinement: Distinguish "specific" from "general" references.**

The current language requires recusal from discussions that "specifically analyze or reference their employer's products or practices." What about a general policy discussion that *indirectly* affects their employer's market position? For example, a discussion about whether patient portals should allow AI access — which affects all portal vendors, including a sponsor's.

**Recommendation:** Add:

> "When a policy discussion addresses a general category of products or practices (rather than a specific sponsor's offerings), the Sponsor Advisory Council member may participate in the discussion but must disclose the potential indirect interest. The Board Chair shall determine whether the indirect interest rises to the level of requiring full recusal."

This avoids making Advisory Council seats functionally useless (if every general discussion triggers recusal) while preserving the firewall for specific company references.

### Section 6.3 (Post-Sponsorship Employment) — Strong

No changes recommended. The three-step requirement (immediate disclosure → recusal → resignation upon acceptance) is clean and enforceable. The 24-month cooling-off in Section 6.4 complements this well.

### Section 6.4 (Cooling-Off Periods) — One Question

The 24-month cooling-off for Board eligibility and 12-month for Advisory Council are reasonable. However:

**Question for Operations:** Does the 24-month clock start from the end of employment/consulting, or from the end of the sponsor relationship with AI-AA? Consider the scenario where someone leaves a sponsor company, then 18 months later that company becomes an AI-AA sponsor. They were never a "sponsor employee" while employed — only retroactively. The current language ("leaves employment with an AI-AA sponsor") doesn't cleanly cover this case.

**Recommendation:** Clarify that the cooling-off applies to anyone who held the relevant position with the *entity* within 24 months, regardless of whether the entity was a sponsor at the time of employment. This closes the timing loophole.

---

## Other Policy Comments (Non-Recusal)

### Section 2 — Financial Interest Threshold

The $250/year threshold for "Compensation" (gifts, favors, etc.) is reasonable for a startup. Flag for legal counsel: confirm this aligns with IRS intermediate sanctions rules and state nonprofit law for the jurisdiction of incorporation.

### Section 7.2 — Annual Certification Timing

January 31 deadline works. However, the policy should specify what happens if someone misses the deadline. Is there a grace period? Automatic suspension from voting?

**Recommendation:** Add:

> "Covered Persons who have not completed annual certification by February 15 shall be suspended from voting and committee participation until certification is received. The Governance Committee shall notify affected persons by February 1."

### Section 8 — Violations

The policy allows "voiding or renegotiating the conflicted transaction" (Section 8.2). Good. But consider adding a provision that requires the Board to assess whether the undisclosed conflict materially affected the outcome of any decision — and if so, whether the decision should be reconsidered, not just the transaction voided.

### Section 10 — Amendment

A simple majority is fine for a COI policy. (The Sponsor Governance Policy correctly requires 2/3 — that policy should be harder to change.)

---

## Cross-Reference Checks

I've verified the COI policy's cross-references against the Bylaws and Sponsor Governance Policy:

| Cross-Reference | Consistent? |
|----------------|-------------|
| Bylaws Section 3.3 (board eligibility) ↔ COI Section 6.1 | Yes |
| Bylaws Article IX (COI incorporation by reference) ↔ COI policy | Yes |
| Sponsor Governance Policy Section 3.1 (no board seats) ↔ COI Section 6.1 | Yes |
| Sponsor Governance Policy Section 4.1 (advisory recusal) ↔ COI Section 6.2 | Yes |
| Bylaws Section 3.6 (removal by 2/3 vote) ↔ COI Section 8.2 | Yes |

All cross-references are consistent. No conflicts found.

---

## Summary of Recommendations

| # | Section | Recommendation | Priority |
|---|---------|---------------|----------|
| 1 | 5.1 | Add third-party conflict-raising mechanism | High |
| 2 | 5.2 | Clarify recusal scope for multi-part agenda items | Medium |
| 3 | 5.2 | Add provisions for remote/written proceedings | High |
| 4 | 6.2 | Distinguish specific vs. general policy discussions for advisory recusal | Medium |
| 5 | 6.4 | Clarify cooling-off timing re: retroactive sponsorship | Medium |
| 6 | 7.2 | Add missed-certification consequences | Low |
| 7 | 8.2 | Add decision-reconsideration provision for undisclosed conflicts | Low |

**Recommendations 1 and 3 are the most important** — they close procedural gaps that could create real problems during board operations. The others are refinements that can be addressed in v0.2 or during legal counsel review.

---

*This review is from the Policy Director's perspective and focuses on legal/governance soundness. Legal counsel should review the full policy before board adoption, particularly: (1) compliance with the state nonprofit statute of the jurisdiction of incorporation, (2) IRS Form 1023 requirements, and (3) intermediate sanctions rules.*
