import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "JAFF Studio - AI Automation, Web Development & Social Media",
  description: "Swiss-Kurdish digital agency specializing in AI automation, web development, and social media marketing. Clean, high-performance solutions that convert.",
  keywords: ["AI Automation", "Web Development", "Social Media Marketing", "Digital Agency", "Switzerland"],
  authors: [{ name: "JAFF Studio" }],
  openGraph: {
    title: "JAFF Studio - Digital Agency",
    description: "AI Automation, Web Development & Social Media Marketing",
    type: "website",
  },
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
      </body>
    </html>
  );
}
