#!/bin/bash
# RBK Partner - Admin Commands Reference
# Use these commands to manage RBK's special access

# ============================================
# SEND RBK WELCOME EMAIL
# ============================================
# This endpoint sends the professional welcome email
# with login instructions and access code

curl -X POST https://shuleaiv1.onrender.com/api/partners/send-rbk-welcome \
  -H "Content-Type: application/json" \
  -H "admin-key: YOUR_ADMIN_SECRET_HERE" \
  -d '{
    "email": "rbk@example.com",
    "contactName": "RBK Team"
  }'

# Expected Response:
# {
#   "success": true,
#   "message": "RBK welcome email sent successfully",
#   "details": {
#     "email": "rbk@example.com",
#     "specialCode": "SPECIAL-RBK2026",
#     "validityDays": 365,
#     "sentAt": "2026-02-05T10:30:00.000Z"
#   }
# }

# ============================================
# GET RBK ACCESS INFORMATION
# ============================================
# Retrieve all details about RBK's special access

curl -X GET https://shuleaiv1.onrender.com/api/partners/rbk-info \
  -H "admin-key: YOUR_ADMIN_SECRET_HERE"

# Expected Response:
# {
#   "success": true,
#   "data": {
#     "partnerName": "RBK",
#     "specialCode": "SPECIAL-RBK2026",
#     "createdDate": "2026-02-05",
#     "expiryDate": "2027-02-05",
#     "validityDays": 365,
#     "accessLevel": "Unlimited",
#     "features": [
#       "All 100+ Learning Games",
#       "Complete Worksheets Library",
#       "Lesson Plans & Assessments",
#       "Tutor System Access",
#       "Progress Analytics",
#       "Priority Support"
#     ],
#     "status": "Active"
#   }
# }

# ============================================
# VERIFY RBK LOGIN (TEST)
# ============================================
# Test if RBK's special code works correctly

curl -X POST https://shuleaiv1.onrender.com/api/auth/verify-code \
  -H "Content-Type: application/json" \
  -d '{
    "contact": "rbk@example.com",
    "code": "SPECIAL-RBK2026"
  }'

# Expected Response:
# {
#   "success": true,
#   "message": "Special code verified successfully",
#   "user": {
#     "contact": "rbk@example.com",
#     "accessLevel": "special",
#     "accessType": "special",
#     "plan": "special_access",
#     "gamesAllowed": -1,
#     "expiryDate": 1707129600000,
#     "codeDescription": "RBK Partner - Unlimited Access"
#   }
# }

# ============================================
# ENVIRONMENT VARIABLES NEEDED
# ============================================
# Make sure these are set in your .env file:
# 
# ADMIN_SECRET=your_admin_key_here
# EMAIL_USER=noreply@shuleai.com
# ADMIN_EMAIL=support@shuleai.com
# SUPPORT_EMAIL=support@shuleai.com
# NODE_ENV=production

# ============================================
# MANAGING RBK ACCESS
# ============================================

# TO EXTEND VALIDITY:
# Edit js/auth-shared.js and Backend/routes/auth.js
# Change "SPECIAL-RBK2026" code's created date to extend it

# TO REVOKE ACCESS:
# Option 1: Remove code from validSpecialCodes object
# Option 2: Change the code to a new one
# Option 3: Set status to "revoked" (requires DB update)

# TO ADD MORE TEAM MEMBERS:
# Create additional special codes like:
# SPECIAL-RBK2026-TEAM1, SPECIAL-RBK2026-TEAM2

# ============================================
# MONITORING & LOGGING
# ============================================

# Check backend logs for RBK access:
# tail -f logs/shuleai.log | grep "RBK"
# tail -f logs/shuleai.log | grep "SPECIAL-RBK"

# Verify email was sent:
# Check the response "sentAt" timestamp
# Monitor email service logs if available

# ============================================
# COMMON ISSUES & FIXES
# ============================================

# Issue: Code verification fails
# Fix: Verify code is exactly "SPECIAL-RBK2026"
# Fix: Check if admin-key is correct

# Issue: Email not sent
# Fix: Ensure EMAIL_USER and email service are configured
# Fix: Check firewall/network allows outgoing SMTP

# Issue: Code expired early
# Fix: Verify system time is correct
# Fix: Check validity logic in auth.js

# ============================================
# USEFUL LINKS
# ============================================
# 
# Platform URL: https://shule.memeyai.com
# Admin Dashboard: [contact support for access]
# Documentation: Backend/RBK-SETUP.md
# Email Template: Backend/emails/rbk-welcome.html
# 
# ============================================

echo "✅ RBK Admin Commands Reference loaded"
echo "Remember to replace YOUR_ADMIN_SECRET_HERE with actual admin key"
