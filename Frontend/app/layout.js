"use client";
import { usePathname } from "next/navigation";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import "./globals.css";

export default function RootLayout({ children }) {
  const pathname = usePathname();

  // Define auth routes where navbar/sidebar should not appear
  const authRoutes = ["/auth/sign-up", "/auth/company-details", "/auth/login", "/auth/forget"];
  const isAuthPage = authRoutes.includes(pathname);

  if (isAuthPage) {
    return (
      <html lang="en">
        <body>{children}</body>
      </html>
    );
  }

  return (
    <html lang="en">
      <body>
        <Navbar />
        <div style={{ display: "flex", height: "calc(100vh - 50px)" }}>
          <Sidebar />
          <main style={{ flex: 1, padding: "20px", overflowY: "auto" }}>
            {children}
          </main>
        </div>
      </body>
    </html>
  );
}
