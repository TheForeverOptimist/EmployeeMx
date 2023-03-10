const express = require('express');
const router = express.Router();
const { Supercar } = require('../models');

// Route to create a new supercar
router.post('/supercars', async (req, res) => {
  try {
    const supercar = new Supercar(req.body);
    await supercar.save();
    res.status(201).json(supercar);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Route to get all supercars
router.get('/supercars', async (req, res) => {
  try {
    const supercars = await Supercar.find();
    res.json(supercars);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Route to get a single supercar by ID
router.get('/supercars/:id', async (req, res) => {
  try {
    const supercar = await Supercar.findById(req.params.id);
    if (!supercar) {
      return res.status(404).json({ message: 'Supercar not found' });
    }
    res.json(supercar);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Route to update a supercar by ID
router.patch('/supercars/:id', async (req, res) => {
  try {
    const supercar = await Supercar.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true
    });
    if (!supercar) {
      return res.status(404).json({ message: 'Supercar not found' });
    }
    res.json(supercar);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Route to delete a supercar by ID
router.delete('/supercars/:id', async (req, res) => {
  try {
    const supercar = await Supercar.findByIdAndDelete(req.params.id);
    if (!supercar) {
      return res.status(404).json({ message: 'Supercar not found' });
    }
    res.json({ message: 'Supercar deleted' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;
