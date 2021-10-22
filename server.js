var express = require('express');

var app = express();

var bodyParser = require('body-parser')
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }))

// var http = require('http').Server(app);
// var io = require('socket.io')(http);

const http = require('http');
const server = http.createServer(app);
const { Server } = require("socket.io");
const io = new Server(server);

app.use(express.static(__dirname));

var mysql = require('mysql')
var connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'chat-room'
})


app.get('/messages', (req, res) => {

    connection.query('SELECT * from message', function (err, rows, fields) {
        if (err) throw err
      
        res.send(rows);
    })
})
  

app.post('/messages', (req, res) => {
    // var message = new Message(req.body);

    console.log(req.body);
    let sql = `INSERT INTO MESSAGE(member_id,content,name) VALUES(1,"${req.body.content}", "${req.body.name}")`


    connection.query(sql, function (err, rows, fields) {
        if (err) throw err
      
        io.emit('message', req.body);
        res.sendStatus(200);
    })
  })


  
io.on('connection', (socket) => {
    console.log('a user is connected')
})

connection.connect((err) => {
    if (err) throw err;
    console.log('Connected!');
  });

server.listen(3000, () => {
    console.log('server is running on port', server.address().port);
});
   

// connection.end()