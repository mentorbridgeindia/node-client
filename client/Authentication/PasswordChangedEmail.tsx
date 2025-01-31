import {
    Body,
    Container,
    Head,
    Heading,
    Hr,
    Html,
    Img,
    Link,
    Preview,
    Section,
    Text,
  } from "@react-email/components";
  import * as React from "react";
  
  interface PasswordLinkEmailProps {
    urlLink?: string;
    organization?:string;
  }
  
  const baseUrl = process.env.VERCEL_URL
    ? `https://${process.env.VERCEL_URL}`
    : "";
  
  export const PasswordLinkEmail = ({
    urlLink,
    organization,
  }: PasswordLinkEmailProps) => (
    <Html>
      <Head />
      <Preview >PasswordChanged Email</Preview>
      <Body style={main}>
        <Container style={container}>
          <Img
            src={`${baseUrl}/static/raycast-logo.png`}
            width={48}
            height={48}
            alt="Raycast"
          />
          <Heading style={heading}>🪄 {organization} verification </Heading>
          <Section style={body}>
            <Text style={paragraph}>
              <Link style={link} href={urlLink}>
                👉 click here to s{organization} ...👈
              </Link>
            </Text>
            <Text style={paragraph}>
              Stay connected with {organization}.... 
            </Text>
            
            <Text style={paragraph}>
              your password had been protected and changed successfully.
            </Text>

          </Section>
          <Text style={paragraph}>
            Best,
            <br />- {organization} Team
          </Text>
          <Hr style={hr} />
          <Img
            src={`${baseUrl}/static/raycast-logo.png`}
            width={32}
            height={32}
            style={{
              WebkitFilter: "grayscale(100%)",
              filter: "grayscale(100%)",
              margin: "20px 0",
            }}
          />
          <Text style={footer}>Mentor Bridge India</Text>
          <Text style={footer}>
            2093 Philadelphia Pike #3222, Claymont, DE 19703
          </Text>
        </Container>
      </Body>
    </Html>
  );
  
  PasswordLinkEmail.PreviewProps = {
    magicLink: "https://raycast.com",
  } as PasswordLinkEmailProps;
  
  export default PasswordLinkEmail;
  
  const main = {
    backgroundColor: "#ffffff",
    fontFamily:
      '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen-Sans,Ubuntu,Cantarell,"Helvetica Neue",sans-serif',
  };
  
  const container = {
    margin: "0 auto",
    padding: "20px 25px 48px",
    backgroundImage: 'url("/static/raycast-bg.png")',
    backgroundPosition: "bottom",
    backgroundRepeat: "no-repeat, no-repeat",
  };
  
  const heading = {
    fontSize: "28px",
    fontWeight: "bold",
    marginTop: "48px",
  };
  
  const body = {
    margin: "24px 0",
  };
  
  const paragraph = {
    fontSize: "16px",
    lineHeight: "26px",
  };
  
  const link = {
    color: "#FF6363",
  };
  
  const hr = {
    borderColor: "#dddddd",
    marginTop: "48px",
  };
  
  const footer = {
    color: "#8898aa",
    fontSize: "12px",
    marginLeft: "4px",
  };
  