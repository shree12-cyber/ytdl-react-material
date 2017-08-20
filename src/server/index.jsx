import express from 'express';

const app = express();

app.set('view engine', 'hbs');
app.set('views', 'src/server/views');
app.use(express.static('src/static'));

app.get('*', (req, res) => {
  res.render('index', {
    title: 'YouTube Downloader',
    author: 'burnO',
    body: 'Loading...',
  });
});
app.listen(3000);
