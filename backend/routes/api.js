const express = require('express');
const router = express.Router();


const recipes = require('./recipes');


//**************************************************************-Routing.-**************************************************************

router.use('/recipes', recipes)



module.exports = router;