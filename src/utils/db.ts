
import { MongoClient } from 'mongodb';

const { DB_USER_NAME, DB_PASSWORD } = process.env;

    if (!DB_USER_NAME || !DB_PASSWORD) {
    throw new Error('MongoDB credentials are missing');
}

const uri = `mongodb+srv://root:IZ1HKg6exYuZQRF5@cluster0.fhosm.mongodb.net/?appName=Cluster0`;

// const options = {
//     serverApi: {
//         version: ServerApiVersion.v1,
//         strict: true,
//         deprecationErrors: true,
//     },
// };

// let client: MongoClient;
// let clientPromise: Promise<MongoClient>;

// declare global {
//     // eslint-disable-next-line no-var
//     var _mongoClientPromise: Promise<MongoClient> | undefined;
// }
//
// if (process.env.NODE_ENV === 'development') {
//     if (!global._mongoClientPromise) {
//         client = new MongoClient(uri, options);
//         global._mongoClientPromise = client.connect();
//     }
//     clientPromise = global._mongoClientPromise;
// } else {
//     client = new MongoClient(uri, options);
//     clientPromise = client.connect();
// }
//
// export const connectDb = async () => {
//     await clientPromise;
//     await client.db("admin").command({ ping: 1 });
//     console.log("Pinged your deployment. You successfully connected to MongoDB!");
//     return client;
// };


// const { MongoClient } = require('mongodb');
async function runGetStarted() {
    // Replace the uri string with your connection string
    // const uri = uri;
    const client = new MongoClient(uri);
    try {
        const database = client.db('sample_mflix');
        const movies = database.collection('movies');
        // Queries for a movie that has a title value of 'Back to the Future'
        const query = { title: 'Back to the Future' };
        const movie = await movies.findOne(query);
        console.log(movie);
    } finally {
        await client.close();
    }
}
runGetStarted().catch(console.dir);

// export { clientPromise };




// const client = new MongoClient(uri, {
//     serverApi: {
//         version: ServerApiVersion.v1,
//         strict: true,
//         deprecationErrors: true,
//     }
// });

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

