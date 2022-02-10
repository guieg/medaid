import { Prop } from "@nestjs/mongoose";
import { Role } from "src/role/role";

export class Patient extends Role{
    @Prop()
    description: string;
}
