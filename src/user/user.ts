import { Prop, Schema} from "@nestjs/mongoose";
import { Recipe } from "src/recipe/recipe";
import { Role } from "src/role/role";

@Schema({ collection: 'Users' })
export class User{
    @Prop()
    name: string;
    @Prop()
    role: Role;
    @Prop()
    email: string;
}
