# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### Installing dependencies

Upon opening code in your editor of choice, run `yarn install` in the terminal. Running this command will install all dependencies. 

### Connecting to API

To recieve a key, go to [https://www.weatherapi.com] and create an account. Once you have an API Key, create a `.env` file in the root folder. `.env` should already be added to the `.gitignore` file. However make sure it is, and if not add below line 16. In the `.env` file paste this code ===> `REACT_APP_API_KEY=INSERT_KEY_HERE`. After adding this line make sure to restart the server. Enjoy!!!

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.