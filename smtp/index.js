require("dotenv").config();
const express = require("express");
const nodemailer = require("nodemailer");
const cors = require("cors");

const app = express();
const PORT = process.env.PORT || 3001;

app.use(cors({
  origin: (origin, callback) => {
    const allowed = [
      process.env.CLIENT_ORIGIN,
      "http://localhost:5173",
      "http://localhost:8080",
      "http://127.0.0.1:5173",
      "http://127.0.0.1:8080",
    ].filter(Boolean);
    if (!origin || allowed.includes(origin)) return callback(null, true);
    callback(new Error("Not allowed by CORS"));
  },
  credentials: true,
}));
app.use(express.json());

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
});

app.get("/health", (req, res) => {
  res.status(200).json({ status: "ok", timestamp: new Date().toISOString() });
});

app.post("/api/contact", async (req, res) => {
  const { firstName, lastName, email, subject, message } = req.body;

  if (!firstName || !lastName || !email || !subject || !message) {
    return res.status(400).json({ error: "All fields are required." });
  }

  const mailOptions = {
    from: `"Portfolio Contact" <${process.env.SMTP_USER}>`,
    to: "nesibkerimzade@gmail.com",
    replyTo: email,
    subject: `[Portfolio] ${subject}`,
    html: `
      <!DOCTYPE html>
      <html lang="en">
      <head><meta charset="UTF-8" /><meta name="viewport" content="width=device-width, initial-scale=1.0" /></head>
      <body style="margin:0;padding:0;background:#f0f0f0;font-family:'Helvetica Neue',Helvetica,Arial,sans-serif;">
        <table width="100%" cellpadding="0" cellspacing="0" style="background:#f0f0f0;padding:40px 0;">
          <tr>
            <td align="center">
              <table width="600" cellpadding="0" cellspacing="0" style="background:#ffffff;border-radius:4px;overflow:hidden;box-shadow:0 2px 12px rgba(0,0,0,0.08);">

                <!-- Header -->
                <tr>
                  <td style="background:#000000;padding:32px 40px;">
                    <p style="margin:0;font-size:11px;font-weight:700;letter-spacing:0.2em;text-transform:uppercase;color:#ffffff;opacity:0.5;">Portfolio</p>
                    <h1 style="margin:8px 0 0;font-size:22px;font-weight:800;color:#ffffff;letter-spacing:-0.03em;">New Message</h1>
                  </td>
                </tr>

                <!-- Meta info -->
                <tr>
                  <td style="padding:32px 40px 0;">
                    <table width="100%" cellpadding="0" cellspacing="0">
                      <tr>
                        <td style="padding:10px 0;border-bottom:1px solid #f0f0f0;width:110px;font-size:11px;font-weight:700;letter-spacing:0.12em;text-transform:uppercase;color:#999999;">From</td>
                        <td style="padding:10px 0;border-bottom:1px solid #f0f0f0;font-size:14px;color:#111111;font-weight:600;">${firstName} ${lastName}</td>
                      </tr>
                      <tr>
                        <td style="padding:10px 0;border-bottom:1px solid #f0f0f0;font-size:11px;font-weight:700;letter-spacing:0.12em;text-transform:uppercase;color:#999999;">Email</td>
                        <td style="padding:10px 0;border-bottom:1px solid #f0f0f0;font-size:14px;"><a href="mailto:${email}" style="color:#000000;text-decoration:underline;">${email}</a></td>
                      </tr>
                      <tr>
                        <td style="padding:10px 0;font-size:11px;font-weight:700;letter-spacing:0.12em;text-transform:uppercase;color:#999999;">Subject</td>
                        <td style="padding:10px 0;font-size:14px;color:#111111;font-weight:600;">${subject}</td>
                      </tr>
                    </table>
                  </td>
                </tr>

                <!-- Message body -->
                <tr>
                  <td style="padding:24px 40px 40px;">
                    <p style="margin:0 0 12px;font-size:11px;font-weight:700;letter-spacing:0.12em;text-transform:uppercase;color:#999999;">Message</p>
                    <div style="background:#f7f7f7;border-left:3px solid #000000;border-radius:0 4px 4px 0;padding:20px 24px;">
                      <p style="margin:0;font-size:15px;line-height:1.7;color:#222222;white-space:pre-wrap;">${message}</p>
                    </div>
                  </td>
                </tr>

                <!-- Footer -->
                <tr>
                  <td style="background:#f7f7f7;padding:20px 40px;border-top:1px solid #eeeeee;">
                    <p style="margin:0;font-size:11px;color:#aaaaaa;letter-spacing:0.05em;">Nasib Karimzade — Portfolio Contact Form</p>
                  </td>
                </tr>

              </table>
            </td>
          </tr>
        </table>
      </body>
      </html>
    `,
  };

  try {
    await transporter.sendMail(mailOptions);
    res.status(200).json({ success: true, message: "Email sent successfully." });
  } catch (err) {
    console.error("Mail error:", err);
    res.status(500).json({ error: "Failed to send email. Please try again." });
  }
});

app.listen(PORT, () => {
  console.log(`Mailer server running on http://localhost:${PORT}`);
});
