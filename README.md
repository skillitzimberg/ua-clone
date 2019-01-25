# UaClone

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.6.5.

### Author
Scott Bergler  

## Table of contents
**[Description](#description)**<br>
**[Resources](#resources)**<br>
**[Setup & Installation](#setup-and-installation)**<br>
**[Known Bugs](#known-bugs)**<br>
**[Support](#support-and-contact-details)**<br>
**[Technologies Used](#technologies-used)**<br>
**[License](#license)**<br>
**[Copyright](#copyright)**<br>

## Setup and Installation
These instructions assume you're using Mac OSx.

### Basic Setup
You will need to have these tools installed on your machine. They may already be installed - see the 'Confirm installation' sections below.

### Install Node JS:
This uses Homebrew:  

```
$ brew install node
```
#### Confirm installation:

```
$ node -v
(should return something like: v11.6.0)

$ npm -v
(should return something like: 3.10.5)
```
### Install TypeScript:
This uses Node Package Manager (npm) which was installed in the previous step:
```
$ npm install typescript -g
```
#### Confirm installation:
```
$ tsc -v
(should return something like: Version 2.1.4)
```

### Install Angular:
```
$ npm install -g @angular/cli@1.6.5
```

### Confirm installation:
```
$ ng -v
```
You should get something like this in return:
```
    _                      _                 ____ _     ___
   / \   _ __   __ _ _   _| | __ _ _ __     / ___| |   |_ _|
  / △ \ | '_ \ / _` | | | | |/ _` | '__|   | |   | |    | |
 / ___ \| | | | (_| | |_| | | (_| | |      | |___| |___ | |
/_/   \_\_| |_|\__, |\__,_|_|\__,_|_|       \____|_____|___|
               |___/

Angular CLI: 1.6.5
Node: 8.8.1
OS: darwin x64
Angular:
...
```

### OPTIONAL :: Install the Atom-TypeScript package:

```
$ apm install atom-typescript
```

Fork the repository from [GitHub](https://github.com/skillitzimberg/WhatsUpDoc).  
Clone your forked repository.  

Use your preferred command line/terminal to navigate into the directory:
```
cd ua-clone/
```

Open the project in a text editor like Atom or VS Code.

### Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

### Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

### Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

### Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

### Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

### Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).

## Resources
[PROJECT PLANNING](./PLANNING.md): Outlines planning criteria, use cases, specifications, notes, and errata.

## Known Bugs

## Support and contact details
Scott Bergler :: commandinghands@gmail.com

## Technologies Used
(This wonderful table was lovingly pilfered from [Tanvi Garg](https://github.com/TanviCodeLife) and modestly edited for my own sensibilities.)

For versions and a full list of dependencies, plugins, and scripts see the "devDependencies" section in [package.json](./package.json).  

| Dependency | Description |
| --- | --- |
| babel-core | Babel compiler core |
| babel-loaded | Babel loader for webpack |
| babel-present-es2015 | Specifies how Babel can convert ES6 to ES5 |
| clean-webpack-plugin | Clean your build folder(s) before building |
| css-loader | Interprets `@import` and `url()` like `import/require()` and resolves them |
| dotenv-webpack | imports information like API keys from .env to src/anyfile.js |
| eslint | Identifies and reports on patterns found in Javscript code |
| eslint-loader | ESLint loader for webpack |
| html-webpack-plugin | Simplifies creation of HTML files to serve webpack bundles |
| jasmine | Allows Jasmine specs to be run |
| jasmine-core | JavaScript BDD testing framework |
| karma | Allows the execution of JavaScript code in multiple *real* browsers |
| karma-chrome-launcher | Launcher for Google Chrome, Google Chrome Canary, and Google Chromium |
| karma-cli | Use Karma from the command line |
| karma-jasmine | Plugin - adapter for Jasmine testing framework |
| karma-jasmine-html-reporter | Dynamically shows test results at debug.html page |
| karma-jquery | Plugin - adapter for jQuery framework |
| karma-webpack | Use webpack to preprocess files in Karma |
| style-loader | adds CSS to the DOM by injecting a `<style>` tag |
| uglifyjs-webpack-plugin | Minifies JavaScript |
| webpack | A module bundler used to bundle JavaScript files and additional resources   *Note - Remove carrot sign ^ in version number if webpack issues occur* |
| webpack-cli | Use webpack from command line |
| webpack-dev-server | Provides live reloading during development |
| css-loader and style-loader | renders images in DOM when `<img>` tag is used |

## License
Licensed under the MIT license.

## Copyright
Copyright (c) 2019 ** Scott Bergler **
