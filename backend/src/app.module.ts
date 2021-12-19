import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigPG } from './config/typeorm.config';
import { StudentModule } from './student/student.module';

@Module({
  controllers: [],
  providers: [],
  imports: [TypeOrmModule.forRoot(ConfigPG), StudentModule],
})
export class AppModule {}
