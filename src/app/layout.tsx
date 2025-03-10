import { Inter } from 'next/font/google';
import './globals.css';
import { Metadata } from 'next';
import React from 'react';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'La Voie Job',
  description: 'La voie Job Admin Page',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}