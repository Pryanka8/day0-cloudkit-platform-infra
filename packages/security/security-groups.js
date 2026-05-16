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
exports.SecurityGroups = void 0;
const ec2 = __importStar(require("aws-cdk-lib/aws-ec2"));
const constructs_1 = require("constructs");
class SecurityGroups extends constructs_1.Construct {
    groups;
    constructor(scope, id, vpc) {
        super(scope, id);
        const appSecurityGroup = new ec2.SecurityGroup(this, "AppSecurityGroup", {
            vpc,
            allowAllOutbound: true,
            description: "Security group for application workloads",
        });
        const databaseSecurityGroup = new ec2.SecurityGroup(this, "DatabaseSecurityGroup", {
            vpc,
            allowAllOutbound: false,
            description: "Security group for databases",
        });
        databaseSecurityGroup.addIngressRule(appSecurityGroup, ec2.Port.tcp(5432), "Allow PostgreSQL access from application workloads");
        this.groups = {
            appSecurityGroup,
            databaseSecurityGroup,
        };
    }
}
exports.SecurityGroups = SecurityGroups;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VjdXJpdHktZ3JvdXBzLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsic2VjdXJpdHktZ3JvdXBzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLHlEQUEyQztBQUUzQywyQ0FBdUM7QUFRdkMsTUFBYSxjQUFlLFNBQVEsc0JBQVM7SUFDM0IsTUFBTSxDQUF5QjtJQUUvQyxZQUFZLEtBQWdCLEVBQUUsRUFBVSxFQUFFLEdBQVk7UUFDcEQsS0FBSyxDQUFDLEtBQUssRUFBRSxFQUFFLENBQUMsQ0FBQztRQUVqQixNQUFNLGdCQUFnQixHQUFHLElBQUksR0FBRyxDQUFDLGFBQWEsQ0FBQyxJQUFJLEVBQUUsa0JBQWtCLEVBQUU7WUFDdkUsR0FBRztZQUVILGdCQUFnQixFQUFFLElBQUk7WUFFdEIsV0FBVyxFQUFFLDBDQUEwQztTQUN4RCxDQUFDLENBQUM7UUFFSCxNQUFNLHFCQUFxQixHQUFHLElBQUksR0FBRyxDQUFDLGFBQWEsQ0FDakQsSUFBSSxFQUNKLHVCQUF1QixFQUN2QjtZQUNFLEdBQUc7WUFFSCxnQkFBZ0IsRUFBRSxLQUFLO1lBRXZCLFdBQVcsRUFBRSw4QkFBOEI7U0FDNUMsQ0FDRixDQUFDO1FBRUYscUJBQXFCLENBQUMsY0FBYyxDQUNsQyxnQkFBZ0IsRUFDaEIsR0FBRyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLEVBQ2xCLG9EQUFvRCxDQUNyRCxDQUFDO1FBRUYsSUFBSSxDQUFDLE1BQU0sR0FBRztZQUNaLGdCQUFnQjtZQUNoQixxQkFBcUI7U0FDdEIsQ0FBQztJQUNKLENBQUM7Q0FDRjtBQXJDRCx3Q0FxQ0MiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgKiBhcyBlYzIgZnJvbSBcImF3cy1jZGstbGliL2F3cy1lYzJcIjtcclxuXHJcbmltcG9ydCB7IENvbnN0cnVjdCB9IGZyb20gXCJjb25zdHJ1Y3RzXCI7XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIFBsYXRmb3JtU2VjdXJpdHlHcm91cHMge1xyXG4gIGFwcFNlY3VyaXR5R3JvdXA6IGVjMi5TZWN1cml0eUdyb3VwO1xyXG5cclxuICBkYXRhYmFzZVNlY3VyaXR5R3JvdXA6IGVjMi5TZWN1cml0eUdyb3VwO1xyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgU2VjdXJpdHlHcm91cHMgZXh0ZW5kcyBDb25zdHJ1Y3Qge1xyXG4gIHB1YmxpYyByZWFkb25seSBncm91cHM6IFBsYXRmb3JtU2VjdXJpdHlHcm91cHM7XHJcblxyXG4gIGNvbnN0cnVjdG9yKHNjb3BlOiBDb25zdHJ1Y3QsIGlkOiBzdHJpbmcsIHZwYzogZWMyLlZwYykge1xyXG4gICAgc3VwZXIoc2NvcGUsIGlkKTtcclxuXHJcbiAgICBjb25zdCBhcHBTZWN1cml0eUdyb3VwID0gbmV3IGVjMi5TZWN1cml0eUdyb3VwKHRoaXMsIFwiQXBwU2VjdXJpdHlHcm91cFwiLCB7XHJcbiAgICAgIHZwYyxcclxuXHJcbiAgICAgIGFsbG93QWxsT3V0Ym91bmQ6IHRydWUsXHJcblxyXG4gICAgICBkZXNjcmlwdGlvbjogXCJTZWN1cml0eSBncm91cCBmb3IgYXBwbGljYXRpb24gd29ya2xvYWRzXCIsXHJcbiAgICB9KTtcclxuXHJcbiAgICBjb25zdCBkYXRhYmFzZVNlY3VyaXR5R3JvdXAgPSBuZXcgZWMyLlNlY3VyaXR5R3JvdXAoXHJcbiAgICAgIHRoaXMsXHJcbiAgICAgIFwiRGF0YWJhc2VTZWN1cml0eUdyb3VwXCIsXHJcbiAgICAgIHtcclxuICAgICAgICB2cGMsXHJcblxyXG4gICAgICAgIGFsbG93QWxsT3V0Ym91bmQ6IGZhbHNlLFxyXG5cclxuICAgICAgICBkZXNjcmlwdGlvbjogXCJTZWN1cml0eSBncm91cCBmb3IgZGF0YWJhc2VzXCIsXHJcbiAgICAgIH0sXHJcbiAgICApO1xyXG5cclxuICAgIGRhdGFiYXNlU2VjdXJpdHlHcm91cC5hZGRJbmdyZXNzUnVsZShcclxuICAgICAgYXBwU2VjdXJpdHlHcm91cCxcclxuICAgICAgZWMyLlBvcnQudGNwKDU0MzIpLFxyXG4gICAgICBcIkFsbG93IFBvc3RncmVTUUwgYWNjZXNzIGZyb20gYXBwbGljYXRpb24gd29ya2xvYWRzXCIsXHJcbiAgICApO1xyXG5cclxuICAgIHRoaXMuZ3JvdXBzID0ge1xyXG4gICAgICBhcHBTZWN1cml0eUdyb3VwLFxyXG4gICAgICBkYXRhYmFzZVNlY3VyaXR5R3JvdXAsXHJcbiAgICB9O1xyXG4gIH1cclxufVxyXG4iXX0=