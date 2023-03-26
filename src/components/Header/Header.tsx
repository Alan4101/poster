import type { FC } from "react";

export interface HeaderProps {
  className?: string;
}

export const Header: FC<HeaderProps> = ({ className }) => {
  return (
    <div className="flex h-16 w-full justify-center">
      <ul className="flex w-full max-w-xl cursor-pointer list-none items-center justify-between">
        <li className="border-b-2 border-transparent p-3 hover:border-sky-600">
          Home
        </li>
        <li className="border-b-2 border-transparent p-3 hover:border-sky-600">
          Main
        </li>
        <li className="border-b-2 border-transparent p-3 hover:border-sky-600">
          About
        </li>
      </ul>
    </div>
  );
};
