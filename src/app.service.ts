import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
    
    welcome() {
        return 'Welcome to nest/jsx-crud app'
    }
}
