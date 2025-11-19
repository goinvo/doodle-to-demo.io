import type { Metadata } from "next";
import Script from "next/script";
import { IBM_Plex_Mono } from "next/font/google";
import "./globals.css";
import { MenuProvider } from "./components/Header";
import { VideoSyncProvider } from "./contexts/VideoSyncContext";
import { VideoVisibilityProvider } from "./contexts/VideoVisibilityContext";

const plexMono = IBM_Plex_Mono({
  variable: "--font-plex-mono",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Doodle to Demo",
  description: "Doodle to Demo - A presentation on creative workflows and design processes",
  openGraph: {
    title: "Doodle to Demo",
    description: "Doodle to Demo - A presentation on creative workflows and design processes",
    images: [
      {
        url: "/Newsletter_image.png",
        width: 1200,
        height: 630,
        alt: "Doodle to Demo",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Doodle to Demo",
    description: "Doodle to Demo - A presentation on creative workflows and design processes",
    images: ["/Newsletter_image.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${plexMono.variable} antialiased`}>
        {/* Google Analytics */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-1G92TNWDMP"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-1G92TNWDMP');
          `}
        </Script>
        <MenuProvider>
          <VideoSyncProvider>
            <VideoVisibilityProvider>
              {children}
            </VideoVisibilityProvider>
          </VideoSyncProvider>
        </MenuProvider>
      </body>
    </html>
  );
}
