const nodemailer = require("nodemailer");
const {
  SUBSCRIPTION_PLANS,
  TILL_NUMBER,
  SUPPORT_WHATSAPP,
} = require("../config/constants");

class EmailService {
  constructor() {
    const transportConfig = {
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASSWORD,
      },
      connectionTimeout: 10000,
      greetingTimeout: 10000,
      socketTimeout: 10000,
      tls: { rejectUnauthorized: false },
    };

    if (process.env.EMAIL_SERVICE === "smtp") {
      transportConfig.host = process.env.EMAIL_HOST || "mail.memeyai.com";
      transportConfig.port = parseInt(process.env.EMAIL_PORT || "587");
      transportConfig.secure = process.env.EMAIL_SECURE === "true";
    } else {
      transportConfig.service = process.env.EMAIL_SERVICE || "gmail";
      if (transportConfig.service === "gmail") {
        transportConfig.host = "smtp.gmail.com";
        transportConfig.port = 465;
        transportConfig.secure = true;
      }
    }

    this.transporter = nodemailer.createTransport(transportConfig);
    this.verifyConnection();
  }

  async verifyConnection() {
    try {
      await this.transporter.verify();
      console.log("✅ SMTP connection verified");
    } catch (error) {
      console.warn("⚠️ SMTP connection warning:", error.message);
    }
  }

  // =============================
  // 🔥 BASE EMAIL TEMPLATE
  // =============================
  buildTemplate({ title, subtitle, body }) {
    return `
    <!DOCTYPE html>
    <html>
    <head>
      <meta charset="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
      <style>
        body {
          font-family: Arial, sans-serif;
          background-color: #f4f6f8;
          margin: 0;
          padding: 0;
        }
        .container {
          max-width: 600px;
          margin: 30px auto;
          background: white;
          border-radius: 10px;
          overflow: hidden;
          box-shadow: 0 4px 12px rgba(0,0,0,0.08);
        }
        .header {
          background: linear-gradient(135deg, #2e7d4a, #4caf50);
          color: white;
          padding: 30px;
          text-align: center;
        }
        .content {
          padding: 30px;
          color: #333;
          line-height: 1.6;
        }
        .footer {
          background: #f8f9fa;
          padding: 20px;
          text-align: center;
          font-size: 13px;
          color: #666;
        }
        .btn {
          display: inline-block;
          padding: 12px 24px;
          background: #4caf50;
          color: white !important;
          text-decoration: none;
          border-radius: 6px;
          margin-top: 20px;
        }
        .code-box {
          text-align: center;
          padding: 20px;
          margin: 20px 0;
          border: 2px dashed #4caf50;
          border-radius: 8px;
        }
        .code {
          font-size: 36px;
          font-weight: bold;
          letter-spacing: 8px;
          color: #2e7d4a;
        }
        ul {
          padding-left: 20px;
        }
      </style>
    </head>
    <body>
      <div class="container">
        <div class="header">
          <h1>${title}</h1>
          <p>${subtitle}</p>
        </div>

        <div class="content">
          ${body}
        </div>

        <div class="footer">
          <p>Need help? ${process.env.SUPPORT_EMAIL || "support@shuleai.com"}</p>
          <p>WhatsApp: ${process.env.SUPPORT_WHATSAPP || SUPPORT_WHATSAPP}</p>
          <p>© ${new Date().getFullYear()} ShuleAI. All rights reserved.</p>
        </div>
      </div>
    </body>
    </html>
    `;
  }

  // =============================
  // 🔐 ACCESS CODE EMAIL
  // =============================
  async sendAccessCode(email, accessCode) {
    const html = this.buildTemplate({
      title: "🔐 Your Access Code",
      subtitle: "Welcome to ShuleAI Learning Platform",
      body: `
        <p>Hello!</p>
        <p>Here is your 6-digit access code:</p>

        <div class="code-box">
          <div class="code">${accessCode}</div>
        </div>

        <p><strong>This code expires in 5 minutes.</strong></p>
        <p>If you didn't request this, ignore this email.</p>
      `,
    });

    return this.transporter.sendMail({
      from: `"ShuleAI" <${process.env.EMAIL_USER}>`,
      to: email,
      subject: "Your ShuleAI Access Code",
      html,
      text: `Your ShuleAI access code is ${accessCode}. It expires in 5 minutes.`,
    });
  }

  // =============================
  // 💳 PAYMENT REQUEST
  // =============================
  async sendPaymentRequestEmail(email) {
    const html = this.buildTemplate({
      title: "💳 Payment Required",
      subtitle: "Subscribe to access ShuleAI",
      body: `
        <p>You attempted to access ShuleAI but no active subscription was found.</p>

        <h3>Pay via M-PESA</h3>
        <p><strong>Till Number:</strong> ${TILL_NUMBER}</p>
        <p><strong>Business Name:</strong> MemeyAI Digital Solutions</p>

        <h3>Subscription Plans</h3>
        <ul>
          <li><strong>Weekly:</strong> KES 50</li>
          <li><strong>Monthly:</strong> KES 150</li>
          <li><strong>Termly:</strong> KES 400</li>
        </ul>

        <p>After payment, verification takes 2–24 hours.</p>
      `,
    });

    return this.transporter.sendMail({
      from: `"ShuleAI" <${process.env.EMAIL_USER}>`,
      to: email,
      subject: "Payment Required - ShuleAI Access",
      html,
    });
  }

  // =============================
  // ✅ PAYMENT RECEIVED
  // =============================
  async sendPaymentConfirmation(paymentData) {
    const plan = SUBSCRIPTION_PLANS[paymentData.planType];

    const html = this.buildTemplate({
      title: "✅ Payment Received",
      subtitle: "Thank you for subscribing",
      body: `
        <p>Hello ${paymentData.fullName || "Student"},</p>

        <p>We received your payment for <strong>${plan.name}</strong>.</p>

        <ul>
          <li><strong>Transaction Code:</strong> ${paymentData.transactionCode}</li>
          <li><strong>Amount:</strong> KSh ${paymentData.amount}</li>
          <li><strong>Plan:</strong> ${plan.name}</li>
        </ul>

        <p>Your payment is being verified.</p>
      `,
    });

    return this.transporter.sendMail({
      from: `"ShuleAI" <${process.env.EMAIL_USER}>`,
      to: paymentData.email,
      subject: `Payment Received - ${plan.name}`,
      html,
    });
  }

  // =============================
  // 🎉 ACTIVATION CONFIRMATION
  // =============================
  async sendActivationConfirmation(paymentData) {
    const planType = paymentData.planType || paymentData.plan_type;
    const plan = SUBSCRIPTION_PLANS[planType];
    const expiresAt = new Date(paymentData.expires_at);

    const html = this.buildTemplate({
      title: "🎉 Subscription Activated!",
      subtitle: "Your access is now active",
      body: `
        <p>Hello ${paymentData.full_name || "Student"},</p>

        <p>Your <strong>${plan.name}</strong> subscription is now active.</p>

        <ul>
          <li><strong>Plan:</strong> ${plan.name}</li>
          <li><strong>Expires:</strong> ${expiresAt.toLocaleDateString()}</li>
          <li><strong>Days Remaining:</strong> ${Math.ceil(
            (expiresAt - new Date()) / (1000 * 60 * 60 * 24)
          )} days</li>
        </ul>

        <a href="${
          process.env.FRONTEND_URL || "https://shule.memeyai.com"
        }" class="btn">
          Start Learning Now 🚀
        </a>
      `,
    });

    return this.transporter.sendMail({
      from: `"ShuleAI" <${process.env.EMAIL_USER}>`,
      to: paymentData.email,
      subject: "Your ShuleAI Subscription is Now Active!",
      html,
    });
  }
}

module.exports = new EmailService();
