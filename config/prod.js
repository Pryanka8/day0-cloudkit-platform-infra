"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.config = void 0;
exports.config = {
    environment: "prod",
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInByb2QudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBRWEsUUFBQSxNQUFNLEdBQXNCO0lBQ3ZDLFdBQVcsRUFBRSxNQUFNO0lBQ25CLEtBQUssRUFBRSxPQUFPLEVBQUUsNENBQTRDO0lBQzVELE9BQU8sRUFBRSxjQUFjO0lBQ3ZCLFNBQVMsRUFBRSxNQUFNLEVBQUUsaUJBQWlCO0lBQ3BDLE1BQU0sRUFBRSxNQUFNLEVBQUUsYUFBYTtJQUU3QixVQUFVLEVBQUU7UUFDVixJQUFJLEVBQUUsYUFBYTtRQUNuQixNQUFNLEVBQUUsQ0FBQztLQUNWO0lBRUQsUUFBUSxFQUFFO1FBQ1IsZUFBZSxFQUFFLElBQUk7UUFDckIsWUFBWSxFQUFFLElBQUk7UUFDbEIsZ0JBQWdCLEVBQUUsSUFBSTtLQUN2QjtJQUVELE9BQU8sRUFBRTtRQUNQLGVBQWUsRUFBRSxFQUFFO0tBQ3BCO0NBQ0YsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEVudmlyb25tZW50Q29uZmlnIH0gZnJvbSBcIi4vdHlwZXNcIjtcclxuXHJcbmV4cG9ydCBjb25zdCBjb25maWc6IEVudmlyb25tZW50Q29uZmlnID0ge1xyXG4gIGVudmlyb25tZW50OiBcInByb2RcIixcclxuICBvd25lcjogXCJYWFhYWFwiLCAvLyBvd25lciBlbWFpbCBmb3IgYnVkZ2V0IGFsZXJ0cyBhbmQgdGFnZ2luZ1xyXG4gIHByb2plY3Q6IFwiRGF5MENsb3VkS2l0XCIsXHJcbiAgYWNjb3VudElkOiBcIlhYWFhcIiwgLy8gQVdTIEFjY291bnQgSURcclxuICByZWdpb246IFwiWFhYWFwiLCAvLyBBV1MgUmVnaW9uXHJcblxyXG4gIG5ldHdvcmtpbmc6IHtcclxuICAgIGNpZHI6IFwiMTAuMC4wLjAvMTZcIixcclxuICAgIG1heEF6czogMixcclxuICB9LFxyXG5cclxuICBzZWN1cml0eToge1xyXG4gICAgZW5hYmxlR3VhcmREdXR5OiB0cnVlLFxyXG4gICAgZW5hYmxlQ29uZmlnOiB0cnVlLFxyXG4gICAgZW5hYmxlQ2xvdWRUcmFpbDogdHJ1ZSxcclxuICB9LFxyXG5cclxuICBidWRnZXRzOiB7XHJcbiAgICBtb250aGx5TGltaXRVc2Q6IDUwLFxyXG4gIH0sXHJcbn07XHJcbiJdfQ==