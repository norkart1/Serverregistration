const generateOTPEmail = (email, otp) => {
  return `
    <div style="font-family: Arial, sans-serif; background-color: #f5f5f5; padding: 20px;">
      <div style="background-color: #ffffff; padding: 30px; border-radius: 8px; max-width: 600px; margin: 0 auto;">
        <h2 style="color: #1F3A70; margin-bottom: 20px;">Welcome to NorkCraft!</h2>
        <p style="color: #333; font-size: 16px; line-height: 1.6;">
          Your One-Time Password (OTP) for email verification is:
        </p>
        <div style="background-color: #f0f0f0; padding: 15px; border-radius: 5px; text-align: center; margin: 20px 0;">
          <span style="font-size: 32px; font-weight: bold; color: #1F3A70; letter-spacing: 5px;">
            ${otp}
          </span>
        </div>
        <p style="color: #666; font-size: 14px;">
          This OTP will expire in 10 minutes. If you did not request this code, please ignore this email.
        </p>
        <hr style="border: none; border-top: 1px solid #ddd; margin: 20px 0;">
        <p style="color: #999; font-size: 12px; margin: 10px 0;">
          NorkCraft Team
        </p>
      </div>
    </div>
  `;
};

module.exports = { generateOTPEmail };
