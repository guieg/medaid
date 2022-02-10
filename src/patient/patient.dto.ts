import { ApiProperty } from '@nestjs/swagger';

export class PatientDto{
    @ApiProperty()
    cpf: string;
    @ApiProperty()
    description: string;
}