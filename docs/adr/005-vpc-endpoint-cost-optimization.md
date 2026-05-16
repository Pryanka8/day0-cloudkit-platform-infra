# ADR-005 — VPC Endpoint Cost Optimization Strategy

## Status

Accepted

## Context

Private subnet workloads accessing AWS services through NAT Gateways generate:

additional NAT processing cost
additional data transfer cost
unnecessary public routing paths

The platform required lower-cost private AWS service access.

## Decision

Use VPC endpoints for commonly accessed AWS services.

Initial endpoints include:

Amazon S3
CloudWatch Logs
AWS Secrets Manager

## Consequences

### Positive

Reduced NAT Gateway traffic
Lower networking cost
Improved private connectivity
Better security posture

### Negative

Additional endpoint resource management
Additional ENI consumption

## Rationale

VPC endpoints provide strong cost-to-value optimization for SMB cloud platforms.

The initial endpoint set focuses on:

high-usage services
operational services
logging and secrets access

rather than creating excessive endpoint sprawl.
