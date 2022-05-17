export default interface ICreateCarDTO {
  name: string;

  description: string;

  daily_rate: number;

  available: boolean;

  license_plate: String;

  fine_amount: number;

  brand: String;

  category_id?: String;

  created_at: Date;
}
