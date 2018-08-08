const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

const getPlaceholderImage = src => sharp(src)
  .resize(10)
  .blur(1.5)
  .toBuffer();

module.exports.toFile = async function toFile(src, dest) {
  const placeholderImage = await getPlaceholderImage(src);
  let destination = dest;

  if (!dest) {
    const extension = path.extname(src);
    destination = src.replace(extension, `-placeholder${extension}`);
  }

  fs.writeFileSync(destination, placeholderImage);
};

module.exports.toBase64 = async function toBase64(src) {
  const buffer = await getPlaceholderImage(src);
  const format = path.extname(src).slice(1);

  return `data:image/${format};base64,${buffer.toString('base64')}`;
};
