import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";
import { AnalyticsPageview } from "@/components/analytics-pageview";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { GA_ID } from "@/lib/analytics";

export const metadata: Metadata = {
  title: "Lilaas | Industrial Control Systems",
  description: "Control components for marine and industrial use."
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
        <SiteHeader />
        {children}
        <SiteFooter />
      </body>
    </html>
  );
}
