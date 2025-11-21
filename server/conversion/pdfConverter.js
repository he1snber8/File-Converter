const fs = require('fs');
const path = require('path');

async function pdfToText(inputPath, outputDir) {
  const outPath = path.join(outputDir, path.basename(inputPath) + '.txt');
  // TODO: use a real PDF text extractor
  fs.writeFileSync(outPath, 'PDF text placeholder');
  return outPath;
}

module.exports = { pdfToText };