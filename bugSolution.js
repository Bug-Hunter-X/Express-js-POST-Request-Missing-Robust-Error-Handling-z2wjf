const express = require('express');
const app = express();
app.use(express.json());
app.post('/users', (req, res) => {
  try {
    // Validate request body
    if (!req.body || !req.body.name || !req.body.email) {
      return res.status(400).json({ error: 'Name and email are required' });
    }
    // Simulate database interaction (replace with your actual DB code)
    // ... database operations to save the user ...
    console.log('Received User:', req.body);
    res.status(201).json({ message: 'User created', user: req.body });
  } catch (error) {
    console.error('Error creating user:', error);
    res.status(500).json({ error: 'Failed to create user' });
  }
});
app.listen(3000, () => console.log('Server listening on port 3000'));