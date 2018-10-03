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

## Tools Used
* This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app).
* [React](https://github.com/facebook/react)
* [Redux](https://github.com/reduxjs/redux)
* [Redux Thunk](https://github.com/reduxjs/redux-thunk)
* [Recompose](https://github.com/acdlite/recompose)
* [Redux-Actions](https://github.com/redux-utilities/redux-actions)
* [Material-UI](https://github.com/mui-org/material-ui)
* [Jest](https://github.com/facebook/jest)
* [Redux-Mock-Store](https://github.com/dmitry-zaets/redux-mock-store)
* [Lodash](https://github.com/lodash/lodash)
* [Hapi](https://github.com/hapijs/hapi)
* [Socket.io](https://github.com/socketio/socket.io)
* [Socket.io-client](https://github.com/socketio/socket.io-client)

#### Dev Tools
* [Eslint](https://github.com/eslint/eslint) - using Airbnb's style guide w/ prettier
* [Prettier](https://github.com/prettier/prettier)
* [Lint-Staged](https://github.com/okonet/lint-staged)
* [Concurrently](https://github.com/kimmobrunfeldt/concurrently)

## What Else?

This was a quick exercise but we'd want to add some things to take it to a production-level application.
Here's a list:

* Setup a DB to store messages
  * A relational DB could be alright but if we wanted to scale we might consider ScyllaDB or something Cassandra-ish
  * The models would probably require some updates - the message model could use a timestamp attribute and might consider a concept of rooms/chats with specific ids
* Select a host - maybe something quick and easy like heroku at first
  * Setup pipelines for easy deployment process
* Figure out logging
* Setup user authentication - Auth0 is super easy to add and free for almost everything we'd need
* Add other UI/Client features
  * Selecting which room or user you're chatting with
  * Notifications
  * Maybe an edit feature
  * Better user onboarding experience :D
* Rewrite in/Port to React Native - especially if we have data around users wanting to use a native application
* More tests and more complete tests
* Spend more time on UI/UX design
* Use a router of some kind
