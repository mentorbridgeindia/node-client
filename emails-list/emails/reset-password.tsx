import {
  Body,
  Button,
  Container,
  Head,
  Html,
  Img,
  Preview,
  Section,
  Text,
} from "@react-email/components";
import * as React from "react";

interface ResetPasswordEmailProps {
  userFirstName?: string;
  verificationCode?: string;
  verificationLink?:string;
  organization?:string;
}

const baseUrl = process.env.VERCEL_URL
  ? `https://${process.env.VERCEL_URL}`
  : "";

export const ResetPasswordEmail = ({
  userFirstName ,
  verificationCode,
  verificationLink,
  organization,
}: ResetPasswordEmailProps) => {
  return (
    <Html>
      <Head />
      <Preview>SecuroSphere - Reset Your Password</Preview>
      <Body style={main}>
        <Container style={container}>
          <Img
            src={`${baseUrl}/static/securosphere-logo.png`}
            width="40"
            height="40"
            alt="SecuroSphere"
          />
          <Section>
            <Text style={text}>Hi {userFirstName},</Text>
            <Text style={text}>
              Someone recently requested a password change for your {organization}
              Account.
            </Text>

            <Text style={text}>
              Use the verification code below to reset your password:
            </Text>

           
            <Section style={verificationSection}>
              <Text style={verifyText}>Verification Code</Text>
              <Text style={codeText}>{verificationCode}</Text>
              <Text style={validityText}>(This code is valid for 10 minutes)</Text>
            </Section>

          <Button style={button} href={verificationLink}>
              Reset Password
            </Button>

            <Text style={text}>
              If you don&apos;t want to change your password or didn&apos;t request this, just ignore and delete this message.
            </Text>
            <Text style={text}>
              To keep your account secure, please don&apos;t forward this email to anyone.
            </Text>
          </Section>
        </Container>
      </Body>
    </Html>
  );
};



export default ResetPasswordEmail;


const main = {
  backgroundColor: "#f6f9fc",
  padding: "20px 0",
};

const container = {
  backgroundColor: "#ffffff",
  border: "1px solid #e0e0e0",
  padding: "40px",
  borderRadius: "8px",
  textAlign: "center" as const,
};

const text = {
  fontSize: "16px",
  fontFamily:
    "'Open Sans', 'Helvetica Neue', Arial, sans-serif",
  fontWeight: "400",
  color: "#333",
  lineHeight: "24px",
};


const verificationSection = {
  display: "flex",
  flexDirection: "column" as const,
  alignItems: "center",
  justifyContent: "center",
  textAlign: "center" as const,
  margin: "20px auto",
};

const verifyText = {
  fontSize: "18px",
  fontWeight: "bold",
  textAlign: "center" as const,
  marginBottom: "10px",
};

const codeText = {
  fontSize: "32px",
  fontWeight: "bold",
  color: "#2c3e50",
  backgroundColor: "#f3f3f3",
  padding: "10px 20px",
  borderRadius: "5px",
  display: "inline-block",
  textAlign: "center" as const,
};

const validityText = {
  fontSize: "14px",
  color: "#777",
  textAlign: "center" as const,
};

const button = {
  backgroundColor: "#007ee6",
  borderRadius: "6px",
  color: "#ffffff",
  fontSize: "16px",
  textDecoration: "none",
  textAlign: "center" as const,
  display: "block",
  width: "220px",
  padding: "14px",
  margin: "20px auto",
  fontWeight: "bold",
};   

