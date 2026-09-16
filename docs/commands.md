# Commands

## Simple Command Sequence

```powershell
node --version
npm create vite
npm install # npm i
npm run dev # → vite launch
```

## React + Vite command reference

| Task                               | npm                                                 | pnpm                                       | Notes                                                 |
| ---------------------------------- | --------------------------------------------------- | ------------------------------------------ | ----------------------------------------------------- |
| Create a React project             | `npm create vite@latest my-app -- --template react` | `pnpm create vite my-app --template react` | Use `react-ts` instead of `react` for TypeScript.     |
| Install project dependencies       | `npm install`                                       | `pnpm install`                             | Run from the project directory.                       |
| Start the development server       | `npm run dev`                                       | `pnpm dev`                                 | Vite displays the local URL in the terminal.          |
| Create a production build          | `npm run build`                                     | `pnpm build`                               | Outputs static assets to `dist/` by default.          |
| Preview the production build       | `npm run preview`                                   | `pnpm preview`                             | Serves the local production build for checking.       |
| Run the configured checks          | `npm run lint`                                      | `pnpm lint`                                | Available when the project defines a `lint` script.   |
| Add a runtime dependency           | `npm install <package>`                             | `pnpm add <package>`                       | Example: `react-router-dom`.                          |
| Add a development dependency       | `npm install -D <package>`                          | `pnpm add -D <package>`                    | Example: `typescript` or `vitest`.                    |
| Remove a dependency                | `npm uninstall <package>`                           | `pnpm remove <package>`                    | Removes it from `package.json`.                       |
| Run a package command once         | `npx <command>`                                     | `pnpm dlx <command>`                       | Useful when the tool is not installed in the project. |
| Upgrade dependencies interactively | `npx npm-check-updates -i`                          | `pnpm dlx npm-check-updates -i`            | Review changes before installing the new versions.    |

## Recommended CLI tools

| Tool              | Purpose                                            | npm command                                                       | pnpm command                                                   |
| ----------------- | -------------------------------------------------- | ----------------------------------------------------------------- | -------------------------------------------------------------- |
| ESLint            | Finds code-quality issues.                         | `npm install -D eslint`                                           | `pnpm add -D eslint`                                           |
| Prettier          | Formats source files consistently.                 | `npm install -D prettier`                                         | `pnpm add -D prettier`                                         |
| TypeScript        | Adds static type checking.                         | `npm install -D typescript`                                       | `pnpm add -D typescript`                                       |
| Vitest            | Runs fast unit and component tests with Vite.      | `npm install -D vitest`                                           | `pnpm add -D vitest`                                           |
| Testing Library   | Tests components through user-facing behavior.     | `npm install -D @testing-library/react @testing-library/jest-dom` | `pnpm add -D @testing-library/react @testing-library/jest-dom` |
| Playwright        | Runs end-to-end browser tests.                     | `npm init playwright@latest`                                      | `pnpm create playwright`                                       |
| Storybook         | Develops and documents UI components in isolation. | `npx storybook@latest init`                                       | `pnpm dlx storybook@latest init`                               |
| MSW               | Mocks browser and Node.js network requests.        | `npm install -D msw`                                              | `pnpm add -D msw`                                              |
| npm-check-updates | Identifies available dependency upgrades.          | `npm install -D npm-check-updates`                                | `pnpm add -D npm-check-updates`                                |

> Yes, pnpm works with Vite and React. Enable it through Corepack when needed: `corepack enable`. Commit `pnpm-lock.yaml`, and use only one package manager and lockfile per project.
