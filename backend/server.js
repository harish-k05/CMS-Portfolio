const express = require('express');
const cors = require('cors');
const { createClient } = require('@sanity/client');
require('dotenv').config();

const app = express();
app.use(cors());

const sanityClient = createClient({
    projectId: process.env.VITE_SANITY_PROJECT_ID,
    dataset: 'production',
    apiVersion: '2024-05-01',
    token: process.env.SANITY_TOKEN,
    useCdn: false,
});

app.get('/api/posts', async (req, res) => {
    try {
        const data = await sanityClient.fetch(`*[_type == "post"]{title, body}`);
        res.json(data);
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Failed to fetch from Sanity' });
    }
});

const PORT = 5000;
app.listen(PORT, () => {
    console.log(`Backend running at http://localhost:${PORT}`);
});

app.use(express.json());
