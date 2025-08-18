import { NextRequest, NextResponse } from "next/server";
import { CaptchaGenerator } from "captcha-canvas";
import jwt from "jsonwebtoken";
import { translatedMessages } from "@app/api/translations";

const JWT_SECRET = process.env.JWT_SECRET!;

export async function GET(
  _: NextRequest,
  { params }: { params: Promise<{ locale: string }> }
) {
  const { locale: rawLocale } = await params;
  const locale = rawLocale as Locale;

  if (!locale || !translatedMessages.captcha[locale].generatingError) {
    return NextResponse.json({ message: "Invalid locale" }, { status: 400 });
  }

  try {
    const captcha = new CaptchaGenerator({ width: 150, height: 50 });

    captcha.setCaptcha({
      font: "35px OpenSans",
    });

    const buffer = await captcha.generate();
    const base64 = buffer.toString("base64");
    const text = captcha.text;

    const token = jwt.sign(
      { captcha: text, createdAt: Date.now() },
      JWT_SECRET,
      {
        expiresIn: "5m",
      }
    );

    return NextResponse.json(
      {
        image: `data:image/png;base64,${base64}`,
        token,
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("Captcha generation error:", error);

    return NextResponse.json(
      { message: translatedMessages.captcha[locale].generatingError },
      { status: 500 }
    );
  }
}
