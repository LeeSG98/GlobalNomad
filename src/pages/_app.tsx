// _app.tsx
import React from "react";
import { AppProps } from "next/app";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { StoreProvider } from "@/store/StoreProvider";
import "@/styles/globals.css";
import { AuthProvider } from "@/contexts/AuthContext";
import { ModalProvider } from "@/store/ModalProvider";

const queryClient = new QueryClient();

const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <QueryClientProvider client={queryClient}>
      <AuthProvider>
        <ModalProvider>
          <StoreProvider>
            <Component {...pageProps} />
          </StoreProvider>
        </ModalProvider>
      </AuthProvider>
    </QueryClientProvider>
  );
};

export default MyApp;
