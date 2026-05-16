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
exports.applyMandatoryTags = applyMandatoryTags;
const cdk = __importStar(require("aws-cdk-lib"));
function applyMandatoryTags(stack, props) {
    cdk.Tags.of(stack).add("Environment", props.environment);
    cdk.Tags.of(stack).add("Project", props.project);
    cdk.Tags.of(stack).add("Owner", props.owner);
    cdk.Tags.of(stack).add("ManagedBy", "CDK");
    cdk.Tags.of(stack).add("Platform", "Day0CloudKit");
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGFncy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInRhZ3MudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFRQSxnREFVQztBQWxCRCxpREFBbUM7QUFRbkMsU0FBZ0Isa0JBQWtCLENBQUMsS0FBZ0IsRUFBRSxLQUFtQjtJQUN0RSxHQUFHLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUMsQ0FBQyxHQUFHLENBQUMsYUFBYSxFQUFFLEtBQUssQ0FBQyxXQUFXLENBQUMsQ0FBQztJQUV6RCxHQUFHLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUMsQ0FBQyxHQUFHLENBQUMsU0FBUyxFQUFFLEtBQUssQ0FBQyxPQUFPLENBQUMsQ0FBQztJQUVqRCxHQUFHLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUMsQ0FBQyxHQUFHLENBQUMsT0FBTyxFQUFFLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUU3QyxHQUFHLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUMsQ0FBQyxHQUFHLENBQUMsV0FBVyxFQUFFLEtBQUssQ0FBQyxDQUFDO0lBRTNDLEdBQUcsQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQyxDQUFDLEdBQUcsQ0FBQyxVQUFVLEVBQUUsY0FBYyxDQUFDLENBQUM7QUFDckQsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIGNkayBmcm9tIFwiYXdzLWNkay1saWJcIjtcclxuXHJcbmludGVyZmFjZSBUYWdnaW5nUHJvcHMge1xyXG4gIGVudmlyb25tZW50OiBzdHJpbmc7XHJcbiAgcHJvamVjdDogc3RyaW5nO1xyXG4gIG93bmVyOiBzdHJpbmc7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBhcHBseU1hbmRhdG9yeVRhZ3Moc3RhY2s6IGNkay5TdGFjaywgcHJvcHM6IFRhZ2dpbmdQcm9wcykge1xyXG4gIGNkay5UYWdzLm9mKHN0YWNrKS5hZGQoXCJFbnZpcm9ubWVudFwiLCBwcm9wcy5lbnZpcm9ubWVudCk7XHJcblxyXG4gIGNkay5UYWdzLm9mKHN0YWNrKS5hZGQoXCJQcm9qZWN0XCIsIHByb3BzLnByb2plY3QpO1xyXG5cclxuICBjZGsuVGFncy5vZihzdGFjaykuYWRkKFwiT3duZXJcIiwgcHJvcHMub3duZXIpO1xyXG5cclxuICBjZGsuVGFncy5vZihzdGFjaykuYWRkKFwiTWFuYWdlZEJ5XCIsIFwiQ0RLXCIpO1xyXG5cclxuICBjZGsuVGFncy5vZihzdGFjaykuYWRkKFwiUGxhdGZvcm1cIiwgXCJEYXkwQ2xvdWRLaXRcIik7XHJcbn1cclxuIl19