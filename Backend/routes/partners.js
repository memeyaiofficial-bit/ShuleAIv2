/**
 * Partner Management Routes
 * Handles special partner communications and access management
 */

const express = require("express");
const router = express.Router();
const {
  sendRBKWelcomeEmail,
  sendPartnerAccessNotification,
} = require("../utils/partnerEmails");

/**
 * POST /api/partners/send-rbk-welcome
 * Admin endpoint to send RBK welcome email with special access code
 * Requires: admin-key header
 */
router.post("/send-rbk-welcome", async (req, res) => {
  try {
    const { adminKey } = req.headers;
    const { email, contactName } = req.body;

    // Admin authentication
    if (!adminKey || adminKey !== process.env.ADMIN_SECRET) {
      return res.status(401).json({
        success: false,
        message: "Unauthorized: Invalid admin key",
      });
    }

    // Validation
    if (!email) {
      return res.status(400).json({
        success: false,
        message: "Email is required",
      });
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return res.status(400).json({
        success: false,
        message: "Invalid email format",
      });
    }

    console.log(`📧 Admin sending RBK welcome email to: ${email}`);

    // Send RBK welcome email
    const emailSent = await sendRBKWelcomeEmail(
      email,
      contactName || "RBK Team",
    );

    if (!emailSent) {
      return res.status(500).json({
        success: false,
        message: "Failed to send welcome email",
      });
    }

    // Send admin notification
    await sendPartnerAccessNotification("RBK", "SPECIAL-RBK2026", email);

    res.json({
      success: true,
      message: "RBK welcome email sent successfully",
      details: {
        email,
        specialCode: "SPECIAL-RBK2026",
        validityDays: 365,
        sentAt: new Date().toISOString(),
      },
    });
  } catch (error) {
    console.error("❌ Send RBK welcome error:", error);
    res.status(500).json({
      success: false,
      message: "An error occurred while sending the welcome email",
      error: process.env.NODE_ENV === "development" ? error.message : undefined,
    });
  }
});

/**
 * GET /api/partners/rbk-info
 * Get RBK special access information (for verification)
 * Requires: admin-key header
 */
router.get("/rbk-info", async (req, res) => {
  try {
    const { adminKey } = req.headers;

    // Admin authentication
    if (!adminKey || adminKey !== process.env.ADMIN_SECRET) {
      return res.status(401).json({
        success: false,
        message: "Unauthorized: Invalid admin key",
      });
    }

    const rbkInfo = {
      partnerName: "RBK",
      specialCode: "SPECIAL-RBK2026",
      createdDate: "2026-02-05",
      expiryDate: "2027-02-05",
      validityDays: 365,
      accessLevel: "Unlimited",
      features: [
        "All 100+ Learning Games",
        "Complete Worksheets Library",
        "Lesson Plans & Assessments",
        "Tutor System Access",
        "Progress Analytics",
        "Priority Support",
      ],
      status: "Active",
      lastEmailSent: null,
    };

    res.json({
      success: true,
      data: rbkInfo,
    });
  } catch (error) {
    console.error("❌ Get RBK info error:", error);
    res.status(500).json({
      success: false,
      message: "An error occurred",
    });
  }
});

module.exports = router;
