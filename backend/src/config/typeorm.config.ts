import { TypeOrmModuleOptions } from '@nestjs/typeorm';

export const ConfigPG: TypeOrmModuleOptions = {
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'edgar',
  password: '20012002',
  database: 'subd_project',
  synchronize: true,
  entities: [__dirname + '/../**/*.entity{.ts,.js}'],
};
