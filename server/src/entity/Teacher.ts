import { Entity, Column, PrimaryGeneratedColumn, BaseEntity } from "typeorm";

@Entity()
export class Teacher extends BaseEntity {
  @PrimaryGeneratedColumn("uuid")
  uuid: string;

  @Column()
  id: string;

  @Column()
  firstName: string;

  @Column()
  lastName: string;
}
