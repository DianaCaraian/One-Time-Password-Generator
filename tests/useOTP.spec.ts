import { test, expect } from "@playwright/test";
import { OTP_LENGTH, OTP_LIFETIME, SECOND_IN_MS } from "../src/consts";

const WEB_URL = "http://localhost:5173/";

test.describe("OTP Generator Tests", () => {
  test("should generate an OTP when a user ID is entered", async ({ page }) => {
    await page.goto(WEB_URL);

    await page.fill('input[name="userId"]', "user123");
    await page.click("#generateButton");

    const otpDisplay = await page.locator("text=One-Time Password: ");
    const otpValue = await page.textContent("#otp");

    await expect(otpDisplay).toBeVisible();
    expect(otpValue?.length).toBe(OTP_LENGTH);
  });

  test("The button should be disabled if userId is empty", async ({ page }) => {
    await page.goto(WEB_URL);
    await page.fill('input[name="userId"]', "");

    const generateButton = await page.locator("#generateButton");
    await expect(generateButton).not.toBeEnabled();
  });

  test(`OTP changes every ${OTP_LIFETIME} seconds`, async ({ page }) => {
    test.setTimeout(OTP_LIFETIME * SECOND_IN_MS + 10 * SECOND_IN_MS);
    await page.goto(WEB_URL);

    await page.fill('input[name="userId"]', "user123");
    await page.click("#generateButton");

    const initialOtpElement = page.locator("#otp");
    const initialOtp = await initialOtpElement.textContent();
    expect(initialOtp?.length).toBe(OTP_LENGTH);

    await page.waitForTimeout(OTP_LIFETIME * SECOND_IN_MS);

    const newOtpElement = page.locator("#otp");
    const newOtp = await newOtpElement.textContent();
    expect(newOtp).not.toBe(initialOtp);
  });
});
