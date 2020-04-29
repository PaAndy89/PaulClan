const mongoose = require('mongoose');

const recipeSchema = mongoose.Schema({
    Title: { type: String, required: true },
    Description: String,
    Picture: String,
    Ingredients: Array,
    Steps: Array
});

mongoose.model('Recipe', recipeSchema)