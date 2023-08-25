'use client';

import { Box, Container, Typography } from '@mui/material';
import AuthForm from '@/app/(auth)/AuthForm';
import { useRouter } from 'next/navigation';
import auth from '@/store/auth';
import { useState } from 'react';

export default function SignUp() {
  const router = useRouter();
  const [errorMessage, setErrorMessage] = useState();
  const handleSubmit = async ({ email, password }) => {
    const res = await auth.register({ email, password });
    if (res.message) {
      setErrorMessage(res.message);
      return;
    }
    router.refresh();
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
          Sign up
        </Typography>
        <AuthForm handleSubmit={handleSubmit} errorMessage={errorMessage} />
      </Box>
    </Container>
  );
}
