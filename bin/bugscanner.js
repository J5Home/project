#!/usr/bin/env node

import { program } from '../src/cli/program.js';
import { runScanner } from '../src/cli/runner.js';
import { displayBanner } from '../src/display/banner.js';

// Display banner
displayBanner();

// Handle errors gracefully
process.on('uncaughtException', (error) => {
  console.error('Error:', error.message);
  process.exit(1);
});

process.on('unhandledRejection', (error) => {
  console.error('Error:', error.message);
  process.exit(1);
});

// Run the program
program.parse();
const options = program.opts();

if (!options.file) {
  program.help();
} else {
  runScanner(options);
}