import express from "express";
import bodyParser from "body-parser";
import pg from "pg";

const app = express();
const port = 3000;

const db = new pg.Client({
  user: "postgres",
  host: "localhost",
  database: "secrets",
  password: "postgres",
  port: 5432,
});

db.connect();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));



app.get("/", (req, res) => {
  res.render("home.ejs");
});

app.get("/login", (req, res) => {
  res.render("login.ejs");
});

app.get("/register", (req, res) => {
  res.render("register.ejs");
});

app.post("/register", async (req, res) => {
  const email = req.body.username;
  const password = req.body.password;
  try {
    const checkResult = await db.query("SELECT * FROM users WHERE email=$1", [email]);

    if (checkResult.rows.length > 0) {
      res.send("Email already exists. Try logging in.")
    } else {
      const result = await db.query("INSERT INTO users (email, password) VALUES ($1, $2)", [email, password]);
      res.render("secrets.ejs");
    }
  } catch (err) {
    console.log(err);
    res.send(err.message);
  }

});

app.post("/login", async (req, res) => {
  const email = req.body.username;
  const password = req.body.password;
  try {
    // const checkResult = await db.query("SELECT * FROM users WHERE email=$1 AND password=$2", [email, password]);
    // if (checkResult.rows.length <= 0) {
    //   res.send("Account doesn't exists or credentials are incorrect.");
    // } else {
    //   res.render("secrets.ejs");
    // }

    const result = await db.query("SELECT * FROM users WHERE email=$1", [email]);
    if(result.rows.length > 0){
      const storedPassword = result.rows[0].password;
      if(password === storedPassword){
        res.render("secrets.ejs")
      } else {
        res.send("Password Incorrect!");
      }
    } else {
      res.send("User not found, try registering!");
    }
  } catch (err) {
    console.log(err);
    res.send(err.message);
  }
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
