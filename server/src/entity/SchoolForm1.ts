import { LEA } from "./LEA";
import {
  Entity,
  Column,
  BaseEntity,
  PrimaryColumn,
  ManyToOne,
  JoinColumn
} from "typeorm";

@Entity("schoolform1")
export class SchoolForm1 extends BaseEntity {
  @PrimaryColumn({ name: "combokey" })
  id: string;

  @Column({
    name: "leaid",
  })
  leaId: string;

  @Column({
    name: "schid",
  })
  schId: string;

  @Column({
    name: "sch_name",
  })
  name: string;

  @Column({
    name: "ccd_latcod",
  })
  latitude: number;

  @Column({
    name: "ccd_loncod",
  })
  longitude: number;

  @Column()
  jj: string;

  @Column({
    name: "sch_grade_ps",
  })
  gradePs: string;

  @Column({
    name: "sch_grade_kg",
  })
  gradeKg: string;

  @Column({
    name: "sch_grade_g01",
  })
  gradeG01: string;

  @Column({
    name: "sch_grade_g02",
  })
  gradeG02: string;

  @Column({
    name: "sch_grade_g03",
  })
  gradeG03: string;

  @Column({
    name: "sch_grade_g04",
  })
  gradeG04: string;

  @Column({
    name: "sch_grade_g05",
  })
  gradeG05: string;

  @Column({
    name: "sch_grade_g06",
  })
  gradeG06: string;

  @Column({
    name: "sch_grade_g07",
  })
  gradeG07: string;

  @Column({
    name: "sch_grade_g08",
  })
  gradeG08: string;

  @Column({
    name: "sch_grade_g09",
  })
  gradeG09: string;

  @Column({
    name: "sch_grade_g10",
  })
  gradeG10: string;

  @Column({
    name: "sch_grade_g11",
  })
  gradeG11: string;

  @Column({
    name: "sch_grade_g12",
  })
  gradeG12: string;

  @Column({
    name: "sch_grade_ug",
  })
  gradeUg: string;

  // ###########################
  // Relationships
  // ###########################
  @ManyToOne(() => LEA, lea => lea.schools)
  @JoinColumn({ name: "leaid", referencedColumnName: "id" })
  lea: LEA;

  // sch_ugdetail_es character varying(1),
  // sch_ugdetail_ms character varying(1),
  // sch_ugdetail_hs character varying(1),
  // sch_status_sped character varying(1),
  // sch_status_magnet character varying(1),
  // sch_status_charter character varying(1),
  // sch_status_alt character varying(1),
  // sch_magnetdetail character varying(1),
  // sch_altfocus character varying(1),
  // sch_psenr_nonidea_a3 character varying(1),
  // sch_psenr_nonidea_a4 character varying(1),
  // sch_psenr_nonidea_a5 character varying(1),
  // sch_psenr_hi_m integer,
  // sch_psenr_hi_f integer,
  // sch_psenr_am_m integer,
  // sch_psenr_am_f integer,
  // sch_psenr_as_m integer,
  // sch_psenr_as_f integer,
  // sch_psenr_hp_m integer,
  // sch_psenr_hp_f integer,
  // sch_psenr_bl_m integer,
  // sch_psenr_bl_f integer,
  // sch_psenr_wh_m integer,
  // sch_psenr_wh_f integer,
  // sch_psenr_tr_m integer,
  // sch_psenr_tr_f integer,
  // tot_psenr_m integer,
  // tot_psenr_f integer,
  // sch_psenr_lep_m integer,
  // sch_psenr_lep_f integer,
  // sch_psenr_idea_m integer,
  // sch_psenr_idea_f integer,
}
