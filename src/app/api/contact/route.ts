import { NextResponse } from 'next/server';

export async function POST(request: Request) {
    try {
        const { name, email, subject, message } = await request.json();

        const text = `
💬 New message from site:

👤 Name: ${name}
📧 Email: ${email}
📝 Theme: ${subject}
🖊️ Message:
${message}
        `;

        const botToken = process.env.TELEGRAM_BOT_TOKEN;
        const chatId = process.env.TELEGRAM_CHAT_ID;

        const res = await fetch(
            `https://api.telegram.org/bot${botToken}/sendMessage`,
            {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    chat_id: chatId,
                    text,
                    parse_mode: 'HTML',
                }),
            }
        );

        if (!res.ok) {
            console.error(await res.text());
            throw new Error('Failed to send message');
        }

        return NextResponse.json({ success: true });
    } catch (e) {
        return NextResponse.json(
            { success: false, error: (e as Error).message },
            { status: 500 }
        );
    }
}
