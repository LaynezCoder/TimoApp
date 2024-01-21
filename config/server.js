const express = require('express');
const cors = require('cors');

// const fileUpload = require('express-fileupload');

const { connection } = require('./database');

class Server {
    constructor() {
        this.app = express();
        this.port = 3000;

        this.paths = {
            auth: '/api/auth',
        };

        this.connectionMongoDB();

        this.middlewares();

        this.routes();
    }

    routes() {
        // this.app.use(this.paths.auth, require('../routes/auth.routes'));
    }

    listen() {
        this.app.listen(this.port, () => {
            console.log('Listen server in the port', this.port);
        })
    }

    middlewares() {
        this.app.use(cors());

        this.app.use(express.json());

        this.app.use(express.static('public'));

        this.app.use(express.urlencoded({ extended: true }));

        /*  
        this.app.use(fileUpload({
             useTempFiles: true,
             tempFileDir: '/tmp/',
             createParentPath: true
         })); */

        /* this.app.use((req, res, next) => {
            setTimeout(next, 3000);
        }); */
    }

    async connectionMongoDB() {
        await connection();
    }
}

module.exports = Server;