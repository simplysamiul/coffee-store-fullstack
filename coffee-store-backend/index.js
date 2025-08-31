const express = require('express');
const app = express();
const port = process.env.PORT || 5000;
const cors = require("cors");
require('dotenv').config();
const { MongoClient, ServerApiVersion } = require('mongodb');


// use middleware
app.use(cors());
app.use(express.json());


// mongodb connection
const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@coffee-store-cluster.1cs0hzq.mongodb.net/?retryWrites=true&w=majority&appName=coffee-store-cluster`;

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
    serverApi: {
        version: ServerApiVersion.v1,
        strict: true,
        deprecationErrors: true,
    }
});

async function run() {
    try {
        // Connect the client to the server	(optional starting in v4.7)
        await client.connect();

        // databse and database collection name
        const coffeeStoreCollection = client.db("coffee_store").collection("coffee_store_colledtion")

        // coffee add route
        app.post("/add-coffee", async(req,res) => {
            const newCoffee= req.body;
            const result = await coffeeStoreCollection.insertOne(newCoffee);
            res.send(result);
        });



        // Send a ping to confirm a successful connection
        await client.db("admin").command({ ping: 1 });
        console.log("Pinged your deployment. You successfully connected to MongoDB!");
    } finally {
        // Ensures that the client will close when you finish/error
        // await client.close();
    }
}
run().catch(console.dir);


// root
app.get("/", (req, res) => {
    res.send("Server running successsfully ....!")
});

// poret listening
app.listen(port, () => {
    console.log(`Port listening at ${port}`)
})