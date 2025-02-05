"use client";
import axiosReq from "@/utils/axiosHandler";
import { createContext } from "react";

export const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
  const registerUser = async (data) => {
    try {
      const res = await axiosReq("POST", "signup", data);
      // console.log(res);
      if (res.status === 201) {
        return {
          success: true,
        };
      }
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
      // console.log(res);
      if (res.status === 200) {
        return {
          success: true,
          data: res?.data,
        };
      }
    } catch (error) {
      console.log(`Error forgetting password ${error}`);
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
      // console.log(res);
      if (res?.status === 200) {
        return {
          success: true,
          data: res.data,
          error: null,
        };
      }
    } catch (error) {
      console.log(`Token verification failed: ${error}`);
      // console.log(error.response?.data?.error);
      return {
        success: false,
        data: null,
        error: error.response?.data?.error || "Something went wrong",
      };
    }
  };

  const resetPassword = async (data) => {
    try {
      const res = await axiosReq("POST", "reset-password", data);
      if (res.status === 200) {
        return {
          success: true,
        };
      }
    } catch (error) {
      console.log(`Error resetting password ${error}`);
      // console.log(error.response?.data);
      return {
        success: false,
        error: error?.response?.data || "Something went wrong",
      };
    }
  };

  return (
    <AuthContext.Provider
      value={{
        registerUser,
        forgetPassword,
        verifyToken,
        resetPassword,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
