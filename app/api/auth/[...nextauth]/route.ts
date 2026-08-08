import NextAuth from "next-auth";
import { authOptions } from "@/lib/auth";

const nextAuth = NextAuth(authOptions) as any;

export async function GET(request: Request) {
  if (typeof nextAuth === "function") {
    return nextAuth(request);
  }
  return nextAuth.handlers.GET(request);
}

export async function POST(request: Request) {
  if (typeof nextAuth === "function") {
    return nextAuth(request);
  }
  return nextAuth.handlers.POST(request);
}
