// src/RootLayout.jsx
import { Toaster } from "@/components/ui/sonner";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head />
      <body>
        {children}
        <Toaster />
      </body>
    </html>
  );
}
