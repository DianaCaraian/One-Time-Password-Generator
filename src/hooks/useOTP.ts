import { useEffect, useState } from "react";
import { generatePassword } from "../utils";
import { OTP_LIFETIME, SECOND_IN_MS } from "../consts";

export const useOTP = () => {
  const [userId, setUserId] = useState<string>("");
  const [otp, setOtp] = useState<string>("");

  const handleGenerateClick = () => {
    setOtp(generatePassword(userId));
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setOtp(generatePassword(userId));
    }, OTP_LIFETIME * SECOND_IN_MS);

    return () => {
      clearInterval(interval);
    };
  }, [otp]);

  return { userId, setUserId, otp, handleGenerateClick };
};
