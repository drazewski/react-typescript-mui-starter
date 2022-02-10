import { Typography } from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom';
import ProjectLayout from 'src/layouts/PageLayout';
import { RoutesConfig } from 'src/routing/routeConfigurations';

const PageTwo = (): JSX.Element => (
  <ProjectLayout>
    <Typography sx={{ py: 2 }} variant="h1">
      Page Two
    </Typography>
    <Link to={`${RoutesConfig.PageOne}`}>Page 1</Link>
  </ProjectLayout>
);

export default PageTwo;
