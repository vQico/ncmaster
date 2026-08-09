import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function GET() {
  try {
    let settings = await prisma.siteSetting.findUnique({
      where: { id: "default" },
    });

    if (!settings) {
      settings = await prisma.siteSetting.create({
        data: {
          id: "default",
          address: "Yenişehir, Mersin",
          fullAddress: "Limonluk Mahallesi, 18. Cadde, No: 76/A, 33011 Yenişehir / Mersin",
          phone: "+90 552 090 06 98",
          email: "info@ncmastergarage.com",
          workingHours: "Pzt – Cmt: 09:00 – 19:00 | Pazar: Randevu ile",
          googleMapsEmbedUrl: "https://maps.google.com/maps?q=Limonluk,+18.+Cd.+76+A,+33011+Yeni%C5%9Fehir%2FMersin&t=&z=16&ie=UTF8&iwloc=&output=embed",
          googleMapsLink: "https://maps.google.com/?q=Limonluk,+18.+Cd.+76+A,+33011+Yeni%C5%9Fehir%2FMersin",
        },
      });
    }

    const socialLinks = await prisma.socialMediaLink.findMany({
      orderBy: { order: "asc" },
    });

    return NextResponse.json({ settings, socialLinks });
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const {
      address,
      fullAddress,
      phone,
      email,
      workingHours,
      googleMapsEmbedUrl,
      googleMapsLink,
    } = body;

    const settings = await prisma.siteSetting.upsert({
      where: { id: "default" },
      update: {
        address,
        fullAddress,
        phone,
        email,
        workingHours,
        googleMapsEmbedUrl,
        googleMapsLink,
      },
      create: {
        id: "default",
        address,
        fullAddress,
        phone,
        email,
        workingHours,
        googleMapsEmbedUrl,
        googleMapsLink,
      },
    });

    return NextResponse.json({ success: true, settings });
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
