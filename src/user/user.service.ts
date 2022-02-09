import { Injectable } from '@nestjs/common';
import { User } from './user';
import { UserDto } from './user.dto';

@Injectable()
export class UserService {
    private readonly users: User[];

    findUser(id: number): User{
        return this.users.find((user) => user.id === id);
    }

    createUser(newUser: UserDto){
        const user = {...newUser};
        this.users.push(user)
    }

    listAllUsers(): User[]{
        return this.users;
    }
}
