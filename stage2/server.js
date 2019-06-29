const express = require('express');
const path = require('path');
const app = express();

//  Backend/Server routes....
app.get('/admin', (req, res) => res.send({ hi: 'there'}));

// Frontend
if (process.env.NODE_ENV !== 'production') {
    const webpackMiddleware = require('webpack-dev-middleware');
    const webpack = require('webpack');
    const webpackConfig = require('./webpack.config.js');

    app.use(webpackMiddleware(webpack(webpackConfig)));
} else {
    app.use(express.static('dist'));
    app.get('*', (req, res) => {
        res.sendFile(path.join(__dirname, 'dist/index.html'))
    });
}

const port = process.env.NODE_PORT || 8000;
app.listen(port, () => console.log('Listening on ' + port));