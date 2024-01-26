import { CSSProperties, ReactNode } from "react";
import styled from "styled-components";

interface Props {
  children: ReactNode;
  className?: string;
}

const BaseCard = styled.div<Props>`
  classname: ${(props) => props.className};
`;

const Card = ({ children, ...restprops }: Props) => {
  return <BaseCard {...restprops}>{children}</BaseCard>;
};

export default Card;
