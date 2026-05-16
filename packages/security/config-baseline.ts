import * as config from "aws-cdk-lib/aws-config";
import * as iam from "aws-cdk-lib/aws-iam";
import * as s3 from "aws-cdk-lib/aws-s3";
import { Construct } from "constructs";
export interface ConfigBaselineProps {
  accountId: string;
  loggingBucket: s3.IBucket;
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
      s3BucketName: props.loggingBucket.bucketName,
    });
  }
}
