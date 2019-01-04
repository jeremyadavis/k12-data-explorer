import { Entity, Column, BaseEntity, PrimaryColumn } from "typeorm";

@Entity("lea")
export class LEA extends BaseEntity {
  @PrimaryColumn()
  leaid: string;

  @Column({
    name: "lea_name",
  })
  leaName: string;

  @Column({
    name: "lea_address",
  })
  leaAddress: string;

  @Column({
    name: "lea_city",
  })
  leaCity: string;

  @Column({
    name: "lea_zip",
  })
  leaZip: string;

  @Column({
    name: "lea_state",
  })
  leaState: string;
}
