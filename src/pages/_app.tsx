import React from "react";
import { AppProps } from "next/app";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { StoreProvider } from "@/store/StoreProvider";
import "@/styles/globals.css";
import { AuthProvider } from "@/contexts/AuthContext";
import { ModalProvider } from "@/store/ModalContext";
import Header from "@/components/header/header";
import Footer from "@/components/footer/footer";

const queryClient = new QueryClient();

//showHeaderFooter 속성 추가
type CustomAppProps = AppProps & {
  Component: AppProps["Component"] & { showHeaderFooter?: boolean };
};

const MyApp: React.FC<CustomAppProps> = ({ Component, pageProps }) => {
  // 헤더 푸터 표시 여부 결정
  const showHeaderFooter = Component.showHeaderFooter !== false;

  return (
    <QueryClientProvider client={queryClient}>
      <AuthProvider>
        <ModalProvider>
          <StoreProvider>
            <Component {...pageProps} />
            {/* <ModalManager /> */}
          </StoreProvider>
        </ModalProvider>
      </AuthProvider>
    </QueryClientProvider>
  );
};

export default MyApp;
