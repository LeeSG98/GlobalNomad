import React from "react";
import Link from "next/link";
import LoginForm from "@/components/signin/LoginForm";
import LinkToSignup from "@/components/signin/LinkToSignup";

const LoginPage = () => (
  <div>
    <Link href="/" legacyBehavior>
      <a>
        <img
          src="/image/logo.svg"
          alt="logo"
          className="ml-auto mr-auto mt-[104px] mb-[40px]"
        />
      </a>
    </Link>
    <LoginForm />
    <LinkToSignup />
  </div>
);

export default LoginPage;
