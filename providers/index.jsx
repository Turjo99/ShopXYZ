"use client";

import AuthProvider from "./AuthProvider";
// import AuthProvider from "./AuthProvider";
import ThemeProvider from "./ThemeProvider";

const Providers = ({ children }) => {
  return (
    <AuthProvider>
      <ThemeProvider>{children}</ThemeProvider>
    </AuthProvider>
  );
};

export default Providers;
