import { v4 as uuidV4 } from 'uuid';
import {
  Entity,
  PrimaryColumn,
  Column,
  CreateDateColumn,
  ManyToOne,
  JoinColumn,
} from 'typeorm';
import Category from './Category';

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

  @ManyToOne(() => Category)
  @JoinColumn({ name: 'category_id' })
  category: Category;

  @Column()
  category_id: String;

  @CreateDateColumn()
  created_at: Date;

  constructor() {
    if (!this.id) {
      this.id = uuidV4();
      this.available = true;
    }
  }
}
