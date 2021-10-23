import { Router } from 'express';

const app = Router();

app.post('/login', (req, res) => {
  // Verify username / password
});

app.get('/user', (req, res) => {
  // Return account data / settings
});

app.post('/user', (req, res) => {
  // Add new user account
});

app.put('/user', (req, res) => {
  // Modify existing user account
});
