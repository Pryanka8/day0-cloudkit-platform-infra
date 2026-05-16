import * as cdk from "aws-cdk-lib";

interface TaggingProps {
  environment: string;
  project: string;
  owner: string;
}

export function applyMandatoryTags(stack: cdk.Stack, props: TaggingProps) {
  cdk.Tags.of(stack).add("Environment", props.environment);

  cdk.Tags.of(stack).add("Project", props.project);

  cdk.Tags.of(stack).add("Owner", props.owner);

  cdk.Tags.of(stack).add("ManagedBy", "CDK");

  cdk.Tags.of(stack).add("Platform", "Day0CloudKit");
}
