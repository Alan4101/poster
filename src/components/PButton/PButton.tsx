import { Button } from "@mui/material";

import type { FC, ReactNode } from "react";

export interface PButtonProps {
  className?: string;
  children: ReactNode;
}

export const PButton: FC<PButtonProps> = ({ className, children }) => {
  return <Button className={className}>{children}</Button>;
};
