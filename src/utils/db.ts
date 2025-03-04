import { MongoClient } from 'mongodb';

// Проверяем переменную окружения для подключения
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