# ADR-010 — SMB-Focused Platform Design Philosophy

## Status

Accepted

## Context

Many enterprise cloud architectures are overly complex for small and mid-sized businesses.

The platform required a pragmatic balance between:

scalability
governance
cost
operational simplicity

## Decision

Design the platform specifically for SMB adoption using:

reusable abstractions
simplified networking
governance-first architecture
low-cost operational patterns
minimal operational overhead

## Consequences

### Positive

Lower cloud adoption barrier
Better affordability
Easier onboarding
Faster operational understanding

### Negative

Reduced enterprise-level complexity support initially
Some HA tradeoffs

## Rationale

The platform intentionally prioritizes:

practical usability
affordability
operational clarity

rather than enterprise-scale complexity during early adoption stages.

Future architecture evolution remains possible as platform maturity increases.
