import express from 'express';
import dotenv from 'dotenv';
import userRouter from './routers/userRouters.js';
import connectDB from './utiles/db.js';
import errorMiddleware from './middleware/error-middleware.js';
import Contact from './routers/constact-router.js';


dotenv.config(); // Load environment variables

const app = express();
app.use(express.json()); // Middleware for parsing JSON
app.use(errorMiddleware);

const port = process.env.PORT || 3000;

// Connect to Database
connectDB()
  .then(() => {
    app.listen(port, () => {
      console.log(`✅ Server is running on http://localhost:${port}`);
    });
  })
  .catch((error) => {
    console.error("❌ Database connection failed:", error);
  });

// Routes
app.use('/user', userRouter);
app.use('/contact', Contact);