# Shipshape

[![CI](https://github.com/ahmedshaban022/ua-ach/actions/workflows/ci.yml/badge.svg)](https://github.com/ahmedshaban022/ua-ach/actions/workflows/ci.yml)
[![Deploy](https://github.com/ahmedshaban022/ua-ach/actions/workflows/deploy-pages.yml/badge.svg)](https://github.com/ahmedshaban022/ua-ach/actions/workflows/deploy-pages.yml)
[![License: MIT](https://img.shields.io/badge/License-MIT-f45d35.svg)](LICENSE)

**[Try the live checklist](https://ahmedshaban022.github.io/ua-ach/)** · [Suggest an improvement](https://github.com/ahmedshaban022/ua-ach/issues/new/choose)

Shipshape is a focused accessibility release checklist for frontend teams. It turns a broad quality goal into 15 practical checks across structure, interaction, content, and resilience.

## Features

- Filterable checklist organized into four audit categories
- Persistent project name and progress using browser storage
- Copy-ready release report with incomplete checks
- Responsive, keyboard-friendly interface with reduced-motion support
- Metadata, generated social preview, and installable web-app manifest
- No account, analytics, backend, or uploaded data
- Automatically tested and deployed to GitHub Pages

## Tech stack

- Next.js App Router
- React and TypeScript
- Modern CSS with no component-library dependency

## Local development

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Quality checks

```bash
npm run lint
npm run typecheck
npm run build
```

## Accessibility note

Shipshape is a practical reminder, not a certification tool. Automated checks and checklists cannot replace testing with assistive technology and disabled users. For the normative requirements, consult the [WCAG 2.2 quick reference](https://www.w3.org/WAI/WCAG22/quickref/).

## Contributing

Useful issues and focused pull requests are welcome. Read [CONTRIBUTING.md](CONTRIBUTING.md) before proposing a change.

Good first contributions include improving checklist wording, adding authoritative references, testing keyboard flows, and reporting confusing interactions. See the [roadmap](docs/ROADMAP.md) for planned work.

## License

[MIT](LICENSE) © Ahmed Shaban
