import ytdl from 'ytdl-core';

export default async function handleId(id) {
  return ytdl.getInfo(`https://www.youtube.com/watch?v=${id}`);
}
