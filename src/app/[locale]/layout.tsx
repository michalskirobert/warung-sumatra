import { NextIntlClientProvider } from "next-intl";
import { notFound } from "next/navigation";
import { routing } from "@i18n/routing";
import { getMessages } from "@i18n/getMessages";

import { Metadata } from "next";
import { inter, montserrat, permanent_Marker, poppins } from "@app/fonts";

import "../globals.css";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const messages = await getMessages(locale as Locale);

  return {
    metadataBase: new URL("https://warung-sumatra.pl"),
    title: messages["metadata-title"] ?? "",
    description: messages["metadata-desc"] ?? "",
    openGraph: {
      title: messages["metadata-openGraph-title"] ?? "",
      description: messages["metadata-openGraph-desc"] ?? "",
      url: "https://warung-sumatra.pl",
      siteName: messages["metadata-openGraph-site-name"] ?? "",
      images: [
        {
          url: "/og-image-goreng.jpg",
          width: 1200,
          height: 630,
          alt: messages["metadata-openGraph-title"] ?? "",
        },
        {
          url: "/og-image-soups.jpg",
          width: 1200,
          height: 630,
          alt: messages["metadata-openGraph-title"] ?? "",
        },
      ],
      locale: locale === "pl" ? "pl_PL" : locale === "id" ? "id_ID" : "en_US",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: messages["metadata-title"] ?? "",
      description: messages["metadata-desc"] ?? "",
      images: ["/og-image-goreng.jpg", "/og-image-soups.jpg"],
    },
  };
}

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
        className={` ${inter.variable} ${montserrat.variable} ${poppins.variable} ${permanent_Marker.variable} antialiased`}
      >
        <NextIntlClientProvider locale={locale} messages={messages}>
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
