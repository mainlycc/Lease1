import { NextResponse } from 'next/server';
import twilio from 'twilio';
import { TWILIO_CONFIG } from '@/lib/twilio-config';

const client = twilio(TWILIO_CONFIG.accountSid, TWILIO_CONFIG.authToken);

export async function POST(request: Request) {
  try {
    const { phoneNumber } = await request.json();

    // Tworzymy połączenie między klientem a Twoim numerem
    const call = await client.calls.create({
      to: TWILIO_CONFIG.yourPhoneNumber!, // Twój numer
      from: TWILIO_CONFIG.phoneNumber!, // Numer Twilio
      url: TWILIO_CONFIG.twimlAppUrl, // Używamy Twojego TwiML App URL
    });

    return NextResponse.json({ success: true, callSid: call.sid });
  } catch (error) {
    console.error('Error creating call:', error);
    return NextResponse.json(
      { error: 'Nie udało się zainicjować połączenia' },
      { status: 500 }
    );
  }
} 