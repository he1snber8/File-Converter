function validateConversion(mime, target) {
  if (target === 'pdf-text' && mime !== 'application/pdf') {
    throw new Error('Only PDF files are allowed for PDF to text');
  }
  if (target === 'img-png' && !mime.startsWith('image/')) {
    throw new Error('Only image files are allowed for image to PNG');
  }
}

module.exports = { validateConversion };