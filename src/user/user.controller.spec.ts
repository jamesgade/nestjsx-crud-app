import { Test, TestingModule } from '@nestjs/testing';
import { getRepositoryToken } from '@nestjs/typeorm';
import { UserController } from './user.controller';
import { UserService } from './user.service';
import { User } from './uder.entity';

export class MockRepository<T> {
    public createQueryBuilder = jest.fn(() => this.queryBuilder);
    public manager = { transaction: (a) => Promise.resolve(a()) };
    public metadata = { connection: { options: { type: null } }, columns: [], relations: [] }
  
    public save = jest.fn();
    public delete = jest.fn();
    public update = jest.fn();
    public findOne = jest.fn();
    public findOneOrFail = jest.fn();
    public find = jest.fn();
    public getMany = jest.fn();
    public queryBuilder = {
      offset: jest.fn().mockReturnThis(),
      take: jest.fn().mockReturnThis(),
      orderBy: jest.fn().mockReturnThis(),
      skip: jest.fn().mockReturnThis(),
      limit: jest.fn().mockReturnThis(),
      from: jest.fn().mockReturnThis(),
      addFrom: jest.fn().mockReturnThis(),
      where: jest.fn().mockReturnThis(),
      andWhere: jest.fn().mockReturnThis(),
      innerJoinAndSelect: jest.fn().mockReturnThis(),
      leftJoinAndSelect: jest.fn().mockReturnThis(),
      getManyAndCount: jest.fn(),
      getMany: jest.fn(),
      getOne: jest.fn(),
      delete: jest.fn().mockReturnThis(),
      execute: jest.fn().mockReturnThis(),
    };
  }

describe('UserController', () => {
  let controller: UserController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        UserService,
        {
          provide: getRepositoryToken(User),
          useClass: MockRepository,
        },
      ],
    controllers: [UserController]
    }).compile();

    controller = module.get<UserController>(UserController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
