import { Prop, Schema} from "@nestjs/mongoose";

@Schema({ collection: 'Recipes' })
export class Recipe {
    @Prop()
    content: string;
    @Prop()
    patient: string;
    @Prop()
    doctor: string;
    @Prop()
    createdAt: Date;
}
