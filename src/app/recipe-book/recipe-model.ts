
export class RecipeModel {
  constructor(
    public RID: String,
    public RecipeName: String,
    public Description: String,
    public Image: String,
    public RecipeDetail: String,
    public ingredients: [{ Item: String, Amount: Number }]
  ) { }
}