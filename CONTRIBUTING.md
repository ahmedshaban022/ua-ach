# Contributing to Shipshape

Thanks for helping make Shipshape more useful.

## Ways to contribute

- Report a reproducible accessibility or usability issue.
- Improve checklist wording and include an authoritative reference.
- Test the experience with a keyboard, screen reader, or zoomed layout.
- Propose one of the ideas in the [roadmap](docs/ROADMAP.md).

Use the repository issue templates when possible. Questions and small wording fixes can go directly into a focused pull request.

## Before opening a pull request

1. Open an issue for large changes so the approach can be discussed first.
2. Keep each pull request focused on one improvement.
3. Run `npm run lint`, `npm run typecheck`, and `npm run build`.
4. Test the changed flow with a keyboard and at a narrow viewport.
5. Explain the user-facing impact in the pull request description.

## Development workflow

```bash
npm install
npm run dev
```

Create a branch, make the smallest useful change, and confirm the quality checks before opening a pull request.

Checklist wording should be practical, concise, and grounded in WCAG guidance. Shipshape is a release aid, not a substitute for testing with disabled users.

