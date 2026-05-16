import * as s3 from "aws-cdk-lib/aws-s3";
import { Construct } from "constructs";
export interface SecureBucketProps {
    bucketName?: string;
}
export declare class SecureBucket extends Construct {
    readonly bucket: s3.Bucket;
    constructor(scope: Construct, id: string, props?: SecureBucketProps);
}
