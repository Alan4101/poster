import { Footer } from "@/components";
import { Header } from "@/components/Header";
import { Container, Grid } from "@mui/material";
import { FC } from "react";

import { root } from "./Main.styles";
interface MainProps {
  children: React.ReactNode;
}
export const Main: FC<MainProps> = ({ children }) => {
  return (
    <Container sx={root.container}>
      <Header />
      <Grid sx={root.inner}>{children}</Grid>
      <Footer />
    </Container>
  );
};
