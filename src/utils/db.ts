
import { MongoClient, ServerApiVersion } from 'mongodb';

const { DB_USER_NAME, DB_PASSWORD } = process.env;

    if (!DB_USER_NAME || !DB_PASSWORD) {
    throw new Error('MongoDB credentials are missing');
}

const uri = `mongodb+srv://root:IZ1HKg6exYuZQRF5@cluster0.fhosm.mongodb.net/?appName=Cluster0`;

const options = {
    serverApi: {
        version: ServerApiVersion.v1,
        strict: true,
        deprecationErrors: true,
    },
};

let client: MongoClient;
let clientPromise: Promise<MongoClient>;

declare global {
    // eslint-disable-next-line no-var
    var _mongoClientPromise: Promise<MongoClient> | undefined;
}

if (process.env.NODE_ENV === 'development') {
    if (!global._mongoClientPromise) {
        client = new MongoClient(uri, options);
        global._mongoClientPromise = client.connect();
    }
    clientPromise = global._mongoClientPromise;
} else {
    client = new MongoClient(uri, options);
    clientPromise = client.connect();
}

export const connectDb = async () => {
    await clientPromise;
    await client.db("admin").command({ ping: 1 });
    console.log("Pinged your deployment. You successfully connected to MongoDB!");
    return client;
};

export { clientPromise };




// const client = new MongoClient(uri, {
//     serverApi: {
//         version: ServerApiVersion.v1,
//         strict: true,
//         deprecationErrors: true,
//     }
// });
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

// import mongoose from 'mongoose';
//
// const { DB_USER_NAME, DB_PASSWORD } = process.env;
//
// if (!DB_USER_NAME || !DB_PASSWORD) {
//     throw new Error("MongoDB credentials are missing");
// }
//
// const uri = `mongodb+srv://${DB_USER_NAME}:${DB_PASSWORD}@cluster0.fhosm.mongodb.net/tgapp?retryWrites=true&w=majority`;
//
//
// const connectDb = async () => {
//     try {
//         await mongoose.connect(uri);
//         console.log("MongoDB connected successfully");
//     } catch (err) {
//         console.error("Failed to connect to MongoDB", err);
//     }
// };
//
// export { connectDb, mongoose };

