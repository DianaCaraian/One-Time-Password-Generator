import styles from "./OTPGenerator.module.css";
import { OTP_LIFETIME } from "../../consts";
import { useOTP } from "../../hooks/useOTP.ts";

const OTPGenerator = () => {
  const { userId, setUserId, otp, handleGenerateClick } = useOTP();

  return (
    <div className={styles.otpContainer}>
      <label>User ID</label>
      <input
        type="text"
        name="userId"
        placeholder="Enter User ID"
        value={userId}
        onChange={(e) => setUserId(e.target.value)}
        className={styles.otpInput}
      />
      <button
        className={styles.generateButton}
        id="generateButton"
        disabled={!userId}
        onClick={handleGenerateClick}
      >
        Generate
      </button>

      {otp && (
        <div>
          <p>One-Time Password: </p>
          <p id="otp">{otp}</p>
          <i className={styles.otpInfoMessage}>
            After {OTP_LIFETIME} seconds the password will be reset!
          </i>
        </div>
      )}
    </div>
  );
};

export default OTPGenerator;
