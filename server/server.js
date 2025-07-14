import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import educationRoutes from './routes/educationRoutes.js';
import projectsRoutes from './routes/projectsRoutes.js';
import authRoutes from './routes/auth.js';
import contactsRoutes from './routes/contactsRoutes.js';
import usersRoutes from './routes/usersRoutes.js';
import { requireSignin } from './auth.middleware.js';
import config from './config.js';

const app = express();
const PORT = 3000;

// ✅ MongoDB connection string
const mongoURI = 'mongodb+srv://mariannamccue:School2025@cluster0.1xgw2z3.mongodb.net/Skeleton?retryWrites=true&w=majority&appName=Cluster0';

// ✅ Middleware
app.use(cors()); 
app.use(express.json()); 

// ✅ Routes
app.use('/auth', authRoutes);
app.use('/api/contacts', requireSignin, contactsRoutes);
app.use('/api/users', requireSignin, usersRoutes);
app.use('/api/education', requireSignin, educationRoutes);
app.use('/api/projects', requireSignin, projectsRoutes);


// ✅ Default route
app.get('/', (req, res) => {
  res.json({ message: "Welcome to My Portfolio application" });
});

// ✅ Connect to MongoDB and start server
mongoose.connect(mongoURI)
  .then(() => {
    console.log('MongoDB connected to Skeleton database');
    app.listen(PORT, () => {
      console.log(`Server is running on http://localhost:${PORT}`);
    });
  })
  .catch(err => console.log('MongoDB connection error:', err));
