#!/usr/bin/env node
import 'source-map-support/register';
import * as cdk from '@aws-cdk/core';
import { EksPipelineStack } from '../lib/eks-pipeline-stack';

const app = new cdk.App();
new EksPipelineStack(app, 'EksPipelineStack', {
  env: { account: process.env.CDK_DEFAULT_ACCOUNT, region: "us-east-2" },
});

app.synth()
