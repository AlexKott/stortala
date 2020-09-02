# Stortala Messenger
![Stortala Logo](./src/assets/logo.png)

## Demo
Feel free to check out the demo at [stortala.alexkott.com](https://stortala.alexkott.com)!

## Scripts
### `npm start`
Open [http://localhost:3000]() to view the app in development mode.

### `npm test`
Launches the test runner in the interactive watch mode.

### `npm run build`
Builds the app for production to the `build` folder.

## Mock Server
[Mirage.js](https://miragejs.com/) is used as a mock server for local development. Two environment variables (see `.env`-file) toggle this behaviour:

```
# Set to 0 to disable mock server.
# You will need a different server running on {window.origin}/api
REACT_APP_USE_MOCK_SERVER=1

# set to 0 to disable the sample data
REACT_APP_USE_SEEDS=1 #
```

## Credits
This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).
