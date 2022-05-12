Node.js Tutorial 

참조 : https://www.w3schools.com/nodejs/nodejs_get_started.asp

## Module
모듈은 javascript의 라이브러리와 같다.
모듈을 추가하기 위해서는 `require()` function을 모듈이름과 함께 사용하면 된다.
```
var http = require('http')
```
node의 내장 모듈 참조 : [[Built-in Modules]](https://www.w3schools.com/nodejs/ref_modules.asp)

### 나의 모듈 생성
* `export` 키워드로 나의 모듈을 작성할 수 있다.
* myModule.js 참조 


### File System
* fs.appendFile()
    * Appends specified content to a file. If the file does not exist, the file will be created.
* fs.writeFile()
    * Replaces the specified file and content if it exists.
    * If the file does not exist, a new file, containing the specified content, will be created.
* fs.open()
    * Taske a "flag" as the second argument.
    * if the flag is "w" for "writing", the specified file is opened for writing.
* fs.unlink()
    * Delete file.
* fs.rename()
    * Rename file.









