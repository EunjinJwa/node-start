const mysql = require('mysql');

const con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "1234",
    database: "demo_node",
    port: 3306
});

con.connect(function(err) {
if(err) throw err;

const sql = "SELECT * FROM customers";
    con.query(sql, function(err, result, fields) {
        if(err) throw err;
        console.log(result);
        console.log('rownumber 3 address : ' + result[3].address);
        console.log(fields);
    });

    selectWhere(con);
});

function selectWhere(con) {
    // where parameters
    const name = "Amy";
    const adr = "Mountain 21";
    const sql = "SELECT * FROM customers WHERE name = ? Or address = ?";

    con.query(sql, [name, adr], function(err, result, fields) {
        if(err) throw err;
        console.log(result);
    });
}


