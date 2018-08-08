# placeholder-img [![Build Status](https://travis-ci.org/astronomersiva/placeholder-img.svg?branch=master)](https://travis-ci.org/astronomersiva/placeholder-img)

Generates low-res blurred versions of images that can be used as placeholders while lazy-loading them.

### Installation

* `npm install --save placeholder-img`

### Usage

* To create a placeholder image file,
```
  const placeholderImg = require('placeholder-img');

  const src = 'path/to/image';
  await placeholderImg.toFile(src, /* optional destination */);
```
If the destination is not provided, the image will be saved to `${SRC}-placeholder.${FORMAT}`.

* To generate the placeholder image in base64 encoding,
```
  const placeholderImg = require('placeholder-img');

  const src = 'path/to/image';
  const base64Image = await placeholderImg.toBase64(src);
```

### License

MIT © [Sivasubramanyam A](https://sivasubramanyam.me)
