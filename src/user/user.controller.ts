import { Body, Controller, Delete, Get, Param, ParseIntPipe, Post, Put } from '@nestjs/common';
import { User } from './user';
import { UserDto } from './user.dto';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
    constructor(private readonly userService: UserService) {}

    @Get(':id')
    async getUser(@Param('id') id:string): Promise<User>{
      return this.userService.findUser(id);
    }

    @Get()
    async getUsers(): Promise<User[]>{
      return this.userService.listAllUsers();
    }

    @Post()
    async postUser(@Body() user: UserDto ){
        this.userService.createUser(user);
    }

    @Put(':id')
    async putUser(@Param('id') id:string, @Body() user: User): Promise<User>{
      return this.userService.updateUser(id, user);
    }

    @Delete(':id')
    async deleteUser(@Param('id') id:string){
      this.userService.deleteUser(id);
    }
}
