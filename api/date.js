const moment = require('moment')
const request = require('request');



module.exports = (req, res) => {
 
request.get({uri:"https://gergeqqqqqq.herokuapp.com/iii/sss.php"}, function (error, response, body) {
  res.end(body);
});
  // const currentTime = moment().format('MMMM Do YYYY, h:mm:ss a')


}