const sendVerificationEmail = async (email, otp) => {
  try {
    console.log("Sending OTP email using EmailJS...");

    const {
      EMAILJS_SERVICE_ID,
      EMAILJS_TEMPLATE_ID,
      EMAILJS_PUBLIC_KEY,
      EMAILJS_PRIVATE_KEY,
    } = process.env;

    if (
      !EMAILJS_SERVICE_ID ||
      !EMAILJS_TEMPLATE_ID ||
      !EMAILJS_PUBLIC_KEY ||
      !EMAILJS_PRIVATE_KEY
    ) {
      throw new Error("EmailJS environment variables are missing.");
    }

    // Load the EmailJS Node.js SDK
    const emailjsModule = await import("@emailjs/nodejs");
    const emailjs = emailjsModule.default;

    // Values passed to your EmailJS OTP template
    const templateParams = {
      email: email,
      passcode: otp,
      time: "10 minutes",
    };

    const response = await emailjs.send(
      EMAILJS_SERVICE_ID,
      EMAILJS_TEMPLATE_ID,
      templateParams,
      {
        publicKey: EMAILJS_PUBLIC_KEY,
        privateKey: EMAILJS_PRIVATE_KEY,
      }
    );

    console.log(
      "EmailJS email sent successfully:",
      response.status
    );

    return response;

  } catch (error) {
    console.error(
      "EmailJS sending error:",
      error.text || error.message || error
    );

    throw error;
  }
};

module.exports = sendVerificationEmail;