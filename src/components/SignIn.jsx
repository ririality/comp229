import React, { useState } from 'react';
import { makeStyles } from '@mui/material/styles';
import { Card, CardContent, Typography, TextField, Button } from '@mui/material';
import { signin } from '../api-auth'
import { create } from '../api-user'

const useStyles = makeStyles(theme => ({
  card: {
    maxWidth: 400,
    margin: '0 auto',
    marginTop: theme.spacing(3),
    padding: theme.spacing(2),
    textAlign: 'center'
  },
  textField: {
    width: '100%',
    marginBottom: theme.spacing(2),
  },
  submit: {
    margin: theme.spacing(1),
  },
}))

export default function SignIn() {
  const classes = useStyles()

  const [values, setValues] = useState({
    email: '',
    password: ''
  })

  const handleChange = name => event => {
    setValues({ ...values, [name]: event.target.value });
  }

  const handleSubmit = () => {
    signin({ email: values.email, password: values.password })
      .then(data => {
        if (data.error) {
          alert('Error: ' + data.error);
        } else {
          // Save token in sessionStorage
          sessionStorage.setItem('jwt', JSON.stringify(data));
          alert('Signed in! You can now access protected pages.');
        }
      });
  };

  return (
    <Card className={classes.card}>
      <CardContent>
        <Typography variant='h5'>Sign In</Typography>
        <TextField
          label='Email'
          type='email'
          className={classes.textField}
          value={values.email}
          onChange={handleChange('email')}
        />
        <TextField
          label='Password'
          type='password'
          className={classes.textField}
          value={values.password}
          onChange={handleChange('password')}
        />
        <Button
          variant='contained'
          color='primary'
          className={classes.submit}
          onClick={handleSubmit}
        >
          Sign In
        </Button>
      </CardContent>
    </Card>
  );
}