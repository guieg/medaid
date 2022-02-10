import { Prop } from "@nestjs/mongoose";
import { Recipe } from "src/recipe/recipe";

export class Role {
    @Prop()
    recipes: string[];
    @Prop()
    cpf: string;
}
