var read = require('./reader.js'),
  p = require('path');

var parcel = {};

function add(file, type) {
  parcel[type] = parcel[type] || [];
  parcel[type].push(type == 'shaders' ? {ps_id: file} : {id: file});
}

function filter(file){
  switch(p.extname(file)){
    case '.png':
    case '.jpg':
    case '.gif':
      add(file, 'textures');
      break;
    case '.glsl':
      add(file, 'shaders');
      break;
    case '.fnt':
      add(file, 'font');
      break;
    case '.ogg':
    case '.mp3':
    case '.wav':
      add(file, 'sounds');
      break;
    case '.txt':
    case '.xml':
      add(file, 'text');
      break;
    case '.json':
      add(file, 'jsons');
      break;
  }
}

function parseFiles(dir, cb){
  read(dir, function(err, files){
    if (err) {
      console.log(err);
    }
    files.forEach(function (file) {
      filter(file);
    });
    cb(null, parcel);
  });
}

module.exports = parseFiles;
