const { UserType } = require('../models');

exports.create = async (req, res) => {
  try {
    const userType = await UserType.create(req.body);
    res.status(201).json(userType);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

exports.findAll = async (req, res) => {
  try {
    const userTypes = await UserType.findAll();
    res.json(userTypes);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.findOne = async (req, res) => {
  try {
    const userType = await UserType.findByPk(req.params.id);
    if (!userType) return res.status(404).json({ error: 'No encontrado' });
    res.json(userType);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.update = async (req, res) => {
  try {
    const [updated] = await UserType.update(req.body, { where: { id: req.params.id } });
    if (!updated) return res.status(404).json({ error: 'No encontrado' });
    const userType = await UserType.findByPk(req.params.id);
    res.json(userType);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

exports.delete = async (req, res) => {
  try {
    const deleted = await UserType.destroy({ where: { id: req.params.id } });
    if (!deleted) return res.status(404).json({ error: 'No encontrado' });
    res.json({ message: 'Eliminado' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
}; 