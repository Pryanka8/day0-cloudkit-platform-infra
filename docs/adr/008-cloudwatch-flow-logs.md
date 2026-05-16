# ADR-008 — CloudWatch-Based Flow Log Strategy

## Status

Accepted

## Context

VPC Flow Logs can be delivered to:

S3
Kinesis
CloudWatch Logs

The platform required operational simplicity for early-stage SMB environments.

## Decision

Deliver VPC Flow Logs to CloudWatch Logs initially.

## Consequences

### Positive

Easier operational debugging
Faster observability setup
Simpler log exploration
Lower operational complexity

### Negative

Potentially higher long-term log cost
Less efficient large-scale analytics

## Rationale

The platform currently optimizes for:

operational simplicity
fast troubleshooting
lower operational overhead

Future evolution may include:

S3 archival
Athena queries
SIEM integrations

as observability requirements mature.
