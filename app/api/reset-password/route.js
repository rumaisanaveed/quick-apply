import bcrypt from "bcryptjs";

import { connect } from "@/config/connectDb";
import User from "@/models/userModel";
import { NextResponse } from "next/server";

export const POST = async (req) => {
  const { email, password } = await req.json();

  await connect();

  const existingUser = await User.findOne({ email });

  // update the current user's password
  const hashedPassword = await bcrypt.hash(password, 10);
  existingUser.password = hashedPassword;

  existingUser.resetToken = undefined;
  existingUser.resetTokenExpiry = undefined;

  try {
    await existingUser.save();
    return new NextResponse("User password updated successfully", {
      status: 200,
    });
  } catch (error) {
    return new NextResponse(error, {
      status: 500,
    });
  }
};
