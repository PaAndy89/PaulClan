const express = require('express');
const router = express.Router();

router.get('/', (req, res, next) => {
    console.log("____________________________________________________________________________________________________".blue)
    console.log("____________________________________________________________________________________________________".blue)
    console.log("Line Route:".green)
    console.log("get Building request:".yellow)
    console.log("body"), console.log(req.body)
    console.log("params"), console.log(req.params)
    console.log("query"), console.log(req.query)
    console.log("____________________________________________________________________________________________________".blue)

const recipes = [
    { Title: 'Schnitzel', Description: 'just a schnitzel', Picture: '', 
    Ingredients: [{ Name: 'Fleisch', Amount: 1},{ Name: 'Pommes', Amount: 15}], Steps: ['do this', 'then do that']},
    { Title: 'Schnitzel2', Description: 'just another schnitzel', Picture: '', 
    Ingredients: [{ Name: 'Fleisch', Amount: 2},{ Name: 'Pommes', Amount: 32}], Steps: ['do that', 'then do anotherthing']}
]


    res.status(200).json({
        message: "got recipes",
        recipes: recipes
    });

})
   
module.exports = router;