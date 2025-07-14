import User from '../models/Users.js'
import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'
import config from '../config.js'

// Sign up new user
export const signUp = async (req, res) => {
  console.log('req.body:', req.body);
  const { name, email, password } = req.body;

  // Check if email already exists
  const existingUser = await User.findOne({ email })
  if (existingUser) {
    return res.json({ error: 'Email already exists' })
  }

  // Hash (encrypt) the password before saving
  const hashedPassword = await bcrypt.hash(password, 10)

  // Create new user object
  const newUser = new User({ name, email, password: hashedPassword, role: 'user' }) // default role 'user'
  await newUser.save()

  res.json({ message: 'User registered successfully' })
}

// Sign in existing user
export const signIn = async (req, res) => {
  const { email, password } = req.body

  // Find the user with that email
  const user = await User.findOne({ email })

  if (!user) {
    return res.json({ error: 'User not found' })
  }

  // Check if password matches
  const isMatch = await bcrypt.compare(password, user.password)
  if (!isMatch) {
    return res.json({ error: 'Invalid password' })
  }

  // Generate a JWT token for this user
  const token = jwt.sign({ _id: user._id, role: user.role }, config.jwtSecret, { expiresIn: '1h' })

  res.json({ token, role: user.role, name: user.name }) // send token, role, name back to frontend
}

