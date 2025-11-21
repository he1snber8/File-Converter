const path = require('path');
const fs = require('fs');

const uploadDir = path.join(__dirname, '../uploads');
const outputDir = path.join(__dirname, '../outputs');
[uploadDir, outputDir].forEach((d) => !fs.existsSync(d) && fs.mkdirSync(d));

function getUploadPath(filename) {
  return path.join(uploadDir, filename);
}

function getOutputDir() {
  return outputDir;
}

module.exports = { getUploadPath, getOutputDir };