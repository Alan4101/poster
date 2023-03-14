import { Grid } from "@mui/material";
import type { FC } from "react";

export interface FooterProps {
  className?: string;
}

export const Footer: FC<FooterProps> = ({ className }) => {
  return <Grid className={className}>Footer</Grid>;
};
