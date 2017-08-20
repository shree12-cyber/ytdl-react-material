import express from 'express';
import React from 'react';
import { renderToString } from 'react-dom/server';
import App from '../client/components/App';

const app = express();

app.set('view engine', 'hbs');
app.set('views', 'src/server/views');
app.use(express.static('src/static'));

app.get('*', (req, res) => {
  res.render('index', {
    title: 'YouTube Downloader',
    author: 'burnO',
    body: renderToString(<App />),
  });
});
app.listen(3000);
