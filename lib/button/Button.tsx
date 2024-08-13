import { ReactNode } from "react";

type ButtonProps = {
  children: ReactNode;
};

export const Button = ({ children }: ButtonProps): ReactNode => (
  <button className="bg-blue-700 text-white px-3 py-1 rounded-md">
    {children}
  </button>
);
