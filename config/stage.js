"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.config = void 0;
exports.config = {
    environment: "stage",
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhZ2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJzdGFnZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFFYSxRQUFBLE1BQU0sR0FBc0I7SUFDdkMsV0FBVyxFQUFFLE9BQU87SUFDcEIsS0FBSyxFQUFFLE9BQU8sRUFBRSw0Q0FBNEM7SUFDNUQsT0FBTyxFQUFFLGNBQWM7SUFDdkIsU0FBUyxFQUFFLE1BQU0sRUFBRSxpQkFBaUI7SUFDcEMsTUFBTSxFQUFFLE1BQU0sRUFBRSxhQUFhO0lBRTdCLFVBQVUsRUFBRTtRQUNWLElBQUksRUFBRSxhQUFhO1FBQ25CLE1BQU0sRUFBRSxDQUFDO0tBQ1Y7SUFFRCxRQUFRLEVBQUU7UUFDUixlQUFlLEVBQUUsSUFBSTtRQUNyQixZQUFZLEVBQUUsSUFBSTtRQUNsQixnQkFBZ0IsRUFBRSxJQUFJO0tBQ3ZCO0lBRUQsT0FBTyxFQUFFO1FBQ1AsZUFBZSxFQUFFLEVBQUU7S0FDcEI7Q0FDRixDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRW52aXJvbm1lbnRDb25maWcgfSBmcm9tIFwiLi90eXBlc1wiO1xyXG5cclxuZXhwb3J0IGNvbnN0IGNvbmZpZzogRW52aXJvbm1lbnRDb25maWcgPSB7XHJcbiAgZW52aXJvbm1lbnQ6IFwic3RhZ2VcIixcclxuICBvd25lcjogXCJYWFhYWFwiLCAvLyBvd25lciBlbWFpbCBmb3IgYnVkZ2V0IGFsZXJ0cyBhbmQgdGFnZ2luZ1xyXG4gIHByb2plY3Q6IFwiRGF5MENsb3VkS2l0XCIsXHJcbiAgYWNjb3VudElkOiBcIlhYWFhcIiwgLy8gQVdTIEFjY291bnQgSURcclxuICByZWdpb246IFwiWFhYWFwiLCAvLyBBV1MgUmVnaW9uXHJcblxyXG4gIG5ldHdvcmtpbmc6IHtcclxuICAgIGNpZHI6IFwiMTAuMC4wLjAvMTZcIixcclxuICAgIG1heEF6czogMixcclxuICB9LFxyXG5cclxuICBzZWN1cml0eToge1xyXG4gICAgZW5hYmxlR3VhcmREdXR5OiB0cnVlLFxyXG4gICAgZW5hYmxlQ29uZmlnOiB0cnVlLFxyXG4gICAgZW5hYmxlQ2xvdWRUcmFpbDogdHJ1ZSxcclxuICB9LFxyXG5cclxuICBidWRnZXRzOiB7XHJcbiAgICBtb250aGx5TGltaXRVc2Q6IDUwLFxyXG4gIH0sXHJcbn07XHJcbiJdfQ==