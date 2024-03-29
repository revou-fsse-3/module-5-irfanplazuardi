import { ReactNode } from "react";

interface Props {
  className?: string;
  children: ReactNode;
}

const Text = ({ className, children }: Props) => {
  return <p className={className}>{children}</p>;
};

export default Text;
