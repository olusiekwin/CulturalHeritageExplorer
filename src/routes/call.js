const express = require('express');
const router = express.Router();
const callService = require('../services/callService');

router.post('/', async (req, res) => {
    try {
        const response = await callService.makeCall(req.body);
        res.status(200).json(response);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

module.exports = router;
