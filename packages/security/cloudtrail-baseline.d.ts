import * as s3 from "aws-cdk-lib/aws-s3";
import { Construct } from "constructs";
export interface CloudTrailBaselineProps {
    loggingBucket: s3.Bucket;
}
export declare class CloudTrailBaseline extends Construct {
    constructor(scope: Construct, id: string, props: CloudTrailBaselineProps);
}
