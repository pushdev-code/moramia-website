const ncp = require('ncp').ncp; //copy files
const fs = require('fs'); //list files
const path = require('path');
const source = './dist';
const dest = './public';

//if public folder doesn't exist
if (!fs.existsSync(dest)) folderfs.mkdirSync(dest);
else {
    fs.readdir(dest, (err, files) => {//list files
        if (err) throw err;
        for (const file of files) {//loop through the files
          fs.unlink(path.join(dest, file), err => {//remove files
            if (err) throw err;
          });
        }
    });
}
copy_files(source, dest);

function copy_files(sourcePath, destPath) {
    ncp(sourcePath, destPath, function (ncp_error) {
        if (ncp_error) { throw ncp_error; }
    });
}