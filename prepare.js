const rimraf = require('rimraf'); //remove files
const ncp = require('ncp').ncp; //copy files
const fs = require('fs');
const public_dir = './public';

const file_list = [
    { fileSource: './src/index.html', fileDest: './public/index.html' },
];

//removes public folder
rimraf('./public/', function (rimraf_error) {
    if (rimraf_error) { throw rimraf_error; }
    // done

    //if public folder doesn't exist
    if (!fs.existsSync(public_dir)) {
        //creates public folder
        fs.mkdirSync(public_dir);
    }

    file_list.forEach((fileElement, index, array) => {
        const { fileSource, fileDest } = fileElement;
         copy_files(fileSource, fileDest);
     });

})

function copy_files(sourcePath, destPath){
    ncp(sourcePath, destPath, function (ncp_error) {
        if (ncp_error) { throw ncp_error; }
    });
}