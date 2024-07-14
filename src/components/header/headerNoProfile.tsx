const NoProfileImage = ({ nickname }: { nickname: string }) => {
  const nicknameInitial = nickname[0];
  return (
    <div className="flex h-8 w-8 items-center justify-center rounded-full bg-slate-400 text-white">
      {nicknameInitial}
    </div>
  );
};
export default NoProfileImage;
