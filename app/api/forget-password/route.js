import { connect } from "@/config/connectDb";
import User from "@/models/userModel";
import { NextResponse } from "next/server";
import crypto from "crypto";
import sgMail from "@sendgrid/mail";

export const POST = async (req) => {
  const { email } = await req.json();

  try {
    await connect();

    const existingUser = await User.findOne({ email });

    if (!existingUser) {
      return new NextResponse("Email doesn't exist", { status: 400 });
    }

    const resetToken = crypto.randomBytes(20).toString("hex");

    const passwordResetToken = crypto
      .createHash("sha256")
      .update(resetToken)
      .digest("hex");

    // token will get expire after 1 hour
    const passwordResetExpires = Date.now() + 3600000;

    existingUser.resetToken = passwordResetToken;
    existingUser.resetTokenExpiry = passwordResetExpires;

    const resetUrl = `http://localhost:3000/auth/reset-password/${resetToken}`;

    const msg = {
      to: email,
      from: "rumaisanaved@gmail.com",
      subject: "Reset Password",
      text: `Reset password by clicking on the following URL: ${resetUrl}`,
      html: `<p>Reset password by clicking on the following URL: <a href="${resetUrl}">${resetUrl}</a></p>`,
    };

    sgMail.setApiKey(process.env.SENDGRID_API_KEY || "");

    await sgMail.send(msg);

    await existingUser.save();

    return new NextResponse("Reset password email is sent!", { status: 200 });
  } catch (error) {
    if (error.response) {
      console.error("SendGrid error: ", error.response.body);
    } else if (error.code === "ECONNREFUSED") {
      console.error("Failed to connect to SendGrid:", error);
    } else {
      console.error("Unexpected error: ", error);
    }

    if (existingUser) {
      existingUser.resetToken = undefined;
      existingUser.resetTokenExpiry = undefined;
      await existingUser.save();
    }

    return new NextResponse("Failed to send email. Please try again later.", {
      status: 500,
    });
  }
};
