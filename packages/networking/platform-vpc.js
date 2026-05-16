"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.PlatformVpc = void 0;
const ec2 = __importStar(require("aws-cdk-lib/aws-ec2"));
const logs = __importStar(require("aws-cdk-lib/aws-logs"));
const iam = __importStar(require("aws-cdk-lib/aws-iam"));
const constructs_1 = require("constructs");
class PlatformVpc extends constructs_1.Construct {
    vpc;
    constructor(scope, id, props) {
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
            destination: ec2.FlowLogDestination.toCloudWatchLogs(flowLogGroup, flowLogRole),
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
exports.PlatformVpc = PlatformVpc;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGxhdGZvcm0tdnBjLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsicGxhdGZvcm0tdnBjLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLHlEQUEyQztBQUMzQywyREFBNkM7QUFDN0MseURBQTJDO0FBQzNDLDJDQUF1QztBQU12QyxNQUFhLFdBQVksU0FBUSxzQkFBUztJQUN4QixHQUFHLENBQVU7SUFFN0IsWUFBWSxLQUFnQixFQUFFLEVBQVUsRUFBRSxLQUF1QjtRQUMvRCxLQUFLLENBQUMsS0FBSyxFQUFFLEVBQUUsQ0FBQyxDQUFDO1FBRWpCLElBQUksQ0FBQyxHQUFHLEdBQUcsSUFBSSxHQUFHLENBQUMsR0FBRyxDQUFDLElBQUksRUFBRSxLQUFLLEVBQUU7WUFDbEMsV0FBVyxFQUFFLEdBQUcsQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUM7WUFFN0MsTUFBTSxFQUFFLEtBQUssQ0FBQyxNQUFNO1lBRXBCLFdBQVcsRUFBRSxDQUFDO1lBRWQsbUJBQW1CLEVBQUU7Z0JBQ25CO29CQUNFLElBQUksRUFBRSxRQUFRO29CQUNkLFVBQVUsRUFBRSxHQUFHLENBQUMsVUFBVSxDQUFDLE1BQU07b0JBQ2pDLFFBQVEsRUFBRSxFQUFFO2lCQUNiO2dCQUVEO29CQUNFLElBQUksRUFBRSxTQUFTO29CQUNmLFVBQVUsRUFBRSxHQUFHLENBQUMsVUFBVSxDQUFDLG1CQUFtQjtvQkFDOUMsUUFBUSxFQUFFLEVBQUU7aUJBQ2I7YUFDRjtTQUNGLENBQUMsQ0FBQztRQUVILE1BQU0sWUFBWSxHQUFHLElBQUksSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLEVBQUUsa0JBQWtCLEVBQUU7WUFDL0QsU0FBUyxFQUFFLElBQUksQ0FBQyxhQUFhLENBQUMsUUFBUTtTQUN2QyxDQUFDLENBQUM7UUFFSCxNQUFNLFdBQVcsR0FBRyxJQUFJLEdBQUcsQ0FBQyxJQUFJLENBQUMsSUFBSSxFQUFFLGlCQUFpQixFQUFFO1lBQ3hELFNBQVMsRUFBRSxJQUFJLEdBQUcsQ0FBQyxnQkFBZ0IsQ0FBQyw2QkFBNkIsQ0FBQztTQUNuRSxDQUFDLENBQUM7UUFFSCxZQUFZLENBQUMsVUFBVSxDQUFDLFdBQVcsQ0FBQyxDQUFDO1FBRXJDLElBQUksR0FBRyxDQUFDLE9BQU8sQ0FBQyxJQUFJLEVBQUUsYUFBYSxFQUFFO1lBQ25DLFlBQVksRUFBRSxHQUFHLENBQUMsbUJBQW1CLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUM7WUFFdkQsV0FBVyxFQUFFLEdBQUcsQ0FBQyxrQkFBa0IsQ0FBQyxnQkFBZ0IsQ0FDbEQsWUFBWSxFQUNaLFdBQVcsQ0FDWjtZQUVELFdBQVcsRUFBRSxHQUFHLENBQUMsa0JBQWtCLENBQUMsR0FBRztTQUN4QyxDQUFDLENBQUM7UUFFSCxJQUFJLENBQUMsR0FBRyxDQUFDLGtCQUFrQixDQUFDLFlBQVksRUFBRTtZQUN4QyxPQUFPLEVBQUUsR0FBRyxDQUFDLDRCQUE0QixDQUFDLEVBQUU7U0FDN0MsQ0FBQyxDQUFDO1FBRUgsSUFBSSxDQUFDLEdBQUcsQ0FBQyxvQkFBb0IsQ0FBQyx3QkFBd0IsRUFBRTtZQUN0RCxPQUFPLEVBQUUsR0FBRyxDQUFDLDhCQUE4QixDQUFDLGVBQWU7U0FDNUQsQ0FBQyxDQUFDO1FBRUgsSUFBSSxDQUFDLEdBQUcsQ0FBQyxvQkFBb0IsQ0FBQyx3QkFBd0IsRUFBRTtZQUN0RCxPQUFPLEVBQUUsR0FBRyxDQUFDLDhCQUE4QixDQUFDLGVBQWU7U0FDNUQsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztDQUNGO0FBN0RELGtDQTZEQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIGVjMiBmcm9tIFwiYXdzLWNkay1saWIvYXdzLWVjMlwiO1xyXG5pbXBvcnQgKiBhcyBsb2dzIGZyb20gXCJhd3MtY2RrLWxpYi9hd3MtbG9nc1wiO1xyXG5pbXBvcnQgKiBhcyBpYW0gZnJvbSBcImF3cy1jZGstbGliL2F3cy1pYW1cIjtcclxuaW1wb3J0IHsgQ29uc3RydWN0IH0gZnJvbSBcImNvbnN0cnVjdHNcIjtcclxuZXhwb3J0IGludGVyZmFjZSBQbGF0Zm9ybVZwY1Byb3BzIHtcclxuICBjaWRyOiBzdHJpbmc7XHJcbiAgbWF4QXpzOiBudW1iZXI7XHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBQbGF0Zm9ybVZwYyBleHRlbmRzIENvbnN0cnVjdCB7XHJcbiAgcHVibGljIHJlYWRvbmx5IHZwYzogZWMyLlZwYztcclxuXHJcbiAgY29uc3RydWN0b3Ioc2NvcGU6IENvbnN0cnVjdCwgaWQ6IHN0cmluZywgcHJvcHM6IFBsYXRmb3JtVnBjUHJvcHMpIHtcclxuICAgIHN1cGVyKHNjb3BlLCBpZCk7XHJcblxyXG4gICAgdGhpcy52cGMgPSBuZXcgZWMyLlZwYyh0aGlzLCBcIlZwY1wiLCB7XHJcbiAgICAgIGlwQWRkcmVzc2VzOiBlYzIuSXBBZGRyZXNzZXMuY2lkcihwcm9wcy5jaWRyKSxcclxuXHJcbiAgICAgIG1heEF6czogcHJvcHMubWF4QXpzLFxyXG5cclxuICAgICAgbmF0R2F0ZXdheXM6IDEsXHJcblxyXG4gICAgICBzdWJuZXRDb25maWd1cmF0aW9uOiBbXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgbmFtZTogXCJwdWJsaWNcIixcclxuICAgICAgICAgIHN1Ym5ldFR5cGU6IGVjMi5TdWJuZXRUeXBlLlBVQkxJQyxcclxuICAgICAgICAgIGNpZHJNYXNrOiAyNCxcclxuICAgICAgICB9LFxyXG5cclxuICAgICAgICB7XHJcbiAgICAgICAgICBuYW1lOiBcInByaXZhdGVcIixcclxuICAgICAgICAgIHN1Ym5ldFR5cGU6IGVjMi5TdWJuZXRUeXBlLlBSSVZBVEVfV0lUSF9FR1JFU1MsXHJcbiAgICAgICAgICBjaWRyTWFzazogMjQsXHJcbiAgICAgICAgfSxcclxuICAgICAgXSxcclxuICAgIH0pO1xyXG5cclxuICAgIGNvbnN0IGZsb3dMb2dHcm91cCA9IG5ldyBsb2dzLkxvZ0dyb3VwKHRoaXMsIFwiVnBjRmxvd0xvZ3NHcm91cFwiLCB7XHJcbiAgICAgIHJldGVudGlvbjogbG9ncy5SZXRlbnRpb25EYXlzLk9ORV9XRUVLLFxyXG4gICAgfSk7XHJcblxyXG4gICAgY29uc3QgZmxvd0xvZ1JvbGUgPSBuZXcgaWFtLlJvbGUodGhpcywgXCJWcGNGbG93TG9nc1JvbGVcIiwge1xyXG4gICAgICBhc3N1bWVkQnk6IG5ldyBpYW0uU2VydmljZVByaW5jaXBhbChcInZwYy1mbG93LWxvZ3MuYW1hem9uYXdzLmNvbVwiKSxcclxuICAgIH0pO1xyXG5cclxuICAgIGZsb3dMb2dHcm91cC5ncmFudFdyaXRlKGZsb3dMb2dSb2xlKTtcclxuXHJcbiAgICBuZXcgZWMyLkZsb3dMb2codGhpcywgXCJWcGNGbG93TG9nc1wiLCB7XHJcbiAgICAgIHJlc291cmNlVHlwZTogZWMyLkZsb3dMb2dSZXNvdXJjZVR5cGUuZnJvbVZwYyh0aGlzLnZwYyksXHJcblxyXG4gICAgICBkZXN0aW5hdGlvbjogZWMyLkZsb3dMb2dEZXN0aW5hdGlvbi50b0Nsb3VkV2F0Y2hMb2dzKFxyXG4gICAgICAgIGZsb3dMb2dHcm91cCxcclxuICAgICAgICBmbG93TG9nUm9sZSxcclxuICAgICAgKSxcclxuXHJcbiAgICAgIHRyYWZmaWNUeXBlOiBlYzIuRmxvd0xvZ1RyYWZmaWNUeXBlLkFMTCxcclxuICAgIH0pO1xyXG5cclxuICAgIHRoaXMudnBjLmFkZEdhdGV3YXlFbmRwb2ludChcIlMzRW5kcG9pbnRcIiwge1xyXG4gICAgICBzZXJ2aWNlOiBlYzIuR2F0ZXdheVZwY0VuZHBvaW50QXdzU2VydmljZS5TMyxcclxuICAgIH0pO1xyXG5cclxuICAgIHRoaXMudnBjLmFkZEludGVyZmFjZUVuZHBvaW50KFwiQ2xvdWRXYXRjaExvZ3NFbmRwb2ludFwiLCB7XHJcbiAgICAgIHNlcnZpY2U6IGVjMi5JbnRlcmZhY2VWcGNFbmRwb2ludEF3c1NlcnZpY2UuQ0xPVURXQVRDSF9MT0dTLFxyXG4gICAgfSk7XHJcblxyXG4gICAgdGhpcy52cGMuYWRkSW50ZXJmYWNlRW5kcG9pbnQoXCJTZWNyZXRzTWFuYWdlckVuZHBvaW50XCIsIHtcclxuICAgICAgc2VydmljZTogZWMyLkludGVyZmFjZVZwY0VuZHBvaW50QXdzU2VydmljZS5TRUNSRVRTX01BTkFHRVIsXHJcbiAgICB9KTtcclxuICB9XHJcbn1cclxuIl19