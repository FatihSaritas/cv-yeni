import type { Metadata } from "next";
import "./globals.css";
import { LanguageProvider } from './context/LanguageContext';

export const metadata: Metadata = {
  title: "Fatih Sarıtaş - CV",
  description: "Fatih Sarıtaş - Yazılım Geliştirici CV",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="tr">
      <body>
        <LanguageProvider>
          {children}
        </LanguageProvider>
      </body>
    </html>
  );
}
