"use strict";

const map  = require('./lib/map.js');
const path = require('path');

module.exports = function (files){
  return new Promise(function(resolve, reject){
    let parcel = {};

    files.forEach(function(file){
      map.forEach(function(type, tester){
        if (tester.test(file)){
          parcel[type] = parcel[type] || [];
          parcel[type].push(type == 'shaders' ? {ps_id: file} : {id: file});
        }
      });
    });

    resolve(parcel);
  });
}
