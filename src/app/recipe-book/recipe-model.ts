
export class RecipeModel {
  constructor(
    public ID: String,
    public RecipeName: String,
    public Description: String,
    public Image: String,
    public RecipeDetail: String,
    public ingredients: [{ Item: String, Amount: Number }]
  ) { }
}