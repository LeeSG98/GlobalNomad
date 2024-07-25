import LinkToSignin from "@/components/signup/LinkToSignin";
import SignupForm from "@/components/signup/SignupForm";
import Link from "next/link";

const SignupPage = () => (
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
    <SignupForm />
    <LinkToSignin />
  </div>
);

export default SignupPage;
