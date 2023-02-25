const { default: mongoose } = require("mongoose");
const Sector = require("../models/sectorsModal");

const getSectors = async (req, res) => {
  const sectors = await Sector.find({}).sort({ createdAt: -1 });
  res.status(200).json(sectors);
};

module.exports = {
  getSectors,
};
