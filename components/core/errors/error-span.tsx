import { ReactNode } from "react";

const ErrorSpan = ({ children }: { children: ReactNode }) => (
  <span className="text-error">{children}</span>
);

export default ErrorSpan;
