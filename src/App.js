import express from 'express';
import path from 'path';

class App {
    constructor() {
        this._app = express();
        this._app.use(express.json());
        this._app.use('/', express.static(path.resolve(__dirname, '..public/')));
        //this._app.get('/lines', this._onGetLines);
    }

    getApp = () => this._app;


}

export default App;