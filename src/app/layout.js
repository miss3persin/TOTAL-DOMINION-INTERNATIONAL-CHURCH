// import { Inter } from "next/font/google";
import "./globals.css";

// const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "TOTAL DOMINION INTERNATIONAL CHURCH",
  description: "Affecting Lives to Affect Our Generation",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body style={{ fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif" }}>{children}</body>
    </html>
  );
}
