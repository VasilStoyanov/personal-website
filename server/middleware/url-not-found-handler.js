var path = require('path');

module.exports = function() {
  return function customRaiseUrlNotFoundError(req, res, next) {
    var PATH_TO_FILE = path.join(__dirname, '../../client/index.html');

    res.sendFile(PATH_TO_FILE, function(err) {
      if (err) {
        console.error(err);
        res.status(err.status).end();
      }
    });
  };
};
