# RBK Special Partner Access Setup

## Overview

RBK has been granted special partner access to the ShuleAI platform with unlimited access for 365 days (February 5, 2026 - February 5, 2027).

## Special Access Code

**Code:** `SPECIAL-RBK2026`

- **Validity:** 365 days from February 5, 2026
- **Access Level:** Unlimited (all features)
- **Expiry Date:** February 5, 2027

## Features Included

✅ Access to 100+ Learning Games
✅ Complete Worksheets Library (all subjects)
✅ Lesson Plans & CBC Resources
✅ Professional Tutoring System
✅ Assessment Tools & Rubrics
✅ Progress Analytics & Reports
✅ Priority Support
✅ No game or content restrictions
✅ Unlimited worksheet downloads

## How RBK Can Login

### Step-by-Step Instructions:

1. **Visit the Platform**
   - Go to: https://shule.memeyai.com

2. **Click Sign In**
   - Click the "Sign In" button on the landing page

3. **Enter Contact Information**
   - Enter your email address OR phone number

4. **Enter Special Code**
   - In the access code field, enter: `SPECIAL-RBK2026`

5. **Click Sign In**
   - You'll be logged in immediately with full access

### Browser Compatibility

- Works on all modern browsers (Chrome, Safari, Firefox, Edge)
- Optimized for desktop and tablet use
- Mobile-friendly interface available

## Sending the Welcome Email

### For Admins - Using the API Endpoint:

```bash
curl -X POST https://shuleaiv1.onrender.com/api/partners/send-rbk-welcome \
  -H "Content-Type: application/json" \
  -H "admin-key: YOUR_ADMIN_SECRET" \
  -d '{
    "email": "rbk@example.com",
    "contactName": "RBK Team"
  }'
```

### Response Example:

```json
{
  "success": true,
  "message": "RBK welcome email sent successfully",
  "details": {
    "email": "rbk@example.com",
    "specialCode": "SPECIAL-RBK2026",
    "validityDays": 365,
    "sentAt": "2026-02-05T10:30:00.000Z"
  }
}
```

## For Administrators

### Check RBK Access Status

```bash
curl -X GET https://shuleaiv1.onrender.com/api/partners/rbk-info \
  -H "admin-key: YOUR_ADMIN_SECRET"
```

### Manual Email Sending

If you need to send the welcome email manually:

1. Email Subject: `🎓 RBK - Exclusive ShuleAI Partner Access Ready! | Code: SPECIAL-RBK2026`

2. Email Body: Use the template in `Backend/emails/rbk-welcome.html`

3. Key Details to Highlight:
   - Special Code: **SPECIAL-RBK2026**
   - Platform URL: **https://shule.memeyai.com**
   - Validity Period: **365 days**
   - Features: Unlimited access to all content

## Code Location & Implementation

### Frontend (JavaScript):

- File: `js/auth-shared.js`
- The special code is hardcoded in the `handleSpecialCode()` function
- Validity check: 365 days for SPECIAL-RBK2026 (vs 2 days for other codes)

### Backend (Node.js/Express):

- File: `Backend/routes/auth.js`
- Endpoint: `POST /api/auth/verify-code`
- Special code validation handles extended validity

### Email Template:

- File: `Backend/emails/rbk-welcome.html`
- Beautiful, responsive HTML email
- Contains login instructions and feature list

### Partner Routes:

- File: `Backend/routes/partners.js`
- Endpoint: `POST /api/partners/send-rbk-welcome`
- Endpoint: `GET /api/partners/rbk-info`

## Security Notes

⚠️ **Important:**

- Keep the special code confidential
- Treat this like a password - don't share publicly
- RBK can share login access with authorized team members
- Monitor usage to ensure compliance

## Support Information

**For RBK Users:**

- Email: support@shuleai.com
- WhatsApp: +254 111 579 473
- Response Time: Priority (within 1 hour)

**For Admins:**

- To revoke access: Remove from special codes list
- To extend validity: Update the code creation date
- To modify features: Contact engineering team

## Code Architecture

### Special Code Validation Flow:

```
User enters SPECIAL-RBK2026
    ↓
Frontend checks if code starts with "SPECIAL-"
    ↓
Frontend looks up code in validSpecialCodes object
    ↓
Checks if "validity" field exists (365 days for RBK)
    ↓
Calculates expiry: createdDate + 365 days
    ↓
If now > expiryDate → EXPIRED
    ↓
Otherwise → GRANTED (with no game restrictions)
    ↓
localStorage stores: "shuleai_access_type": "special"
```

## Troubleshooting

### Code Not Working?

1. Check spelling: **SPECIAL-RBK2026** (case-sensitive)
2. Verify date: Code is valid until February 5, 2027
3. Try refreshing the page
4. Clear browser cache and try again
5. Try different browser if still not working

### Email Didn't Arrive?

1. Check spam/junk folder
2. Verify email address is correct
3. Resend using the admin endpoint
4. Contact support if still having issues

### Need More Accounts?

Contact admin to create additional special codes or upgrade plan

## Renewal Process

**Before February 5, 2027:**

1. Contact ShuleAI support 60 days before expiry
2. Admin can extend the code validity
3. Or create a new special code if needed
4. Send renewal email with updated code

## Files Modified/Created

✅ **Modified:**

- `js/auth-shared.js` - Added SPECIAL-RBK2026, extended validity logic
- `Backend/routes/auth.js` - Added RBK code with 365-day validity
- `Backend/index.js` - Added partners route

✅ **Created:**

- `Backend/routes/partners.js` - Partner management endpoints
- `Backend/utils/partnerEmails.js` - Partner email utilities
- `Backend/emails/rbk-welcome.html` - Professional welcome email
- `Backend/RBK-SETUP.md` - This documentation

## Version History

| Date       | Version | Changes                            |
| ---------- | ------- | ---------------------------------- |
| 2026-02-05 | 1.0     | Initial RBK special access setup   |
|            |         | Added SPECIAL-RBK2026 code         |
|            |         | Created welcome email template     |
|            |         | Added partner management endpoints |

---

**Created:** February 5, 2026
**Last Updated:** February 5, 2026
**Status:** ✅ Active and Ready
