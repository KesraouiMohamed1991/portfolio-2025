import { NextResponse } from 'next/server';
import connect from '../../../lib/mongodb';
import Message from '../../../models/Message';
import Newsletter from '../../../models/Newsletter';

// POST method for handling newsletter subscription
export async function POST(req) {
    try {
        const { email } = await req.json();  // Extract email from request body

        if (!email) {
            return NextResponse.json(
                { error: "Email is required" },
                { status: 400 }
            );
        }

        // Connect to the database
        await connect();

        // Save the newsletter subscription in the Message collection
        const newsletterMessage = new Message({
            name: "Newsletter",
            email,
            message: "Subscribed to newsletter",
        });
        await newsletterMessage.save();

        // Save the email in the Newsletter collection
        const emailEntry = new Newsletter({ email });
        await emailEntry.save();

        return NextResponse.json(
            { message: 'Newsletter subscription successful, check your inbox' },
            { status: 200 }
        );
    } catch (error) {
        console.error('Error during registration:', error);
        return NextResponse.json(
            { error: "Internal Server Error" },
            { status: 500 }
        );
    }
}

// GET method to check if API is working
export async function GET() {
    return NextResponse.json(
        { message: "API is up and running 🚀" },
        { status: 200 }
    );
}
