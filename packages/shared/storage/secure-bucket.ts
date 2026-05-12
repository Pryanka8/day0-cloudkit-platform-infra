import * as s3 from "aws-cdk-lib/aws-s3";
import * as cdk from "aws-cdk-lib";
import { Construct } from "constructs";

export interface SecureBucketProps {
  bucketName?: string;
}

export class SecureBucket extends Construct {
  public readonly bucket: s3.Bucket;

  constructor(scope: Construct, id: string, props?: SecureBucketProps) {
    super(scope, id);

    this.bucket = new s3.Bucket(this, "Bucket", {
      bucketName: props?.bucketName,

      encryption: s3.BucketEncryption.S3_MANAGED,

      enforceSSL: true,

      versioned: true,

      blockPublicAccess: s3.BlockPublicAccess.BLOCK_ALL,

      removalPolicy: cdk.RemovalPolicy.DESTROY,

      autoDeleteObjects: true,
    });
  }
}
