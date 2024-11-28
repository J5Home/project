# Bugscanner JS

A Node.js implementation of the bugscanner tool for scanning servers and protocols. This tool is specifically designed to work with Termux and other environments.

## Features

- Protocol scanning (HTTPS, TCP, UDP)
- Server identification (Cloudflare, Cloudfront, Google, etc.)
- JSON output support
- Colorized terminal output
- Progress indicators
- Termux compatible

## Installation

### Termux Installation

1. First, install required packages:
```bash
pkg update && pkg upgrade
pkg install nodejs git
```

2. Clone the repository:
```bash
git clone https://github.com/J5Home/project/bugscanner-js.git
```

3. Enter the directory and install:
```bash
cd bugscanner-js
npm install
npm link
```

### Global Installation (NPM)

```bash
npm install -g bugscanner-js
```

## Usage

Basic usage:
```bash
bugscanner -f hosts.txt
```

Advanced usage:
```bash
bugscanner -f hosts.txt -p HTTPS,TCP -t 5000 -o json
```

### Options

- `-f, --file <path>` - Input file containing hosts (required)
- `-p, --protocols <list>` - Protocols to scan (default: "HTTPS,TCP,UDP")
- `-t, --timeout <ms>` - Timeout in milliseconds (default: 5000)
- `-o, --output <format>` - Output format: text/json (default: "text")

### Input File Format

Create a text file with one host per line:
```
example.com
cloudflare.com
google.com
```

## Example Output

```
Scan Results:

──────────────────────────────────────────────────
Host: cloudflare.com
Server Type: cloudflare
server: cloudflare

Protocols:
HTTPS: ✓ Supported
  Status: 200
TCP: ✓ Supported
UDP: - Unknown

──────────────────────────────────────────────────
```

## License

MIT License

## Credits

Inspired by [aztecrabbit's bugscanner](https://github.com/aztecrabbit/bugscanner)
