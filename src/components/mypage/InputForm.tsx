import Input from "./Input";

export default function InputForm() {
  return (
    <div className="flex flex-col gap-[32px]">
      <Input label="닉네임" placeholder="현재 닉네임" />
      <Input label="이메일" placeholder="이메일" />
      <Input label="비밀번호" />
      <Input label="비밀번호 재입력" />
    </div>
  );
}
