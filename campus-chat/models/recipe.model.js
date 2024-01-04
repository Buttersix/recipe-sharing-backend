import mongoose from "mongoose";

const recipeSchema = new mongoose.Schema({
  recipeName: {
    type: String,
    required: true,
  },
  ingredients: [
    {
      name: {
        type: String,
        required: true,
      }
    }
  ],
  instructions: [
    {
      text: {
        type: String,
        required: true
      }
    }
  ],
  likes: {
    type: Number,
    default: 0,
    required: false
  }
})

export default mongoose.model('Recipe', recipeSchema)