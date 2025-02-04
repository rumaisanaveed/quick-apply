"use client";
import axiosReq from "@/utils/axiosHandler";
import { createContext } from "react";

export const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
  const registerUser = async (data) => {
    try {
      const res = await axiosReq("POST", "signup", data);
      console.log(res);
      if (res.status === 201) {
        return {
          success: true,
        };
      }
      return {
        success: false,
        error: res.data?.error || "Something went wrong",
      };
    } catch (error) {
      console.log(`Error ${error}`);
      return {
        success: false,
        error: error.response?.data?.error || "Internal Server Error",
      };
    }
  };

  const forgetPassword = async (data) => {
    try {
      const res = await axiosReq("POST", "forget-password", data);
      console.log(res);
      if (res.status === 200) {
        return {
          success: true,
          data: res?.data,
        };
      }
      if (res?.data?.error) {
        return {
          success: false,
          error: res.data?.error || "Something went wrong",
        };
      }
      return { success: true };
    } catch (error) {
      console.log(error);
      const errorMsg = error?.response?.data || "Internal Server Error";
      return {
        success: false,
        error: errorMsg,
      };
    }
  };

  const verifyToken = async (data) => {
    try {
      const res = await axiosReq("POST", "verify-token", data);
      console.log(res);
      if (res?.status === 200) {
        return {
          success: true,
          data: res.data,
          error: null,
        };
      }

      return {
        success: false,
        data: null,
        error: res.data?.error || "Unexpected response from server",
      };
    } catch (error) {
      console.log("Token verification failed:", error);

      return {
        success: false,
        data: null,
        error: error.response?.data?.error || "Something went wrong",
      };
    }
  };

  return (
    <AuthContext.Provider
      value={{
        registerUser,
        forgetPassword,
        verifyToken,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
