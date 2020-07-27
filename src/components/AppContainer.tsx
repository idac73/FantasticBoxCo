import { Helmet } from 'react-helmet';
import React from 'react';

interface AppContainerProps {
  children: React.ReactNode;
  title?: string;
}

export const AppContainer: React.FC<AppContainerProps> = ({
  children,
  title = 'FantasticBoxCo'
}) => {
  return (
    <>
      <Helmet>
        <title>{title && `${title}`}</title>
      </Helmet>
      <header>
        <h1 className="logo">FantasticBoxCo</h1>
      </header>
      <main>
        <div className="container">{children}</div>
      </main>
    </>
  );
};
