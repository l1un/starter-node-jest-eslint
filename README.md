# starter-node-jest-eslint

![example](./starter-node-jest-eslint.gif)

## info

Minimal starter for Node.js. Configured with Jest, ESLint and Nodemon:
Clone. Run. Test. Build.

- `index.js` "Hello World"
- `src/utils/lLog.js` module example
- `__tests__/lLog.test.js` tests example
- `nodemon` in case it's not installed globally
- `.eslintrc.js` setup for Airbnb, Jest, import
- `jsconfig.json` Coc, Syntastic, VSCode suggest/auto-complete
- `@types/jest` Coc, ALE, YCM, VSCode suggest/lint/auto-complete

### install

```sh
git clone https://github.com/11un/starter-node-jest-eslint.git <dir>
cd <dir>
npm install
```

### run

`npm start`

### test

```sh
npm test
npm test -- --watchAll
npm test -- --coverage
```
