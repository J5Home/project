import { Command } from 'commander';
import { readFileSync } from 'fs';

const packageJson = JSON.parse(
  readFileSync(new URL('../../package.json', import.meta.url))
);

export const program = new Command()
  .name('protocol-scanner')
  .description('Scan text files for protocols and server information')
  .version(packageJson.version)
  .requiredOption('-f, --file <path>', 'Path to the input file')
  .option('-p, --protocols <items>', 'Protocols to scan for (comma-separated)', 'HTTPS,TCP,UDP')
  .option('-t, --timeout <ms>', 'Timeout for each request in milliseconds', '5000')
  .option('-o, --output <format>', 'Output format (text/json)', 'text');