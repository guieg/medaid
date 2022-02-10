import { Body, Controller, Delete, Get, HttpException, HttpStatus, Param, Post, Put } from '@nestjs/common';
import { Recipe } from './recipe';
import { RecipeDto } from './recipe.dto';
import { RecipeService } from './recipe.service';

@Controller()
export class RecipeController {

    constructor(private readonly recipeService: RecipeService) {}
    @Get('/users/:id/recipes')
    async getUserRecipes(@Param('id') id:string): Promise<string[]>{
      return this.recipeService.listUserRecipes(id);
    }

    @Post('/recipes')
    async postUserRecipe(@Body() recipe: RecipeDto){
        let response =  await this.recipeService.createRecipe(recipe);
        if (response == "Forbidden"){
          throw new HttpException(response, HttpStatus.FORBIDDEN);
        }
        return response
    }

    @Put('/recipes/:id')
    async putRecipe(@Param('id') id: string, recipe: Recipe){
      this.recipeService.updateRecipe(id, recipe);
    }

    @Get('/recipes')
    async getAllRecipes(){
      return this.recipeService.listAllRecipes();
    }

    @Get('/recipes/:id')
    async getRecipe(@Param('id') id: string){
      return this.recipeService.findRecipe(id);
    }

    @Delete('/recipes/:id')
    async deleteRecipe(@Param('id') id: string){
      return this.recipeService.deleteRecipe(id);
    }

}
