import { MongoClient } from 'mongodb';

// https://chatgpt.com/share/67c714ac-d78c-8009-b812-cfca05c6ada9
const uri =  `mongodb+srv://${process.env.DB_USER_NAME}:${process.env.DB_PASSWORD}@cluster0.fhosm.mongodb.net/${process.env.DB_NAME}?retryWrites=true&w=majority&appName=Cluster0`;

if (!uri) {
    throw new Error("MongoDB uri is wrong");
}

const client = new MongoClient(uri);


client.connect().then(() => {
    console.log("MongoDB connected successfully");
}).catch(err => {
    console.error("Failed to connect to MongoDB", err);
});


export const db = client.db(process.env.DB_NAME);