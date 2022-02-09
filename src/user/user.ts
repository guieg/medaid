import { Prop, Schema} from "@nestjs/mongoose";

@Schema({ collection: 'users' })
export class User{
    @Prop()
    name: string;
    @Prop()
    id: string;
}
