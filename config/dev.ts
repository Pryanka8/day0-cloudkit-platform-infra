import { EnvironmentConfig } from "./types";

export const config: EnvironmentConfig = {
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
