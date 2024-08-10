const mysql = require('mysql');

const con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "jaimindatabase"
});

con.connect();

con.query("SELECT * FROM nodejstest", (err, result) => {
  console.log(result);
});



con.end();