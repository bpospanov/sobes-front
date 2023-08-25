'use client';

import { useState } from 'react';
import { Box, Button, TextField, Alert, AlertTitle } from '@mui/material';

export default function AuthForm({
  handleSubmit,
  btnLabel = 'Sign Up',
  errorMessage,
}) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailError, setEmailError] = useState(false);
  const [emailHelperText, setEmailHelperText] = useState('');
  const [passwordError, setPasswordError] = useState(false);
  const [passwordHelperText, setPasswordHelperText] = useState('');

  const changeEmail = (value) => {
    setEmail(value);
    setEmailError(false);
    setEmailHelperText('');
  };

  const changePassword = (value) => {
    setPassword(value);
    setPasswordError(false);
    setPasswordHelperText('');
  };

  const validateEmail = () => {
    if (!email) {
      setEmailError(true);
      setEmailHelperText('Заполните email');
      return;
    }

    if (
      !String(email)
        .toLowerCase()
        .match(
          /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
        )
    ) {
      setEmailError(true);
      setEmailHelperText('Неверный email');
      return;
    }

    return true;
  };
  const validatePassword = () => {
    if (!password) {
      setPasswordError(true);
      setPasswordHelperText('Заполните пароль');
      return;
    }

    if (password.length <= 4) {
      setPasswordError(true);
      setPasswordHelperText('Слишком короткий пароль');
      return;
    }

    return true;
  };

  const handleSubmitForm = async (event) => {
    event.preventDefault();
    const validEmail = validateEmail();
    const validPassword = validatePassword();
    if (!validEmail || !validPassword) return;

    try {
      handleSubmit({ email, password });
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <Box
      component="form"
      onSubmit={(e) => handleSubmitForm(e)}
      sx={{ mt: 1 }}
      noValidate
    >
      <TextField
        error={emailError}
        helperText={emailHelperText}
        margin="normal"
        required
        fullWidth
        id="email"
        label="Email Address"
        type="email"
        name="email"
        autoComplete="email"
        autoFocus
        value={email}
        onChange={(e) => changeEmail(e.target.value)}
      />
      <TextField
        error={passwordError}
        helperText={passwordHelperText}
        margin="normal"
        required
        fullWidth
        name="password"
        label="Password"
        type="password"
        id="password"
        autoComplete="current-password"
        value={password}
        onChange={(e) => changePassword(e.target.value)}
      />
      <Button type="submit" fullWidth variant="contained" sx={{ mt: 3, mb: 2 }}>
        {btnLabel}
      </Button>
      {errorMessage && <Alert severity="error">{errorMessage}</Alert>}
    </Box>
  );
}
