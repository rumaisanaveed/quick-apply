import { connect } from "@/config/connectDb";
import User from "@/models/userModel";
import crypto from "crypto";
import { NextResponse } from "next/server";

export const POST = async (req) => {
  try {
    const { token } = await req.json();

    if (!token) {
      return NextResponse.json({ error: "Token is required" }, { status: 400 });
    }

    await connect();

    const hashedToken = crypto.createHash("sha256").update(token).digest("hex");

    // Find user with valid reset token
    const user = await User.findOne({
      resetToken: hashedToken,
      resetTokenExpiry: { $gt: Date.now() },
    });

    if (!user) {
      return NextResponse.json(
        { error: "Invalid or expired token" },
        { status: 400 }
      );
    }

    return NextResponse.json(
      { success: true, message: "Token verified successfully", user },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error verifying token:", error);

    return NextResponse.json(
      { error: "Something went wrong, please try again." },
      { status: 500 }
    );
  }
};
