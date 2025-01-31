import {
  Body,
  Container,
  Head,
  Heading,
  Html,
  Link,
  Preview,
  Section,
  Text,
  Button,
} from '@react-email/components';
import * as React from 'react';

interface WelcomeEmailProps {
  userName?: string;
  loginUrl?: string;
}

const baseUrl = process.env.VERCEL_URL
  ? `https://${process.env.VERCEL_URL}`
  : '';

export default function WelcomeEmail({
  userName,
  loginUrl,
  // loginUrl = `${baseUrl}/login`,
}: WelcomeEmailProps) {
  return (
    <Html>
      <Head />7
      <Preview>Welcome to SecuroSphere! </Preview>
      <Body style={mainStyle}>
        <Container style={containerStyle}>
          <Section style={headerStyle}>
            <Heading style={headingStyle}>Welcome to SecuroSphere</Heading>
          </Section>

          <Section style={bodyStyle}>
            <Text style={textStyle}>
              Hi <strong>{userName}</strong>,
            </Text>
            <Text style={textStyle}>
              Thank you for registering with us. We're excited to have you on board! Get started by exploring your account and discovering everything we have to offer.
            </Text>
            <Button
              href={loginUrl }
              style={buttonStyle}
            >
              Log in to Your Account
            </Button>
            <Text style={textStyle}>
              If you have any questions, feel free to reach out to our support team.
            </Text>
          </Section>

          <Section style={footerStyle}>
            <Text style={footerTextStyle}>
              Best regards, <br />
              The SecuroSphere Team
            </Text>
            <Text style={footerTextStyle}>
              Need help? Visit our{' '}
              <Link href="/support" style={linkStyle}>
                Support Center
              </Link>{' '}
              or email us at{' '}
              <Link href="mailto:support@yourcompany.com" style={linkStyle}>
                support@securospere.com
              </Link>
              .
            </Text>
          </Section>
        </Container>
      </Body>
    </Html>
  );
}

const mainStyle = {
  backgroundColor: '#f9f9f9',
  color: '#333',
  fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif",
  padding: '20px',
};

const containerStyle = {
  maxWidth: '600px',
  margin: '0 auto',
  backgroundColor: '#ffffff',
  borderRadius: '8px',
  boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
  overflow: 'hidden',
};

const headerStyle = {
  backgroundColor: '#007ee6',
  color: '#ffffff',
  textAlign: 'center' as const,
  padding: '20px',
};

const headingStyle = {
  fontSize: '24px',
  fontWeight: 'bold',
  margin: 0,
};

const bodyStyle = {
  padding: '20px',
};

const textStyle = {
  fontSize: '16px',
  lineHeight: '1.5',
  marginBottom: '20px',
};

const buttonStyle = {
  display: 'inline-block',
  backgroundColor: '#007ee6',
  color: '#ffffff',
  padding: '10px 20px',
  borderRadius: '5px',
  textDecoration: 'none',
  fontWeight: 'bold',
  textAlign: 'center' as const,
};

const footerStyle = {
  backgroundColor: '#f1f1f1',
  padding: '20px',
  textAlign: 'center' as const,
};

const footerTextStyle = {
  fontSize: '14px',
  color: '#666',
  lineHeight: '1.5',
  marginBottom: '10px',
};

const linkStyle = {
  color: '#007ee6',
  textDecoration: 'underline',
};
