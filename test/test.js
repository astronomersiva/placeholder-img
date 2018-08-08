const fs = require('fs');
const path = require('path');
const test = require('ava');
const placeholderImg = require('../index');

const src = path.join(__dirname, 'hero.jpg');

test('toFile works', async (t) => {
  const dest = path.join(__dirname, 'hero-placeholder.jpg');

  await placeholderImg.toFile(src);
  const blurredImageContents = fs.readFileSync(dest).toString();
  const blurredImageFixture = fs.readFileSync(path.join(__dirname, 'file-fixture'))
    .toString();

  t.is(
    blurredImageContents,
    blurredImageFixture,
    'File contents are not equal',
  );
});

test('base64 works', async (t) => {
  const base64 = await placeholderImg.toBase64(src);
  const base64Fixture = fs.readFileSync(path.join(__dirname, 'base64-fixture'))
    .toString();

  t.is(
    base64,
    base64Fixture,
    'base64 contents are not equal',
  );
});
