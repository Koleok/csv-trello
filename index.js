let trello = require("node-trello"),
    config = require('config'),
    t = new trello(config.get('trello.key'), config.get('trello.token')),
    _ = require('underscore'),
    fs = require('fs'),
    s = require('underscore.string'),
    util = require('util');

t.get("/1/members/me", (err, data) => {
    if (err) throw err;
    console.log(data);
});

// URL arguments are passed in as an object.
t.get("/1/members/me", {
    cards: "open"
}, (err, data) => {
    if (err) throw err;
    console.log(data);
});