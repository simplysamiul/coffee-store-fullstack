const express = require('express');
const app = express();
const port = process.env.PORT || 5000;
const cors = require("cors");


// use middleware
app.use(cors());
app.use(express.json());


app.get("/", (req,res) => {
    res.send("Server Running Successfully .....!")
});


app.listen(port, () => {
    console.log(`Port running successully at ${port}`)
})