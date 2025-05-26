const { PersonalInfo } = require('../models');

exports.create = async (req, res) => {
  try {
    const info = await PersonalInfo.create(req.body);
    res.status(201).json(info);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

exports.findAll = async (req, res) => {
  try {
    const infos = await PersonalInfo.findAll();
    res.json(infos);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.findOne = async (req, res) => {
  try {
    const info = await PersonalInfo.findByPk(req.params.id);
    if (!info) return res.status(404).json({ error: 'No encontrado' });
    res.json(info);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.update = async (req, res) => {
  try {
    const [updated] = await PersonalInfo.update(req.body, { where: { id: req.params.id } });
    if (!updated) return res.status(404).json({ error: 'No encontrado' });
    const info = await PersonalInfo.findByPk(req.params.id);
    res.json(info);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

exports.delete = async (req, res) => {
  try {
    const deleted = await PersonalInfo.destroy({ where: { id: req.params.id } });
    if (!deleted) return res.status(404).json({ error: 'No encontrado' });
    res.json({ message: 'Eliminado' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
}; 