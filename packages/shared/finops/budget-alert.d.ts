import { Construct } from "constructs";
export interface BudgetAlertProps {
    budgetLimitUsd: number;
    emailAddress: string;
}
export declare class BudgetAlert extends Construct {
    constructor(scope: Construct, id: string, props: BudgetAlertProps);
}
