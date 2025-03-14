
const express = require('express');
const http = require('http');
const cors = require('cors');
require('dotenv').config();
require('./db/conn');

const authrouter = require('./routes/authRoute');
const apirouter = require('./routes/apiRoute');

const app = express();
const PORT = process.env.PORT || 8000;

// Middleware
app.use(express.json());
app.use(
  cors({
    origin: '*',
  })
);

// Routes
app.use('/auth', authrouter);
app.use('/api', apirouter);

app.get("/",(req,res)=>{
  res.send("Hello World!");
})


const server = http.createServer(app);




// Start the server
const start = async () => {
  try {
    server.listen(PORT, () => {
      console.log(`Server running successfully on port ${PORT}`);
      console.log(process.env.MONGODB_URI, process.env.PORT);
    });
  } catch (err) {
    console.log(err);
  }
};

start();

