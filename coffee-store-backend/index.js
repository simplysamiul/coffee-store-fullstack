const express = require('express');
const app = express();
const port = process.env.PORT || 5000;
const cors = require("cors");


// use middleware
app.use(cors());
app.use(express.json());



app.get("/", (req, res) => {
    res.send("Server running successsfully ....!")
});

app.listen(port, () => {
    console.log(`Port listening at ${port}`)
})