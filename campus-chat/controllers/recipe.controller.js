import Recipe from '../models/recipe.model.js'

export const uploadRecipe = async (req, res) => {
  try {
    const { recipeName, ingredients, instructions } = req.body

    const recipe = new Recipe({
      recipeName,
      ingredients,
      instructions
    })

    await recipe.save()
    res.status(201).json({
      message: 'Recipe uploaded successfully'
    })
  } catch (error) {
    res.status(500).json({ message: 'Internal server error' })
  }
}

export const like = async (req, res) => {
  try {
    const { recipeId } = req.params

    const recipe = await Recipe.findById(recipeId)

    if (!recipe) {
      return res.status(404).json({ message: 'Recipe not found' })
    }

    recipe.likes += 1

    await recipe.save()

    res.status(200).json({ likes: recipe.likes })
  } catch (error) {
    res.status(500).json({ message: 'Internal Server Error' })
  }
}