# ADR-004 — Single NAT Gateway Strategy

## Status

Accepted

## Context

AWS NAT Gateways are one of the largest recurring baseline networking costs for small environments.

Default multi-AZ NAT patterns significantly increase monthly infrastructure cost.

## Decision

Use a single NAT Gateway for the initial SMB-focused platform architecture.

## Consequences

### Positive

Lower baseline networking cost
Simpler architecture
Better affordability for SMB environments

### Negative

Reduced high availability for outbound internet access
NAT becomes a single point of failure

## Rationale

The platform prioritizes:

cost optimization
operational simplicity
SMB affordability

over enterprise-grade multi-NAT high availability during initial adoption.

The design can later evolve into:

NAT per AZ
Transit Gateway architectures
centralized egress architectures

if scale requirements increase.
