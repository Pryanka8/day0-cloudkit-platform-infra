export interface EnvironmentConfig {
  owner: string;
  project: string;
  environment: string;
  accountId: string;
  region: string;

  networking: {
    cidr: string;
    maxAzs: number;
  };

  security: {
    enableGuardDuty: boolean;
    enableConfig: boolean;
    enableCloudTrail: boolean;
  };

  budgets: {
    monthlyLimitUsd: number;
  };
}
