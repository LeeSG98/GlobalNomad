import { ReactNode } from "react";

interface ListProps {
  icon?: ReactNode;
  title: string;
}

function List({ icon, title }: ListProps) {
  return (
    <>
      <div className="flex items-center gap-[14px] text-sm rounded-xl text-gray_A4 p-[12px] cursor-pointer hover:bg-green_CE hover:text-nomad_black">
        {icon}
        {title}
      </div>
    </>
  );
}

export default List;
