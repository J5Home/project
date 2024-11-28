import { readFileSync } from 'fs';
import { scanFile } from '../scanner/scanner.js';
import { displayResults } from '../display/display.js';
import { outputJson } from '../display/json-output.js';

export async function runScanner(options) {
  try {
    const content = readFileSync(options.file, 'utf8');
    const protocols = options.protocols.split(',');
    const timeout = parseInt(options.timeout);

    const results = await scanFile(content, protocols, timeout);
    
    if (options.output === 'json') {
      outputJson(results);
    } else {
      displayResults(results);
    }
  } catch (error) {
    console.error('Error:', error.message);
    process.exit(1);
  }
}