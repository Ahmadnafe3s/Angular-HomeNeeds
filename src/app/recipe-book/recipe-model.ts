
export class RecipeModel {
  constructor(
    public ID: string,
    public RecipeName: string,
    public Description: string,
    public Image: string,
    public RecipeDetail: string,
    public ingredients: string[]
  ) { }
}