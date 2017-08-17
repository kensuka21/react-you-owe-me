/**
 * Created by kmukai on 8/15/2017.
 */
var localforage = require('localforage');

localforage.config({
    driver      : localforage.WEBSQL, // Force WebSQL; same as using setDriver()
    name        : 'youoweme',
    version     : 1.0,
    size        : 4980736, // Size of database, in bytes. WebSQL-only for now.
    storeName   : 'youoweme', // Should be alphanumeric, with underscores.
    description : 'some description'
});

module.exports = localforage;
