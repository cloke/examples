var express = require('express'),
    connect = require('connect'),
    util    = require('util');

var app = express.createServer(
  connect.logger(),
  connect.static(__dirname),
  connect.static('..')
);

var id = 0;

var contacts = [
  {
    id: ++id,
    firstName: 'Peter',
    lastName: 'Wagenet',
    phoneNumbers: ['(415) 555-2380']
  },

  {
    id: ++id,
    firstName: 'Yehuda',
    lastName: 'Katz',
    phoneNumbers: ['(415) 555-6666']
  },

  {
    id: ++id,
    firstName: 'Erik',
    lastName: 'Bryn',
    phoneNumbers: ['(415) 555-2380', '(614) 555-8127']
  },

  {
    id: ++id,
    firstName: 'James',
    lastName: 'Rosen',
    phoneNumbers: ['(415) 555-2380']
  },

  {
    id: ++id,
    firstName: 'Kara',
    lastName: 'Gates',
    phoneNumbers: ['(207) 555-3141']
  },

  {
    id: ++id,
    firstName: 'Dudley',
    lastName: 'Flanders',
    phoneNumbers: ['(415) 555-6789']
  },

  {
    id: ++id,
    firstName: 'Tom',
    lastName: 'Dale',
    phoneNumbers: ['(808) 800-8135']
  }
];

app.get('/contacts.json', function(req, res) {
  res.send({contacts: contacts});
});

app.listen(3000);
util.log("Listening on port 3000");
