- [React course notes](#react-course-notes)
	- [(1) React](#1-react)
		- [(1.1) Library or framework?](#11-library-or-framework)
		- [(1.2) Build tools](#12-build-tools)
		- [(1.3) Metaframeworks](#13-metaframeworks)
	- [(2) JSX and TSX](#2-jsx-and-tsx)
	- [(3) Virtual DOM](#3-virtual-dom)
	- [(4) React components](#4-react-components)
	- [(5) Common React libraries](#5-common-react-libraries)
		- [(5.1) Routing](#51-routing)
		- [(5.2) Data fetching](#52-data-fetching)
	- [(6) JavaScript and TypeScript](#6-javascript-and-typescript)

---

# React course notes

This repository collects concise reference material for the main concepts and tools used in modern React applications.

- Official documentation:
  - React: <https://react.dev>
  - Vite: <https://vite.dev/guide/>
  - Parcel: <https://parceljs.org/docs/>
  - Rsbuild: <https://rsbuild.dev/guide/start/index>
  - Next.js: <https://nextjs.org/docs>
  - Expo: <https://docs.expo.dev/>
  - JSX: <https://react.dev/learn/writing-markup-with-jsx>
  - Virtual DOM and rendering: <https://react.dev/learn/render-and-commit>
  - React components: <https://react.dev/learn/your-first-component>
  - React Router: <https://reactrouter.com/home>
  - TanStack Router: <https://tanstack.com/router/latest>
  - TanStack Query: <https://tanstack.com/query/latest>
  - SWR: <https://swr.vercel.app/docs/getting-started>
  - RTK Query: <https://redux-toolkit.js.org/rtk-query/overview>
  - JavaScript: <https://developer.mozilla.org/docs/Web/JavaScript>
  - TypeScript: <https://www.typescriptlang.org/docs/>

---

## (1) React

React is a JavaScript library for building user interfaces from small, reusable pieces called components. A component receives data, describes the UI for that data, and React updates the browser efficiently when the data changes.

The official documentation is the best starting point for learning React’s current APIs and recommended patterns: <https://react.dev/learn>.

### (1.1) Library or framework?

React itself is a library: it focuses on rendering UI and managing component state. It deliberately does not prescribe routing, data fetching, project structure, server rendering, or deployment.

A framework combines React with conventions and integrated solutions for those concerns. This trade-off is useful to keep in mind:

| Choice          | Strength                                    | Trade-off                                     |
| --------------- | ------------------------------------------- | --------------------------------------------- |
| React library   | Flexible; choose only the tools needed      | More architectural decisions and integrations |
| React framework | Productive defaults and integrated features | Less freedom to replace its conventions       |

### (1.2) Build tools

Build tools run the development server and transform source code into optimized files that browsers can load.

| Tool    | Description                                                               | Suitable for                                                   |
| ------- | ------------------------------------------------------------------------- | -------------------------------------------------------------- |
| Vite    | Fast development server and build tool with a minimal configuration model | Most new client-side React projects                            |
| Parcel  | Convention-driven bundler that emphasizes zero configuration              | Small projects and quick prototypes                            |
| Rsbuild | Build tool based on Rspack, designed for speed and compatibility          | Projects that need a Webpack-like ecosystem with faster builds |

These tools do not supply application features such as routing or server-side rendering; they prepare and serve the application code.

### (1.3) Metaframeworks

A React metaframework builds on React and adds full-application capabilities such as file-based routing, rendering on the server, static generation, API endpoints, and deployment conventions.

| Metaframework | Primary focus             | Notes                                                                                                        |
| ------------- | ------------------------- | ------------------------------------------------------------------------------------------------------------ |
| Next.js       | Web applications          | Supports server-side rendering (SSR), static generation, React Server Components, and client-side navigation |
| Expo          | React Native applications | Provides tooling and services for Android, iOS, and web from a React Native codebase                         |

SSR renders an initial page on a server before sending HTML to the browser. A single-page application (SPA) generally renders and navigates primarily in the browser after its initial load. Next.js can support both styles, depending on how an application is designed.

---

## (2) JSX and TSX

JSX is syntax that lets JavaScript describe UI with HTML-like elements. It is compiled into JavaScript calls that create React elements; browsers do not execute JSX directly.

TSX is JSX used in TypeScript files. It provides the same UI syntax plus static type checking for props, state, event handlers, and data returned by APIs.

```tsx
type GreetingProps = {
	name: string;
};

export function Greeting({ name }: GreetingProps) {
	return <h1>Hello, {name}</h1>;
}
```

Use curly braces to embed JavaScript expressions. Use `className` instead of HTML’s `class`, and pass event handlers as functions, for example `onClick={handleSave}`.

---

## (3) Virtual DOM

The Virtual DOM is an in-memory representation of the UI that React uses while rendering. When state or props change, React creates a new description of the UI, compares it with the previous one, and commits only the required changes to the browser DOM (physical or real DOM).

This model lets developers write declarative code: describe what the UI should look like for the current state instead of manually finding and mutating DOM nodes. It does not mean every update is automatically cheap; unnecessary renders, expensive calculations, and poorly structured lists can still affect performance.

For list items, provide a stable `key` so React can correctly match an item with its previous rendered version.

---

## (4) React components

Components are JavaScript or TypeScript functions that return React elements. They create a clear UI boundary and can be composed into larger screens.

```tsx
type ProductCardProps = {
	name: string;
	price: number;
};

export function ProductCard({ name, price }: ProductCardProps) {
	return (
		<article>
			<h2>{name}</h2>
			<p>${price}</p>
		</article>
	);
}
```

Good component design keeps each component focused, passes external input through props, and keeps state near the components that need it. Prefer composition—passing children or combining smaller components—over large components with many configuration flags.

---

## (5) Common React libraries

React applications commonly add libraries for cross-page navigation and remote server data. Choose one library per concern unless there is a clear integration reason.

### (5.1) Routing

| Library         | Description                                  | Notable capability                                               |
| --------------- | -------------------------------------------- | ---------------------------------------------------------------- |
| React Router    | Widely used routing library for React        | Nested routes, loaders/actions, and browser navigation           |
| TanStack Router | Type-safe router from the TanStack ecosystem | End-to-end type safety for routes, parameters, and search values |

A router maps a URL to a UI component and enables navigation without a full page reload. Nested routes are useful when a layout, such as an application shell, remains visible while a child page changes.

### (5.2) Data fetching

| Library                      | Description                                                               | Good fit                                                                |
| ---------------------------- | ------------------------------------------------------------------------- | ----------------------------------------------------------------------- |
| TanStack Query (React Query) | Server-state management library with caching and mutation support         | General React applications that consume APIs                            |
| SWR                          | Lightweight data-fetching library based on stale-while-revalidate caching | Simple fetch-and-cache requirements, especially in the Vercel ecosystem |
| RTK Query                    | Data-fetching and caching layer included with Redux Toolkit               | Applications already using Redux Toolkit                                |

Server state is data owned by a remote system, such as API results. These libraries handle caching, loading and error states, background refetching, request deduplication, and invalidating cached data after mutations. They complement local UI state rather than replacing it.

---

## (6) JavaScript and TypeScript

TypeScript is JavaScript with an optional static type system. TypeScript code is checked during development and compiled to JavaScript before it runs in a browser or Node.js.

| Aspect              | JavaScript                                       | TypeScript                                                  |
| ------------------- | ------------------------------------------------ | ----------------------------------------------------------- |
| Type checking       | Primarily at runtime                             | During development and compilation, plus runtime as needed  |
| File extensions     | `.js`, `.jsx`                                    | `.ts`, `.tsx`                                               |
| Learning curve      | Smaller initial surface area                     | Requires types, interfaces, generics, and compiler concepts |
| Refactoring support | Depends mainly on tests and editor inference     | Stronger editor feedback across typed code                  |
| Runtime behavior    | Runs directly                                    | Compiles to JavaScript; types are removed                   |
| Best use            | Scripts, prototypes, and small dynamic codebases | Medium-to-large applications and shared codebases           |

TypeScript does not validate untrusted data at runtime. API responses, form input, and environment variables should still be validated at the application boundary.
