const mysql = require('mysql2');
const express = require('express');
const session = require('express-session');
const path = require('path');

// Create MySQL connection
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'root@123',
  database: 'nodelogin'
});

// Initialize Express
const app = express();

app.use(session({
  secret: 'secret',
  resave: true,
  saveUninitialized: true
}));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'static')));

// Serve login.html on root path
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname + '/login.html'));
});

// Handle login authentication
app.post('/auth', (req, res) => {
  const { username, password } = req.body;

  if (username && password) {
    connection.query('SELECT * FROM accounts WHERE username = ? AND password = ?', [username, password], (error, results) => {
      if (error) throw error;
      if (results.length > 0) {
        req.session.loggedin = true;
        req.session.username = username;
        res.redirect('/home');
      } else {
        res.send('Incorrect Username and/or Password!');
      }
      res.end();
    });
  } else {
    res.send('Please enter Username and Password!');
    res.end();
  }
});

// Serve home page
app.get('/home', (req, res) => {
  if (req.session.loggedin) {
    res.send('Welcome back, ' + req.session.username + '!');
  } else {
    res.send('Please login to view this page!');
  }
  res.end();
});

// Start server
app.listen(3000, () => {
  console.log('Server running on http://localhost:3000/');
});
