"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.BudgetAlert = void 0;
const budgets = __importStar(require("aws-cdk-lib/aws-budgets"));
const constructs_1 = require("constructs");
class BudgetAlert extends constructs_1.Construct {
    constructor(scope, id, props) {
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
exports.BudgetAlert = BudgetAlert;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVkZ2V0LWFsZXJ0LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiYnVkZ2V0LWFsZXJ0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLGlFQUFtRDtBQUNuRCwyQ0FBdUM7QUFPdkMsTUFBYSxXQUFZLFNBQVEsc0JBQVM7SUFDeEMsWUFBWSxLQUFnQixFQUFFLEVBQVUsRUFBRSxLQUF1QjtRQUMvRCxLQUFLLENBQUMsS0FBSyxFQUFFLEVBQUUsQ0FBQyxDQUFDO1FBRWpCLElBQUksT0FBTyxDQUFDLFNBQVMsQ0FBQyxJQUFJLEVBQUUsZUFBZSxFQUFFO1lBQzNDLE1BQU0sRUFBRTtnQkFDTixVQUFVLEVBQUUsTUFBTTtnQkFDbEIsUUFBUSxFQUFFLFNBQVM7Z0JBRW5CLFdBQVcsRUFBRTtvQkFDWCxNQUFNLEVBQUUsS0FBSyxDQUFDLGNBQWM7b0JBQzVCLElBQUksRUFBRSxLQUFLO2lCQUNaO2FBQ0Y7WUFFRCw0QkFBNEIsRUFBRTtnQkFDNUI7b0JBQ0UsWUFBWSxFQUFFO3dCQUNaLGdCQUFnQixFQUFFLFFBQVE7d0JBQzFCLGtCQUFrQixFQUFFLGNBQWM7d0JBQ2xDLFNBQVMsRUFBRSxFQUFFO3FCQUNkO29CQUVELFdBQVcsRUFBRTt3QkFDWDs0QkFDRSxnQkFBZ0IsRUFBRSxPQUFPOzRCQUN6QixPQUFPLEVBQUUsS0FBSyxDQUFDLFlBQVk7eUJBQzVCO3FCQUNGO2lCQUNGO2FBQ0Y7U0FDRixDQUFDLENBQUM7SUFDTCxDQUFDO0NBQ0Y7QUFqQ0Qsa0NBaUNDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICogYXMgYnVkZ2V0cyBmcm9tIFwiYXdzLWNkay1saWIvYXdzLWJ1ZGdldHNcIjtcclxuaW1wb3J0IHsgQ29uc3RydWN0IH0gZnJvbSBcImNvbnN0cnVjdHNcIjtcclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgQnVkZ2V0QWxlcnRQcm9wcyB7XHJcbiAgYnVkZ2V0TGltaXRVc2Q6IG51bWJlcjtcclxuICBlbWFpbEFkZHJlc3M6IHN0cmluZztcclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIEJ1ZGdldEFsZXJ0IGV4dGVuZHMgQ29uc3RydWN0IHtcclxuICBjb25zdHJ1Y3RvcihzY29wZTogQ29uc3RydWN0LCBpZDogc3RyaW5nLCBwcm9wczogQnVkZ2V0QWxlcnRQcm9wcykge1xyXG4gICAgc3VwZXIoc2NvcGUsIGlkKTtcclxuXHJcbiAgICBuZXcgYnVkZ2V0cy5DZm5CdWRnZXQodGhpcywgXCJNb250aGx5QnVkZ2V0XCIsIHtcclxuICAgICAgYnVkZ2V0OiB7XHJcbiAgICAgICAgYnVkZ2V0VHlwZTogXCJDT1NUXCIsXHJcbiAgICAgICAgdGltZVVuaXQ6IFwiTU9OVEhMWVwiLFxyXG5cclxuICAgICAgICBidWRnZXRMaW1pdDoge1xyXG4gICAgICAgICAgYW1vdW50OiBwcm9wcy5idWRnZXRMaW1pdFVzZCxcclxuICAgICAgICAgIHVuaXQ6IFwiVVNEXCIsXHJcbiAgICAgICAgfSxcclxuICAgICAgfSxcclxuXHJcbiAgICAgIG5vdGlmaWNhdGlvbnNXaXRoU3Vic2NyaWJlcnM6IFtcclxuICAgICAgICB7XHJcbiAgICAgICAgICBub3RpZmljYXRpb246IHtcclxuICAgICAgICAgICAgbm90aWZpY2F0aW9uVHlwZTogXCJBQ1RVQUxcIixcclxuICAgICAgICAgICAgY29tcGFyaXNvbk9wZXJhdG9yOiBcIkdSRUFURVJfVEhBTlwiLFxyXG4gICAgICAgICAgICB0aHJlc2hvbGQ6IDgwLFxyXG4gICAgICAgICAgfSxcclxuXHJcbiAgICAgICAgICBzdWJzY3JpYmVyczogW1xyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgc3Vic2NyaXB0aW9uVHlwZTogXCJFTUFJTFwiLFxyXG4gICAgICAgICAgICAgIGFkZHJlc3M6IHByb3BzLmVtYWlsQWRkcmVzcyxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgIF0sXHJcbiAgICAgICAgfSxcclxuICAgICAgXSxcclxuICAgIH0pO1xyXG4gIH1cclxufVxyXG4iXX0=