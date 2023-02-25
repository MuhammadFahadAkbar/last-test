const express = require("express");
const { getSectors } = require("../controllers/sectorsController");

const router = express.Router();

// Get all sectors
router.get("/", getSectors);

module.exports = router;
