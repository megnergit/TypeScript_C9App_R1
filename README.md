# TypeScript WeatherApp
## Task

We will create a tracker app, following the textbook ["The First React
App with
JavaScript"](https://react-book-corona-tracker-app-typescript.netlify.app/dev/links)
(Japanese). The tracker app has two pages.

[Page A: Covid19 infection status by country]

- select one country from pull-down menu
- show following numbers
  + date
  + newly infected
  + total infection count by now 
  + newly recovered 
  + total recovery count by now 

[Page B: Covid19 infection status in the world]
- following numbers are shown for all countries as cards
  + newly infrected
  + total count of infections so far

We will see
- what is API
- how to work with node.js and npm
- how to format JSON data
- how to start a react project
  + how to use the template `create-react-app`
  
- how to push the app to GitHub
- how to deploy the app on netlify

We will start writing app first in
- JavaScript, and then convert it to
- TypeScript

to better understand the differences. 


## Quick Summary

1. Download [`node.js`](https://nodejs.org/en/download/).
   - choose 'LTS'
   - `npm` comes together with `node.js`

2. Get React template files.
   `npx create-react-app react-c9`

   The command creates a copy of `create-react-app` to the local
   machine with the name `react-c9`.

   In case we would like to start with TypeScript template from the start:
   `npx create-react-app react-c9-ts --template typescript`
   
3. `cd react-c9`

[meg@elias ~/git9/scr/react-c9]$ tree -L 1
```
.
├── README.md
├── node_modules
├── package-lock.json
├── package.json
├── public
└── src
```


4. `cd scr` and remove unneccessary source code files with `git rm`
```
.
├── App.css
├── App.js
└── index.js
```

5. `npm start`

6. Edit source codes. 
(tips)
- to open conolos.log
   -> go to the tab where 'localhost:3000' is open
   -> go to 'Develop' in Safari menu
   -> 'Show JavaScript Console'

- no comment syntax for JSON file

- comment in React jsx
   -> `{/* here comment */}`

7.  Sign up [netlify](http://www.netlify.com).
    - one can sign up with GitHub ID.
    - we have to give netlify an access to the repo at our GitHub.
    - we do not need to build the app ourselves. netlify does that.
    - when a build is successful, netlify returns an URL of the app.

<!--   ![Weather app on netlify](./images/netlify.png) a-->

## To-Do
1. Full annotation in source codes.
2. Brush up.
3. Gatsby/Next.js
4. Okay, 'Recovered' records missing in most of recent data.
