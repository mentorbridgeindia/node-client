export type EMAIL_TYPE = "register_user" | "reset_password" | "invite_user" |"welcome" |"login_verification" ;

export interface EmailRequestBody {
  from: string;
  to: string;
  cc?: string;
  bcc?: string;
  subject: string;
  type: EMAIL_TYPE;
  info: Record<string, any>;
}
