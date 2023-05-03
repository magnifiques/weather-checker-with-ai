import Head from "next/head";
import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "How's the Weather?",
  description: "Check the weather with the power of AI!",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <Head>
        <link rel="shortcut Icon" href="/next.svg"></link>
      </Head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
