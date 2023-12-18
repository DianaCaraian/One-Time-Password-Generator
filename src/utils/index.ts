import CryptoJS from "crypto-js";
import { OTP_LENGTH } from "../consts";

export const generatePassword = (userId: string): string => {
  const secret = import.meta.env.VITE_SECRET_KEY;
  const timestamp = Math.floor(Date.now() / 1000);
  const hash = CryptoJS.HmacSHA256(`${userId}${timestamp}`, secret);
  return CryptoJS.enc.Base64.stringify(hash).substring(0, OTP_LENGTH);
};
