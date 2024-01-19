import { CSSProperties, ReactNode } from "react";
import styled from "styled-components";

interface Props {
  children: ReactNode;
  border?: CSSProperties["border"];
  className?: string;
  display?: CSSProperties["display"];
  width?: CSSProperties["width"];
  height?: CSSProperties["height"];
  borderRadius?: CSSProperties["borderRadius"];
  paddingLeft?: CSSProperties["paddingLeft"];
  paddingRight?: CSSProperties["paddingRight"];
  paddingTop?: CSSProperties["paddingTop"];
  PaddingBottom?: CSSProperties["paddingBottom"];
  marginTop?: CSSProperties["marginTop"];
  marginBottom?: CSSProperties["marginBottom"];
  marginRight?: CSSProperties["marginRight"];
  marginLeft?: CSSProperties["marginLeft"];
}

const BaseCard = styled.div<Props>`
  classname: ${(props) => props.className};
  display: ${(props) => props.display};
  border: ${(props) => props.border};
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  border-radius: ${(props) => props.borderRadius};
  padding-left: ${(props) => props.paddingLeft};
  padding-right: ${(props) => props.paddingRight};
  padding-top: ${(props) => props.paddingTop};
  padding-bottom: ${(props) => props.PaddingBottom};
  margin-top: ${(props) => props.marginTop};
  margin-bottom: ${(props) => props.marginBottom};
  margin-right: ${(props) => props.marginRight};
  margin-left: ${(props) => props.marginLeft};
`;

const Card = ({ children, ...restprops }: Props) => {
  return <BaseCard {...restprops}>{children}</BaseCard>;
};

export default Card;
