import type { FC, ReactNode } from "react";

export interface PButtonProps {
  className?: string;
  children: ReactNode;
}

export const PButton: FC<PButtonProps> = ({ className, children }) => {
  return <button className="">{children}</button>;
};
