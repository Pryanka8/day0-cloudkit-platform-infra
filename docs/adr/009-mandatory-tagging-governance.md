# ADR-009 — Mandatory Tagging Governance

## Status

Accepted

## Context

Cloud environments without tagging standards become difficult to manage operationally.

Missing tags ### Negatively impact:

cost allocation
automation
ownership tracking
governance reporting

## Decision

Enforce centralized mandatory tagging through platform utilities.

Current tags include:

Environment
Project
Owner
ManagedBy
Platform

## Consequences

### Positive

Better cost visibility
Improved governance
Easier future automation
Resource ownership clarity

### Negative

Additional governance enforcement complexity

## Rationale

Tagging should be platform-enforced rather than application-team managed.
This improves long-term operational consistency.
