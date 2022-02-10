import React from 'react';
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { globalStyles } from './globalStyles';
import { RoutesConfig } from './routing/routeConfigurations';
import PageOne from './views/PageOne/PageOne';
import PageTwo from './views/PageTwo/PageTwo';
import Header from './components/Header/Header';

const appTheme = createTheme(globalStyles);

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Header />
      <Switch>
        <Route path={RoutesConfig.PageTwo} component={PageTwo} />
        <Route path={RoutesConfig.PageOne} component={PageOne} />
        <Redirect exact from={RoutesConfig.Root} to={RoutesConfig.PageOne} />
      </Switch>
    </BrowserRouter>
  );
};

const ThemeWrapper: React.FC = () => {
  return (
    <ThemeProvider theme={appTheme}>
      <CssBaseline />
      <App />
    </ThemeProvider>
  );
};

export default ThemeWrapper;
