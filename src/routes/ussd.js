const express = require('express');
const router = express.Router();
const ussdService = require('../services/ussdService');

router.post('/', async (req, res) => {
    try {
        const response = await ussdService.handleUSSD(req.body);
        res.status(200).json(response);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

module.exports = router;
