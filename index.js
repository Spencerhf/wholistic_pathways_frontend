const express = require("express");
const bodyParser = require("body-parser");
const nodemailer = require("nodemailer");
const cors = require("cors");
const path = require("path");
const app = express();
const creds = require('./config');

const port = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(cors());

if (process.env.NODE_ENV === 'production' || process.env.NODE_ENV === 'staging') {
  app.use(express.static(path.join(__dirname, 'client/build')));

  app.get('*', function (req, res) {
      res.sendFile(path.join(__dirname, 'client/build', 'index.html'));
  });
};

app.get("/", (req, res) => {
  res.send("Welcome to my api");
});

app.post("/send", (req, res) => {
  var data = req.body;

  var smtpTransport = nodemailer.createTransport({
    service: "Gmail",
    port: 465,
    auth: {
      user: creds.USER,
      pass: creds.PASS,
    },
  });

  var mailOptions = {
    from: data.email,
    to: "haze4man@gmail.com",
    subject: "WholisticPathways contact me",
    html: `<p>${data.name}</p>
          <p>${data.email}</p>
          <p>${data.message}</p>`,
  };

  smtpTransport.sendMail(mailOptions, (error, response) => {
    if (error) {
      res.send(error);
    } else {
      res.send("Success");
    }
    smtpTransport.close();
  });
});


app.listen(port, () => {
  console.log("We are live on port " + port);
});
