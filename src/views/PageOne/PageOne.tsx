import React from 'react';
import { Typography } from '@mui/material';
import { Link } from 'react-router-dom';
import { RoutesConfig } from 'src/routing/routeConfigurations';
import PageLayout from 'src/layouts/PageLayout';

const PageOne = (): JSX.Element => (
  <PageLayout>
    <>
      <Typography sx={{ py: 2 }} variant="h1">
        Page One
      </Typography>
      <Link to={`${RoutesConfig.PageTwo}`}>Page 2</Link>
    </>
  </PageLayout>
);

export default PageOne;
