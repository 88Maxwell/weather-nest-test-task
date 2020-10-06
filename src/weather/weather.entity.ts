import { Column, Entity, ManyToMany, JoinTable, ObjectID, PrimaryGeneratedColumn } from "typeorm";
import { City } from "city/city.entity";

@Entity()
export class Weather {
  @PrimaryGeneratedColumn()
  id: ObjectID;

  @ManyToMany(() => City)
  @JoinTable()
  cityId;

  @Column()
  temp: number;

  @Column()
  feelsLike: number;

  @Column()
  pressure: number;
}
