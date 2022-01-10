# Assignment
Home Assignment.

## Summary

Given a list of clicks, create a subset of clicks taking into account a max limit of repetitions and with the max value that belong to the same period of time.

## Getting Started

## Requirements
In order to use ES6 without Babel, we are going to use the Node experimental flags under this version:
* **Node v12.20.2 (lts/erbium)**

### Dependencies
* [Mocha](https://mochajs.org): Popular and simply library for testing JavaScript code.

### Installing

```
npm install
```

### Executing program
Please, make sure again you are using Node v12.20.2 (lts/erbium).

Since the code has been developed under ES6. we can tell node to active its experimental flags in order to use ES6, import json and files without extensions.
```
node --experimental-json-modules --experimental-specifier-resolution=node src/index
```

Here you have the short version using npm scripts:
```
npm run solution
```

### Testing
Same case for testing, we need to activate the node flags:

```
mocha --node-option experimental-specifier-resolution=node '**/tests/*.test.js'
```
This is the short version:
```
npm run test
```

## Folder structure

```javascript
src/
  |-- algorithm/        // Algorithm that meets all requirements
  |-- constants/
  |-- input/
    |--- clicks.json    // Problem file
  |-- output/
    |-- resultset.json  // Solution file
  |- utils/
    |--- counter.js     // Counts elements
    |--- fileSystem.js  // Reads and writes files
  index.js              // Runs the assigment
```

## Author
Fernando Ramos González