# RBK Access - Quick Start Guide

## 🚀 Quick Start (2 minutes)

### For RBK Users: How to Login

```
1. Go to: https://shule.memeyai.com
2. Click "Sign In"
3. Enter: Your email or phone
4. Code: SPECIAL-RBK2026
5. Click "Sign In"
✓ You're in!
```

### For Admins: How to Send Welcome Email

```bash
# Replace YOUR_ADMIN_KEY with actual admin secret
curl -X POST https://shuleaiv1.onrender.com/api/partners/send-rbk-welcome \
  -H "admin-key: YOUR_ADMIN_KEY" \
  -d '{"email": "rbk@example.com", "contactName": "RBK Team"}'
```

---

## 📦 What's Included

| Item           | Details                              |
| -------------- | ------------------------------------ |
| 🔐 Access Code | SPECIAL-RBK2026                      |
| ⏰ Validity    | 365 days (Feb 5, 2026 - Feb 5, 2027) |
| 🎮 Games       | 100+ learning games                  |
| 📚 Worksheets  | Complete library (all subjects)      |
| 👨‍🏫 Tutoring    | Professional tutor matching          |
| 📊 Analytics   | Progress reports & tracking          |
| ✉️ Support     | Priority email & WhatsApp support    |

---

## 📞 Support Contacts

| Channel     | Details                   |
| ----------- | ------------------------- |
| 📧 Email    | support@shuleai.com       |
| 📱 WhatsApp | +254 111 579 473          |
| 🌐 Platform | https://shule.memeyai.com |

---

## 🔍 Verify Access Works

### Test 1: Login Test

```bash
curl -X POST https://shuleaiv1.onrender.com/api/auth/verify-code \
  -H "Content-Type: application/json" \
  -d '{"contact": "test@rbk.com", "code": "SPECIAL-RBK2026"}'
```

Expected: `"success": true` with access details

### Test 2: Email Send Test

```bash
curl -X POST https://shuleaiv1.onrender.com/api/partners/send-rbk-welcome \
  -H "admin-key: YOUR_KEY" \
  -d '{"email": "test@rbk.com", "contactName": "RBK Test"}'
```

Expected: `"success": true` with email sent confirmation

---

## 📚 Documentation Files

| File                            | Purpose                      |
| ------------------------------- | ---------------------------- |
| `RBK-QUICK-REFERENCE.md`        | One-page guide for RBK users |
| `Backend/RBK-SETUP.md`          | Complete setup & admin guide |
| `Backend/ADMIN-RBK-COMMANDS.sh` | Command examples for admins  |
| `RBK-IMPLEMENTATION-SUMMARY.md` | Technical overview           |
| `RBK-EMAIL-PREVIEW.md`          | Email template details       |
| `RBK-CHECKLIST.md`              | Implementation verification  |

---

## 🎯 Common Tasks

### Task 1: Send Welcome Email to RBK

```bash
# Using the API endpoint
curl -X POST https://shuleaiv1.onrender.com/api/partners/send-rbk-welcome \
  -H "admin-key: YOUR_ADMIN_SECRET" \
  -d '{
    "email": "contact@rbk.org",
    "contactName": "RBK Organization"
  }'
```

### Task 2: Verify RBK Access Info

```bash
# Check RBK access details
curl -X GET https://shuleaiv1.onrender.com/api/partners/rbk-info \
  -H "admin-key: YOUR_ADMIN_SECRET"
```

### Task 3: Test RBK Login

```bash
# Simulate RBK login
curl -X POST https://shuleaiv1.onrender.com/api/auth/verify-code \
  -H "Content-Type: application/json" \
  -d '{
    "contact": "rbk@organization.com",
    "code": "SPECIAL-RBK2026"
  }'
```

---

## ⚙️ Technical Details

### Special Code

- **Type:** Partner unlimited access
- **Code:** SPECIAL-RBK2026
- **Validity:** 365 days
- **Created:** 2026-02-05
- **Expires:** 2027-02-05

### Code Logic

```
User enters: SPECIAL-RBK2026
             ↓
    Checks if starts with SPECIAL-
             ↓
    Looks up in validSpecialCodes
             ↓
    Checks if validity field exists (365 days for RBK)
             ↓
    Calculates: created + 365 days = expiry
             ↓
    If now < expiry → GRANT ACCESS
             ↓
    Store in localStorage as "special" type
```

### Files Modified

1. `js/auth-shared.js` - Frontend code
2. `Backend/routes/auth.js` - Backend verification
3. `Backend/index.js` - Route registration

### Files Created

1. `Backend/routes/partners.js` - Partner endpoints
2. `Backend/utils/partnerEmails.js` - Email functions
3. `Backend/emails/rbk-welcome.html` - Email template

---

## 🔐 Security Notes

⚠️ **Important:**

- Keep code SPECIAL-RBK2026 confidential
- Treat it like a password
- Don't share on social media or public forums
- RBK can share login with their team members
- No payment verification needed
- All features are unlocked

---

## ❓ Troubleshooting

| Problem           | Solution                                |
| ----------------- | --------------------------------------- |
| Code not working  | Check spelling: SPECIAL-RBK2026 (exact) |
| Email not sent    | Verify admin-key is correct             |
| Access denied     | Clear browser cache, try again          |
| Code expired      | Contact support for renewal             |
| Games not loading | Check internet connection               |

---

## 📊 Access Summary

```
Partner: RBK
Code: SPECIAL-RBK2026
Duration: 365 days
Status: ✅ ACTIVE
Created: February 5, 2026
Expires: February 5, 2027
Features: UNLIMITED ACCESS
```

---

## 🎓 Getting Started Checklist

For **RBK Users:**

- [ ] Save code: SPECIAL-RBK2026
- [ ] Bookmark: https://shule.memeyai.com
- [ ] Test login (take 5 minutes)
- [ ] Explore games and features
- [ ] Download sample worksheets
- [ ] Share with team if authorized

For **Admins:**

- [ ] Get admin secret key
- [ ] Test API endpoints
- [ ] Send welcome email to RBK
- [ ] Verify email arrives
- [ ] Test code verification
- [ ] Monitor logs for usage

---

## 📅 Important Dates

| Date        | Event                            |
| ----------- | -------------------------------- |
| Feb 5, 2026 | RBK access created               |
| Feb 5, 2027 | Expiry date (renewal needed)     |
| Jan 5, 2027 | Recommend renewal planning start |

---

## 🚀 Next Steps

1. **Immediate:** Send welcome email to RBK
2. **First Week:** RBK tests platform and provides feedback
3. **Ongoing:** Monitor usage and ensure features work
4. **60 Days Before Expiry:** Plan renewal strategy

---

## 💡 Tips

✓ **For best experience:**

- Use desktop/laptop for dashboard access
- Mobile is great for game-based learning
- Download worksheets for offline use
- Check progress reports weekly
- Use tutor system for personalized help

✓ **For support team:**

- Keep reference documents handy
- Monitor access logs regularly
- Prepare renewal 60 days early
- Document any special requests

---

## 📞 Quick Contact

**Support Available:**

- 📧 Email: support@shuleai.com
- 📱 WhatsApp: +254 111 579 473
- ⏰ Business hours priority support
- 🌐 Web: https://shule.memeyai.com

---

## ✅ Verification

- ✅ All code integrated successfully
- ✅ Email infrastructure in place
- ✅ API endpoints working
- ✅ Documentation complete
- ✅ Testing verified
- ✅ Security implemented
- ✅ Ready for production

**Status:** 🟢 **READY TO USE**

---

**Created:** February 5, 2026
**Version:** 1.0
**Last Updated:** February 5, 2026
