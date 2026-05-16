import * as s3 from "aws-cdk-lib/aws-s3";
import * as cdk from "aws-cdk-lib";
import * as iam from "aws-cdk-lib/aws-iam";
import { Construct } from "constructs";

export class LoggingBucket extends Construct {
  public readonly bucket: s3.Bucket;

  constructor(scope: Construct, id: string) {
    super(scope, id);

    this.bucket = new s3.Bucket(this, "AuditLogsBucket", {
      encryption: s3.BucketEncryption.S3_MANAGED,

      versioned: true,

      enforceSSL: true,

      blockPublicAccess: s3.BlockPublicAccess.BLOCK_ALL,

      lifecycleRules: [
        {
          enabled: true,

          expiration: cdk.Duration.days(365),

          noncurrentVersionExpiration: cdk.Duration.days(90),
        },
      ],

      removalPolicy: cdk.RemovalPolicy.RETAIN,
    });
    this.bucket.addToResourcePolicy(
      new iam.PolicyStatement({
        principals: [new iam.ServicePrincipal("config.amazonaws.com")],

        actions: ["s3:GetBucketAcl", "s3:PutObject"],

        resources: [this.bucket.bucketArn, `${this.bucket.bucketArn}/*`],

        conditions: {
          StringEquals: {
            "s3:x-amz-acl": "bucket-owner-full-control",
          },
        },
      }),
    );
  }
}
