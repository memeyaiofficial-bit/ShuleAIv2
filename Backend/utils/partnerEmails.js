/**
 * Special Partner Email Templates
 * Handles sending welcome emails to special partners like RBK
 */

const fs = require("fs");
const path = require("path");

/**
 * Send RBK partner welcome email with special access code
 * @param {string} email - Recipient email address
 * @param {string} contact - Contact person name
 * @returns {Promise<boolean>} - Success status
 */
async function sendRBKWelcomeEmail(email, contact = "RBK Team") {
  try {
    const emailService = require("./email");

    // Read the RBK welcome email template
    const templatePath = path.join(__dirname, "../emails/rbk-welcome.html");
    let htmlContent = fs.readFileSync(templatePath, "utf-8");

    // Optional: Replace placeholder if needed
    // htmlContent = htmlContent.replace(/{{CONTACT_NAME}}/g, contact);

    // Send email
    const result = await emailService.transporter.sendMail({
      from: `"ShuleAI" <${process.env.EMAIL_USER}>`,
      to: email,
      subject:
        "🎓 RBK - Exclusive ShuleAI Partner Access Ready! | Code: SPECIAL-RBK2026",
      html: htmlContent,
      replyTo: process.env.SUPPORT_EMAIL || "support@shuleai.com",
    });

    console.log(`✅ RBK welcome email sent to ${email}:`, result.messageId);
    return true;
  } catch (error) {
    console.error(
      `❌ Failed to send RBK welcome email to ${email}:`,
      error.message,
    );
    return false;
  }
}

/**
 * Send special partner access notification to admin
 * @param {string} partnerName - Partner name (e.g., "RBK")
 * @param {string} specialCode - The special code granted
 * @param {string} email - Partner email
 * @returns {Promise<boolean>} - Success status
 */
async function sendPartnerAccessNotification(partnerName, specialCode, email) {
  try {
    const emailService = require("./email");
    const adminEmail = process.env.ADMIN_EMAIL || "shuleaiadmin@memeyai.com";

    const htmlContent = `
      <h2>🎉 New Special Partner Access Granted</h2>
      <p>A new special partner access has been granted:</p>
      <ul>
        <li><strong>Partner Name:</strong> ${partnerName}</li>
        <li><strong>Email:</strong> ${email}</li>
        <li><strong>Special Code:</strong> ${specialCode}</li>
        <li><strong>Access Level:</strong> Unlimited (365 days)</li>
        <li><strong>Granted Date:</strong> ${new Date().toLocaleString()}</li>
      </ul>
      <p><strong>Validity:</strong> 365 days from grant date</p>
      <p>Please keep this information for your records.</p>
    `;

    await emailService.transporter.sendMail({
      from: `"ShuleAI" <${process.env.EMAIL_USER}>`,
      to: adminEmail,
      subject: `New Special Partner Access - ${partnerName}`,
      html: htmlContent,
    });

    console.log(`✅ Admin notification sent for ${partnerName} (${email})`);
    return true;
  } catch (error) {
    console.error(`❌ Failed to send admin notification:`, error.message);
    return false;
  }
}

module.exports = {
  sendRBKWelcomeEmail,
  sendPartnerAccessNotification,
};
