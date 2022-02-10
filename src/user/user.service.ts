import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Mode } from 'fs';
import { Model } from 'mongoose';
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
}
