// File System

var fs = require('fs');

// Create or Update file 
fs.appendFile('testFiles/myNewFile1.txt', 'Hello content!', function(err) {
    if(err) throw err;
    console.log('myNewFile1.txt Saved!');
});

fs.open('testFiles/myNewFile2.txt', 'w', function(err, file) {
    if(err) throw err;
    console.log('myNewFile2.txt Saved!')
});

fs.writeFile('testFiles/myNewFile3.txt', 'Write override!! ', function(err) {
    if(err) throw err;
    console.log('myNewFile3.txt Saved!')  
});


// delete file
// fs.unlink('test.txt', function(err) {
//     if(err) throw err;
//     console.log('test.txt file deleted ! ');
// });

// // rename file 
// fs.rename('test_file.txt', 'test_rename.txt', function(err) {
//     if(err) throw err;
//     console.log('rename file ! '); 
// });