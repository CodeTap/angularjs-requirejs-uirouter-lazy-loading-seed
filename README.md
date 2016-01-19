
Angular-Starter-Project-with-Lazy-Load
=====================================
An example of how to implement lazy loading in [AngularJS](http://angularjs.org/) using
[RequireJS](http://requirejs.org/) and the angular [Ui-Router](http://angular-ui.github.io/ui-router/site/#/api/ui.router).
This is a small scale application of what can be done to lay the foundation of making a large scale
application.


## How it works
A load controller function uses a promise and inserting the controller name into the require function.
This function is called after the ui-router state object is made and loaded into the resolve object of
ui-router. For full information:
[How it Works](http://github.com/CodeTap/angularjs-requirejs-uirouter-lazy-loading-seed/wiki/How-it-works)

## Installation

AngularJs-RequireJs-UiRouter-Lazy-Loading seed uses NPM and requires [NodeJs](https://nodejs.org/en/)
to be installed in order to use the seed. Once node is installed on the computer you can use npm.

You can fork or download the zip for the source code. To download the dependencies use
```
npm install
bower install
```
The seed also comes with several scripts build in once all of the dependencies are installed:
```
npm run start
npm run test
npm run test-single-run
npm run protractor
```

## Running
There is a built in script for a NodeJs server.  It can be run by entering either of these
```
npm run start
node server.js
```
Once you run either of those the node server with the website will be located on localhost:3000

## Testing
The seed comes with examples for running both [Karma](https://karma-runner.github.io/0.13/index.html)
unit tests and {Protractor](https://angular.github.io/protractor/#/) end to end tests.  Both Karma
and Protractor have to be installed in order to run the tests.

### Karma Unit Tests

To run the demo karma unit tests either
```
npm run test
npm run test-single-run
```
can be run.  "test-single-run" will make sure the unit tests only run once. "test" will have the test
continuously running so changes to files will be retested.  Coverage of code has also been enabled
for this seed project.  Various text and html outputs can be found under the coverage folder once
tests have been run.

### Protractor E2E Tests
To run the demo protractor tests use the command
```
npm run protractor
```
This will bring up the protractor tests and all will be run accordingly.

## Licensing
This seed is licensed under the MIT License.