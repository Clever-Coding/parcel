var fs = require('fs');
var p = require('path');

function readdir(path, callback) {
  var list = []

  fs.readdir(path, function (err, files) {
    if (err) {
      return callback(err)
    }

    var pending = files.length
    if (!pending) {
      return callback(null, list)
    }

    files.forEach(function (file) {
      fs.lstat(p.join(path, file), function (err, stats) {
        if (err) {
          return callback(err)
        }

        file = p.join(path, file)
        if (stats.isDirectory()) {
          files = readdir(file, function (err, res) {
            if (err) {
              return callback(err)
            }

            list = list.concat(res)
            pending -= 1
            if (!pending) {
              callback(null, list)
            }
          })
        }
        else {
          list.push(file)
          pending -= 1
          if (!pending) {
            callback(null, list)
          }
        }
      })
    })
  })
}

module.exports = readdir;
