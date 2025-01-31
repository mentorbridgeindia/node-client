import { renderToString } from "react-dom/server";
import React from "react";
import PasswordChangedEmail from "../../client/Authentication/PasswordChangedEmail";
import ResetEmail from "../../emails-list/emails/reset-password";
import WelcomeEmail from "../../client/Authentication/WelcomeEmail";
import RegisterEmail from "../../client/Authentication/RegisterEmail";

import { EMAIL_TYPES } from "./constants";
import { EMAIL_TYPE } from "./sendEmail.types";
import { InviteUserEmail } from "../../emails-list/emails/invite-user";
import { LoginVerifyEmail } from "../../emails-list/emails/LoginVerification";
import{ WeMissYouEmail} from "../../emails-list/emails/Comebackemail";

export const getEmailContent = (
  type: EMAIL_TYPE,
  info: Record<string, any>
): string => {
  let emailComponent;

  switch (type) {
    case EMAIL_TYPES.REGISTER_EMAIL:
      emailComponent = <RegisterEmail verificationCode={info.verificationCode}
      organization={info.organization}
      policyUrl={info.policyUrl}
      urlLink={info.urlLink}
       />;
      break;

    case EMAIL_TYPES.RESET_PASSWORD:
      emailComponent = (
      <ResetEmail userFirstName={info.userFirstName}
      verificationCode={info.verificationCode}
      verificationLink={info.verificationLink} 
      organization ={info.organization}/>);
      break;

    case EMAIL_TYPES.WELCOME:
      emailComponent = <WelcomeEmail userName={info.userName} 
      loginUrl={info.loginUrl}
      organization={info.organization}
      rawUrl={info.rawUrl}/>;
      break;

    case EMAIL_TYPES.PASSWORD_CHANGED:
      emailComponent = <PasswordChangedEmail urlLink={info.urlLink} />;
      break;

  
    case EMAIL_TYPES.LOGIN_VERIFICATION:
      emailComponent = <LoginVerifyEmail 
      organization={info.organization}
      userFirstName={info.userFirstName}
      urlLink={info.urlLink}  />;
      break;

      case EMAIL_TYPES.COMEBACK_EMAIL:
        emailComponent =<WeMissYouEmail 
        userName={info.userName}
        userLink={info.userLink}
        organization={info.organization} />;
        break;


    case EMAIL_TYPES.INVITE_USER:
      emailComponent = (
        <InviteUserEmail
          applicationName={info.applicationName}
          organizationName={info.organizationName}
          emails={info.email}
          rawUrl={info.rawUrl}
          urlLink={info.urlLink}
        />
      );
      break;

    default:
      throw new Error(`Unsupported email type: ${type}`);
  }

  return renderToString(emailComponent);
};

