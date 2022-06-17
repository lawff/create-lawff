# create-lawlietff

## template with vite

> **Compatibility Note:**
> Vite requires [Node.js](https://nodejs.org/en/) version >=14.6.0. However, some templates require a higher Node.js version to work, please upgrade if your package manager warns about it.

With NPM:

```bash
$ npm create lawlietff@latest
```

With Yarn:

```bash
$ yarn create lawlietff
```

With PNPM:

```bash
$ pnpm create lawlietff
```

Then follow the prompts!

You can also directly specify the project name and the template you want to use via additional command line options. For example, to scaffold a Vite + React project, run:

```bash
# npm 6.x
npm create lawlietff@latest my-react-app --template vite-react

# npm 7+, extra double-dash is needed:
npm create lawlietff@latest my-react-app -- --template vite-react

# yarn
yarn create lawlietff my-react-app --template vite-react

# pnpm
pnpm create lawlietff my-react-app -- --template vite-react
```

Currently supported template presets include:

- `react`
- `ts-starter`

You can use `.` for the project name to scaffold in the current directory.

## Thanks

[vite-create](https://github.com/vitejs/vite/tree/main/packages/create-vite) 
[vitesse](https://github.com/antfu/vitesse)

## License

[MIT](./LICENSE) License © 2022 lawliet

