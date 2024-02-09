'use client'
import { useState } from "react";
import DanCheck from "./dan-check";
import PasswordCheck from "./password-check";
import YouAreNotDan from "./your-are-not-dan";

const VerifyDan = () => {
  const [saysIsDan, setSaysIsDan] = useState(false);
  const [rejected, setRejected] = useState(false);
  return (
    <>
      {
        saysIsDan && !rejected? (
          <PasswordCheck setRejected={setRejected} />
        ) : null
      }

      {
        !saysIsDan && !rejected ? (
          <DanCheck setSaysIsDan={setSaysIsDan} setRejected={setRejected} />
        ) : null
      }

      {
        rejected ? (
          <YouAreNotDan />
        ) : null
      }
    </>
  )
};

export default VerifyDan;
