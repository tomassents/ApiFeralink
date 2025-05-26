const { Diagnosis } = require('../models');

exports.create = async (req, res) => {
  try {
    const diagnosis = await Diagnosis.create(req.body);
    res.status(201).json(diagnosis);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

exports.findAll = async (req, res) => {
  try {
    const diagnoses = await Diagnosis.findAll();
    res.json(diagnoses);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.findOne = async (req, res) => {
  try {
    const diagnosis = await Diagnosis.findByPk(req.params.id);
    if (!diagnosis) return res.status(404).json({ error: 'No encontrado' });
    res.json(diagnosis);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.update = async (req, res) => {
  try {
    const [updated] = await Diagnosis.update(req.body, { where: { id: req.params.id } });
    if (!updated) return res.status(404).json({ error: 'No encontrado' });
    const diagnosis = await Diagnosis.findByPk(req.params.id);
    res.json(diagnosis);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

exports.delete = async (req, res) => {
  try {
    const deleted = await Diagnosis.destroy({ where: { id: req.params.id } });
    if (!deleted) return res.status(404).json({ error: 'No encontrado' });
    res.json({ message: 'Eliminado' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
}; 