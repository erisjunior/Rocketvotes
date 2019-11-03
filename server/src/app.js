import 'dotenv/config';
import { ApolloServer } from 'apollo-server';
import mongoose from 'mongoose';

import schema from './schema';

class App {
  constructor() {
    this.server = new ApolloServer({
      schema,
      playground: process.env.NODE_ENV === 'development',
    });
    this.connectMongo();
  }

  connectMongo() {
    mongoose.connect(process.env.MONGO_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
  }
}

export default new App().server;
