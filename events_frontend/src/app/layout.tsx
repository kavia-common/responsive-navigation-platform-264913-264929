import "./globals.css";
import type { Metadata } from "next";
import { Sidebar } from "@/components/layout/Sidebar";
import { TopBar } from "@/components/layout/TopBar";

export const metadata: Metadata = {
  title: "Events",
  description: "Modern events platform UI"
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <div className="shell">
          <Sidebar />
          <div className="content">
            <TopBar />
            <main className="main">
              <div className="container">{children}</div>
            </main>
          </div>
        </div>
      </body>
    </html>
  );
}
