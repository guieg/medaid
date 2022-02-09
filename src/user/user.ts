import { Prop, Schema} from "@nestjs/mongoose";

@Schema({ collection: 'Users' })
export class User{
    @Prop()
    name: string;
    @Prop()
    id: string;
}
