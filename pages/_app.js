import React from 'react';
import Header from '../src/components/Header';

const MyApp = ({ Component, pageProps }) => {
  return (
    <>
      <Header />
      <Component {...pageProps} />
    </>
  );
};

export default MyApp;
