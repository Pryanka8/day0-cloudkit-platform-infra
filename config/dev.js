"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.config = void 0;
exports.config = {
    environment: "dev",
    owner: "XXXXX", // owner email for budget alerts and tagging
    project: "Day0CloudKit",
    accountId: "XXXX", // AWS Account ID
    region: "XXXX", // AWS Region
    networking: {
        cidr: "10.0.0.0/16",
        maxAzs: 2,
    },
    security: {
        enableGuardDuty: true,
        enableConfig: true,
        enableCloudTrail: true,
    },
    budgets: {
        monthlyLimitUsd: 50,
    },
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGV2LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiZGV2LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUVhLFFBQUEsTUFBTSxHQUFzQjtJQUN2QyxXQUFXLEVBQUUsS0FBSztJQUNsQixLQUFLLEVBQUUsT0FBTyxFQUFFLDRDQUE0QztJQUM1RCxPQUFPLEVBQUUsY0FBYztJQUN2QixTQUFTLEVBQUUsTUFBTSxFQUFFLGlCQUFpQjtJQUNwQyxNQUFNLEVBQUUsTUFBTSxFQUFFLGFBQWE7SUFFN0IsVUFBVSxFQUFFO1FBQ1YsSUFBSSxFQUFFLGFBQWE7UUFDbkIsTUFBTSxFQUFFLENBQUM7S0FDVjtJQUVELFFBQVEsRUFBRTtRQUNSLGVBQWUsRUFBRSxJQUFJO1FBQ3JCLFlBQVksRUFBRSxJQUFJO1FBQ2xCLGdCQUFnQixFQUFFLElBQUk7S0FDdkI7SUFFRCxPQUFPLEVBQUU7UUFDUCxlQUFlLEVBQUUsRUFBRTtLQUNwQjtDQUNGLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBFbnZpcm9ubWVudENvbmZpZyB9IGZyb20gXCIuL3R5cGVzXCI7XHJcblxyXG5leHBvcnQgY29uc3QgY29uZmlnOiBFbnZpcm9ubWVudENvbmZpZyA9IHtcclxuICBlbnZpcm9ubWVudDogXCJkZXZcIixcclxuICBvd25lcjogXCJYWFhYWFwiLCAvLyBvd25lciBlbWFpbCBmb3IgYnVkZ2V0IGFsZXJ0cyBhbmQgdGFnZ2luZ1xyXG4gIHByb2plY3Q6IFwiRGF5MENsb3VkS2l0XCIsXHJcbiAgYWNjb3VudElkOiBcIlhYWFhcIiwgLy8gQVdTIEFjY291bnQgSURcclxuICByZWdpb246IFwiWFhYWFwiLCAvLyBBV1MgUmVnaW9uXHJcblxyXG4gIG5ldHdvcmtpbmc6IHtcclxuICAgIGNpZHI6IFwiMTAuMC4wLjAvMTZcIixcclxuICAgIG1heEF6czogMixcclxuICB9LFxyXG5cclxuICBzZWN1cml0eToge1xyXG4gICAgZW5hYmxlR3VhcmREdXR5OiB0cnVlLFxyXG4gICAgZW5hYmxlQ29uZmlnOiB0cnVlLFxyXG4gICAgZW5hYmxlQ2xvdWRUcmFpbDogdHJ1ZSxcclxuICB9LFxyXG5cclxuICBidWRnZXRzOiB7XHJcbiAgICBtb250aGx5TGltaXRVc2Q6IDUwLFxyXG4gIH0sXHJcbn07XHJcbiJdfQ==