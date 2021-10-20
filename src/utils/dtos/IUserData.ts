export interface IUserData {
  person: {
    id: number;
    cpf: number;
    email: string;
    cellphone: string;
    first_name: string;
    last_name: string;
    birth_date: Date;
    address_id: number;
    created_at: Date;
    updated_at: Date;
  };
  id: number;
  person_id: number;
  username: string;
  password: string;
  status: string;
  experience: number;
  recommendations_count: number;
  followers_count: number;
  campaigns_count: number;
  created_at: Date;
  updated_at: Date;
}