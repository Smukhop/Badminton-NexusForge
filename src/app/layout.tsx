import type { Metadata } from "next";
import "./globals.css";
import { Toaster } from "react-hot-toast";

export const metadata: Metadata = {
  title: "Badminton NexusForge - Analyze, Train, Connect",
  description: "An application to analyze badminton matches, explore player strategies, manage training plans, and track progress. Find coaches and tournaments using our interactive platform.",
  keywords: ["badminton", "training", "matches", "coaching", "tournaments", "sports analysis"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        {children}
        <Toaster 
          position="top-right"
          toastOptions={{
            duration: 4000,
            style: {
              background: '#363636',
              color: '#fff',
            },
          }}
        />
      </body>
    </html>
  );
}
