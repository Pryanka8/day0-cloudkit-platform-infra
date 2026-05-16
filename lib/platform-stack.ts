import * as cdk from "aws-cdk-lib";
import { Construct } from "constructs";
import { EnvironmentConfig } from "../config/types";
import { applyMandatoryTags } from "../packages/shared/governance/tags";
import { BudgetAlert } from "../packages/shared/finops/budget-alert";
import { LoggingBucket } from "../packages/shared/storage/logging-bucket";
import { CloudTrailBaseline } from "../packages/security/cloudtrail-baseline";
import { ConfigBaseline } from "../packages/security/config-baseline";
import { PlatformVpc } from "../packages/networking/platform-vpc";
interface PlatformStackProps extends cdk.StackProps {
  config: EnvironmentConfig;
}

export class PlatformStack extends cdk.Stack {
  constructor(scope: Construct, id: string, props: PlatformStackProps) {
    super(scope, id, props);

    const { config } = props;

    applyMandatoryTags(this, {
      environment: config.environment,
      project: config.project,
      owner: config.owner,
    });

    new cdk.CfnOutput(this, "EnvironmentName", {
      value: config.environment,
    });

    new cdk.CfnOutput(this, "Region", {
      value: config.region,
    });

    new BudgetAlert(this, "MonthlyBudgetAlert", {
      budgetLimitUsd: config.budgets.monthlyLimitUsd,
      emailAddress: config.owner,
    });

    const loggingBucket = new LoggingBucket(this, "CentralLoggingBucket");
    new CloudTrailBaseline(this, "CloudTrailBaseline", {
      loggingBucket: loggingBucket.bucket,
    });

    new ConfigBaseline(this, "ConfigBaseline", {
      accountId: config.accountId,
    });
    const platformVpc = new PlatformVpc(this, "PlatformVpc", {
      cidr: config.networking.cidr,
      maxAzs: config.networking.maxAzs,
    });

    new cdk.CfnOutput(this, "VpcId", {
      value: platformVpc.vpc.vpcId,
    });
  }
}
