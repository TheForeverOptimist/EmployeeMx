const express = require('express');
const router = express.Router();
const { Employee } = require('../model');

// Route to create a new Employee
router.post('/employees', async (req, res) => {
  try {
    const employees = new Employee(req.body);
    await employees.save();
    res.status(201).json(employees);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Route to get all employees
router.get('/employees', async (req, res) => {
  try {
    const employees = await Employee.find();
    res.json(employees);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Route to get a single employee by ID
router.get('/employees/:id', async (req, res) => {
  try {
    const employees = await Employee.findById(req.params.id);
    if (!employees) {
      return res.status(404).json({ message: 'Employee not found' });
    }
    res.json(employees);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Route to update a employee by ID
router.patch('/supercars/:id', async (req, res) => {
  try {
    const employees = await Employee.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true
    });
    if (!employees) {
      return res.status(404).json({ message: 'Supercar not found' });
    }
    res.json(employees);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Route to delete a employee by ID
router.delete('/supercars/:id', async (req, res) => {
  try {
    const employees = await Employee.findByIdAndDelete(req.params.id);
    if (!employees) {
      return res.status(404).json({ message: 'Employee not found' });
    }
    res.json({ message: 'Employee deleted' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;
