import Input from "./Input";

const layout = "flex flex-col gap-[16px]";
const title = "text-xl font-bold";

export default function List() {
  return (
    <div className="flex flex-col gap-[32px]">
      <div className={layout}>
        <h2 className={title}>닉네임</h2>
        <Input placeholder="닉네임" />
      </div>
      <div className={layout}>
        <h2 className={title}>이메일</h2>
        <Input />
      </div>
      <div className={layout}>
        <h2 className={title}>비밀번호</h2>
        <Input />
      </div>
      <div className={layout}>
        <h2 className={title}>비밀번호 재입력</h2>
        <Input />
      </div>
    </div>
  );
}
