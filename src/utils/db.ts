import mongoose from 'mongoose';

const uri = `mongodb+srv://${process.env.DB_USER_NAME}:${process.env.DB_PASSWORD}@cluster0.fhosm.mongodb.net/?appName=Cluster0`;

if (!uri) {
    throw new Error("MongoDB uri is wrong");
}

const connectDb = async () => {
    try {
        await mongoose.connect(uri);
        console.log("MongoDB connected successfully");
    } catch (err) {
        console.error("Failed to connect to MongoDB", err);
    }
};

export { connectDb, mongoose };
