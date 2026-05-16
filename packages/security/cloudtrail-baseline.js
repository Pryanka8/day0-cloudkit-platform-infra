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
exports.CloudTrailBaseline = void 0;
const cloudtrail = __importStar(require("aws-cdk-lib/aws-cloudtrail"));
const constructs_1 = require("constructs");
class CloudTrailBaseline extends constructs_1.Construct {
    constructor(scope, id, props) {
        super(scope, id);
        new cloudtrail.Trail(this, "OrganizationTrail", {
            bucket: props.loggingBucket,
            isMultiRegionTrail: true,
            includeGlobalServiceEvents: true,
            managementEvents: cloudtrail.ReadWriteType.ALL,
        });
    }
}
exports.CloudTrailBaseline = CloudTrailBaseline;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2xvdWR0cmFpbC1iYXNlbGluZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImNsb3VkdHJhaWwtYmFzZWxpbmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsdUVBQXlEO0FBR3pELDJDQUF1QztBQU12QyxNQUFhLGtCQUFtQixTQUFRLHNCQUFTO0lBQy9DLFlBQVksS0FBZ0IsRUFBRSxFQUFVLEVBQUUsS0FBOEI7UUFDdEUsS0FBSyxDQUFDLEtBQUssRUFBRSxFQUFFLENBQUMsQ0FBQztRQUVqQixJQUFJLFVBQVUsQ0FBQyxLQUFLLENBQUMsSUFBSSxFQUFFLG1CQUFtQixFQUFFO1lBQzlDLE1BQU0sRUFBRSxLQUFLLENBQUMsYUFBYTtZQUUzQixrQkFBa0IsRUFBRSxJQUFJO1lBRXhCLDBCQUEwQixFQUFFLElBQUk7WUFFaEMsZ0JBQWdCLEVBQUUsVUFBVSxDQUFDLGFBQWEsQ0FBQyxHQUFHO1NBQy9DLENBQUMsQ0FBQztJQUNMLENBQUM7Q0FDRjtBQWRELGdEQWNDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICogYXMgY2xvdWR0cmFpbCBmcm9tIFwiYXdzLWNkay1saWIvYXdzLWNsb3VkdHJhaWxcIjtcclxuaW1wb3J0ICogYXMgczMgZnJvbSBcImF3cy1jZGstbGliL2F3cy1zM1wiO1xyXG5cclxuaW1wb3J0IHsgQ29uc3RydWN0IH0gZnJvbSBcImNvbnN0cnVjdHNcIjtcclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgQ2xvdWRUcmFpbEJhc2VsaW5lUHJvcHMge1xyXG4gIGxvZ2dpbmdCdWNrZXQ6IHMzLkJ1Y2tldDtcclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIENsb3VkVHJhaWxCYXNlbGluZSBleHRlbmRzIENvbnN0cnVjdCB7XHJcbiAgY29uc3RydWN0b3Ioc2NvcGU6IENvbnN0cnVjdCwgaWQ6IHN0cmluZywgcHJvcHM6IENsb3VkVHJhaWxCYXNlbGluZVByb3BzKSB7XHJcbiAgICBzdXBlcihzY29wZSwgaWQpO1xyXG5cclxuICAgIG5ldyBjbG91ZHRyYWlsLlRyYWlsKHRoaXMsIFwiT3JnYW5pemF0aW9uVHJhaWxcIiwge1xyXG4gICAgICBidWNrZXQ6IHByb3BzLmxvZ2dpbmdCdWNrZXQsXHJcblxyXG4gICAgICBpc011bHRpUmVnaW9uVHJhaWw6IHRydWUsXHJcblxyXG4gICAgICBpbmNsdWRlR2xvYmFsU2VydmljZUV2ZW50czogdHJ1ZSxcclxuXHJcbiAgICAgIG1hbmFnZW1lbnRFdmVudHM6IGNsb3VkdHJhaWwuUmVhZFdyaXRlVHlwZS5BTEwsXHJcbiAgICB9KTtcclxuICB9XHJcbn1cclxuIl19