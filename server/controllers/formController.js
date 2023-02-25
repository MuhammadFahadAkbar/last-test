const { default: mongoose } = require("mongoose");
const Form = require("../models/formModal");

// Getting all submitted forms
const getForms = async (req, res) => {
  const forms = await Form.find({}).sort({ createdAt: -1 });
  res.status(200).json(forms);
};

// Submitting a new form
const createForm = async (req, res) => {
  const { name, sectors, agree } = req.body;
  let emptyFields = [];
  if (!name) {
    emptyFields.push("name");
  }
  if (sectors.length === 0) {
    emptyFields.push("sectors");
  }
  if (!agree) {
    emptyFields.push("agree");
  }
  if (emptyFields.length > 0) {
    return res
      .status(400)
      .json({ error: "Please fill in all fields", emptyFields });
  }
  try {
    const form = await Form.create({ name, sectors, agree });
    res.status(200).json(form);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Get a single form submission
const getForm = async (req, res) => {
  const { id } = req.params;
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: "No such form" });
  }
  const form = await Form.findById({ _id: id });
  if (!form) {
    return res.status(400).json({ error: "No such form" });
  }
  res.status(200).json(form);
};

// Updating/Editing a form submission
const editForm = async (req, res) => {
  const { id } = req.params;
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: "No such form" });
  }
  const form = await Form.findOneAndUpdate({ _id: id }, { ...req.body });
  if (!form) {
    return res.status(400).json({ error: "No such form" });
  }
  res.status(200).json(form);
};

module.exports = {
  createForm,
  getForms,
  getForm,
  editForm,
};
