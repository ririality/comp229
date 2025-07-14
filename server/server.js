import express from 'express';
import mongoose from 'mongoose';
import authRoutes from './routes/auth.js';

import { requireSignin } from './auth.middleware.js'
import config from './config.js'

const app = express();
const PORT = 3000;
const mongoURI = 'mongodb+srv://mariannamccue:School2025@cluster0.1xgw2z3.mongodb.net/Skeleton?retryWrites=true&w=majority&appName=Cluster0';

import contactsRoutes from './routes/contactsRoutes.js';
import usersRoutes from './routes/usersRoutes.js';

app.use('/auth', authRoutes);

app.use(express.json()); 

app.get('/', (req, res) => {
  res.json({ message: "Welcome to My Portfolio application" });
});

app.use('/api/contacts', requireSignin, contactsRoutes);
app.use('/api/users', requireSignin, usersRoutes);

mongoose.connect(mongoURI)
  .then(() => {
    console.log('MongoDB connected to Skeleton database');
    app.listen(PORT, () => {
      console.log(`Server is running on http://localhost:${PORT}`);
    });
  })
  .catch(err => console.log('MongoDB connection error:', err));