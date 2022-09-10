import { ReactNode } from "react";
import { StyledButton } from "./styles";

interface IButtonProps {
  children: ReactNode;
}

export default function Button({ children }: IButtonProps) {
  return <StyledButton>{children}</StyledButton>;
}
