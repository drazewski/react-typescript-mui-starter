import React from 'react';
import { Container } from '@mui/material';
import { Box } from '@mui/system';

const PageOneLayout = ({ children }: { children: React.ReactNode }): JSX.Element => (
  <>
    <Container maxWidth={false}>
      <Box sx={{ mt: 8 }}>{children}</Box>
    </Container>
  </>
);

export default PageOneLayout;
