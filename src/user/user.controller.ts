import { Body, Controller, Delete, Get, Param, ParseIntPipe, Post, Put } from '@nestjs/common';
import { DoctorDto } from 'src/doctor/doctor.dto';
import { Patient } from 'src/patient/patient';
import { PatientDto } from 'src/patient/patient.dto';
import { Recipe } from 'src/recipe/recipe';
import { User } from './user';
import { UserDto } from './user.dto';
import { UserService } from './user.service';

@Controller('users')
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

    @Post(':id/role/patient')
    async postPatient(@Param('id') id: string, @Body() patient: PatientDto ){
        this.userService.postPatient(id, patient);
    }

    @Post(':id/role/doctor')
    async postDoctor(@Param('id') id: string, @Body() doctor: DoctorDto ){
        this.userService.postDoctor(id, doctor);
    }

    @Put(':id/role/cpf')
    async putCpf(@Param('id') id:string, @Body() cpf: string): Promise<User>{
      return this.userService.updateCpf(id, cpf);
    }

    @Put(':id/role/doctor/crm')
    async putCrm(@Param('id') id:string, @Body() crm: string): Promise<User>{
      return this.userService.updateCrm(id, crm);
    }

    @Put(':id/role/doctor/cqe')
    async putCqe(@Param('id') id:string, @Body() cqe: string): Promise<User>{
      return this.userService.updateCqe(id, cqe);
    }


    @Put(':id/role/patient/description')
    async putDescription(@Param('id') id:string, @Body() description: string): Promise<User>{
      return this.userService.updateCqe(id, description);
    }

}
