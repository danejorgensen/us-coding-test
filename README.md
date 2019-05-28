CodingTest
----------

## Environment Setup

* Install Node and NPM
* Install Ember: npm install -g ember-cli
* Generate test data


## Generating Test Data

Generate test data by running the command below.  Test data will be output to public/data/people.json

````bash
node ./generate-people.js
````

## Running

````bash
npm install
ember server --environment development
````

Open http://localhost:4200


## Task

* Load data from http://localhost:4200/data/people.json at runtime.
* Display data in a format similar to that depicted in [public/images/layout.png](public/images/layout.png)
  * The address displayed should match primaryAddressId.
  * You may use any or no CSS framework as you choose.  Currently Materialize is being loaded.  Feel free to remove or replace it.
  * The layout should support mobile and tablet views without having a horizontal scroll bar.  You may change the layout to fit non-desktop views.



