import { Prop, Schema} from "@nestjs/mongoose";
import { Recipe } from "src/recipe/recipe";

@Schema({ collection: 'Users' })
export class User{
    @Prop()
    name: string;
    @Prop()
    id: string;
    @Prop()
    type: string;
    @Prop()
    recipes: string[];

}

//nome, crm. rqe
