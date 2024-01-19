import { ReactNode } from "react";
import { Card } from "@/components";

interface Props {
  children: ReactNode;
}

const Layout = ({ children }: Props) => {
  return <Card className="container">{children}</Card>;
};

export default Layout;
