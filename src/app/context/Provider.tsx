"use client";

import AuthProvider  from "./AuthContext";
import Header from "../components/Header"; // Header has "use client"

export default function Providers({ children }: { children: React.ReactNode }) {
  return (
    <AuthProvider>
      <Header />    {/* your client header here */}
      {children}
    </AuthProvider>
  );
}