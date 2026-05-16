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
exports.LoggingBucket = void 0;
const s3 = __importStar(require("aws-cdk-lib/aws-s3"));
const cdk = __importStar(require("aws-cdk-lib"));
const iam = __importStar(require("aws-cdk-lib/aws-iam"));
const constructs_1 = require("constructs");
class LoggingBucket extends constructs_1.Construct {
    bucket;
    constructor(scope, id) {
        super(scope, id);
        this.bucket = new s3.Bucket(this, "AuditLogsBucket", {
            encryption: s3.BucketEncryption.S3_MANAGED,
            versioned: true,
            enforceSSL: true,
            blockPublicAccess: s3.BlockPublicAccess.BLOCK_ALL,
            lifecycleRules: [
                {
                    enabled: true,
                    expiration: cdk.Duration.days(365),
                    noncurrentVersionExpiration: cdk.Duration.days(90),
                },
            ],
            removalPolicy: cdk.RemovalPolicy.RETAIN,
        });
        this.bucket.addToResourcePolicy(new iam.PolicyStatement({
            principals: [new iam.ServicePrincipal("config.amazonaws.com")],
            actions: ["s3:GetBucketAcl", "s3:PutObject"],
            resources: [this.bucket.bucketArn, `${this.bucket.bucketArn}/*`],
            conditions: {
                StringEquals: {
                    "s3:x-amz-acl": "bucket-owner-full-control",
                },
            },
        }));
    }
}
exports.LoggingBucket = LoggingBucket;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9nZ2luZy1idWNrZXQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJsb2dnaW5nLWJ1Y2tldC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSx1REFBeUM7QUFDekMsaURBQW1DO0FBQ25DLHlEQUEyQztBQUMzQywyQ0FBdUM7QUFFdkMsTUFBYSxhQUFjLFNBQVEsc0JBQVM7SUFDMUIsTUFBTSxDQUFZO0lBRWxDLFlBQVksS0FBZ0IsRUFBRSxFQUFVO1FBQ3RDLEtBQUssQ0FBQyxLQUFLLEVBQUUsRUFBRSxDQUFDLENBQUM7UUFFakIsSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLEVBQUUsQ0FBQyxNQUFNLENBQUMsSUFBSSxFQUFFLGlCQUFpQixFQUFFO1lBQ25ELFVBQVUsRUFBRSxFQUFFLENBQUMsZ0JBQWdCLENBQUMsVUFBVTtZQUUxQyxTQUFTLEVBQUUsSUFBSTtZQUVmLFVBQVUsRUFBRSxJQUFJO1lBRWhCLGlCQUFpQixFQUFFLEVBQUUsQ0FBQyxpQkFBaUIsQ0FBQyxTQUFTO1lBRWpELGNBQWMsRUFBRTtnQkFDZDtvQkFDRSxPQUFPLEVBQUUsSUFBSTtvQkFFYixVQUFVLEVBQUUsR0FBRyxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDO29CQUVsQywyQkFBMkIsRUFBRSxHQUFHLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUM7aUJBQ25EO2FBQ0Y7WUFFRCxhQUFhLEVBQUUsR0FBRyxDQUFDLGFBQWEsQ0FBQyxNQUFNO1NBQ3hDLENBQUMsQ0FBQztRQUNILElBQUksQ0FBQyxNQUFNLENBQUMsbUJBQW1CLENBQzdCLElBQUksR0FBRyxDQUFDLGVBQWUsQ0FBQztZQUN0QixVQUFVLEVBQUUsQ0FBQyxJQUFJLEdBQUcsQ0FBQyxnQkFBZ0IsQ0FBQyxzQkFBc0IsQ0FBQyxDQUFDO1lBRTlELE9BQU8sRUFBRSxDQUFDLGlCQUFpQixFQUFFLGNBQWMsQ0FBQztZQUU1QyxTQUFTLEVBQUUsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLFNBQVMsRUFBRSxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsU0FBUyxJQUFJLENBQUM7WUFFaEUsVUFBVSxFQUFFO2dCQUNWLFlBQVksRUFBRTtvQkFDWixjQUFjLEVBQUUsMkJBQTJCO2lCQUM1QzthQUNGO1NBQ0YsQ0FBQyxDQUNILENBQUM7SUFDSixDQUFDO0NBQ0Y7QUEzQ0Qsc0NBMkNDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICogYXMgczMgZnJvbSBcImF3cy1jZGstbGliL2F3cy1zM1wiO1xyXG5pbXBvcnQgKiBhcyBjZGsgZnJvbSBcImF3cy1jZGstbGliXCI7XHJcbmltcG9ydCAqIGFzIGlhbSBmcm9tIFwiYXdzLWNkay1saWIvYXdzLWlhbVwiO1xyXG5pbXBvcnQgeyBDb25zdHJ1Y3QgfSBmcm9tIFwiY29uc3RydWN0c1wiO1xyXG5cclxuZXhwb3J0IGNsYXNzIExvZ2dpbmdCdWNrZXQgZXh0ZW5kcyBDb25zdHJ1Y3Qge1xyXG4gIHB1YmxpYyByZWFkb25seSBidWNrZXQ6IHMzLkJ1Y2tldDtcclxuXHJcbiAgY29uc3RydWN0b3Ioc2NvcGU6IENvbnN0cnVjdCwgaWQ6IHN0cmluZykge1xyXG4gICAgc3VwZXIoc2NvcGUsIGlkKTtcclxuXHJcbiAgICB0aGlzLmJ1Y2tldCA9IG5ldyBzMy5CdWNrZXQodGhpcywgXCJBdWRpdExvZ3NCdWNrZXRcIiwge1xyXG4gICAgICBlbmNyeXB0aW9uOiBzMy5CdWNrZXRFbmNyeXB0aW9uLlMzX01BTkFHRUQsXHJcblxyXG4gICAgICB2ZXJzaW9uZWQ6IHRydWUsXHJcblxyXG4gICAgICBlbmZvcmNlU1NMOiB0cnVlLFxyXG5cclxuICAgICAgYmxvY2tQdWJsaWNBY2Nlc3M6IHMzLkJsb2NrUHVibGljQWNjZXNzLkJMT0NLX0FMTCxcclxuXHJcbiAgICAgIGxpZmVjeWNsZVJ1bGVzOiBbXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgZW5hYmxlZDogdHJ1ZSxcclxuXHJcbiAgICAgICAgICBleHBpcmF0aW9uOiBjZGsuRHVyYXRpb24uZGF5cygzNjUpLFxyXG5cclxuICAgICAgICAgIG5vbmN1cnJlbnRWZXJzaW9uRXhwaXJhdGlvbjogY2RrLkR1cmF0aW9uLmRheXMoOTApLFxyXG4gICAgICAgIH0sXHJcbiAgICAgIF0sXHJcblxyXG4gICAgICByZW1vdmFsUG9saWN5OiBjZGsuUmVtb3ZhbFBvbGljeS5SRVRBSU4sXHJcbiAgICB9KTtcclxuICAgIHRoaXMuYnVja2V0LmFkZFRvUmVzb3VyY2VQb2xpY3koXHJcbiAgICAgIG5ldyBpYW0uUG9saWN5U3RhdGVtZW50KHtcclxuICAgICAgICBwcmluY2lwYWxzOiBbbmV3IGlhbS5TZXJ2aWNlUHJpbmNpcGFsKFwiY29uZmlnLmFtYXpvbmF3cy5jb21cIildLFxyXG5cclxuICAgICAgICBhY3Rpb25zOiBbXCJzMzpHZXRCdWNrZXRBY2xcIiwgXCJzMzpQdXRPYmplY3RcIl0sXHJcblxyXG4gICAgICAgIHJlc291cmNlczogW3RoaXMuYnVja2V0LmJ1Y2tldEFybiwgYCR7dGhpcy5idWNrZXQuYnVja2V0QXJufS8qYF0sXHJcblxyXG4gICAgICAgIGNvbmRpdGlvbnM6IHtcclxuICAgICAgICAgIFN0cmluZ0VxdWFsczoge1xyXG4gICAgICAgICAgICBcInMzOngtYW16LWFjbFwiOiBcImJ1Y2tldC1vd25lci1mdWxsLWNvbnRyb2xcIixcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgfSxcclxuICAgICAgfSksXHJcbiAgICApO1xyXG4gIH1cclxufVxyXG4iXX0=