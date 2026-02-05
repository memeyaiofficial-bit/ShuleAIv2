# RBK Welcome Email - Visual Preview

## Email Subject

```
🎓 RBK - Exclusive ShuleAI Partner Access Ready! | Code: SPECIAL-RBK2026
```

## Email Preview (Text View)

```
╔════════════════════════════════════════════════════════════════════╗
║                                                                    ║
║                     🎓 ShuleAI                                    ║
║            Special Partner Access - RBK                           ║
║                                                                    ║
╚════════════════════════════════════════════════════════════════════╝

Dear RBK Team,

We're thrilled to partner with you! 🌟 You now have exclusive access to
the entire ShuleAI platform with our premium features.

┌────────────────────────────────────────────────────────────────────┐
│                                                                    │
│              Your Special Access Code                             │
│                                                                    │
│                  SPECIAL-RBK2026                                  │
│                                                                    │
│         Valid for 365 days from February 5, 2026                  │
│                                                                    │
└────────────────────────────────────────────────────────────────────┘

✨ WHAT YOU GET
┌─────────────────┬──────────────────────────────┐
│ 🎮 Games        │ Access to 100+ Learning Games │
│ 📚 Worksheets   │ Complete Worksheets Library   │
│ 👨‍🏫 Tutoring    │ Professional Tutoring System  │
│ 📊 Analytics    │ Progress Analytics & Reports  │
└─────────────────┴──────────────────────────────┘

🔐 HOW TO LOGIN

1. Visit https://shule.memeyai.com
2. Click on "Sign In" button
3. Enter your email address or phone number
4. Enter your special code: SPECIAL-RBK2026
5. Click "Sign In" and you're in!

────────────────────────────────────────────────────────────────────

📋 KEY FEATURES AVAILABLE

✓ Unlimited Access
  Use anytime, anywhere during your access period

✓ All Games & Content
  No restrictions on learning resources

✓ Worksheet Downloads
  Print and use any worksheet in PDF format

✓ Lesson Plans
  Access complete teaching lesson plans

✓ Assessment Tools
  Use all rubrics and assessment materials

✓ Priority Support
  Get help from our support team

────────────────────────────────────────────────────────────────────

📝 IMPORTANT

• Keep your special code private and secure
• Share login access only with authorized personnel
• Your access is valid until February 5, 2027
• Contact us if you need password reset or additional accounts

────────────────────────────────────────────────────────────────────

📧 Questions or need support?

Email: support@shuleai.com
📱 WhatsApp: +254 111 579 473

────────────────────────────────────────────────────────────────────

Thank you for partnering with ShuleAI. We're excited to help RBK
achieve educational excellence! 🚀

Best regards,
ShuleAI Team

© 2026 ShuleAI - Empowering Learning Through Technology
```

## HTML Email Features

### Design Elements:

- **Header:** Green gradient background with logo
- **Code Section:** Large, highlighted access code with border
- **Benefit Cards:** 2x2 grid with icons
- **Feature List:** Numbered steps with circular badges
- **Highlight Box:** Yellow warning box for security notes
- **Footer:** Contact information and branding

### Responsive Design:

- ✅ Works on desktop
- ✅ Works on tablets
- ✅ Works on mobile phones
- ✅ Compatible with all email clients (Gmail, Outlook, etc.)

### Color Scheme:

- **Primary:** Green (#2e7d4a) - Professional, trustworthy
- **Secondary:** Purple (#667eea) - Modern, engaging
- **Accents:** Various shades for visual hierarchy

### Typography:

- **Headers:** Bold, larger fonts (24-36px)
- **Body:** Clear, readable (15px)
- **Code:** Monospace font (36px) for emphasis

## Email Testing

The HTML email has been tested for:
✅ Spelling and grammar
✅ Code accuracy (SPECIAL-RBK2026)
✅ Link functionality
✅ Image display (if any)
✅ Mobile responsiveness
✅ Email client compatibility

## How to Send

### Method 1: Using Admin API

```bash
curl -X POST https://shuleaiv1.onrender.com/api/partners/send-rbk-welcome \
  -H "admin-key: YOUR_ADMIN_KEY" \
  -d '{"email": "rbk@example.com", "contactName": "RBK Team"}'
```

### Method 2: Manual Email

1. Copy the HTML from `Backend/emails/rbk-welcome.html`
2. Send via your email service
3. Use subject: "🎓 RBK - Exclusive ShuleAI Partner Access Ready!"

### Method 3: Email Client Paste

1. Open email composition
2. Switch to HTML editor
3. Paste entire HTML content from rbk-welcome.html
4. Send to RBK recipients

## Customization Guide

To customize the email, edit `Backend/emails/rbk-welcome.html`:

### Change Contact Name:

```html
<p>Dear {{CONTACT_NAME}},</p>
```

### Adjust Colors:

Look for `#2e7d4a` (primary green) and `#667eea` (purple)

### Update Expiry Date:

```html
Valid for 365 days from February 5, 2026 → Change date as needed
```

### Add Company Logo:

Replace ShuleAI text with `<img src="logo-url" alt="logo">`

### Modify Features:

Edit the benefits grid section with your features

## Email Analytics

To track email performance:

1. Monitor who clicks the "Login to ShuleAI" button
2. Track code usage with /api/auth/verify-code endpoint
3. Check admin logs for access patterns
4. Follow up if no usage within 3 days

## Troubleshooting

### Email not displaying correctly?

- Check email client supports HTML5
- Try clearing cache
- View in web browser version
- Check for image loading issues

### Code not visible in email?

- Ensure firewall allows HTML emails
- Check if email is being stripped
- Try sending to different email
- Contact IT if issues persist

### Need plain text version?

A plain text version is in the "Preview (Text View)" section above

---

**Email Template:** Ready to send
**Status:** ✅ Tested and approved
**Date:** February 5, 2026
