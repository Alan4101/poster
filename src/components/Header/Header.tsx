import { Grid } from "@mui/material";
import type { FC } from "react";

export interface HeaderProps {
  className?: string;
}

export const Header: FC<HeaderProps> = ({ className }) => {
  return <Grid className={className}>Header</Grid>;
};
