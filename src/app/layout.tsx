"use client"

import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { Provider } from 'react-redux';
import store from './store/store';

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <Provider store={store}>
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
    </Provider>
  );
}
