import { Footer } from "@/components";
import { Header } from "@/components/Header";
import { FC } from "react";

interface MainProps {
  children: React.ReactNode;
}
export const Main: FC<MainProps> = ({ children }) => {
  return (
    <div className="mx-auto my-0 min-h-full w-full max-w-7xl">
      <Header />
      <div className="flex flex-col pt-10 pb-10">{children}</div>
      <Footer />
    </div>
  );
};
