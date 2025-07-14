const express = require('express');
const http = require('http');
const mongoose = require("mongoose");
const bodyParser = require('body-parser');
const cors = require('cors');

// Import the routes
const userRoutes = require('./routes/userRoutes');
const adminRoutes=require('./routes/adminRoutes');
const bookingRoute=require('./routes/bookingRoutes');
// Initialize app
const app = express();
var server = http.createServer(app);

// Middleware
app.use(cors());
app.use(express.json());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Use routes
app.use(userRoutes);
app.use(adminRoutes);
app.use(bookingRoute);


// MongoDB connection
const port = process.env.PORT || 5550;
mongoose.connect('mongodb+srv://ronyt2026:Rony%404207@appointment-db.riy8q.mongodb.net/appointment-db?retryWrites=true&w=majority&appName=Appointment-db',
  { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log('Database connected');
    server.listen(port, () => {
      console.log(`Server running on port ${port}`);
    });
  })
  .catch(err => {
    console.error('Database connection error', err);
  });
