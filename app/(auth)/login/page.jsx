'use client';

import { useState } from 'react';
import { Box, Container, Typography } from '@mui/material';
import AuthForm from '@/app/(auth)/AuthForm';
import { useRouter } from 'next/navigation';
import auth from '@/store/auth';

export default function SignUp() {
  const router = useRouter();
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async ({ email, password }) => {
    const res = await auth.login({ email, password });
    if (res.message) {
      setErrorMessage(res.message);
      return;
    }
    router.push('/');
  };

  return (
    <Container component="main" maxWidth="xs">
      <Box
        sx={{
          marginTop: 8,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <Typography component="h1" variant="h5">
          Login
        </Typography>
        <AuthForm
          handleSubmit={handleSubmit}
          btnLabel="Login"
          errorMessage={errorMessage}
        />
      </Box>
    </Container>
  );
}
