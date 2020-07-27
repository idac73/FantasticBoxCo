import { Route, Switch, useLocation, withRouter } from 'react-router-dom';
import PriceCalculator from 'routes/PriceCalculator';
import R404 from 'routes/R404';
import React from 'react';

import './application.css';

export const App: React.FC = () => {
  const location = useLocation();
  return (
    <Switch location={location}>
      <Route exact path="/" component={PriceCalculator} />
      <Route component={R404} />
    </Switch>
  );
};

export default withRouter(App);
