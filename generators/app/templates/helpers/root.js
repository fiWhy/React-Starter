/**
 * Created by Asus on 05.11.2016.
 */
var path = require('path');
module.exports = function() {
  var parts = Array.prototype.splice.call(arguments,0),
      currentDir = path.join(__dirname, '../');
    return path.join.apply(path, [currentDir].concat(parts));
};