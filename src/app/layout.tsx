import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Gift Mapote | Data Engineer",
  description:
    "Data Engineer with 3+ years of experience designing scalable data pipelines, cloud-based data platforms, and data models in high-volume banking environments.",
  icons: {
    icon: "/icon",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark">
      <body>{children}</body>
    </html>
  );
}
