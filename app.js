var express = require('express');
var app = express();
var bodyParser = require('body-parser');
app.use(bodyParser.json());
 
app.use(express.static('./'));
 
global.__basedir = __dirname;
 
const db = require('./app/config/db.config.js');
 
// force: true will drop the table if it already exists
db.sequelize.sync().then(() => {
  console.log('Drop and Resync with { force: true }');
}); 
 
require('./app/routes/user.route.js')(app);
 
// Server run at localhost:8080
var server = app.listen(8080, function () {
 
  var host = server.address().address
  var port = server.address().port
 
  console.log("App listening at http://%s:%s", host, port)
 
})
