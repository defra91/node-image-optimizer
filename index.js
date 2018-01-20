'use strict';

const fs = require('fs');
const path = require('path');
const Async = require('async');
const ImageDetector = require('./lib/image-detector');
const Logger = require('./lib/logger');

let inputPath = './test/input';
let outputPat = './test/output';

fs.readdir(inputPath, (err, files) => {
  Async.eachSeries(files, (file, cb) => {
    let fullPath = path.join(inputPath, file);
    Logger.log('Scanning image: ' + fullPath);
    ImageDetector.getFileMimeType(fullPath, (err, mimeType) => {
      if (err) {
        console.log('An error occurred while scanning file: ' + file);
      } else {
        let isImage = ImageDetector.isMimeTypeAnImage(mimeType);
        Logger.log('Mime type for file ' + file + ' is: ' + mimeType);
        Logger.log('Mime type for file is an image ? ' + isImage);
      }
      return cb(err);
    })
  }, (err) => {
    if (err) {
      Logger.log('Some error occurred while scanning directory', 'error');
      Logger.log(err, 'error');
    } else {
      Logger.log('Successfully performed operations on files');
    }
  });
});
