import React from "react";

interface Props {
  title: string;
  isActive?: boolean
  onClick?: () => void
}

function NavButton({ title, isActive, onClick }: Props) {
  return (
    <button onClick={onClick} className={`${isActive && "bg-[#036756]"} hover:bg-[#036757] font-bold text-white py-2 px-2 rounded`} >
      {title}
    </ button>
  )
}

export default NavButton;