import express from 'express'
import { like, uploadRecipe } from '../controllers/recipe.controller.js'

const router = express.Router()

router.post('/upload-recipe', uploadRecipe)
router.post('/:recipeId/like', like)

export default router
