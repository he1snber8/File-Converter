const fs = require('fs');
const path = require('path');

async function imageToPng(inputPath, outputDir) {
  const outPath = path.join(outputDir, path.basename(inputPath) + '.png');
  // TODO: use an image library to ensure PNG conversion
  fs.copyFileSync(inputPath, outPath);
  return outPath;
}

module.exports = { imageToPng };