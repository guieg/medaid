import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Mode } from 'fs';
import { Model } from 'mongoose';
import { Doctor } from 'src/doctor/doctor';
import { DoctorDto } from 'src/doctor/doctor.dto';
import { Patient } from 'src/patient/patient';
import { PatientDto } from 'src/patient/patient.dto';
import { Recipe } from 'src/recipe/recipe';
import { RecipeSchema } from 'src/recipe/recipe.schema';
import { User } from './user';
import { UserDto } from './user.dto';

@Injectable()
export class UserService {

    constructor(@InjectModel('User') private readonly UserModel: Model<User>){ }

    async findUser(id: string){
        return await this.UserModel.findById(id).exec();
    }

    async createUser(newUser: UserDto){
        const createdUser = new this.UserModel(newUser);
        return await createdUser.save();
    }

    async updateUser(id: string, user: User){
        await this.UserModel.updateOne({_id: id}, user).exec()
        return this.findUser(id); 
    }

    async listAllUsers(){
        return await this.UserModel.find().exec();
    }

    async deleteUser(id: string){
        return await this.UserModel.deleteOne({_id: id}).exec()
    }

    async putPatient(id: string, role: PatientDto){
        let user = await this.UserModel.findById(id).exec();
        let patient = new Patient();
        let recipes: string[] = [];
        patient.description = role.description;
        patient.cpf = role.cpf
        patient.recipes = recipes;
        patient.role = "patient";
        user.role = patient;
        return await this.updateUser(id, user);
    }

    async putDoctor(id: string, role: DoctorDto){
        let user = await this.UserModel.findById(id).exec();
        let doctor = new Doctor();
        let recipes: string[] = [];
        let patients: string[] = [];
        doctor.cqe = role.cqe;
        doctor.cpf = role.cpf
        doctor.recipes = recipes;
        doctor.patients = patients
        doctor.role = "doctor";
        user.role = doctor;
        return await this.updateUser(id, user);
    }

    async updateCpf(id: string, cpf: string){
        let user = await this.UserModel.findById(id).exec();
        user.role.cpf = cpf;
        return await this.updateUser(id, user);
    }

    async updateCrm(id: string, crm: string){
        let user = await this.UserModel.findById(id).exec();
        let doctor = user.role as Doctor;
        doctor.crm = crm;
        user.role = doctor;
        return await this.updateUser(id, user);
    }

    async updateCqe(id: string, cqe: string){
        let user = await this.UserModel.findById(id).exec();
        let doctor = user.role as Doctor;
        doctor.cqe = cqe;
        user.role = doctor;
        return await this.updateUser(id, user);
    }

    async updateDescription(id: string, description: string){
        let user = await this.UserModel.findById(id).exec();
        let patient = user.role as Patient;
        patient.description = description;
        user.role = patient;
        return await this.updateUser(id, user);
    }

    async addPatient(id: string, patient_id: string){
        let user = await this.UserModel.findById(id).exec();
        let doctor = user.role as Doctor;
        doctor.patients.push(patient_id);
        user.role = doctor;
        return await this.updateUser(id, user);
    }

    async rmPatient(id: string, patient_id: string){
        let user = await this.UserModel.findById(id).exec();
        let doctor = user.role as Doctor;
        doctor.patients.slice(doctor.patients.indexOf(patient_id));
        user.role = doctor;
        return await this.updateUser(id, user);
    }

    async listPatients(id: string){
        let user = await this.UserModel.findById(id).exec();
        let doctor = user.role as Doctor;
        return doctor.patients;
    }

    async getPatient(id: string, patient_id: string){
        let user = await this.UserModel.findById(id).exec();
        if ((user.role as Doctor).patients.includes(patient_id))
            return await this.UserModel.findById(patient_id).exec();
        else
            throw new HttpException('Bad request', HttpStatus.BAD_REQUEST);
            
        return "";
    }

    
}
