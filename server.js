const express = require('express');
const app = express();
var http = require('http').Server(app);
var io = require('socket.io')(http);

app.use(express.static('./'));
app.use(express.static('dist'));

app.get('/', (req, res) => {
  res.sendFile(`${__dirname}/dist/index.html`);
});

app.get('/send-alert', (req, res) => {
  res.sendFile(`${__dirname}/src/index.html`);
  setTimeout(function(){
    io.emit('some_event', { for: 'everyone' });
  },5000);
});

io.on('connection', function(socket){

});

const port = process.env.PORT || 3000;

http.listen(port, () => {
  console.log('app listening on', port);
});
