import React from 'react';
import { AppProps } from 'next/app';
import { StoreProvider } from '@/store/StoreProvider';
import '@/styles/globals.css';

const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <StoreProvider>
      <Component {...pageProps} />
    </StoreProvider>
  );
};

export default MyApp;