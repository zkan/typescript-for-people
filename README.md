# Typescript for People

- Use Node version 6 up (to check, run `node -v`).
- Run `npm install` to install packages listed in `package.json`.
- Check if Typescript is installed correctly, run `./node_modules/.bin/tsc -v` or `npm run compile -v`.
- To compile a test script, run `./node_modules/.bin/tsc __tests__/basic-syntax-test.ts` or `npm run compile __tests__/basic-syntax-test.ts`.
- To run tests, run `npm run test`.
- To compile and run tests, run `npm run compile __tests__/basic-syntax-test.ts && npm run test`.
- Run `./node_modules/.bin/tsc --init` to generate `tsconfig.json`.
- To install a lite HTTP server, run `npm install --save-dev lite-server`.
- To run the server, run `./node_modules/.bin/lite-server`.
- To install Webapck, run `npm install --save-dev webpack`.
- To bundle a JS file, run `./node_modules/.bin/webpack src/captcha.js src/captcha.bundle.js`.

## Readings

- [Why TypeScript](https://basarat.gitbooks.io/typescript/content/docs/why-typescript.html)
