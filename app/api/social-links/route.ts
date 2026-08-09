import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function GET() {
  try {
    const socialLinks = await prisma.socialMediaLink.findMany({
      orderBy: { order: "asc" },
    });
    return NextResponse.json(socialLinks);
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { id, platform, title, url, iconName, isActive, order } = body;

    if (id) {
      const updated = await prisma.socialMediaLink.update({
        where: { id },
        data: {
          platform,
          title,
          url,
          iconName,
          isActive,
          order: order ?? 0,
        },
      });
      return NextResponse.json({ success: true, link: updated });
    } else {
      const created = await prisma.socialMediaLink.create({
        data: {
          platform,
          title,
          url,
          iconName: iconName || "globe",
          isActive: isActive !== undefined ? isActive : true,
          order: order ?? 0,
        },
      });
      return NextResponse.json({ success: true, link: created });
    }
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}

export async function DELETE(req: Request) {
  try {
    const { searchParams } = new URL(req.url);
    const id = searchParams.get("id");

    if (!id) {
      return NextResponse.json({ error: "Missing ID" }, { status: 400 });
    }

    await prisma.socialMediaLink.delete({
      where: { id },
    });

    return NextResponse.json({ success: true });
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
