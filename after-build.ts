import * as fs from 'fs';

fs.copyFile('./package.json', './dist/package.json', (err) => {
  if (err) throw err;
  console.log('source.txt was copied to destination.txt');
});