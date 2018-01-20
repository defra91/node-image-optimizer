'use strict';

const mmm = require('mmmagic');
const Magic = mmm.Magic;
let magic = new Magic(mmm.MAGIC_MIME_TYPE);

/**
 * Get image mime type from file using mmmagic
 * @param string filePath --> full or relative file path
 * @param callback cb --> calllback
 * @return string file mime type
 */
module.exports.getFileMimeType = (filePath, cb) => {
  magic.detectFile(filePath, cb);
};

/**
 * Determine if file mime type is an image
 * @param string mimeType
 * @return boolean --> true if mime type is image else false
 */
module.exports.isMimeTypeAnImage = (fileMimeType = '') => {
  let regex = new RegExp('image\/', 'g');
  return regex.test(fileMimeType);
}
