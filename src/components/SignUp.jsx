import React, { useState } from 'react'
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
    marginBottom: theme.spacing(2)
  },
  submit: {
    margin: theme.spacing(1)
  }
}))

export default function Signup() {
  const classes = useStyles()

  const [values, setValues] = useState({
    name: '',
    email: '',
    password: ''
  })

  const handleChange = (name) => (event) => {
    setValues({ ...values, [name]: event.target.value })
  }

  const handleSubmit = () => {
    const user = {
      name: values.name || undefined,
      email: values.email || undefined,
      password: values.password || undefined
    }
    create(user).then(data => {
      if (data.error) {
        alert('Error: ' + data.error)
      } else {
        alert('Account created! You can now sign in.')
      }
    })
  }

  return (
    <Card className={classes.card}>
      <CardContent>
        <Typography variant='h5'>Sign Up</Typography>
        <TextField
          label='Name'
          className={classes.textField}
          value={values.name}
          onChange={handleChange('name')}
        />
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
          Sign Up
        </Button>
      </CardContent>
    </Card>
  )
}