const sharp = require('sharp');
const fs = require('fs');
const directory = '../src/images';

fs.readdirSync(directory).forEach(file => {
  sharp(`${directory}/${file}`)
    .resize(100, null) // width, height
    .toFile(`${directory}/mobile_${file}`);
  });
