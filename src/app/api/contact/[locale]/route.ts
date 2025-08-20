import { NextRequest, NextResponse } from "next/server";
import jwt from "jsonwebtoken";
import { translatedMessages } from "@app/api/translations";
import { ContactFormData } from "@src/components/contact/types";
import { sendEmail } from "../send-mail/send-email";
import { jsonError } from "./utils";

const JWT_SECRET = process.env.JWT_SECRET!;

export async function POST(
  req: NextRequest,
  { params }: { params: Promise<{ locale: string }> }
) {
  const { name, email, message, captcha, token } =
    (await req.json()) as ContactFormData;

  const { locale: rawLocale } = await params;
  const locale = rawLocale as Locale;

  if (!token) return jsonError(translatedMessages.captcha[locale].tokenMissing);
  if (!captcha) return jsonError(translatedMessages.captcha[locale].missing);
  if (!name || !email || !message || !locale) {
    return jsonError(translatedMessages.email[locale].allFieldsRequired);
  }

  let payload: { captcha: string; createdAt: number };

  try {
    payload = jwt.verify(token, JWT_SECRET) as typeof payload;
  } catch {
    return jsonError(translatedMessages.captcha[locale].invalidToken);
  }

  if (payload.captcha.toLowerCase() !== captcha.toLowerCase()) {
    return jsonError(translatedMessages.captcha[locale].incorrect);
  }

  try {
    await sendEmail({ name, email, message, captcha }, locale);
    return NextResponse.json({
      success: true,
      message: translatedMessages.email[locale].emailSent,
    });
  } catch (error) {
    console.error("Error sending email:", error);
    return jsonError(String(error), 500);
  }
}
