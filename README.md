# youtube-dl-react-material
Youtube downloader website written in JS.

I wanted to learn React from the scratch, so I've decided to create this ;)

## Installation
```bash
clone git@github.com:burnoo/youtube-dl-react-material.git
cd youtube-dl-react-material
npm install
npm start
```

## Used libraries/tools
* [React](https://facebook.github.io/react/)
* [express.js](https://expressjs.com/)
* [material-ui (beta)](https://material-ui-1dab0.firebaseapp.com/)
* [node-ytdl-core](https://github.com/fent/node-ytdl-core)
* [socket.io](https://socket.io)
* [hbs](http://handlebarsjs.com/)
* [webpack](https://webpack.js.org/)
* [babel](https://babeljs.io/)

## Compability
* CircularProgress works only in Chrome [[bug]](https://github.com/callemall/material-ui/issues/5524)
* "Download by click" doesn't work in Firefox ([because of CORS policy on HTML5 download attribute](https://bugzilla.mozilla.org/show_bug.cgi?id=874009))
