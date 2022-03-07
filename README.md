# 1. Install typescript

```
npm install -g typescript
npm install -g ts-node        // run .ts file directly, without compile to .js
npm install -D tslib @types/node

tsc --init                  // create tsconfig.json file
```

# 2. Config prettier for typescript

1. Create .prettierrc file
2. Go to https://prettier.io/playground to custom and copy config to .prettierrc file

# 3. Install jest
```
npm install -D jest ts-jest @types/jest
npx ts-jest config:init     // create jest.config.js file
```
Run jest: Ctrl + P => Jest: Start all runner

# 4. Ts config to compile .js
```
tsc                                   // compile all file to .js
https://www.typescriptlang.org/play   // doc for ts config

"strict": true                        // auto true for all children strict
```