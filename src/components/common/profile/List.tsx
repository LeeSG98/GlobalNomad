import { ReactNode } from "react";

interface ListProps {
  icon?: ReactNode;
  title: string;
}

function List({ icon, title }: ListProps) {
  return (
    <>
      <div className="flex cursor-pointer items-center gap-[14px] rounded-xl p-[12px] text-gray_A4 hover:bg-green_CE hover:text-nomad_black">
        {icon}
        {title}
      </div>
    </>
  );
}

export default List;
