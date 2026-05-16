import * as cdk from "aws-cdk-lib";
interface TaggingProps {
    environment: string;
    project: string;
    owner: string;
}
export declare function applyMandatoryTags(stack: cdk.Stack, props: TaggingProps): void;
export {};
