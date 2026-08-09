import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function GET(req: Request) {
  try {
    const { searchParams } = new URL(req.url);
    const query = searchParams.get("query") || searchParams.get("code") || "";

    if (!query.trim()) {
      return NextResponse.json({ error: "Lütfen bir Takip Kodu (Örn: NC-123456) veya Telefon Numarası girin." }, { status: 400 });
    }

    const cleanQuery = query.trim();

    // 1. Try finding by tracking code
    let appointment = await prisma.appointment.findFirst({
      where: {
        OR: [
          { trackingCode: { equals: cleanQuery } },
          { trackingCode: { equals: cleanQuery.toUpperCase() } },
          { id: { equals: cleanQuery } },
          { phone: { contains: cleanQuery.replace(/\s+/g, "") } },
        ],
      },
      orderBy: { createdAt: "desc" },
    });

    if (!appointment) {
      return NextResponse.json({ error: `"${cleanQuery}" numaralı kayıt bulunamadı. Lütfen bilgilerinizi kontrol edip tekrar deneyin.` }, { status: 404 });
    }

    return NextResponse.json({ success: true, appointment });
  } catch (error: any) {
    return NextResponse.json({ error: error.message || "Sorgulama başarısız oldu" }, { status: 500 });
  }
}
