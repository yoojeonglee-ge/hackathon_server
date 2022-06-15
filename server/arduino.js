const express = require('express');
const bodyParser = require('body-parser');
const router = express.Router();
const dotenv = require('dotenv');
const app = express();
const PORT = 5000;
const MongoClient = require('mongodb').MongoClient;

dotenv.config();

const connectionString = `mongodb+srv://${process.env.MONGODB_USERNAME}:${process.env.MONGODB_PASSWORD}@cluster0.zbvca1i.mongodb.net/?retryWrites=true&w=majority`;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use('/', router);

app.listen(PORT, () => console.log(`Listening on PORT: ${PORT}`));

MongoClient.connect(connectionString)
   .then(client => {
      console.log('Connected to Database');
      const db = client.db('Cluster0');
   })
   .catch(console.error);
