"use strict";

const test = require('../');

let files = ['asdf.png', 'jambon.ogg', 'poulet.fnt', 'tortue.glsl', 'asdf.gif', 'asdf.mp3', 'saucisse.jpg'];

test(files).then(function(parcel){
  console.log(parcel);
}).catch(function(err){
  console.log(err);
});
