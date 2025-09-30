const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(bodyParser.json());

// MongoDB Verbindung
const mongoURI = process.env.MONGODB_URI || 'mongodb://localhost/mein-buchclub';
mongoose.connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB verbunden'))
  .catch(err => console.error(err));

// Start der Anwendung
app.listen(port, () => {
  console.log(`Server läuft auf http://localhost:${port}`);
});