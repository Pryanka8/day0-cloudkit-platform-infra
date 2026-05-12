import * as ec2 from "aws-cdk-lib/aws-ec2";

import { Construct } from "constructs";

export interface PlatformSecurityGroups {
  appSecurityGroup: ec2.SecurityGroup;

  databaseSecurityGroup: ec2.SecurityGroup;
}

export class SecurityGroups extends Construct {
  public readonly groups: PlatformSecurityGroups;

  constructor(scope: Construct, id: string, vpc: ec2.Vpc) {
    super(scope, id);

    const appSecurityGroup = new ec2.SecurityGroup(this, "AppSecurityGroup", {
      vpc,

      allowAllOutbound: true,

      description: "Security group for application workloads",
    });

    const databaseSecurityGroup = new ec2.SecurityGroup(
      this,
      "DatabaseSecurityGroup",
      {
        vpc,

        allowAllOutbound: false,

        description: "Security group for databases",
      },
    );

    databaseSecurityGroup.addIngressRule(
      appSecurityGroup,
      ec2.Port.tcp(5432),
      "Allow PostgreSQL access from application workloads",
    );

    this.groups = {
      appSecurityGroup,
      databaseSecurityGroup,
    };
  }
}
