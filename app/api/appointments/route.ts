import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function GET() {
  try {
    const appointments = await prisma.appointment.findMany({
      orderBy: { createdAt: "desc" },
    });
    return NextResponse.json(appointments);
  } catch (error) {
    return NextResponse.json({ error: "Failed to fetch appointments" }, { status: 500 });
  }
}

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { service, carBrand, carModel, modelYear, date, time, fullName, phone, email, notes } = body;

    if (!service || !carBrand || !carModel || !fullName || !phone) {
      return NextResponse.json({ error: "Eskişiz veri doldurunuz" }, { status: 400 });
    }

    const appointment = await prisma.appointment.create({
      data: {
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

    return NextResponse.json(appointment, { status: 201 });
  } catch (error) {
    return NextResponse.json({ error: "Failed to save appointment" }, { status: 500 });
  }
}
