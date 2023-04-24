// const http = require('http');

// const server = http.createServer((req, res) => {
//   res.statusCode = 200;
//   res.setHeader('Content-Type', 'text/plain');
//   res.end('Hola Mundo\n');
// });

// server.listen(8000, () => {
//   console.log('Servidor escuchando en el puerto 8000');
// });

const app = require('./app');

const {
    API_VERSION,
    IP_SERVER
} = require("./constants");

const PORT = process.env.POST || 8000;

const server = async () => {
    try {
        app.listen(PORT, () => {
            console.log("##### API REST #####");
            console.log("Base endpoint:");
            console.log(`http://${IP_SERVER}:${PORT}/api/${API_VERSION}/`);
        });
    } catch (error) {
        console.log("Connection error", err);
    }
}

server();