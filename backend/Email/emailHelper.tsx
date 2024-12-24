import { renderToString } from "react-dom/server";
import RegisterEmail from "../../client/Authentication/RegisterEmail";
import { EMAIL_TYPES } from "./constants";
import { EMAIL_TYPE } from "./sendEmail.types";
import React from "react";

export const getEmailContent = (
  type: EMAIL_TYPE,
  info: Record<string, any>
): string => {
  let emailComponent;

  switch (type) {
    case EMAIL_TYPES.REGISTER:
      emailComponent = (
        <RegisterEmail verificationCode={info.verificationCode} />
      );
      break;
    default:
      throw new Error(`Unsupported email type: ${type}`);
  }

  // Convert React component to HTML string
  return renderToString(emailComponent);
};
