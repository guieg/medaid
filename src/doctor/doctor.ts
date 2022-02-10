import { Prop } from "@nestjs/mongoose";
import { Role } from "src/role/role";

export class Doctor extends Role{
    @Prop()
    crm: string;
    @Prop()
    cqe: string; 
    @Prop()
    patients: string[];
}
