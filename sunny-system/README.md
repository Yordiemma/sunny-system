# Sunny System Checklist App

This is a React, TypeScript, Vite, and Storybook checklist app built for the
design-system and code-quality assessment.

## What It Includes

- Checklist feature with add, edit, complete, delete, and empty states.
- Primitive and semantic CSS design tokens.
- Reusable design-system components: `Button`, `Input`, `Checkbox`, `Card`,
  and `ListItem`.
- Storybook documentation for the system components and checklist feature.
- ESLint, Prettier, TypeScript build checks, and Vitest unit tests.

## Commands

```sh
npm run dev
npm run storybook
npm run lint
npm run format:check
npm run test
npm run build
```

## Project Structure

- `src/styles/tokens.css` contains primitive and semantic tokens.
- `src/components` contains reusable components and Storybook stories.
- `src/lib/checklist.ts` contains testable checklist state helpers.
- `src/docs/DesignSystem.mdx` documents the design-system approach in
  Storybook.
