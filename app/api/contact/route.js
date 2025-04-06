import { NextResponse } from 'next/server';
import connect from '../../../lib/mongodb';
import Message from '../../../models/Message';

// Méthode POST — Enregistrement du message
export async function POST(req) {
  try {
    await connect();
    const { name, email, message } = await req.json();

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "All fields are required." },
        { status: 400 }
      );
    }

    const newMessage = new Message({ name, email, message });
    console.log("New message:", newMessage);

    await newMessage.save();

    return NextResponse.json(
      { message: "Thank you for your Message ! We will contact you soon." },
      { status: 201 }
    );
  } catch (error) {
    console.error("POST error:", error);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}

// Méthode GET — Juste pour vérifier que l'API fonctionne
export async function GET() {
  return NextResponse.json(
    { message: "API is up and running 🚀" },
    { status: 200 }
  );
}
