# parcel-luxe
> Because writing parcel files can be tedious

Given an array of files, parcel-luxe will generate an object for you to manipulate. You could write it to a file perhaps or do other cool things.

This is only a small utility, if you are looking for the big tool, look at this package: https://www.npmjs.com/package/parcel-cli

## Installation
```bash
$ npm install --save parcel-luxe
```

## Usage
```js
const parcelLuxe = require('parcel-luxe');

let files = []; //array(strings) of filenames

parcelLuxe(files).then(function(parcel){
  //manipulate parcel how you want, it's just an object
  JSON.stringify(parcel); //example
})
```

## Example output
input array:
```js
['image1.png', 'sound.mp3', 'font.fnt', 'shader.glsl', 'image2.jpg', ...]
```  
output object:
```js
{
  textures: [{id: 'file1.png'}, {id: 'image2.jpg'}],
  sounds: [{id: 'sound.mp3'}],
  fonts: [{id: 'font.fnt'}],
  shaders: [{ps_id: 'shader.glsl'}],
  ...
}
```

Cool, huh?

## Contributing
If you find that an file extension is not detected,
you can create an issue or
 you can also look in `lib/map.js` and add it to the correct regex :)
