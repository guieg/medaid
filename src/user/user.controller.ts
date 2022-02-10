import { Body, Controller, Delete, Get, Param, ParseIntPipe, Patch, Post, Put } from '@nestjs/common';
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

    @Put(':id/role/patient')
    async setPatient(@Param('id') id: string, @Body() patient: PatientDto ){
        this.userService.putPatient(id, patient);
    }

    @Put(':id/role/doctor')
    async setDoctor(@Param('id') id: string, @Body() doctor: DoctorDto ){
        this.userService.putDoctor(id, doctor);
    }

    @Patch(':id/role/cpf')
    async putCpf(@Param('id') id:string, @Body() cpf: string): Promise<User>{
      return this.userService.updateCpf(id, cpf);
    }

    @Patch(':id/role/doctor/crm')
    async putCrm(@Param('id') id:string, @Body() crm: string): Promise<User>{
      return this.userService.updateCrm(id, crm);
    }

    @Patch(':id/role/doctor/cqe')
    async putCqe(@Param('id') id:string, @Body() cqe: string): Promise<User>{
      return this.userService.updateCqe(id, cqe);
    }


    @Patch(':id/role/patient/description')
    async putDescription(@Param('id') id:string, @Body() description: string): Promise<User>{
      return this.userService.updateCqe(id, description);
    }

    @Patch(':id/role/doctor/patients')
    async putPatients(@Param('id') id:string, @Body() patient_id: string): Promise<User>{
      return this.userService.addPatient(id, patient_id);
    }

    @Delete(':id/role/doctor/patients')
    async deletePatientFormDoctorPatients(@Param('id') id:string, @Body() patient_id: string): Promise<User>{
      return this.userService.rmPatient(id, patient_id);
    }

    @Get(':id/role/doctor/patients')
    async getPatientsFromDoctor(@Param('id') id:string){
      return this.userService.listPatients(id);
    }

    @Get(':id/role/doctor/patients/:patientId')
    async getPatientFromDoctor(@Param('id') id:string, @Param('patientId') patient_id:string){
      return this.userService.getPatient(id, patient_id);
    }

}
