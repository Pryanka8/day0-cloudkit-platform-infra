import * as s3 from "aws-cdk-lib/aws-s3";
import { Construct } from "constructs";
export interface ConfigBaselineProps {
    accountId: string;
    loggingBucket: s3.IBucket;
}
export declare class ConfigBaseline extends Construct {
    constructor(scope: Construct, id: string, props: ConfigBaselineProps);
}
