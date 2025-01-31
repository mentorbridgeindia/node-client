import {
    Body,
    Button,
    Container,
    Head,
    Hr,
    Html,
    Img,
    Preview,
    Section,
    Text,
  } from '@react-email/components';
  import * as React from 'react';
  
  interface VerifyEmailProps {
    userFirstName: string;
    urlLink:string;
    organization:string;
  }
  
  const baseUrl = process.env.VERCEL_URL
    ? `https://${process.env.VERCEL_URL}`
    : '';
  
  export const LoginVerifyEmail = ({
    userFirstName,
    urlLink,
    organization,
  }: VerifyEmailProps) => (
    <Html>
      <Head/>
      <Preview>
        Welcome email Templates  </Preview>
      <Body style={main}>
        <Container style={container}>
          <Img
            src={`${baseUrl}/static/koala-logo.png`}
            width="170"
            height="50"
            alt="SecuroSphere"
            style={logo}
          />
          <Text style={paragraph}>Hi {userFirstName},</Text>
          <Text style={paragraph}>
  Welcome to <b>{ organization}</b>, thanks for log in with us! Stay continued..&nbsp;  
  If this was you, no action is needed. If not, please reset your password immediately.
  <br /><br />
  Stay secured.
</Text>
          <Section style={btnContainer}>
            <Button style={button} href={urlLink}>
              Get started
            </Button>
          </Section>
          <Text style={paragraph}>
            Best,
            <br />
            The {organization} team
          </Text>
          <Hr style={hr} />
          <Text style={footer}>
            MentorBridge,India 
          </Text>
        </Container>
      </Body>
    </Html>
  );
  
 
  
  export default LoginVerifyEmail;
  
  const main = {
    backgroundColor: '#ffffff',
    fontFamily:
      '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen-Sans,Ubuntu,Cantarell,"Helvetica Neue",sans-serif',
  };
  
  const container = {
    margin: '0 auto',
    padding: '20px 0 48px',
  };
  
  const logo = {
    margin: '0 auto',
  };
  
  const paragraph = {
    fontSize: '16px',
    lineHeight: '26px',
  };
  
  const btnContainer = {
    textAlign: 'center' as const,
  };
  
  const button = {
    backgroundColor: '#5F51E8',
    borderRadius: '3px',
    color: '#fff',
    fontSize: '16px',
    textDecoration: 'none',
    textAlign: 'center' as const,
    display: 'block',
    padding: '12px',
    width:'120px',
  };
  
  const hr = {
    borderColor: '#cccccc',
    margin: '20px 0',
  };
  
  const footer = {
    color: '#8898aa',
    fontSize: '12px',
  };
  