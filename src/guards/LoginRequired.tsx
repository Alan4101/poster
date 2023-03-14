import { useRouter } from "next/router";
import { FC, useEffect, useState } from "react";

interface LoginRequiredProps {
  children: React.ReactNode;
}
export const LoginRequired: FC<LoginRequiredProps> = ({ children }) => {
  //TODO: add selector with token
  const accessToken = "";

  const router = useRouter();

  const [hasToken, setHastoken] = useState(false);

  useEffect(() => {
    if (!accessToken) {
      router.push("/auth/login");
    }

    setHastoken(true);
  }, [accessToken]);

  return hasToken ? <>{children}</> : null;
};
