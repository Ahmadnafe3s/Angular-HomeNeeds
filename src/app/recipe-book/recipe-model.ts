
export class RecipeModel {
  constructor(
    public ID: String,
    public RecipeName: string,
    public Description: string,
    public Image: string,
    public RecipeDetail: string,
    public ingredients: string[]
  ) { }
}