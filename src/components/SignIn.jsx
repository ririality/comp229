import React, { useState } from 'react';
import { Card, CardContent, Typography, TextField, Button } from '@mui/material';
import { signin } from '../api-auth';

export default function SignIn() {
  const [values, setValues] = useState({
    email: '',
    password: ''
  });

  const handleChange = name => event => {
    setValues({ ...values, [name]: event.target.value });
  };

  const handleSubmit = () => {
    signin({ email: values.email, password: values.password })
      .then(data => {
        console.log('Sign-in result:', data);
        if (data.error) {
          alert('Error: ' + data.error);
        } else {
          sessionStorage.setItem('jwt', JSON.stringify(data));
          alert('Signed in!');
        }
      });
  };

  return (
    <Card style={{ maxWidth: 400, margin: '2rem auto', textAlign: 'center', padding: '1rem' }}>
      <CardContent>
        <Typography variant='h5'>Sign In</Typography>
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
          Sign In
        </Button>
      </CardContent>
    </Card>
  );
}