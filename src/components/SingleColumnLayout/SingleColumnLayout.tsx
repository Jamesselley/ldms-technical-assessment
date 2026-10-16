import { Box, Container } from '@mui/material'
import type { ReactNode } from 'react';
import theme from '../../theme/theme';

type SingleColumnLayoutProps = {
  children: ReactNode;
};
export default function SingleColumnLayout({
  children,
}: SingleColumnLayoutProps) {
  return (
    <Box
      component='main'
      sx={{
        bgcolor: theme.palette.secondary.main,
        minHeight: '100vh',
        minWidth: '100vw',
        py: 4
      }}
    >
      <Container maxWidth='md'>
        {children}
      </Container>
    </Box>
  );
}