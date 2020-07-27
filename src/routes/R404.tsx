import { AppContainer } from 'components/AppContainer';
import React from 'react';

export default function R404() {
  return (
    <AppContainer title="Page Not Found | FantasticBoxCo">
      <h1>Page Not Found</h1>
      <h2>Sorry, the page you&apos;ve requested is not available</h2>
      <h3>
        <a href="/">Return to the home page</a>
      </h3>
    </AppContainer>
  );
}
