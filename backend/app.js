const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const app = express();
const routes = require("./API/routes/route");

var cors = require('cors');
const corsOpts = {
  origin: '*',

  methods: [
    'GET',
    'POST',
  ],

  allowedHeaders: [
    "Access-Control-Allow-Headers", "Access-Control-Allow-Headers",
    "Origin", "Accept", "X-Requested-With", "Content-Type", "Access-Control-Request-Method",
    "Access-Control-Request-Headers", "Access-Control-Allow-Origin"
  ],
};

mongoose.connect(
  "mongodb+srv://mowlas:mowlas@cluster0.ktl654f.mongodb.net/?retryWrites=true&w=majority",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }
);
mongoose.Promise = global.Promise;


app.use(cors(corsOpts));
app.use((req, res, next) => {

  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept, Authorization"
  );

  if (req.method === "OPTIONS") {
    res.header("Access-Control-Allow-Methods", "PUT, POST, PATCH, DELETE, GET");
    return res.status(200).json({});
  }

  next();
});



app.use(express.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

//App routes to use
app.use("/", routes);


//caso não haja mais rotas
app.use((req, res, next) => {
  const err = new Error("Not found.");
  err.status = 404;
  next(err);
});

//caso haja erros lida com eles
app.use((err, req, res, next) => {
  const status = err.status || 500;

  res.status(status).json({
    message: "Error not found! Status: " + status,
  });
});
module.exports = app;