import express from 'express';
import socketio from 'socket.io';
import ytdl from 'ytdl-core';
import { SocketEvents } from '../constants';

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
  socket.on(SocketEvents.ID, (id) => {
    ytdl
      .getInfo(`https://www.youtube.com/watch?v=${id}`)
      .then(videoInfo => socket.emit(SocketEvents.INFO, videoInfo));
  });
});
