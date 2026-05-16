import { EnvironmentConfig } from "./types";

export const config: EnvironmentConfig = {
  environment: "dev",
  owner: "xxxxx", // owner email for budget alerts and tagging
  project: "Day0CloudKit",
  accountId: "XXXXXXXXXXXX", // AWS Account ID
  region: "us-east-1",

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
