import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

function generateTrackingCode(): string {
  const randomNum = Math.floor(100000 + Math.random() * 900000);
  return `NC-${randomNum}`;
}

export async function GET() {
  try {
    const appointments = await prisma.appointment.findMany({
      orderBy: { createdAt: "desc" },
    });
    return NextResponse.json(appointments);
  } catch (error: any) {
    return NextResponse.json({ error: error.message || "Failed to fetch appointments" }, { status: 500 });
  }
}

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { service, carBrand, carModel, modelYear, date, time, fullName, phone, email, notes } = body;

    if (!service || !carBrand || !carModel || !fullName || !phone) {
      return NextResponse.json({ error: "Lütfen gerekli tüm alanları doldurunuz" }, { status: 400 });
    }

    let trackingCode = generateTrackingCode();
    // Check for collision
    let exists = await prisma.appointment.findUnique({ where: { trackingCode } });
    while (exists) {
      trackingCode = generateTrackingCode();
      exists = await prisma.appointment.findUnique({ where: { trackingCode } });
    }

    const appointment = await prisma.appointment.create({
      data: {
        trackingCode,
        service,
        carBrand,
        carModel,
        modelYear: modelYear || "2024",
        date: date || new Date().toISOString().split("T")[0],
        time: time || "10:00",
        fullName,
        phone,
        email: email || null,
        notes: notes || null,
        status: "PENDING",
      },
    });

    return NextResponse.json({ success: true, trackingCode, appointment }, { status: 201 });
  } catch (error: any) {
    return NextResponse.json({ error: error.message || "Failed to save appointment" }, { status: 500 });
  }
}

export async function PATCH(req: Request) {
  try {
    const body = await req.json();
    const { id, status } = body;

    if (!id || !status) {
      return NextResponse.json({ error: "Missing id or status" }, { status: 400 });
    }

    const updated = await prisma.appointment.update({
      where: { id },
      data: { status },
    });

    return NextResponse.json({ success: true, appointment: updated });
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
