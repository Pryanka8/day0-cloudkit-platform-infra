#!/usr/bin/env node

import * as cdk from "aws-cdk-lib";

import { PlatformStack } from "../lib/platform-stack";
import { config } from "../config/dev";

const app = new cdk.App();

new PlatformStack(app, "Day0CloudKit-stack", {
  env: {
    account: config.accountId,
    region: config.region,
  },

  config: config,
});

app.synth();
