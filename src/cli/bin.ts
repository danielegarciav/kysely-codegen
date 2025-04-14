#!/usr/bin/env node
import { Cli } from './cli.ts';

const args = process.argv.slice(2);

void new Cli().run(args).then(() => process.exit(0));
