# ADR-006 — Centralized Logging Bucket

## Status

Accepted

## Context

Operational and audit logs become difficult to manage when distributed across:

multiple buckets
inconsistent retention policies
application-specific storage

The platform required centralized log management.

## Decision

Use a centralized S3 logging bucket for:

CloudTrail
AWS Config
future governance and audit services

## Consequences

### Positive

Centralized audit visibility
Easier lifecycle management
Simpler future SIEM integration
Consistent retention strategy

### Negative

Increased dependency on shared logging infrastructure
Additional bucket policy management

## Rationale

Centralized logging simplifies operational governance and future observability expansion.
