export interface HttpError {
  cod?: number;
  code?: number;
  status?: number;
  documentation_url?: string;
  message: string;
  response?: string;
  error?: boolean;
}
