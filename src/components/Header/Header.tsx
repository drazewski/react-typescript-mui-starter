import React from 'react';
import { Box } from '@mui/system';
import { AppBar, Container, Typography } from '@mui/material';

const Header = (): JSX.Element => {
  return (
    <AppBar sx={{ backgroundColor: 'common.white', height: 64, justifyContent: 'center' }}>
      <Container maxWidth={false}>
        <Box display="flex" justifyContent="space-between" alignItems="center">
          <Typography variant="body1" color="secondary" sx={{ fontSize: 30, textTransform: 'uppercase' }}>
            YOUR LOGO
          </Typography>
        </Box>
      </Container>
    </AppBar>
  );
};

export default Header;
