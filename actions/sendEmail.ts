"use server";

// app/actions/sendEmail.ts

export const sendEmail = async (formData: FormData) => {
  try {
    const entries = Object.fromEntries(formData) as Record<string, FormDataEntryValue>;
    const senderEmail = typeof entries.senderEmail === "string" ? entries.senderEmail : "";
    const message = typeof entries.message === "string" ? entries.message : "";

    if (!senderEmail || !message) {
      return { success: false, message: "Sender email and message are required." };
    }

    const gmailUser = process.env.GMAIL_USER;
    const gmailPass = process.env.GMAIL_APP_PASSWORD;
    const recipientEmail = process.env.RECIPIENT_EMAIL || "sahilshinde3377@gmail.com";

    // If SMTP not configured, log and succeed (dev-friendly fallback)
    if (!gmailUser || !gmailPass) {
      console.log("📧 Email received (no SMTP configured):", {
        from: senderEmail,
        to: recipientEmail,
        message,
        timestamp: new Date().toISOString(),
      });
      return { success: true, message: "Email logged (configure SMTP to actually send)." };
    }

    const nodemailer = require("nodemailer");
    const transporter = require("nodemailer").createTransport({
      service: "gmail",
      auth: {
        user: gmailUser,
        pass: gmailPass,
      },
    });

    const info = await transporter.sendMail({
      from: gmailUser, // must be the authenticated sender
      to: recipientEmail,
      replyTo: senderEmail, // replies go to the form sender
      subject: "New Portfolio Contact Message",
      text: `From: ${senderEmail}\n\n${message}`,
      html: `<p><strong>From:</strong> ${senderEmail}</p><p>${message.replace(/\n/g, "<br>")}</p>`,
    });

    console.log("✅ Email sent:", info.messageId);
    return { success: true, message: "Email sent successfully." };
  } catch (error) {
    console.error("❌ Error sending email:", error);
    return { success: false, message: "Failed to send email." };
  }
};
  