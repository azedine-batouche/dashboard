import { HttpError } from 'src/app/dashboard/interfaces/http-error';

export interface Weather {
  icon: string;
  name: string;
  description: string;
  temperature: number;
  errorMessage?: string;
}
