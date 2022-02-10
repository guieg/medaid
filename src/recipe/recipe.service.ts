import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User } from 'src/user/user';
import { UserService } from 'src/user/user.service';
import { Recipe } from './recipe';
import { RecipeDto } from './recipe.dto';

@Injectable()
export class RecipeService {

    constructor(@InjectModel('Recipe') private readonly RecipeModel: Model<Recipe>, @InjectModel('User') private readonly UserModel: Model<User>){}

    async findRecipe(id: string){
        return await this.RecipeModel.findById(id).exec();
    }

    async createRecipe(newRecipe: RecipeDto){
        const patientId = newRecipe.patient;
        const doctorId = newRecipe.doctor;
        let patient: User = await this.UserModel.findById(patientId).exec();
        let doctor: User = await this.UserModel.findById(doctorId).exec();
        const createdRecipe = new this.RecipeModel(newRecipe);
        patient.recipes.push(createdRecipe._id.toString());
        doctor.recipes.push(createdRecipe._id.toString());
        await this.UserModel.updateOne({_id: patientId}, patient).exec();
        await this.UserModel.updateOne({_id: doctorId}, doctor).exec();
        await createdRecipe.save();
        return createdRecipe._id.toString();
    }

    async updateRecipe(id: string, user: Recipe){
        await this.RecipeModel.updateOne({_id: id}, user).exec()
        return this.findRecipe(id); 
    }

    async listAllRecipes(){
        return await this.RecipeModel.find().exec();
    }

    async deleteRecipe(id: string){
        return await this.RecipeModel.deleteOne({_id: id}).exec()
    }

    async listUserRecipes(id: string){
        return (await this.UserModel.findById(id).exec()).recipes;
    }

}
