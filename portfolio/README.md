# Portfolio

## Environment setup

Create a local `.env` from `.env.example`:

- `VITE_EMAIL_SERVICE`
- `VITE_EMAIL_TEMPLATE`
- `VITE_EMAIL_PUBLIC`

Do not commit real credentials.

## Security checks before push

```bash
npm run security:check
npm run lint
npm run build
```

`security:check` blocks commits when:

- `.env` and other sensitive key files are staged
- likely secret patterns are found in staged files

## Development

```bash
npm install
npm run dev
```

## Production build

```bash
npm run build
npm run preview
```
