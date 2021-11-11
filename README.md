# TypeScript_C9App_R1

# TypeScript WeatherApp
## Task

We will create a weather app, following the textbook ["The First React
App with TypeScript"](https://react-typescript-book-weather-app.netlify.app/links) (Japanese). What the weather app does:

- accepts a name of a city
- hits the API at the website [weatherapi](https://www.weatherapi.com)
- returns
   + temperature
   + weather (sunny/cloudy/rainy, etc.)
   + weather icon

We will see how React works in a TypeScript code. This repository is
cloned from the [textbook
repo](https://github.com/mod728/react-typescript-book-weather-app).
The tech stack we will learn on the way are

1. Node.js (and npm within)
2. TypeScript
3. React
4. Netlify (to deploy the app)

## Quick Summary

1. Download [`node.js`](https://nodejs.org/en/download/).
   - choose 'LTS'
   - `npm` comes together with `node.js`

2. Get React template files.
   `npx create-react-app react-typescript-weather-app --template typescript`

   The command creates a copy of `create-react-app` to the local
   machine with the name `react-typescript-weather-app` Typescript
   template is used when making a copy.

3. `cd react-typescript-weather-app`

```
.
├── README.md
├── node_modules
├── package-lock.json
├── package.json
├── public
├── src
└── tsconfig.json
```

    We will clone the textbook repo to `src` directory, where we work.

4. `npm start`

    `node.js` is started. `node.js` is an 'environment' that provides
    us an App development platform. As we edit the source codes, we
    can see the updated output at `http://localhost:3000`.

    `Ctrl + C` to stop `node.js`

5.  Edit the source codes.

```
./src
├── App.css
├── App.scss
├── App.tsx
├── components
│   ├── Form.tsx
│   ├── Loading.tsx
│   ├── Results.tsx
│   └── Title.tsx
├── index.tsx
├── react-app-env.d.ts
└── reportWebVitals.ts
```


6.  Sign up [netlify](http://www.netlify.com).
    - one can sign up with GitHub ID.
    - we have to give netlify an access to the repo at our GitHub.
    - we do not need to build the app ourselves. netlify does that.
    - when a build is successful, netlify returns an URL of the app.

   ![Weather app on netlify](./images/netlify.png)

## To-Do
1. Full annotation in source codes.
2. Brush up.
3. Gatsby/Next.js



# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
