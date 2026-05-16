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
exports.ConfigBaseline = void 0;
const config = __importStar(require("aws-cdk-lib/aws-config"));
const iam = __importStar(require("aws-cdk-lib/aws-iam"));
const constructs_1 = require("constructs");
class ConfigBaseline extends constructs_1.Construct {
    constructor(scope, id, props) {
        super(scope, id);
        const role = new iam.Role(this, "ConfigRole", {
            assumedBy: new iam.ServicePrincipal("config.amazonaws.com"),
        });
        role.addManagedPolicy(iam.ManagedPolicy.fromAwsManagedPolicyName("service-role/AWS_ConfigRole"));
        new config.CfnConfigurationRecorder(this, "ConfigurationRecorder", {
            roleArn: role.roleArn,
            recordingGroup: {
                allSupported: true,
                includeGlobalResourceTypes: true,
            },
        });
        new config.CfnDeliveryChannel(this, "DeliveryChannel", {
            s3BucketName: props.loggingBucket.bucketName,
        });
    }
}
exports.ConfigBaseline = ConfigBaseline;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29uZmlnLWJhc2VsaW5lLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiY29uZmlnLWJhc2VsaW5lLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLCtEQUFpRDtBQUNqRCx5REFBMkM7QUFFM0MsMkNBQXVDO0FBS3ZDLE1BQWEsY0FBZSxTQUFRLHNCQUFTO0lBQzNDLFlBQVksS0FBZ0IsRUFBRSxFQUFVLEVBQUUsS0FBMEI7UUFDbEUsS0FBSyxDQUFDLEtBQUssRUFBRSxFQUFFLENBQUMsQ0FBQztRQUVqQixNQUFNLElBQUksR0FBRyxJQUFJLEdBQUcsQ0FBQyxJQUFJLENBQUMsSUFBSSxFQUFFLFlBQVksRUFBRTtZQUM1QyxTQUFTLEVBQUUsSUFBSSxHQUFHLENBQUMsZ0JBQWdCLENBQUMsc0JBQXNCLENBQUM7U0FDNUQsQ0FBQyxDQUFDO1FBRUgsSUFBSSxDQUFDLGdCQUFnQixDQUNuQixHQUFHLENBQUMsYUFBYSxDQUFDLHdCQUF3QixDQUFDLDZCQUE2QixDQUFDLENBQzFFLENBQUM7UUFFRixJQUFJLE1BQU0sQ0FBQyx3QkFBd0IsQ0FBQyxJQUFJLEVBQUUsdUJBQXVCLEVBQUU7WUFDakUsT0FBTyxFQUFFLElBQUksQ0FBQyxPQUFPO1lBRXJCLGNBQWMsRUFBRTtnQkFDZCxZQUFZLEVBQUUsSUFBSTtnQkFDbEIsMEJBQTBCLEVBQUUsSUFBSTthQUNqQztTQUNGLENBQUMsQ0FBQztRQUVILElBQUksTUFBTSxDQUFDLGtCQUFrQixDQUFDLElBQUksRUFBRSxpQkFBaUIsRUFBRTtZQUNyRCxZQUFZLEVBQUUsS0FBSyxDQUFDLGFBQWEsQ0FBQyxVQUFVO1NBQzdDLENBQUMsQ0FBQztJQUNMLENBQUM7Q0FDRjtBQXpCRCx3Q0F5QkMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgKiBhcyBjb25maWcgZnJvbSBcImF3cy1jZGstbGliL2F3cy1jb25maWdcIjtcclxuaW1wb3J0ICogYXMgaWFtIGZyb20gXCJhd3MtY2RrLWxpYi9hd3MtaWFtXCI7XHJcbmltcG9ydCAqIGFzIHMzIGZyb20gXCJhd3MtY2RrLWxpYi9hd3MtczNcIjtcclxuaW1wb3J0IHsgQ29uc3RydWN0IH0gZnJvbSBcImNvbnN0cnVjdHNcIjtcclxuZXhwb3J0IGludGVyZmFjZSBDb25maWdCYXNlbGluZVByb3BzIHtcclxuICBhY2NvdW50SWQ6IHN0cmluZztcclxuICBsb2dnaW5nQnVja2V0OiBzMy5JQnVja2V0O1xyXG59XHJcbmV4cG9ydCBjbGFzcyBDb25maWdCYXNlbGluZSBleHRlbmRzIENvbnN0cnVjdCB7XHJcbiAgY29uc3RydWN0b3Ioc2NvcGU6IENvbnN0cnVjdCwgaWQ6IHN0cmluZywgcHJvcHM6IENvbmZpZ0Jhc2VsaW5lUHJvcHMpIHtcclxuICAgIHN1cGVyKHNjb3BlLCBpZCk7XHJcblxyXG4gICAgY29uc3Qgcm9sZSA9IG5ldyBpYW0uUm9sZSh0aGlzLCBcIkNvbmZpZ1JvbGVcIiwge1xyXG4gICAgICBhc3N1bWVkQnk6IG5ldyBpYW0uU2VydmljZVByaW5jaXBhbChcImNvbmZpZy5hbWF6b25hd3MuY29tXCIpLFxyXG4gICAgfSk7XHJcblxyXG4gICAgcm9sZS5hZGRNYW5hZ2VkUG9saWN5KFxyXG4gICAgICBpYW0uTWFuYWdlZFBvbGljeS5mcm9tQXdzTWFuYWdlZFBvbGljeU5hbWUoXCJzZXJ2aWNlLXJvbGUvQVdTX0NvbmZpZ1JvbGVcIiksXHJcbiAgICApO1xyXG5cclxuICAgIG5ldyBjb25maWcuQ2ZuQ29uZmlndXJhdGlvblJlY29yZGVyKHRoaXMsIFwiQ29uZmlndXJhdGlvblJlY29yZGVyXCIsIHtcclxuICAgICAgcm9sZUFybjogcm9sZS5yb2xlQXJuLFxyXG5cclxuICAgICAgcmVjb3JkaW5nR3JvdXA6IHtcclxuICAgICAgICBhbGxTdXBwb3J0ZWQ6IHRydWUsXHJcbiAgICAgICAgaW5jbHVkZUdsb2JhbFJlc291cmNlVHlwZXM6IHRydWUsXHJcbiAgICAgIH0sXHJcbiAgICB9KTtcclxuXHJcbiAgICBuZXcgY29uZmlnLkNmbkRlbGl2ZXJ5Q2hhbm5lbCh0aGlzLCBcIkRlbGl2ZXJ5Q2hhbm5lbFwiLCB7XHJcbiAgICAgIHMzQnVja2V0TmFtZTogcHJvcHMubG9nZ2luZ0J1Y2tldC5idWNrZXROYW1lLFxyXG4gICAgfSk7XHJcbiAgfVxyXG59XHJcbiJdfQ==