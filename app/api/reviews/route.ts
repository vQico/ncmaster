import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function GET() {
  try {
    const reviews = await prisma.customerReview.findMany({
      orderBy: { createdAt: "desc" },
    });
    return NextResponse.json(reviews);
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { id, author, carModel, content, rating, isApproved } = body;

    if (!author || !content) {
      return NextResponse.json({ error: "Lütfen yazar adı ve yorum içeriğini giriniz." }, { status: 400 });
    }

    if (id) {
      const updated = await prisma.customerReview.update({
        where: { id },
        data: {
          author,
          carModel: carModel || "Egzotik Otomobil",
          content,
          rating: Number(rating) || 5,
          isApproved: isApproved !== undefined ? Boolean(isApproved) : true,
        },
      });
      return NextResponse.json({ success: true, review: updated });
    } else {
      const created = await prisma.customerReview.create({
        data: {
          author,
          carModel: carModel || "Egzotik Otomobil",
          content,
          rating: Number(rating) || 5,
          isApproved: isApproved !== undefined ? Boolean(isApproved) : true,
        },
      });
      return NextResponse.json({ success: true, review: created });
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
      return NextResponse.json({ error: "Eksik ID parametresi" }, { status: 400 });
    }

    await prisma.customerReview.delete({
      where: { id },
    });

    return NextResponse.json({ success: true });
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
