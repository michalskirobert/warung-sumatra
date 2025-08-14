import { timeStamp } from "console";
import { NextRequest, NextResponse } from "next/server";

export const GET = (req: NextRequest) => {
  return NextResponse.json(
    {
      status: 200,
      message: "Success",
      timeStamp: timeStamp(),
      isProduction: process.env.NODE_ENV === "production",
      domain: req.headers.get("host"),
    },
    { status: 200 }
  );
};
