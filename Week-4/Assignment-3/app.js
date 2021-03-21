const express = require("express");
const mysql = require("mysql");
const bodyParser = require("body-parser");

const app = express();

app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: false }));

// create connection
let db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "test",
  database: "assignment",
});

db.connect((err) => {
  if (err) throw err;
  console.log("MySQL Database Connected!");
});

// home page
app.get("/", (req, res) => {
  res.sendFile(__dirname + "/views/index.html");
});

// member page
app.get("/member", (req, res) => {
  res.sendFile(__dirname + "/views/member.html");
});

// create db assignment
app.get("/createdb_assignment", (req, res) => {
  let sql = "CREATE DATABASE assignment;";
  db.query(sql, (err, result) => {
    if (err) throw err;
    console.log(result);
    res.send("assignment DATABASE created...");
  });
});

// create table user
app.get("/createtable_user", (req, res) => {
  let sql =
    "CREATE TABLE user(id int AUTO_INCREMENT, email VARCHAR(320), password VARCHAR(320), PRIMARY KEY (id));";
  db.query(sql, (err, result) => {
    if (err) throw err;
    console.log(result);
    res.send("user TABLE created...");
  });
});

// insert user
app.get("/insert_user", (req, res) => {
  if (req.query.email === '' || req.query.password === '') {
    res.send('email or password can not be empty');
    return;
  }
  if (!validateEmail(req.query.email)) {
    res.send('email not valid');
    return;
  }
  let check_exist_sql = `SELECT COUNT(1) FROM user WHERE email = '${req.query.email}';`;
  let query = db.query(check_exist_sql, (err, results) => {
    if (err) throw err;
    if (results[0]["COUNT(1)"]) {
      res.send("user exist");
    } else {
      let user = {
        email: req.query.email,
        password: req.query.password,
      };
      let sql = "INSERT INTO user SET ?;";
      let query = db.query(sql, user, (err, result) => {
        if (err) throw err;
        res.send("new user");
      });
    }
  });
});

// login user
app.get("/login_user", (req, res) => {
  if (req.query.email === '' || req.query.password === '') {
    res.send('email or password can not be empty');
    return;
  }
  if (!validateEmail(req.query.email)) {
    res.send('email not valid');
    return;
  }
  let check_exist_sql = `SELECT COUNT(1) FROM user WHERE email = '${req.query.email}';`;
  let query = db.query(check_exist_sql, (err, results) => {
    if (err) throw err;
    if (results[0]["COUNT(1)"]) {
      let get_user_sql = `SELECT password FROM user WHERE email = '${req.query.email}';`;
      let query = db.query(get_user_sql, (err, results) => {
        if (err) throw err;
        let db_password = results[0]["password"];
        if (db_password === req.query.password) {
          res.send("password correct");
        } else {
          res.send("password incorrect");
        }
      });
    } else {
      res.send("email not exist");
    }
  });
});

// get user
app.get("/get_user", (req, res) => {
  let sql = "SELECT * FROM user;";
  let query = db.query(sql, (err, results) => {
    if (err) throw err;
    console.log(results);
    res.send("User fetched...");
  });
});

// select single user
app.get("/get_user/:id", (req, res) => {
  let sql = `SELECT * FROM user WHERE id = ${req.params.id}`;
  let query = db.query(sql, (err, result) => {
    if (err) throw err;
    console.log(result);
    res.send("User fetched...");
  });
});

// update single user
app.get("/update_user/:id", (req, res) => {
  let newEmail = "new@gmail.com";
  let sql = `UPDATE user SET email = '${newEmail}' WHERE id = ${req.params.id}`;
  let query = db.query(sql, (err, result) => {
    if (err) throw err;
    console.log(result);
    res.send("User updated...");
  });
});

// delete single user
app.get("/delete_user/:id", (req, res) => {
  let newEmail = "new@gmail.com";
  let sql = `DELETE FROM user WHERE id = ${req.params.id}`;
  let query = db.query(sql, (err, result) => {
    if (err) throw err;
    console.log(result);
    res.send("User deleted...");
  });
});

// check if email valid or not
function validateEmail(email) {
  const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
}

app.listen(3000, () => {
  console.log("The application is running on localhose:3000");
});
