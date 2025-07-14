import React, { useState } from 'react';
import { Card, CardContent, Typography, TextField, Button } from '@mui/material';
import { create } from '../api-user';


export default function SignUp() {
  const [values, setValues] = useState({
    name: '',
    email: '',
    password: ''
  });

  const handleChange = (name) => (event) => {
    setValues({ ...values, [name]: event.target.value });
  };

  const handleSubmit = () => {
    const user = {
      name: values.name || undefined,
      email: values.email || undefined,
      password: values.password || undefined
    };

    create(user).then(data => {
      console.log('Sign-up result:', data);
      if (data.error) {
        alert('Error: ' + data.error);
      } else {
        alert('Account created! You can now sign in.');
      }
    });
  };

  return (
    <Card style={{ maxWidth: 400, margin: '2rem auto', textAlign: 'center', padding: '1rem' }}>
      <CardContent>
        <Typography variant='h5'>Sign Up</Typography>
        <TextField
          label='Name'
          fullWidth
          margin='normal'
          value={values.name}
          onChange={handleChange('name')}
        />
        <TextField
          label='Email'
          type='email'
          fullWidth
          margin='normal'
          value={values.email}
          onChange={handleChange('email')}
        />
        <TextField
          label='Password'
          type='password'
          fullWidth
          margin='normal'
          value={values.password}
          onChange={handleChange('password')}
        />
        <Button variant='contained' color='primary' onClick={handleSubmit}>
          Sign Up
        </Button>
      </CardContent>
    </Card>
  );
}