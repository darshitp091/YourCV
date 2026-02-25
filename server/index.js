const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');

dotenv.config();

const app = express();
const PORT = process.env.SERVER_PORT || 5000;

app.use(cors());
app.use(express.json());

// Basic health check
app.get('/health', (req, res) => {
    res.json({ status: 'ok', message: 'YourCV Backend is running' });
});

// PDF and LaTeX endpoints will be added here in later phases
// app.post('/api/resume/export-pdf', ...);
// app.post('/api/resume/compile-latex', ...);

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
