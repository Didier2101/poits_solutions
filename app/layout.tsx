import type { Metadata } from "next";
import "./globals.css";



export const metadata: Metadata = {
  title: "POINTS SOLUTIONS AND DIGITAL TRANSFORMATION SAS",
  description: "SOCIEDAD POR ACCIONES SIMPLIFICADA",
  icons: {
    icon: '/logo.svg',
    shortcut: '/logo.svg',
    apple: '/logo.svg',
  }
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className="bg-white">
        {children}
      </body>
    </html>
  );
}
