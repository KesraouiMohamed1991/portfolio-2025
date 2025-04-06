import mongoose from 'mongoose';

const MONGODB_URI = process.env.MONGODB_URI; // Default to local MongoDB URI




if (!MONGODB_URI) {
    throw new Error('Please define the MONGODB_URI environment variable');
}

let cached = global.mongoose;

if (!cached) {
    cached = global.mongoose = { conn: null, promise: null };
}

async function connect() {
    if (cached.conn) {
        return cached.conn;
    }

    if (!cached.promise) {
        cached.promise = mongoose.connect(MONGODB_URI).then((mongooseInstance) => {
            console.log('Successfully connected to MongoDB');  // Log on successful connection
            return mongooseInstance;
        }).catch((error) => {
            console.error('Error connecting to MongoDB:', error);  // Log any connection error
        });
    }

    cached.conn = await cached.promise;
    return cached.conn;
}

export default connect;
