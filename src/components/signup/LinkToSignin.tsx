import Link from "next/link";

const LinkToSignup = () => (
  <div className="flex mx-auto my-0 w-[640px] items-center justify-center gap-2 font-normal mt-8">
    <div className="text-[#4B4B4B]">회원이신가요?</div>
    <Link href="/signin" legacyBehavior>
      <a className="text-green-80 underline underline-offset-2">로그인하기</a>
    </Link>
  </div>
);

export default LinkToSignup;
