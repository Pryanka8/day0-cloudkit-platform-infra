import * as budgets from "aws-cdk-lib/aws-budgets";
import { Construct } from "constructs";

export interface BudgetAlertProps {
  budgetLimitUsd: number;
  emailAddress: string;
}

export class BudgetAlert extends Construct {
  constructor(scope: Construct, id: string, props: BudgetAlertProps) {
    super(scope, id);

    new budgets.CfnBudget(this, "MonthlyBudget", {
      budget: {
        budgetType: "COST",
        timeUnit: "MONTHLY",

        budgetLimit: {
          amount: props.budgetLimitUsd,
          unit: "USD",
        },
      },

      notificationsWithSubscribers: [
        {
          notification: {
            notificationType: "ACTUAL",
            comparisonOperator: "GREATER_THAN",
            threshold: 80,
          },

          subscribers: [
            {
              subscriptionType: "EMAIL",
              address: props.emailAddress,
            },
          ],
        },
      ],
    });
  }
}
