// // eslint-disable-next-line import/no-commonjs, import/no-nodejs-modules
// const fs = require('fs');
// /**
//  * Extract the file name given a string of the form fileName + ext
//  * @param {string} nameExt File name + extension (e.g. 'my_image.png')
//  * @return {string} The name without the extension, or the full name if
//  * there was no '.' in the string (e.g. 'my_image')
//  */
// const extractFileName = function (nameExt) {
//     // There could be multiple dots, but get the stuff before the first .
//     const nameParts = nameExt.split('.', 1); // we only care about the first .
//     return nameParts[0];
// };

// /**
//  * Load a file and handle the upload process.
//  * @param {Input|string} fileInputOrPath The <input/> element that contains the file being loaded
//  *                                       or the path to the file if running in a Node.js environment
//  * @param {Function} onLoadSuccess The function to execute when the file is successfully loaded
//  * @param {Function} onLoadError The function to execute if there is an error loading the file
//  */
// const loadFile = function (fileInputOrPath, onLoadSuccess, onLoadError) {
//     if (typeof fileInputOrPath === 'string') {
//         // If the input is a string, assume it's a file path (Node.js environment)
//         const filePath = fileInputOrPath;
//         fs.readFile(filePath, (err, data) => {
//             if (err) {
//                 onLoadError(err);
//             } else {
//                 const fileType = 'application/octet-stream'; // Assume binary data
//                 const fileName = extractFileName(filePath);
//                 onLoadSuccess(data, fileType, fileName, 0, 1); // Assuming single file
//             }
//         });
//     } else {
//         // If the input is not a string, assume it's a file input element (browser environment)
//         const fileInput = fileInputOrPath;
//         const readFile = (i, files) => {
//             if (i === files.length) {
//                 // Reset the file input value now that we have everything we need
//                 // so that the user can upload the same file multiple times if they choose
//                 fileInput.value = null;
//                 return;
//             }
//             const file = files[i];
//             const reader = new FileReader();
//             reader.onload = () => {
//                 const fileType = file.type;
//                 const fileName = extractFileName(file.name);
//                 onLoadSuccess(reader.result, fileType, fileName, i, files.length);
//                 readFile(i + 1, files);
//             };
//             reader.onerror = onLoadError;
//             reader.readAsArrayBuffer(file);
//         };
//         readFile(0, fileInput.files);
//     }
// };

// export {
//     loadFile
// };
