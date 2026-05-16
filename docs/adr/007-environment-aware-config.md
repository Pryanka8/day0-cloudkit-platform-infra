# ADR-007 — Environment-Aware Configuration System

## Status

Accepted

## Context

Hardcoded environment values create scaling and maintainability problems across:

regions
accounts
deployment stages

The platform required reusable environment-aware deployments.

## Decision

Use typed centralized environment configuration files.

Example:

config/
├── dev.ts
├── stage.ts
├── prod.ts
└── types.ts

## Consequences

### Positive

Cleaner environment separation
Better maintainability
Multi-account readiness
Type-safe configuration management

### Negative

Additional configuration management overhead

## Rationale

Environment configuration should remain centralized and reusable rather than embedded directly inside infrastructure stacks.
