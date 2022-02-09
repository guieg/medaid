import { ApiProperty } from '@nestjs/swagger';

export class UserDto{
    @ApiProperty()
    name: string;
    @ApiProperty()
    id: number;
}