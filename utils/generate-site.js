const fs = require('fs');

const writeFile = fileContent => {
    return new Promise((resolve, reject) => {
        // if there's an error, reject the Promise and send the error to the Promise's .catch method
        if (err) {
            reject (err);
            // return out of the function to make sure the Promise doesn't accidentally execute the resolve function
            return;
        }

        // if everything works, resolve the Promise and send success data to the .then method
        resolve({
            ok: true,
            message: 'File created!'
        });
    });
};

const copyFile = () => {
    return new Promise((resolve, reject) => {
        if (err) {
            reject (err);
            return;
        }

        resolve({
            ok: true,
            message: 'File copied!'
        });
    });
};

// exporting functions to another file
module.exports = { writeFile, copyFile };