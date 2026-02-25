

const uri = "mongodb+srv://tgapp:9tGMh4jcOJRQA3MP@cluster0.fhosm.mongodb.net/?appName=Cluster0";
import mongoose, { Mongoose } from "mongoose";


if (!uri) {
    throw new Error("MONGODB_URI is not defined");
}

type MongooseCache = {
    conn: Mongoose | null;
    promise: Promise<Mongoose> | null;
};

declare global {
    // eslint-disable-next-line no-var
    var mongooseCache: MongooseCache | undefined;
}

const globalWithMongoose = global as typeof globalThis & {
    mongooseCache?: MongooseCache;
};

const cached = globalWithMongoose.mongooseCache ?? {
    conn: null,
    promise: null,
};

globalWithMongoose.mongooseCache = cached;

export async function connectDb(): Promise<Mongoose> {
    if (cached.conn) return cached.conn;

    if (!cached.promise) {
        cached.promise = mongoose.connect(uri);
    }

    cached.conn = await cached.promise;
    return cached.conn;
}



// import {MongoClient, ServerApiVersion} from 'mongodb';
//
// const { DB_USER_NAME, DB_PASSWORD } = process.env;
//
//     if (!DB_USER_NAME || !DB_PASSWORD) {
//     throw new Error('MongoDB credentials are missing');
// }
//
// const uri = "mongodb+srv://tgapp:9tGMh4jcOJRQA3MP@cluster0.fhosm.mongodb.net/?appName=Cluster0";
//
// const options = {
//     serverApi: {
//         version: ServerApiVersion.v1,
//         strict: true,
//         deprecationErrors: true,
//     },
// };
//
// let client: MongoClient;
// let clientPromise: Promise<MongoClient>;
//
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

// const { MongoClient } = require('mongodb')

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

