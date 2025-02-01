import { NextResponse } from "next/server"
import sgMail from "@sendgrid/mail"

// Initialize SendGrid with your API key
sgMail.setApiKey(process.env.SENDGRID_API_KEY as string)

export async function POST(req: Request) {
  const { email, orderDetails } = await req.json()

  const msg = {
    to: email,
    from: "orders@thecoffeehouse.com", // Replace with your verified sender
    subject: "Your Coffee House Order Confirmation",
    text: `Thank you for your order!`,
    html: `
      <h1>Thank you for your order!</h1>
      <p>We've received your order and it's being processed.</p>
      <h2>Order Details:</h2>
      <pre>${JSON.stringify(orderDetails, null, 2)}</pre>
    `,
  }

  try {
    await sgMail.send(msg)
    return NextResponse.json({ success: true })
  } catch (error) {
    console.error(error)
    return NextResponse.json({ error: "Error sending email" }, { status: 500 })
  }
}

