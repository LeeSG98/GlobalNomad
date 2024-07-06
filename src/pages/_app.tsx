import React from "react";
import { AppProps } from "next/app";
import { StoreProvider } from "@/store/StoreProvider";
import "@/styles/globals.css";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();

const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <QueryClientProvider client={queryClient}>
      <StoreProvider>
        <Component {...pageProps} />
      </StoreProvider>
    </QueryClientProvider>
  );
};

export default MyApp;
