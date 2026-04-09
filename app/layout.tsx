import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";
import { AnalyticsPageview } from "@/components/analytics-pageview";
import { GA_ID } from "@/lib/analytics";

export const metadata: Metadata = {
  title: "Lilaas | Premium Industrial Control Systems",
  description:
    "High-precision control levers, joysticks and control systems for maritime, defense, medical and space applications."
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Script src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`} strategy="afterInteractive" />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            window.gtag = gtag;
            gtag('js', new Date());
            gtag('config', '${GA_ID}');
          `}
        </Script>
        <AnalyticsPageview />
        {children}
      </body>
    </html>
  );
}
