const express = require('express');
const mongoose = require('mongoose');
const swaggerUI = require('swagger-ui-express');
const swaggerDocs = require('./swagger.json');
const routes = require ('./routes');
const app = express();
const cors = require ('cors');
const dotenv = require('dotenv').config();


const DATABASE = process.env.MONGO_NAME;
const USER = process.env.MONGO_USER;
const PASS = process.env.MONGO_PASSWORD;
    
const options = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    };

try {
    mongoose.connect(process.env.MONGODB_URI ||`mongodb+srv://${USER}:${PASS}@cluster0.micot.mongodb.net/${DATABASE}?retryWrites=true&w=majority`, options)
} catch (error){
    console.error(error);
}


app.use(cors());
app.use(express.json());
app.use('/docs', swaggerUI.serve, swaggerUI.setup(swaggerDocs));
app.use(routes);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`servidor rodando na porta ${PORT}...`);
});

const db = mongoose.connection;

db.on('connected', () => {
    console.log('foi');
});