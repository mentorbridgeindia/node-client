import { renderToString } from 'react-dom/server';
import PasswordChangedEmail from "../../client/Authentication/PasswordChangedEmail";
import ResetEmail from "../../client/Authentication/ResetEmail";
import WelcomeEmail from "../../client/Authentication/WelcomeEmail";
import RegisterEmail from "../../client/Authentication/RegisterEmail";
import { EMAIL_TYPES } from "./constants";
import { EMAIL_TYPE } from "./sendEmail.types";
import React from "react";

export const getEmailContent = (type: EMAIL_TYPE, info: Record<string, any>): string => {
  let emailComponent;
  
  switch (type) {
    case EMAIL_TYPES.REGISTER_EMAIL:
      emailComponent = <RegisterEmail verificationCode={info.magicLink} />;

      break;
      case EMAIL_TYPES.RESET_PASSWORD:
        emailComponent = <ResetEmail username={info.resetLink} />;
        break;
  
      case EMAIL_TYPES.WELCOME:
        emailComponent = <WelcomeEmail userFirstname={info.userFirstname} />;
        break;
  
  case EMAIL_TYPES.PASSWORD_CHANGED:
        emailComponent = <PasswordChangedEmail magicLink={info.magicLink} />;
        break;
    default:
      throw new Error(`Unsupported email type: ${type}`);
  }

  
  return renderToString(emailComponent);
};

