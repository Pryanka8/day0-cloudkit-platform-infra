import * as ec2 from "aws-cdk-lib/aws-ec2";
import { Construct } from "constructs";
export interface PlatformSecurityGroups {
    appSecurityGroup: ec2.SecurityGroup;
    databaseSecurityGroup: ec2.SecurityGroup;
}
export declare class SecurityGroups extends Construct {
    readonly groups: PlatformSecurityGroups;
    constructor(scope: Construct, id: string, vpc: ec2.Vpc);
}
