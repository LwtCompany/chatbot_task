import dotenv from 'dotenv';
import mongoose from 'mongoose';

dotenv.config();

mongoose.connect(`mongodb+srv://${process.env.LOGIN}:${process.env.PASSWORD}@cluster0.rjp1f.mongodb.net/chatbot?retryWrites=true&w=majority`,
                {   useUnifiedTopology: true, 
                    useNewUrlParser: true 
                });

mongoose.connection.on('error', (err) => { console.log('err', err); });
mongoose.connection.on("connected", (err, res) => { console.log("mongoose is connected"); });

export {mongoose};