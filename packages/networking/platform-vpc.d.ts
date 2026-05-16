import * as ec2 from "aws-cdk-lib/aws-ec2";
import { Construct } from "constructs";
export interface PlatformVpcProps {
    cidr: string;
    maxAzs: number;
}
export declare class PlatformVpc extends Construct {
    readonly vpc: ec2.Vpc;
    constructor(scope: Construct, id: string, props: PlatformVpcProps);
}
