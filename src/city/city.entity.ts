import { Column, Entity, ObjectID, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class City {
  @PrimaryGeneratedColumn()
  id: ObjectID;

  @Column()
  name: string;

  @Column()
  requestCount: number;
}
