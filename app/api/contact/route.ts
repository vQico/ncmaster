import { NextResponse } from "next/server";
import { db } from "@/lib/db";
import { z } from "zod";
import crypto from "crypto";

// Zod schema for validation
const contactSchema = z.object({
  fullName: z.string().min(3, "Ad Soyad en az 3 karakter olmalıdır"),
  phone: z.string().min(10, "Geçerli bir telefon numarası giriniz"),
  vehicle: z.string().optional(),
  message: z.string().min(10, "Mesajınız çok kısa"),
  honeypot: z.string().max(0, "Spam detected"), // Must be empty
});

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const result = contactSchema.safeParse(body);

    if (!result.success) {
      return NextResponse.json(
        { error: "Validasyon hatası", details: result.error.format() },
        { status: 400 }
      );
    }

    if (result.data.honeypot.length > 0) {
      // Silently reject bots
      return NextResponse.json({ success: true }, { status: 200 });
    }

    const ip = request.headers.get("x-forwarded-for") || "unknown";

    // Rate limiting would normally go here using Redis
    // For this scaffold, we'll proceed directly to DB

    const newMessage = await db.contactMessage.create({
      data: {
        fullName: result.data.fullName,
        phone: result.data.phone,
        vehicle: result.data.vehicle,
        message: result.data.message,
        ipAddress: ip,
        status: "NEW",
      },
    });

    // Send email using Nodemailer (placeholder)
    // await sendAdminNotification(newMessage);

    return NextResponse.json(
      { success: true, message: "Mesajınız başarıyla alındı." },
      { status: 201 }
    );
  } catch (error) {
    console.error("[CONTACT_POST]", error);
    return NextResponse.json(
      { error: "Sunucu hatası oluştu" },
      { status: 500 }
    );
  }
}
