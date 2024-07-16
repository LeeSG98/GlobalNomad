import Link from "next/link";

const LinkToSignup = () => (
  <div className="mx-auto my-0 mt-8 flex w-[640px] items-center justify-center gap-2 font-normal">
    <div className="text-[#4B4B4B]">회원이신가요?</div>
    <Link href="/login" legacyBehavior>
      <a className="text-green-80 underline underline-offset-2">로그인하기</a>
    </Link>
  </div>
);

export default LinkToSignup;
