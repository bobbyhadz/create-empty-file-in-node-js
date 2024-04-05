// How to create an empty file in Node.js

import fs from 'fs';

// 👇️ if you use the CommonJS require() syntax
// const fs = require('fs')

const filePath = './my-file.txt';

try {
  // 👇️ using `wx` flag
  const fd = fs.openSync(filePath, 'wx');
} catch (err) {
  // 👇️ EEXIST: file already exists, open './my-file.txt'
  console.log(err.message);
}
