import { NextRequest, NextResponse } from "next/server";
import jwt from "jsonwebtoken";
import { translatedMessages } from "@app/api/translations";

const JWT_SECRET = process.env.JWT_SECRET!;

export async function POST(
  req: NextRequest,
  { params }: { params: Promise<{ locale: string }> }
) {
  const { token, userResponse } = await req.json();
  const { locale } = (await params) as { locale: Locale };

  try {
    const payload = jwt.verify(token, JWT_SECRET) as {
      captcha: string;
      createdAt: number;
    };

    if (payload.captcha.toLowerCase() === userResponse.toLowerCase()) {
      return NextResponse.json({ success: true, message: "OK!" });
    } else {
      return NextResponse.json(
        {
          success: false,
          message: translatedMessages.captcha[locale].incorrect,
        },
        { status: 400 }
      );
    }
  } catch {
    return NextResponse.json(
      {
        success: false,
        message: translatedMessages.captcha[locale].invalidToken,
      },
      { status: 400 }
    );
  }
}
