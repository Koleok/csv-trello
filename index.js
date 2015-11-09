let Trello = require("node-trello"),
    config = require('config'),
    t = new Trello(config.get('trello.key'), config.get('trello.token'));

t.get("/1/members/me", function (err, data) {
    if (err) throw err;
    console.log(data);
});

// URL arguments are passed in as an object.
t.get("/1/members/me", {
    cards: "open"
}, function (err, data) {
    if (err) throw err;
    console.log(data);
});