# Shipshape

Shipshape is a focused accessibility release checklist for frontend teams. It turns a broad quality goal into 15 practical checks across structure, interaction, content, and resilience.

## Features

- Filterable checklist organized into four audit categories
- Persistent project name and progress using browser storage
- Copy-ready release report with incomplete checks
- Responsive, keyboard-friendly interface with reduced-motion support
- Metadata, generated social preview, and installable web-app manifest
- No account, analytics, backend, or uploaded data

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

## License

[MIT](LICENSE) © Ahmed Shaban
