# Day0 CloudKit Platform Architecture

## Overview

This diagram represents the current architecture of the reusable SMB cloud bootstrap platform built using AWS CDK and TypeScript.

The platform currently includes:

- Multi-environment configuration
- Platform governance layer
- Centralized logging
- CloudTrail baseline
- AWS Config baseline
- Reusable VPC architecture
- Flow logs
- Budget alerts
- Tagging governance
- VPC endpoints
- Security group strategy

---

# High-Level Architecture Diagram

```mermaid
flowchart TB

    Developer[Developer]
    GitHub[GitHub Repository]
    CDK[CDK Platform Framework]

    subgraph Governance[Governance & Security Layer]
        Budget[AWS Budgets]
        Tags[Mandatory Tagging]
        CloudTrail[CloudTrail]
        AWSConfig[AWS Config]
        LoggingBucket[S3 Logging Bucket]
    end

    subgraph Networking[Platform Networking Layer]
        VPC[Platform VPC]

        subgraph PublicSubnets[Public Subnets]
            NAT[NAT Gateway]
        end

        subgraph PrivateSubnets[Private Subnets]
            AppSG[Application Security Group]
            DbSG[Database Security Group]
        end

        FlowLogs[VPC Flow Logs]

        S3Endpoint[S3 VPC Endpoint]
        LogsEndpoint[CloudWatch Logs Endpoint]
        SecretsEndpoint[Secrets Manager Endpoint]
    end

    subgraph Observability[Observability Layer]
        CloudWatch[CloudWatch Logs]
    end

    subgraph Future[Future Application Layer]
        Lambda[Lambda APIs]
        APIGateway[API Gateway]
        RDS[RDS PostgreSQL]
        Frontend[S3 + CloudFront Frontend]
        Secrets[Secrets Manager]
    end

    Developer --> GitHub
    GitHub --> CDK

    CDK --> Governance
    CDK --> Networking
    CDK --> Observability

    CloudTrail --> LoggingBucket
    AWSConfig --> LoggingBucket

    VPC --> PublicSubnets
    VPC --> PrivateSubnets

    VPC --> FlowLogs
    FlowLogs --> CloudWatch

    PrivateSubnets --> S3Endpoint
    PrivateSubnets --> LogsEndpoint
    PrivateSubnets --> SecretsEndpoint

    AppSG --> DbSG

    Lambda --> AppSG
    RDS --> DbSG

    Lambda --> Secrets

```

---

# Platform Repository Structure

```txt
platform-infra/
├── bin/
│   └── platform-infra.ts
│
├── config/
│   ├── dev.ts
│   ├── stage.ts
│   ├── prod.ts
│   └── types.ts
│
├── lib/
│   └── platform-stack.ts
│
├── packages/
│   ├── networking/
│   │   ├── platform-vpc.ts
│   │   └── security-groups.ts
│   │
│   ├── security/
│   │   ├── cloudtrail-baseline.ts
│   │   └── config-baseline.ts
│   │
│   ├── storage/
│   │   ├── secure-bucket.ts
│   │   └── logging-bucket.ts
│   │
│   ├── finops/
│   │   └── budget-alert.ts
│   │
│   └── governance/
│       └── tags.ts
│
├── scripts/
├── test/
└── package.json
```

---

# Deployment Flow

```mermaid
sequenceDiagram

    participant Dev as Developer
    participant GitHub as GitHub Repo
    participant CDK as CDK Framework
    participant AWS as AWS Account

    Dev->>GitHub: Push Infrastructure Changes

    GitHub->>CDK: Trigger CDK Synth

    CDK->>AWS: Deploy Governance Resources

    CDK->>AWS: Deploy Networking Layer

    CDK->>AWS: Deploy Logging & Security

    AWS-->>CDK: Infrastructure Outputs

    CDK-->>Dev: Deployment Complete
```

---

# Current Platform Components

| Layer                | Components                       |
| -------------------- | -------------------------------- |
| Governance           | AWS Budgets, Mandatory Tags      |
| Security             | CloudTrail, AWS Config           |
| Logging              | Centralized S3 Logging Bucket    |
| Networking           | VPC, Public/Private Subnets, NAT |
| Observability        | Flow Logs, CloudWatch            |
| Connectivity         | VPC Endpoints                    |
| Security Controls    | Reusable Security Groups         |
| Platform Engineering | Reusable CDK Constructs          |

---

# Planned Future Enhancements

## Compute Layer

- Lambda API pattern
- ECS Fargate pattern
- API Gateway integration

## Data Layer

- RDS PostgreSQL construct
- DynamoDB pattern
- Backup policies

## CI/CD

- CodePipeline integration
- CodeBuild integration
- Cross-account deployments

## Security

- GuardDuty baseline
- Security Hub integration
- IAM permission boundaries

## Observability

- Dashboards
- Alarms
- Metric filters
- Centralized monitoring

## Cost Optimization

- Auto shutdown scheduler
- Ephemeral environments
- Idle resource cleanup

---

# Architecture Principles

## Secure by Default

All constructs enforce:

- encryption
- SSL
- restricted access
- centralized governance

## Cost Optimized

Designed for SMB environments:

- single NAT gateway
- VPC endpoints
- lifecycle policies
- budget alerts

## Reusable

All infrastructure built as:

- reusable CDK constructs
- platform modules
- composable abstractions

## Observable

Platform includes:

- audit logs
- flow logs
- CloudWatch integration
- governance visibility

## Environment Aware

Supports:

- dev
- stage
- prod
- future multi-account expansion
