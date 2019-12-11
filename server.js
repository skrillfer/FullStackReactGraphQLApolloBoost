const express = require('express');

const mongoose = require('mongoose');

const cors = require('cors');

require('dotenv').config({ path: 'variables.env' });

const Recipe = require('./models/Recipe');

const User   = require('./models/User');


//Bring in GraphQL-Express middleware

const { ApolloServer } = require
('apollo-server-express');



const { typeDefs } = require('./schema');

const { resolvers } = require('./resolvers');

//Create Schema
/*const schema = makeExecutableSchema({
    typeDefs,
    resolvers
});*/

//Connects to database

mongoose.set('useCreateIndex', true);
const mongo=mongoose.connect(process.env.MONGO_URI,{ useNewUrlParser: true });
mongo.then(() => console.log('DB connected'))
    .catch((err) => console.error(err));

// Initializes application

const app = express();

const corsOptions = {
    origin: 'http://localhost:3000',
    credentials: true
}

app.use(cors(corsOptions));

const server = new ApolloServer({
    typeDefs,
    resolvers,
    context: {
        Recipe,
        User
    },
    playground: {
        endpoint: `http://localhost:4444/graphql`,
        settings: {
          'editor.theme': 'light'
        }
    }
});

server.applyMiddleware({app});


const PORT = process.env.PORT || 4444;


app.listen(PORT,() => {
    console.log(`Server listening on PORT ${PORT}`);
});

