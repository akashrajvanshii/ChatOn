const express = require("express");
const cors = require("cors");
const axios = require("axios");
require('dotenv').config(); // Load environment variables from .env file

const app = express();
app.use(express.json());
app.use(cors({ origin: true }));

app.post("/authenticate", async (req, res) => {
    const { username, secret, name } = req.body;
    try {
        const r = await axios.put(
            'https://api.chatengine.io/users/',
            {
                username: username,
                secret: secret,
                first_name: name,
            },
            {
                headers: { "private-key": process.env.PRIVATE_KEY } // Use the environment variable
            }
        );
        return res.status(r.status).json(r.data);
    } catch (error) {
        return res.status(error.response.status).json(error.response.data);
    }
});

app.listen(3001);