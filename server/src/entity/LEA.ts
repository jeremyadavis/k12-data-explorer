import {
  Entity,
  Column,
  BaseEntity,
  PrimaryColumn,
  OneToMany
  // JoinColumn
} from "typeorm";
import { SchoolForm1 } from "./SchoolForm1";

@Entity("lea")
export class LEA extends BaseEntity {
  @PrimaryColumn({
    name: "leaid",
  })
  id: string;

  @Column({
    name: "lea_name",
  })
  name: string;

  @Column({
    name: "lea_address",
  })
  address: string;

  @Column({
    name: "lea_city",
  })
  city: string;

  @Column({
    name: "lea_zip",
  })
  zip: string;

  @Column({
    name: "lea_state",
  })
  state: string;

  @Column({
    name: "lea_enr",
  })
  totalEnrollment: number;

  @OneToMany(() => SchoolForm1, schoolForm1 => schoolForm1.lea)
  schools: SchoolForm1[];
}
