const express = require("express");
const path = require("path");
const cors = require("cors");
const app = express();

const server = require("http").Server(app);
const io = require("socket.io")(server, {
  cors: {
    origin: "http://localhost:5000/",
    methods: ["GET", "POST"],
  },
});

const { exec, spawn } = require('child_process');
const fs = require("fs");

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static('public/') );

io.on('connection', async socket => {
    console.log(`server connected to socket; socket_id=${socket.id}`);
    const readFiles = () => {
        exec('"./getImages.sh"');

        const data = fs.readFileSync("./images.txt", { encoding: "utf8" });

        //TODO: remove whitespaces before sending

        setTimeout(() => socket.emit('images', data.split("\n")), 1500);
    }

    if (socket.connected) readFiles();

    fs.watch("./public/images", (eventType, filename) => {
        console.log(`Changes made to images folder: type=${eventType}. Rendering ...`);
        if (filename) {
            readFiles();
        }
    })
    
   

    socket.on('picture', (data) => {
        spawn('python', ['camera.py']);
    })
})

server.listen(5000, () =>{
    console.log('Server is listening on http://localhost:5000');
});