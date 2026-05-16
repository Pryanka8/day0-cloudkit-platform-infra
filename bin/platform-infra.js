#!/usr/bin/env node
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
const cdk = __importStar(require("aws-cdk-lib"));
const platform_stack_1 = require("../lib/platform-stack");
const dev_1 = require("../config/dev");
const app = new cdk.App();
new platform_stack_1.PlatformStack(app, "Day0CloudKit-stack", {
    env: {
        account: dev_1.config.accountId,
        region: dev_1.config.region,
    },
    config: dev_1.config,
});
app.synth();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGxhdGZvcm0taW5mcmEuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJwbGF0Zm9ybS1pbmZyYS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFQSxpREFBbUM7QUFFbkMsMERBQXNEO0FBQ3RELHVDQUF1QztBQUV2QyxNQUFNLEdBQUcsR0FBRyxJQUFJLEdBQUcsQ0FBQyxHQUFHLEVBQUUsQ0FBQztBQUUxQixJQUFJLDhCQUFhLENBQUMsR0FBRyxFQUFFLG9CQUFvQixFQUFFO0lBQzNDLEdBQUcsRUFBRTtRQUNILE9BQU8sRUFBRSxZQUFNLENBQUMsU0FBUztRQUN6QixNQUFNLEVBQUUsWUFBTSxDQUFDLE1BQU07S0FDdEI7SUFFRCxNQUFNLEVBQUUsWUFBTTtDQUNmLENBQUMsQ0FBQztBQUVILEdBQUcsQ0FBQyxLQUFLLEVBQUUsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIiMhL3Vzci9iaW4vZW52IG5vZGVcclxuXHJcbmltcG9ydCAqIGFzIGNkayBmcm9tIFwiYXdzLWNkay1saWJcIjtcclxuXHJcbmltcG9ydCB7IFBsYXRmb3JtU3RhY2sgfSBmcm9tIFwiLi4vbGliL3BsYXRmb3JtLXN0YWNrXCI7XHJcbmltcG9ydCB7IGNvbmZpZyB9IGZyb20gXCIuLi9jb25maWcvZGV2XCI7XHJcblxyXG5jb25zdCBhcHAgPSBuZXcgY2RrLkFwcCgpO1xyXG5cclxubmV3IFBsYXRmb3JtU3RhY2soYXBwLCBcIkRheTBDbG91ZEtpdC1zdGFja1wiLCB7XHJcbiAgZW52OiB7XHJcbiAgICBhY2NvdW50OiBjb25maWcuYWNjb3VudElkLFxyXG4gICAgcmVnaW9uOiBjb25maWcucmVnaW9uLFxyXG4gIH0sXHJcblxyXG4gIGNvbmZpZzogY29uZmlnLFxyXG59KTtcclxuXHJcbmFwcC5zeW50aCgpO1xyXG4iXX0=