const express = require('express');

const router = express.Router();

const mongoose = require('mongoose');

const snacks = require('../models/snack.js');

const {viewSnacks,createSnack,changeSnack,deleteSnack} = require('../controllers/snacks.js')

router.get('/view',viewSnacks);

router.post('/create', createSnack);

router.put('/change', changeSnack);

router.post('/delete', deleteSnack);

module.exports = router;