const express = require('express');
const graphqlHTTP = require('express-graphql');
const schema = require('./schema/schema');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();

//Allow Cross-Origin Requests
app.use(cors())

//connect to mlab databse
mongoose.connect('mongodb://sdivelbiss2:testing123@ds163689.mlab.com:63689/graphql-playlist');
mongoose.connection.once('open', () => {
    console.log('connected to database')
});

app.use("/graphql", graphqlHTTP({
    schema,
    graphiql: true
}));

app.listen(4000, () => {
    console.log('Now listening for requests on port:4000')
});