const express = require("express");
const {
  createForm,
  getForms,
  getForm,
  editForm,
} = require("../controllers/formController");

const router = express.Router();

// Get all forms (Entries)
router.get("/", getForms);

// Add a new form
router.post("/", createForm);

// Get a particular entry
router.get("/:id", getForm);

// Update a particular entry
router.patch("/:id", editForm);

module.exports = router;
