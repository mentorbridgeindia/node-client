export type EMAIL_TYPE = "register" | "reset";

export interface EmailRequestBody {
  from: string;
  to: string;
  cc?: string;
  bcc?: string;
  subject: string;
  type: EMAIL_TYPE;
  info: Record<string, any>;
}
