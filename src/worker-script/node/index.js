/**
 *
 * Tesseract Worker Script for Node
 *
 * @fileoverview Node worker implementation
 * @author Kevin Kwok <antimatter15@gmail.com>
 * @author Guillermo Webster <gui@mit.edu>
 * @author Jerome Wu <jeromewus@gmail.com>
 */

const worker = require('../');
const getCore = require('./getCore');
const resolveURL = require('./resolveURL');
const gunzip = require('./gunzip');
const cache = require('./cache');

/*
 * register message handler
 */
process.on('message', (packet) => {
  worker.dispatchHandlers(packet, obj => process.send(obj));
});

worker.setAdapter({
  getCore,
  gunzip,
  resolveURL,
  ...cache,
});
