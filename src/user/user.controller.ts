import { Body, Controller, Get, Param, ParseIntPipe, Post } from '@nestjs/common';
import { User } from './user';
import { UserDto } from './user.dto';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
    constructor(private readonly userService: UserService) {}

    @Get(':id')
    getUser(@Param('id', ParseIntPipe) id: number): any{
      return this.userService.findUser(id);
    }

    @Post()
    async postUser(@Body() user: UserDto ){
        this.userService.createUser(user);
    }
}
