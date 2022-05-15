Node.ja MySQL

### mysql package download
```
> npm install mysql
```

### connection 
```javascript
var mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost",
  user: "yourusername",
  password: "yourpassword"
});

con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
});
```

### The Result Object - insert, update, delete 
query 수행 수 쿼리로 인해 영향받은 정보를 포함하는 `result object`가 반환된다.
```json
{
  fieldCount: 0,
  affectedRows: 14,
  insertId: 0,
  serverStatus: 2,
  warningCount: 0,
  message: '\'Records:14  Duplicated: 0  Warnings: 0',
  protocol41: true,
  changedRows: 0
}
```

### select 조회 후 반환 결과 
select 쿼리 수행 결과의 정보를 포함하는 `result` , `feilds` object 
```javascript
con.connect(function(err) {
  if (err) throw err;
  con.query("SELECT name, address FROM customers", function (err, result, fields) {
    if (err) throw err;
    console.log(result);
    console.log(fields);
  });
});
```
* result
    * select 쿼리 결과를 반환한다. 
    * ex) result[1].address
* fields
    * 조회한 컬럼 정보를 반환한다. 
    * ex) fields[1].name // address
    ```
    [
        {
            catalog: 'def',
            db: 'mydb',
            table: 'customers',
            orgTable: 'customers',
            name: 'name',
            orgName: 'name',
            charsetNr: 33,
            length: 765,
            type: 253,
            flags: 0,
            decimals: 0,
            default: undefined,
            zeroFill: false,
            protocol41: true
        },
        {
            catalog: 'def',
            db: 'mydb',
            table: 'customers',
            orgTable: 'customers',
            name: 'address',
            orgName: 'address',
            charsetNr: 33,
            length: 765,
            type: 253,
            flags: 0,
            decimals: 0,
            default: undefined,
            zeroFill: false,
            protocol41: true
        }
    ]
    ```


### query parameter 사용 방법
1. `mysql.escape()` method
```sql
var adr = 'Mountain 21';
var sql = 'SELECT * FROM customers WHERE address = ' + mysql.escape(adr);
con.query(sql, function (err, result) {
  if (err) throw err;
  console.log(result);
});
```

2. `?` 
```sql
var name = 'Amy';
var adr = 'Mountain 21';
var sql = 'SELECT * FROM customers WHERE name = ? OR address = ?';
con.query(sql, [name, adr], function (err, result) {
  if (err) throw err;
  console.log(result);
});
```










