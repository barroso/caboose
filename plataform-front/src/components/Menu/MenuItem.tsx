import React from "react";
import { Link } from "react-router-dom";

interface IProps {
  title: string;
  to: string;
  onClick: () => void;
  active?: boolean;
}

const MenuItem = ({ title, to, active, onClick }: IProps) => {
  const activeClass = active ? "border-blue-500 border-b-4" : "";

  return (
    <Link
      to={to}
      className={`py-4 px-2 text-blue-500 font-semibold border-blue-500 hover:border-blue-200 hover:border-b-4 ${activeClass}`}
      onClick={() => onClick()}>
      {title}
    </Link>
  );
};

export default MenuItem;
