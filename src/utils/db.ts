import mongoose from 'mongoose';

const { DB_USER_NAME, DB_PASSWORD } = process.env;

if (!DB_USER_NAME || !DB_PASSWORD) {
    throw new Error("MongoDB credentials are missing");
}

const uri = `mongodb+srv://${DB_USER_NAME}:${DB_PASSWORD}@cluster0.fhosm.mongodb.net/tgapp?retryWrites=true&w=majority`;


const connectDb = async () => {
    try {
        await mongoose.connect(uri);
        console.log("MongoDB connected successfully");
    } catch (err) {
        console.error("Failed to connect to MongoDB", err);
    }
};

export { connectDb, mongoose };
