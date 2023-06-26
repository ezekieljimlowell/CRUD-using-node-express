const express = require('express');
const cors = require('cors');
const app = express();

let corsOptions = {
    origin: "http://localhost:8081"
};
app.use(cors(corsOptions));

// parse requests of content-type - application/json
app.use(express.json());

app.use(express.urlencoded({extended: true}));

// simple route
app.get('/', (req,res) => {
    res.json({message: "Welcome to CRUD app"})
});

// set port, listen for requests
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
    console.log(`Server started on ${PORT}`);
})

const db = require("./app/models");
db.sequelize.sync();

db.sequelize.sync({ force: true }).then(() => {
    console.log("Drop and re-sync db.");
  });