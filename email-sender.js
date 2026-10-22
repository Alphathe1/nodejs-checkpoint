const nodemailer = require("nodemailer");

// Credentials come from environment variables so no password is stored in code.
// Gmail needs an "App Password" (Google Account > Security > 2-Step Verification > App passwords).
const { EMAIL_USER, EMAIL_PASS } = process.env;

if (!EMAIL_USER || !EMAIL_PASS) {
  console.error("Set EMAIL_USER and EMAIL_PASS environment variables first.");
  process.exit(1);
}

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: { user: EMAIL_USER, pass: EMAIL_PASS },
});

const mailOptions = {
  from: EMAIL_USER,
  to: EMAIL_USER, // send to yourself
  subject: "Sending Email using Node.js",
  text: "That was easy!",
};

transporter.sendMail(mailOptions, (error, info) => {
  if (error) {
    console.error("Error:", error.message);
  } else {
    console.log("Email sent: " + info.response);
  }
});
