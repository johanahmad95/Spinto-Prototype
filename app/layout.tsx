import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Nunito } from "next/font/google";
import { Toaster } from "sonner";
import "./globals.css";

const plusJakarta = Plus_Jakarta_Sans({
  variable: "--font-plus-jakarta",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
});

const nunito = Nunito({
  variable: "--font-nunito",
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "Sprinto | Book Courts in Seconds",
  description: "Sprinto helps you book pickleball, padel, tennis, badminton, and futsal courts across Klang Valley in seconds.",
  keywords: ["sports booking", "pickleball", "padel", "tennis", "badminton", "futsal", "Klang Valley", "Malaysia"],
  openGraph: {
    title: "Sprinto | Book Courts in Seconds",
    description:
      "Sprinto helps you book pickleball, padel, tennis, badminton, and futsal courts across Klang Valley in seconds.",
    images: ["/sprinto-final.png?v=1"],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Sprinto | Book Courts in Seconds",
    description:
      "Sprinto helps you book pickleball, padel, tennis, badminton, and futsal courts across Klang Valley in seconds.",
    images: ["/sprinto-final.png?v=1"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${plusJakarta.variable} ${nunito.variable} font-sans antialiased`} suppressHydrationWarning>
        {children}
        <Toaster position="top-center" richColors />
      </body>
    </html>
  );
}
