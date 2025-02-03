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

  return (
    <AuthContext.Provider
      value={{
        registerUser,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
