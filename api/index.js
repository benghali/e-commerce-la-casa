const express = require("express");
const mongoose = require('mongoose');
const cookieParser = require('cookie-parser');
const dotenv = require('dotenv');

// Load environment variables from .env file
dotenv.config();

// Connect to MongoDB
mongoose.connect(process.env.MONGO, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log('Connected to MongoDB');
  })
  .catch((err) => {
    console.log(err);
  });

// Import routers
const userRouter = require('./routes/userRoute');
const gigRouter = require('./routes/gigRoute');
const conversationRouter = require('./routes/conversationRoute');
const orderRouter = require('./routes/orderRoute');
const messagesRouter = require('./routes/messagesRoute');
const reviewRouter = require('./routes/reviewRoute');
const authRouter = require('./routes/authRoute');

// Create Express app
const app = express();

// Middleware
app.use(express.json());
app.use(cookieParser());

// Routes
app.use('/api/auth', authRouter);
app.use('/api/user', userRouter);
app.use('/api/gigs', gigRouter);
app.use('/api/orders', orderRouter);
app.use('/api/conversations', conversationRouter);
app.use('/api/messages', messagesRouter);
app.use('/api/review', reviewRouter);

// Start server
const port = process.env.PORT || 8800;
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
