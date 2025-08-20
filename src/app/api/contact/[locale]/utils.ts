import { NextResponse } from "next/server";

export function jsonError(message: string, status = 400) {
  console.log(message);
  return NextResponse.json({ success: false, message }, { status });
}
