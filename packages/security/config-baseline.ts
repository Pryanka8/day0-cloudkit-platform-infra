import * as config from "aws-cdk-lib/aws-config";
import * as iam from "aws-cdk-lib/aws-iam";

import { Construct } from "constructs";
export interface ConfigBaselineProps {
  accountId: string;
}
export class ConfigBaseline extends Construct {
  constructor(scope: Construct, id: string, props: ConfigBaselineProps) {
    super(scope, id);

    const role = new iam.Role(this, "ConfigRole", {
      assumedBy: new iam.ServicePrincipal("config.amazonaws.com"),
    });

    role.addManagedPolicy(
      iam.ManagedPolicy.fromAwsManagedPolicyName("service-role/AWS_ConfigRole"),
    );

    new config.CfnConfigurationRecorder(this, "ConfigurationRecorder", {
      roleArn: role.roleArn,

      recordingGroup: {
        allSupported: true,
        includeGlobalResourceTypes: true,
      },
    });

    new config.CfnDeliveryChannel(this, "DeliveryChannel", {
      s3BucketName: `aws-config-${props.accountId}`,
    });
  }
}
