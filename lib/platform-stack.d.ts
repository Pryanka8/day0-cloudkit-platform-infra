import * as cdk from "aws-cdk-lib";
import { Construct } from "constructs";
import { EnvironmentConfig } from "../config/types";
interface PlatformStackProps extends cdk.StackProps {
    config: EnvironmentConfig;
}
export declare class PlatformStack extends cdk.Stack {
    constructor(scope: Construct, id: string, props: PlatformStackProps);
}
export {};
