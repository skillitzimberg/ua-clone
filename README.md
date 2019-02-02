# UaClone
This project is an attempt to 'clone' the [Under Armour website](https://www.underarmour.com/en-us/).

You can see the current state of my project deployed [here](https://ua-clone.firebaseapp.com).

### Author
Scott Bergler  

## Table of contents
**[Resources](#resources)**<br>
**[Setup & Installation](#setup-and-installation)**<br>
**[Known Bugs](#known-bugs)**<br>
**[Acknowledgements](#acknowledgements)**<br>
**[Support](#support)**<br>
**[Technologies Used](#technologies-used)**<br>
**[License](#license)**<br>
**[Copyright](#copyright)**<br>

## Resources

The initial project directories and files were generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.6.5.

[PROJECT PLANNING](./PLANNING.md): Outlines planning criteria, use cases, specifications, notes, and errata.

See [SETUP.md](./SETUP.md) for details about tools you may need to install and use to work on and use this project on your Mac.  

Here are some links in case you need information about setup for other operating systems:  
[Angular](https://angular.io/)  
[Angularfire](https://github.com/angular/angularfire2)  
[Firebase](https://firebase.google.com/)  
[Karma](https://karma-runner.github.io/latest/index.html)  
[Jasmine](https://jasmine.github.io/)  
[Node JS](https://nodejs.org/en/)  
[TypeScript](https://www.typescriptlang.org/)

## Setup and Installation
After making sure that you have everything you need from [SETUP.md](./SETUP.md) . . .

Fork the repository from [GitHub](https://github.com/skillitzimberg/ua-clone).  

Clone your forked repository.  

Use your preferred command line/terminal to navigate into the directory:
```
cd ua-clone/
```

Open the project in a text editor like Atom or VS Code.

#### Setup for Firebase database usage
Go to [Firebase](https://firebase.google.com/).
Set up an account for yourself. If you already have a Google or Gmail account, you already have access - just sign in.  
Once you've created an account, you should be taken to a user dashboard area, with an option to Create a New Project. Select this option, provide a name for your new project, and select your Country/region from the drop-down menu.  

You'll then be taken to an "Overview" area. Where you'll be offered three options:  

- Add Firebase to your iOS app
- Add Firebase to your Android app
- Add Firebase to your web app

Select Add Firebase to your web app. Firebase should respond with a pop-up modal window. Keep the information in this modal handy.  

Create a new file called api-keys.ts in the src/app directory. This file has been added to the .gitingore, so your credentials will not be pushed to Github.  

Copy your Firebase credentials into api-keys.ts (the x's represent your specific information just for this example. Replace them with your actual credentials):
```
export const masterFirebaseConfig = {
    apiKey: "xxxx",
    authDomain: "xxxx.firebaseapp.com",
    databaseURL: "https://xxxx.firebaseio.com",
    storageBucket: "xxxx.appspot.com",
    messagingSenderId: "xxxx"
  };
```

**NOTE: The exported constant in the above code must be named masterFirebaseConfig. If you decide to rename it here you will need to find masterFirebaseConfig everywhere in the project and replace it with your constant's name.**

To seed your database with a few entries:
- go to your Firebase Console and select your project's database.  

- click on the Database option in the left-hand navigational menu.

- select the 3 vertical dots on the right-hand side of the grey bar with your database URL on it. (It's right next to the + and - buttons). This should bring up a small menu.

- select Import JSON from this menu. This will result in a modal window prompting you to upload a file.

- locate the item-data.json file from the project, and upload it.

After the file is uploaded, you should see data in your database.

**NOTE: There is a hidden "admin" page (http://localhost:4200/admin) that has a form for adding items to the database . . . one by one. It might be faster to add a bunch of stuff to item-data.json and upload it to Firebase. But it's nice if you want to check how a variety of data might affect things.**

#### Run the application
In the project root directory run the command:
```
npm install
```

Run the command:
```
ng serve --open
```
Your default browser should open a new window or tab with the website/app ready to use at [localhost:4200](localhost:4200).  

## Acknowledgements
I have code from [alligator.io](https://alligator.io/angular/real-time-search-angular-rxjs/) in a search service. It's not working due to version issues, but it seems to be a good guide for digging through current documentation. It seems like the process is solid, but I just need to figure pout how to make a translation to my Angular environment.

## Known Bugs
Many links are non-functional.  
There is a non-breaking error in gender.pipe that I haven't been able to figure out.  
There is commented out code relating to an attempt to make a live search input. See the [Acknowledgements](#acknowledgements) above.

## Support
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
