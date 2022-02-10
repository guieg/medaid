import { ApiProperty } from '@nestjs/swagger';

export class RecipeDto{
    @ApiProperty()
    content: string;
    @ApiProperty()
    patient: string;
    @ApiProperty()
    doctor: string;
}