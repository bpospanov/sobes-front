'use client';

import Link from 'next/link';
import { Box, Typography } from '@mui/material';
import { redirect } from 'next/navigation';

export default function AuthLayout({ children }) {
  return (
    <>
      <Box component="nav" sx={{ display: 'flex' }}>
        <Typography component="h1" sx={{ mr: 2 }}>
          Auth
        </Typography>
        <Link href="/signup">Sign up</Link>
        <Link href="/login">Login</Link>
      </Box>
      {children}
    </>
  );
}
