
import type { Metadata } from "next";
import { Inter, Inter_Tight } from "next/font/google";


import '../styles.scss';
import 'bootstrap/dist/css/bootstrap.css';

const inter = Inter({ subsets: ["latin"] ,   display: 'swap',
  variable: '--font-inter'});
const inter_tight = Inter_Tight({ subsets: ["latin"],   display: 'swap',
  variable: '--font-inter-tight' });

export const metadata: Metadata = {
  title: "InstaDRApp",
  description: "Doctors at your fingertips",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={ `${inter.variable} ${inter_tight.variable}` }>{children}</body>
    </html>
  );
}
