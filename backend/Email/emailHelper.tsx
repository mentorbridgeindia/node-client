import React from "react";
import RegisterEmail from "../../client/Authentication/RegisterEmail";
import { EMAIL_TYPES } from "./constants";
import { EMAIL_TYPE } from "./sendEmail.types";

export const getEmailContent = (type: EMAIL_TYPE, info: Record<string, any>) => {
  switch (type) {
    case EMAIL_TYPES.REGISTER:
      return <RegisterEmail verificationCode={info.verificationCode} />;
  }
};
