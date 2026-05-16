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
exports.PlatformStack = void 0;
const cdk = __importStar(require("aws-cdk-lib"));
const tags_1 = require("../packages/shared/governance/tags");
const budget_alert_1 = require("../packages/shared/finops/budget-alert");
const logging_bucket_1 = require("../packages/shared/storage/logging-bucket");
const cloudtrail_baseline_1 = require("../packages/security/cloudtrail-baseline");
const config_baseline_1 = require("../packages/security/config-baseline");
const platform_vpc_1 = require("../packages/networking/platform-vpc");
class PlatformStack extends cdk.Stack {
    constructor(scope, id, props) {
        super(scope, id, props);
        const { config } = props;
        (0, tags_1.applyMandatoryTags)(this, {
            environment: config.environment,
            project: config.project,
            owner: config.owner,
        });
        new cdk.CfnOutput(this, "EnvironmentName", {
            value: config.environment,
        });
        new cdk.CfnOutput(this, "Region", {
            value: config.region,
        });
        new budget_alert_1.BudgetAlert(this, "MonthlyBudgetAlert", {
            budgetLimitUsd: config.budgets.monthlyLimitUsd,
            emailAddress: config.owner,
        });
        const loggingBucket = new logging_bucket_1.LoggingBucket(this, "CentralLoggingBucket");
        new cloudtrail_baseline_1.CloudTrailBaseline(this, "CloudTrailBaseline", {
            loggingBucket: loggingBucket.bucket,
        });
        new config_baseline_1.ConfigBaseline(this, "ConfigBaseline", {
            accountId: config.accountId,
            loggingBucket: loggingBucket.bucket,
        });
        const platformVpc = new platform_vpc_1.PlatformVpc(this, "PlatformVpc", {
            cidr: config.networking.cidr,
            maxAzs: config.networking.maxAzs,
        });
        new cdk.CfnOutput(this, "VpcId", {
            value: platformVpc.vpc.vpcId,
        });
    }
}
exports.PlatformStack = PlatformStack;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGxhdGZvcm0tc3RhY2suanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJwbGF0Zm9ybS1zdGFjay50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxpREFBbUM7QUFHbkMsNkRBQXdFO0FBQ3hFLHlFQUFxRTtBQUNyRSw4RUFBMEU7QUFDMUUsa0ZBQThFO0FBQzlFLDBFQUFzRTtBQUN0RSxzRUFBa0U7QUFLbEUsTUFBYSxhQUFjLFNBQVEsR0FBRyxDQUFDLEtBQUs7SUFDMUMsWUFBWSxLQUFnQixFQUFFLEVBQVUsRUFBRSxLQUF5QjtRQUNqRSxLQUFLLENBQUMsS0FBSyxFQUFFLEVBQUUsRUFBRSxLQUFLLENBQUMsQ0FBQztRQUV4QixNQUFNLEVBQUUsTUFBTSxFQUFFLEdBQUcsS0FBSyxDQUFDO1FBRXpCLElBQUEseUJBQWtCLEVBQUMsSUFBSSxFQUFFO1lBQ3ZCLFdBQVcsRUFBRSxNQUFNLENBQUMsV0FBVztZQUMvQixPQUFPLEVBQUUsTUFBTSxDQUFDLE9BQU87WUFDdkIsS0FBSyxFQUFFLE1BQU0sQ0FBQyxLQUFLO1NBQ3BCLENBQUMsQ0FBQztRQUVILElBQUksR0FBRyxDQUFDLFNBQVMsQ0FBQyxJQUFJLEVBQUUsaUJBQWlCLEVBQUU7WUFDekMsS0FBSyxFQUFFLE1BQU0sQ0FBQyxXQUFXO1NBQzFCLENBQUMsQ0FBQztRQUVILElBQUksR0FBRyxDQUFDLFNBQVMsQ0FBQyxJQUFJLEVBQUUsUUFBUSxFQUFFO1lBQ2hDLEtBQUssRUFBRSxNQUFNLENBQUMsTUFBTTtTQUNyQixDQUFDLENBQUM7UUFFSCxJQUFJLDBCQUFXLENBQUMsSUFBSSxFQUFFLG9CQUFvQixFQUFFO1lBQzFDLGNBQWMsRUFBRSxNQUFNLENBQUMsT0FBTyxDQUFDLGVBQWU7WUFDOUMsWUFBWSxFQUFFLE1BQU0sQ0FBQyxLQUFLO1NBQzNCLENBQUMsQ0FBQztRQUVILE1BQU0sYUFBYSxHQUFHLElBQUksOEJBQWEsQ0FBQyxJQUFJLEVBQUUsc0JBQXNCLENBQUMsQ0FBQztRQUN0RSxJQUFJLHdDQUFrQixDQUFDLElBQUksRUFBRSxvQkFBb0IsRUFBRTtZQUNqRCxhQUFhLEVBQUUsYUFBYSxDQUFDLE1BQU07U0FDcEMsQ0FBQyxDQUFDO1FBRUgsSUFBSSxnQ0FBYyxDQUFDLElBQUksRUFBRSxnQkFBZ0IsRUFBRTtZQUN6QyxTQUFTLEVBQUUsTUFBTSxDQUFDLFNBQVM7WUFDM0IsYUFBYSxFQUFFLGFBQWEsQ0FBQyxNQUFNO1NBQ3BDLENBQUMsQ0FBQztRQUVILE1BQU0sV0FBVyxHQUFHLElBQUksMEJBQVcsQ0FBQyxJQUFJLEVBQUUsYUFBYSxFQUFFO1lBQ3ZELElBQUksRUFBRSxNQUFNLENBQUMsVUFBVSxDQUFDLElBQUk7WUFDNUIsTUFBTSxFQUFFLE1BQU0sQ0FBQyxVQUFVLENBQUMsTUFBTTtTQUNqQyxDQUFDLENBQUM7UUFFSCxJQUFJLEdBQUcsQ0FBQyxTQUFTLENBQUMsSUFBSSxFQUFFLE9BQU8sRUFBRTtZQUMvQixLQUFLLEVBQUUsV0FBVyxDQUFDLEdBQUcsQ0FBQyxLQUFLO1NBQzdCLENBQUMsQ0FBQztJQUNMLENBQUM7Q0FDRjtBQTVDRCxzQ0E0Q0MiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgKiBhcyBjZGsgZnJvbSBcImF3cy1jZGstbGliXCI7XHJcbmltcG9ydCB7IENvbnN0cnVjdCB9IGZyb20gXCJjb25zdHJ1Y3RzXCI7XHJcbmltcG9ydCB7IEVudmlyb25tZW50Q29uZmlnIH0gZnJvbSBcIi4uL2NvbmZpZy90eXBlc1wiO1xyXG5pbXBvcnQgeyBhcHBseU1hbmRhdG9yeVRhZ3MgfSBmcm9tIFwiLi4vcGFja2FnZXMvc2hhcmVkL2dvdmVybmFuY2UvdGFnc1wiO1xyXG5pbXBvcnQgeyBCdWRnZXRBbGVydCB9IGZyb20gXCIuLi9wYWNrYWdlcy9zaGFyZWQvZmlub3BzL2J1ZGdldC1hbGVydFwiO1xyXG5pbXBvcnQgeyBMb2dnaW5nQnVja2V0IH0gZnJvbSBcIi4uL3BhY2thZ2VzL3NoYXJlZC9zdG9yYWdlL2xvZ2dpbmctYnVja2V0XCI7XHJcbmltcG9ydCB7IENsb3VkVHJhaWxCYXNlbGluZSB9IGZyb20gXCIuLi9wYWNrYWdlcy9zZWN1cml0eS9jbG91ZHRyYWlsLWJhc2VsaW5lXCI7XHJcbmltcG9ydCB7IENvbmZpZ0Jhc2VsaW5lIH0gZnJvbSBcIi4uL3BhY2thZ2VzL3NlY3VyaXR5L2NvbmZpZy1iYXNlbGluZVwiO1xyXG5pbXBvcnQgeyBQbGF0Zm9ybVZwYyB9IGZyb20gXCIuLi9wYWNrYWdlcy9uZXR3b3JraW5nL3BsYXRmb3JtLXZwY1wiO1xyXG5pbnRlcmZhY2UgUGxhdGZvcm1TdGFja1Byb3BzIGV4dGVuZHMgY2RrLlN0YWNrUHJvcHMge1xyXG4gIGNvbmZpZzogRW52aXJvbm1lbnRDb25maWc7XHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBQbGF0Zm9ybVN0YWNrIGV4dGVuZHMgY2RrLlN0YWNrIHtcclxuICBjb25zdHJ1Y3RvcihzY29wZTogQ29uc3RydWN0LCBpZDogc3RyaW5nLCBwcm9wczogUGxhdGZvcm1TdGFja1Byb3BzKSB7XHJcbiAgICBzdXBlcihzY29wZSwgaWQsIHByb3BzKTtcclxuXHJcbiAgICBjb25zdCB7IGNvbmZpZyB9ID0gcHJvcHM7XHJcblxyXG4gICAgYXBwbHlNYW5kYXRvcnlUYWdzKHRoaXMsIHtcclxuICAgICAgZW52aXJvbm1lbnQ6IGNvbmZpZy5lbnZpcm9ubWVudCxcclxuICAgICAgcHJvamVjdDogY29uZmlnLnByb2plY3QsXHJcbiAgICAgIG93bmVyOiBjb25maWcub3duZXIsXHJcbiAgICB9KTtcclxuXHJcbiAgICBuZXcgY2RrLkNmbk91dHB1dCh0aGlzLCBcIkVudmlyb25tZW50TmFtZVwiLCB7XHJcbiAgICAgIHZhbHVlOiBjb25maWcuZW52aXJvbm1lbnQsXHJcbiAgICB9KTtcclxuXHJcbiAgICBuZXcgY2RrLkNmbk91dHB1dCh0aGlzLCBcIlJlZ2lvblwiLCB7XHJcbiAgICAgIHZhbHVlOiBjb25maWcucmVnaW9uLFxyXG4gICAgfSk7XHJcblxyXG4gICAgbmV3IEJ1ZGdldEFsZXJ0KHRoaXMsIFwiTW9udGhseUJ1ZGdldEFsZXJ0XCIsIHtcclxuICAgICAgYnVkZ2V0TGltaXRVc2Q6IGNvbmZpZy5idWRnZXRzLm1vbnRobHlMaW1pdFVzZCxcclxuICAgICAgZW1haWxBZGRyZXNzOiBjb25maWcub3duZXIsXHJcbiAgICB9KTtcclxuXHJcbiAgICBjb25zdCBsb2dnaW5nQnVja2V0ID0gbmV3IExvZ2dpbmdCdWNrZXQodGhpcywgXCJDZW50cmFsTG9nZ2luZ0J1Y2tldFwiKTtcclxuICAgIG5ldyBDbG91ZFRyYWlsQmFzZWxpbmUodGhpcywgXCJDbG91ZFRyYWlsQmFzZWxpbmVcIiwge1xyXG4gICAgICBsb2dnaW5nQnVja2V0OiBsb2dnaW5nQnVja2V0LmJ1Y2tldCxcclxuICAgIH0pO1xyXG5cclxuICAgIG5ldyBDb25maWdCYXNlbGluZSh0aGlzLCBcIkNvbmZpZ0Jhc2VsaW5lXCIsIHtcclxuICAgICAgYWNjb3VudElkOiBjb25maWcuYWNjb3VudElkLFxyXG4gICAgICBsb2dnaW5nQnVja2V0OiBsb2dnaW5nQnVja2V0LmJ1Y2tldCxcclxuICAgIH0pO1xyXG5cclxuICAgIGNvbnN0IHBsYXRmb3JtVnBjID0gbmV3IFBsYXRmb3JtVnBjKHRoaXMsIFwiUGxhdGZvcm1WcGNcIiwge1xyXG4gICAgICBjaWRyOiBjb25maWcubmV0d29ya2luZy5jaWRyLFxyXG4gICAgICBtYXhBenM6IGNvbmZpZy5uZXR3b3JraW5nLm1heEF6cyxcclxuICAgIH0pO1xyXG5cclxuICAgIG5ldyBjZGsuQ2ZuT3V0cHV0KHRoaXMsIFwiVnBjSWRcIiwge1xyXG4gICAgICB2YWx1ZTogcGxhdGZvcm1WcGMudnBjLnZwY0lkLFxyXG4gICAgfSk7XHJcbiAgfVxyXG59XHJcbiJdfQ==