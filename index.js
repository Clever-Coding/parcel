var parse = require('./lib/parser.js'),
  path = require('path'),
  json = require('jsonfile');

function create(in_dir, out_dir) {
  if(typeof in_dir == 'undefined'){
    in_dir = out_dir = 'assets'
  } else if(typeof out_dir == 'undefined'){
    out_dir = in_dir
  }

  parse(in_dir, function(err, parcel){
    if (err) {
      console.log(err);
    } else {
      json.writeFile(path.join(out_dir, 'parcel.json'), parcel, function(err){
        console.log(err);
      })
    }
  })
}

create('.');

module.exports = create;
