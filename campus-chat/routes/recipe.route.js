import express from 'express'
import { getRecipe, like, uploadRecipe } from '../controllers/recipe.controller.js'

const router = express.Router()

router.post('/upload-recipe', uploadRecipe)
router.post('/:recipeId/like', like)
router.get('/get-recipes', getRecipe)

export default router
