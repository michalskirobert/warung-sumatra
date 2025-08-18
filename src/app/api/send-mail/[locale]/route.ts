import { NextRequest, NextResponse } from "next/server";
import { sendEmail } from "../send-email";
import { translatedMessages } from "@app/api/translations";
import { ContactFormData } from "@components/contact/types";

export const POST = async (
  req: NextRequest,
  { params }: { params: Promise<{ locale: string }> }
) => {
  const { name, email, message } = (await req.json()) as ContactFormData;

  const { locale: rawLocale } = await params;
  const locale = rawLocale as Locale;

  if (!name || !email || !message || !locale) {
    return NextResponse.json(
      { error: translatedMessages.email[locale].allFieldsRequired },
      { status: 400 }
    );
  }

  try {
    const response = await sendEmail({ name, email, message }, locale);

    return NextResponse.json(response, { status: 200 });
  } catch (error) {
    return NextResponse.json(error, { status: 500 });
  }
};
