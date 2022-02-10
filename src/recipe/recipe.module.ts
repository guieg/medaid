import { Module } from '@nestjs/common';
import { RecipeService } from './recipe.service';
import { RecipeController } from './recipe.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { RecipeSchema } from './recipe.schema';
import { UserSchema } from 'src/user/user.schema';
import { UserModule } from 'src/user/user.module';

@Module({
  imports: [MongooseModule.forFeature([{name: 'Recipe', schema: RecipeSchema}]), MongooseModule.forFeature([{name: 'User', schema: UserSchema}])],
  providers: [RecipeService],
  controllers: [RecipeController]
})
export class RecipeModule {}
