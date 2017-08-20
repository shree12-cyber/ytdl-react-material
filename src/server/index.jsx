import express from 'express';
import React from 'react';
import { renderToString } from 'react-dom/server';
import { StaticRouter } from 'react-router-dom';
import App from '../client/components/App';

const app = express();

app.set('view engine', 'hbs');
app.set('views', 'src/server/views');
app.use(express.static('src/static'));

app.get('*', (req, res) => {
  const context = {};
  const markup = (
    <StaticRouter
      location={req.url}
      context={context}
    >
      <App />
    </StaticRouter>
  );
  res.render('index', {
    title: 'YouTube Downloader',
    author: 'burnO',
    body: renderToString(markup),
  });
});
app.listen(3000);
