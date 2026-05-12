import * as ec2 from "aws-cdk-lib/aws-ec2";
import * as logs from "aws-cdk-lib/aws-logs";
import * as iam from "aws-cdk-lib/aws-iam";
import { Construct } from "constructs";
export interface PlatformVpcProps {
  cidr: string;
  maxAzs: number;
}

export class PlatformVpc extends Construct {
  public readonly vpc: ec2.Vpc;

  constructor(scope: Construct, id: string, props: PlatformVpcProps) {
    super(scope, id);

    this.vpc = new ec2.Vpc(this, "Vpc", {
      ipAddresses: ec2.IpAddresses.cidr(props.cidr),

      maxAzs: props.maxAzs,

      natGateways: 1,

      subnetConfiguration: [
        {
          name: "public",
          subnetType: ec2.SubnetType.PUBLIC,
          cidrMask: 24,
        },

        {
          name: "private",
          subnetType: ec2.SubnetType.PRIVATE_WITH_EGRESS,
          cidrMask: 24,
        },
      ],
    });

    const flowLogGroup = new logs.LogGroup(this, "VpcFlowLogsGroup", {
      retention: logs.RetentionDays.ONE_WEEK,
    });

    const flowLogRole = new iam.Role(this, "VpcFlowLogsRole", {
      assumedBy: new iam.ServicePrincipal("vpc-flow-logs.amazonaws.com"),
    });

    flowLogGroup.grantWrite(flowLogRole);

    new ec2.FlowLog(this, "VpcFlowLogs", {
      resourceType: ec2.FlowLogResourceType.fromVpc(this.vpc),

      destination: ec2.FlowLogDestination.toCloudWatchLogs(
        flowLogGroup,
        flowLogRole,
      ),

      trafficType: ec2.FlowLogTrafficType.ALL,
    });

    this.vpc.addGatewayEndpoint("S3Endpoint", {
      service: ec2.GatewayVpcEndpointAwsService.S3,
    });

    this.vpc.addInterfaceEndpoint("CloudWatchLogsEndpoint", {
      service: ec2.InterfaceVpcEndpointAwsService.CLOUDWATCH_LOGS,
    });

    this.vpc.addInterfaceEndpoint("SecretsManagerEndpoint", {
      service: ec2.InterfaceVpcEndpointAwsService.SECRETS_MANAGER,
    });
  }
}
