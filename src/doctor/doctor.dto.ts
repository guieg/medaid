import { ApiProperty } from '@nestjs/swagger';

export class DoctorDto{
    @ApiProperty()
    crm: string;
    @ApiProperty()
    cqe: string;
    @ApiProperty()
    cpf: string;
}