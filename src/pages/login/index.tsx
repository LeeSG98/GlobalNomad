import React from "react";
import Link from "next/link";
import LoginForm from "@/components/login/LoginForm";
import LinkToSignup from "@/components/login/LinkToSignup";
import { BrowserRouter } from "react-router-dom";

const LoginPage = () => (
  <div>
    <Link href="/" legacyBehavior>
      <a>
        <img
          src="/image/logo.svg"
          alt="logo"
          className="mb-[40px] ml-auto mr-auto mt-[104px]"
        />
      </a>
    </Link>
    <LoginForm />
    <LinkToSignup />
  </div>
);

export default LoginPage;
