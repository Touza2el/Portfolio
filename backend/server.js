// NPM Packages
import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import colors from 'colors';

// Custom Modules
import userRoutes from './routes/userRoutes.js';
import { errorHandler, notFound } from './middlewares/errorMiddlewares.js';

// Create Express Application
const app = express();

// Connect The Express Application To MongoDB Database
mongoose.connect('mongodb://127.0.0.1:27017/portfolio-db', {
  useUnifiedTopology: true,
  useNewUrlParser: true,
  useCreateIndex: true,
  useFindAndModify: false,
});

mongoose.connection
  .once('open', function () {
    console.log('MongoDB Connected Successfully'.cyan.underline);
  })
  .on('error', function (err) {
    console.log(err);
  });

// Middlewares
app.use(cors());
app.use(express.json({ extended: false }));
app.use(
  express.urlencoded({
    extended: false,
  })
);

// Create API Endpoints
app.use('/api/users', userRoutes);

// Custom Error Handling Middleware
app.use(notFound);
app.use(errorHandler);

// Listen On a Port
app.listen(5000, () =>
  console.log('The Server is Runing On Port : 5000'.yellow.bold.underline)
);
