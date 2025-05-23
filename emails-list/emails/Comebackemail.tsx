import {
    Body,
    Column,
    Container,
    Head,
    Html,
    Img,
    Link,
    Preview,
    Row,
    Section,
    Text,
  } from '@react-email/components';
  import * as React from 'react';
  
  interface WeMissYouEmailProps {
    userName?: string;
   userLink?:string;
   organization?:string;
  }
  
  const baseUrl = process.env.VERCEL_URL
    ? `https://${process.env.VERCEL_URL}`
    : '';
  
  export const WeMissYouEmail = ({
    userName,
    userLink,
    organization,
  }: WeMissYouEmailProps) => (
    <Html>
      <Head />
      <Preview>We miss you! Come back and check out what's new.</Preview>
      <Body style={main}>
        <Container style={container}>
          <Section style={logo}>
            <Img width={114} src={`${baseUrl}/static/logo.png`} />
          </Section>
          <Section style={sectionsBorders}>
            <Row>
              <Column style={sectionBorder} />
              <Column style={sectionCenter} />
              <Column style={sectionBorder} />
            </Row>
          </Section>
          <Section style={content}>
            <Text style={paragraph}>Hi {userName},</Text>
            <Text style={paragraph}>
              We noticed you haven't logged in recently. We miss you! There's so much new updates waiting for you.
            </Text>
            <Text style={paragraph}>
              Click below to log in and see what's new!
            </Text>
            
            <Section style={buttonContainer}>
              <Link href={userLink } style={button}>
                Log in Now
              </Link>
            </Section>
            <Text style={paragraph}>
              If you have any questions, feel free to reach out to our support team.
            </Text>
            <Text style={paragraph}>
              See you soon!<br />
              The Team {organization}
            </Text>
          </Section>
        </Container>
  
        <Section style={footer}>
          <Row>
            <Text style={{ textAlign: 'center', color: '#706a7b' }}>
              © 2022 Company, All Rights Reserved <br />
              MentorBridge, India
            </Text>
          </Row>
        </Section>
      </Body>
    </Html>
  );
  
  export default WeMissYouEmail;
  
  const fontFamily = 'HelveticaNeue,Helvetica,Arial,sans-serif';
  
  const main = {
    backgroundColor: '#efeef1',
    fontFamily,
  };
  
  const paragraph = {
    lineHeight: 1.5,
    fontSize: 14,
  };
  
  const container = {
    maxWidth: '580px',
    margin: '30px auto',
    backgroundColor: '#ffffff',
  };
  
  const footer = {
    maxWidth: '580px',
    margin: '0 auto',
  };
  
  const content = {
    padding: '5px 20px 10px 20px',
  };
  
  const logo = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 30,
  };
  
  const sectionsBorders = {
    width: '100%',
    display: 'flex',
  };
  
  const sectionBorder = {
    borderBottom: '1px solid rgb(238,238,238)',
    width: '249px',
  };
  
  const sectionCenter = {
    borderBottom: '1px solid rgb(145,71,255)',
    width: '102px',
  };
  
  
  
  const buttonContainer = {
    textAlign: 'center',
    marginTop: '20px',
  };
  
  const button = {
    backgroundColor: '#007bff',
    color: '#ffffff',
    padding: '12px 24px',
    borderRadius: '5px',
    textDecoration: 'none',
    display: 'inline-block',
    fontSize: '16px',
    fontWeight: 'bold',
  };
  