import { Injectable } from '@nestjs/common';
// import { TypeOrmCrudService } from '@nestjsx/crud-typeorm';
import { TypeOrmCrudService } from '@dataui/crud-typeorm';
import { InjectRepository } from '@nestjs/typeorm';

import { User } from './uder.entity';

@Injectable()
export class UserService extends TypeOrmCrudService<User> {
    constructor(@InjectRepository(User) userRepository){
        super(userRepository);
    }
}
