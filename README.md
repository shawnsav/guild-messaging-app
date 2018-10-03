## To Run
Clone this repo and run:
`npm i` - to install the node modules
and then `npm start` - to kick off the application.

You should expect to see the project in your browser at `http://localhost:3000` and a Node.js service running on `http://localhost:9000`

## Using the App
- select an avatar to chat as
- open another window accessing `localhost:3000`
- select another avatar to chat separately as
- add some message inputs and hit the `Enter` key or click the button with the paper plane icon

## Tests
There aren't many and these could be flushed out to test a lot more than they currently are.

To run the tests:
`npm test`

Currently the tests are primarily just using [jest](https://github.com/facebook/jest) and the [redux-mock-store](https://github.com/dmitry-zaets/redux-mock-store) but it'd be a good idea to pull in a tool like [enzyme](https://github.com/airbnb/enzyme).

This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app).
