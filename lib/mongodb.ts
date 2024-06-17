import mongoose from 'mongoose';

const connectToDatabase = async () => {
    if (mongoose.connections[0].readyState) return;

    mongoose.connect(process.env.MONGO_URI!, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    }).then(() => {
        console.log('Connected to MongoDB Atlas');
    }).catch((err) => {
        console.error('Error connecting to MongoDB Atlas', err);
    });
};

export default connectToDatabase;
