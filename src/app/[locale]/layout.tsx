import { NextIntlClientProvider } from "next-intl";
import { notFound } from "next/navigation";
import { routing } from "@i18n/routing";
import { getMessages } from "@i18n/getMessages";

import { Metadata } from "next";
import { inter, montserrat, poppins } from "@app/fonts";

import "../globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://warung-sumatra.pl"),
  title: "Warung Sumatra",
  description:
    "Official website of Warung Sumatra. Explore our menu, make a reservation, and learn more about our restaurant.",
  openGraph: {
    title: "Warung Sumatra",
    description:
      "Explore the delicious menu and cozy atmosphere of Warung Sumatra.",
    url: "https://warung-sumatra.pl",
    siteName: "Warung Sumatra Restaurant",
    images: [
      {
        url: "/og-image-goreng.jpg",
        width: 1200,
        height: 630,
        alt: "Warung Sumatra Restaurant",
      },
      {
        url: "/og-image-soups.jpg",
        width: 1200,
        height: 630,
        alt: "Warung Sumatra Restaurant",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Warung Sumatra",
    description:
      "Explore the delicious menu and cozy atmosphere of Warung Sumatra.",
    images: ["/og-image-goreng.jpg", "/og-image-soups.jpg"],
  },
};

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  if (!routing.locales.includes(locale as Locale)) {
    notFound();
  }

  const messages = await getMessages(locale as Locale);

  return (
    <html lang={locale}>
      <body
        className={` ${inter.variable} ${montserrat.variable} ${poppins.variable} antialiased`}
      >
        <NextIntlClientProvider locale={locale} messages={messages}>
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
