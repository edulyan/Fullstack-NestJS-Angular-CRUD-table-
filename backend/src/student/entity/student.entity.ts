import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity()
export class Student {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  firstname: string;

  @Column()
  secondname: string;

  @Column()
  birthday: Date;

  @Column()
  university: string;

  @Column()
  faculty: string;

  @CreateDateColumn()
  applyDate!: Date;
}
