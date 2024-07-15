// _app.tsx 파일
import React from "react";
import { AppProps } from "next/app";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { StoreProvider } from "@/store/StoreProvider";
import { useRouter } from "next/router";

import "@/styles/globals.css";

const queryClient = new QueryClient();

const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => {
  const router = useRouter();

  return (
    <QueryClientProvider client={queryClient}>
      <StoreProvider>
        <Component {...pageProps} />
      </StoreProvider>
    </QueryClientProvider>
  );
};

export default MyApp;
