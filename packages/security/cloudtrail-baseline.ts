import * as cloudtrail from "aws-cdk-lib/aws-cloudtrail";
import * as s3 from "aws-cdk-lib/aws-s3";

import { Construct } from "constructs";

export interface CloudTrailBaselineProps {
  loggingBucket: s3.Bucket;
}

export class CloudTrailBaseline extends Construct {
  constructor(scope: Construct, id: string, props: CloudTrailBaselineProps) {
    super(scope, id);

    new cloudtrail.Trail(this, "OrganizationTrail", {
      bucket: props.loggingBucket,

      isMultiRegionTrail: true,

      includeGlobalServiceEvents: true,

      managementEvents: cloudtrail.ReadWriteType.ALL,
    });
  }
}
