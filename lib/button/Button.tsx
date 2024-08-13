import { ReactNode } from "react";

type ButtonProps = {
  children: ReactNode;
};

export const Button = ({ children }: ButtonProps): ReactNode => (
  <button>Hello {children}!!!</button>
);
