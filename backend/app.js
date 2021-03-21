const express = require("express");
const morgan = require("morgan");
const app = express();

app.set("port", process.env.PORT || 3000);

app.use((req, res, next)=>{
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method');
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
    res.header('Allow', 'GET, POST, OPTIONS, PUT, DELETE');
    next();
});
app.use(morgan("dev"));
app.use(express.json());

app.use("/api/product", require("./routes/product.routes"));
module.exports = app;