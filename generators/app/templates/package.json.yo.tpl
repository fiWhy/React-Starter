{
    "name": "<%= projectName %>",
    "version": "0.1.0",
    "description": "<%= projectDescription %>",
    "main": "index.js",
    "keywords": [],
    "scripts": {
      "prod": "set NODE_ENV=production&& npm run build",
      "dev": "set NODE_ENV=development&& npm run build",
      "start": "npm i && npm run test && npm run serve",
      "build": "npm run webpack && npm run test",
      "test": "jest",
      "serve": "node tasks/webpack-server",
      "webpack": "node tasks/webpack",
      "postinstall": "npm test"
    },
    "author": "<%= devName %>",
    "license": "MIT",
    "dependencies": {
      "extract-text-webpack-plugin": "^3.0.1",
      "react": "^16.0.0",
      "react-dom": "^16.0.0",
      "react-redux": "^4.4.8",
      "react-router": "^4.2.0",
      "react-router-dom": "^4.2.2",
      "redux": "^3.6.0",
      "redux-act-async": "^1.7.0",
      "redux-thunk": "^2.1.0"<% if(styledComponents) { %>,
      "styled-components": "^2.2.1"<% } %>
    },
    "devDependencies": {
      "@types/history": "^4.6.0",
      "@types/jquery": "^2.0.34",
      "@types/node": "^6.0.54",
      "@types/jest": "^21.1.4",
      "@types/react": "^16.0.10",
      "@types/react-dom": "^16.0.1",
      "@types/react-redux": "^5.0.10",
      "@types/react-router": "^4.0.15",
      "@types/react-router-dom": "^4.0.8",
      "@types/redux": "^3.6.31",
      "@types/redux-thunk": "^2.1.32",
      "@types/webpack": "^3.0.13",
      "@types/webpack-dev-server": "^2.9.0",
      "@types/react-test-renderer": "^16.0.0",
      "awesome-typescript-loader": "^3.0.0-beta.17",
      "css-loader": "^0.25.0",
      "file-loader": "^0.9.0",
      "html-loader": "^0.4.4",
      "html-webpack-plugin": "^2.30.1",
      "jsdoc": "^3.4.3",
      "node-sass": "^4.1.1",
      "sass-loader": "^4.0.2",
      "typescript": "^2.5.3",
      "webpack": "^3.6.0",
      "webpack-dev-server": "^2.9.1",
      "webpack-merge": "^0.15.0",
      "ts-jest": "^21.1.3",
      "jest": "^21.2.1",
      "react-test-renderer": "^16.0.0"
    },
    "jest": {
      "transform": {
        "^.+\\.tsx?$": "<rootDir>/node_modules/ts-jest/preprocessor.js"
      },
      "testRegex": "(/__tests__/.*|(\\.|/)(test|spec))\\.(jsx?|tsx?)$",
      "moduleFileExtensions": [
        "ts",
        "tsx",
        "js",
        "jsx",
        "json"
      ],
      "coverageDirectory": "coverage",
      "collectCoverageFrom" : ["**/*.{ts,tsx}", "!**/node_modules/**", "!**/config/**"]
    }
  }
  