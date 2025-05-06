const express = require('express');
const cors = require('cors');
const app = express();
const port = 3001;

app.use(cors());
app.use(express.json());

// In-memory storage for registrations
let registrations = [
  {
    id: 1,
    teamName: 'Team Alpha',
    players: [
      { name: 'Player1', platform: 'PC' },
      { name: 'Player2', platform: 'Mobile' }
    ],
    ipAddress: '192.168.1.1',
    registeredAt: new Date().toISOString(),
    status: 'pending' // pending, approved, rejected
  }
];

// Get all registrations
app.get('/registrations', (req, res) => {
  res.json(registrations.filter(r => r.status === 'pending'));
});

// Approve a registration
app.post('/approve', (req, res) => {
  const { id } = req.body;
  const reg = registrations.find(r => r.id === id);
  if (reg) {
    reg.status = 'approved';
    res.status(200).json({ message: 'Registration approved' });
  } else {
    res.status(404).json({ message: 'Registration not found' });
  }
});

// Reject a registration
app.post('/reject', (req, res) => {
  const { id } = req.body;
  const reg = registrations.find(r => r.id === id);
  if (reg) {
    reg.status = 'rejected';
    res.status(200).json({ message: 'Registration rejected' });
  } else {
    res.status(404).json({ message: 'Registration not found' });
  }
});

// Add a new registration (for testing/demo)
app.post('/register', (req, res) => {
  const { teamName, players, ipAddress } = req.body;
  const newReg = {
    id: registrations.length ? registrations[registrations.length - 1].id + 1 : 1,
    teamName,
    players,
    ipAddress,
    registeredAt: new Date().toISOString(),
    status: 'pending'
  };
  registrations.push(newReg);
  res.status(201).json(newReg);
});

app.listen(port, () => {
  console.log(`Tournament registration server running at http://localhost:${port}`);
});
