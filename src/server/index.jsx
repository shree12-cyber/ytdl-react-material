import express from 'express';
import socketio from 'socket.io';

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
const server = app.listen(3000);

const io = socketio(server);
io.on('connection', (socket) => {
  socket.on('id', (id) => {
    console.log(id);
  });
});
