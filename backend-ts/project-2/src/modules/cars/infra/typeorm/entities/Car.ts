import { v4 as uuidV4 } from 'uuid';
import { Entity, PrimaryColumn, Column, CreateDateColumn } from 'typeorm';

@Entity('cars')
export default class Car {
  @PrimaryColumn()
  id?: string;

  @Column()
  name: String;

  @Column()
  description: String;

  @Column()
  daily_rate: number;

  @Column()
  available: boolean;

  @Column()
  license_plate: String;

  @Column()
  fine_amount: number;

  @Column()
  brand: String;

  @Column()
  category_id: String;

  @CreateDateColumn()
  created_at: Date;

  constructor() {
    if (!this.id) this.id = uuidV4();
  }
}
