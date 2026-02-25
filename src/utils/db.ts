
import { MongoClient, ServerApiVersion } from 'mongodb';

const { DB_USER_NAME, DB_PASSWORD } = process.env;

    if (!DB_USER_NAME || !DB_PASSWORD) {
    throw new Error('MongoDB credentials are missing');
}

const uri = `mongodb+srv://root:FdSaXVhl8Zd8lGsf@cluster0.fhosm.mongodb.net/?appName=Cluster0`;


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
        // Send a ping to confirm a successful connection
        await client.db("admin").command({ ping: 1 });
        console.log("Pinged your deployment. You successfully connected to MongoDB!");
    } finally {
        // Ensures that the client will close when you finish/error
        await client.close();
    }
}
run().catch(console.dir);

