import { Student } from '../entity/student.entity';

export class StudentDto extends Student {
  readonly firstname: string;
  readonly secondname: string;
  readonly birthday: Date;
  readonly university: string;
  readonly faculty: string;
  readonly applyDate: Date;
}
