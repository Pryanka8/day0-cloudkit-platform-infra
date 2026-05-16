# ADR-003 — Secure-by-Default Resource Strategy

## Status

Accepted

## Context

Cloud misconfigurations frequently occur due to:

public access exposure
missing encryption
inconsistent resource configuration
developer-owned security ## Decisions

Security controls needed to be standardized.

## Decision

All reusable infrastructure constructs enforce secure defaults.

Examples include:

S3 encryption enabled
SSL-only bucket access
block public access enabled
versioning enabled
restricted IAM permissions

## Consequences

### Positive

Reduced accidental exposure
Consistent security posture
Easier governance
Simpler application onboarding

### Negative

Slightly reduced flexibility
Additional policy management required

## Rationale

Application teams should inherit secure defaults automatically rather than manually configuring security controls repeatedly.
