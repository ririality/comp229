import { useState } from 'react'
import axios from 'axios'

export default function SignIn() {
  const [formData, setFormData] = useState({ username: '', password: '' })

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      const response = await axios.post('http://localhost:5000/auth/signin', formData)
      // Save token to local storage
      localStorage.setItem('token', response.data.token)
      alert('Logged in! Token saved.')
    } catch (error) {
      alert('Invalid credentials')
      console.error(error)
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <h2>Sign In</h2>
      <input
        type="text"
        name="username"
        placeholder="Username"
        onChange={handleChange}
        required
      />
      <input
        type="password"
        name="password"
        placeholder="Password"
        onChange={handleChange}
        required
      />
      <button type="submit">Sign In</button>
    </form>
  )
}