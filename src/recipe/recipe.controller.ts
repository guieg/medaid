import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { UserService } from '../user/user.service';
import { Recipe } from './recipe';
import { RecipeDto } from './recipe.dto';
import { RecipeService } from './recipe.service';

@Controller()
export class RecipeController {

    constructor(private readonly userService: UserService, private readonly recipeService: RecipeService) {}
    @Get('user/:id/recipes')
    async getUserRecipes(@Param('id') id:string): Promise<Recipe[]>{
      return this.recipeService.listUserRecipes(id);
    }

    @Post('/recipe')
    async postUserRecipe(@Body() recipe: RecipeDto){
      this.recipeService.createRecipe(recipe);
    }

}
