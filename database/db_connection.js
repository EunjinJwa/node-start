const mysql = require('mysql');

const con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "1234",
    database: "demo_node",
    port: 3306
});

// create table 

// con.connect(function(err){
//     if(err) throw err;
//     console.log("Connected!");

//     const createSql = "CREATE TABLE customers (name VARCHAR(255), address varchar(255))";

//     con.query(createSql, function(err, result) {
//         if(err) throw err;
//         console.log("Table created.");
//     })
// });


// alter table
// con.connect(function(err){
//     if(err) throw err;
//     console.log("Connected!");

//     const createSql = "alter table customers add column id int AUTO_INCREMENT PRIMARY KEY";

//     con.query(createSql, function(err, result) {
//         if(err) throw err;
//         console.log("Table altered.");
//     })
// });

// insert data 
// con.connect(function(err) {
//     if(err) throw err;
//     console.log("Connected!");

//     const sql = "insert into customers (name, address) values ('Company Inc', 'Highway 37')";
//     con.query(sql, function(err, result) {
//         if(err) throw err;
//         console.log("1 record inserted.");
//     });
// });

// insert multiple records
const sql = "INSERT INTO customers (name, address) VALUES ?";
const values = [
    ['Jhon', 'Highway 71'],
    ['Peter', 'Lowstreet 4'],
    ['Amy', 'Apple st 652'],
    ['Hannah', 'Mountain 21'],
    ['Michael', 'Valley 345'],
    ['Richard', 'Sky st 331'],
    ['Ben', 'Park Lane 38'],
    ['Sandy', 'Ocean Grass 1']
];
con.connect(function(err) {
    if(err) throw err;
    console.log("Connected!");

    con.query(sql, [values], function(err, result) {
        if(err) throw err;
        console.log("Number of records inserted: " + result.affectedRows);
    });
});



