import Image from "next/image";
import { ReactNode } from "react";

const ErrorContainer = ({ children }: { children : ReactNode }) => (
  <div className="border border-error rounded p-4">
    <div>
      <Image
        priority={true}
        className={`
          w-12 h-12 mb-4
          mx-auto
        `}
        src="/images/half-coconut.png"
        alt="Broken coconut"
        width={25}
        height={25}
      />

    </div>
    {children}
  </div>
);

export default ErrorContainer;
