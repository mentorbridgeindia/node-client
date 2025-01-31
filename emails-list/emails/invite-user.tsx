import {
  Body,
  Button,
  Container,
  Head,
  Heading,
  Hr,
  Html,
 Link,
  Preview,
   Section,
  Text,
  Tailwind,
} from "@react-email/components";
import * as React from "react";

interface InviteUserEmailProps {
  applicationName?:string;
  organizationName?: string;
  emails?:string;
  subDomain?:string;
  urlLink?:string;
}

const baseUrl = process.env.VERCEL_URL
  ? `https://${process.env.VERCEL_URL}`
  : "";

export const InviteUserEmail = ({
  organizationName,
  emails,
  subDomain,
  applicationName,
  urlLink,
}: InviteUserEmailProps) => {
  const previewText = `Join {VercelInviteUserEmail.applicantName} on Vercel`;

  return (
    <Html>
      <Head />
      <Preview>{previewText}</Preview>
      <Tailwind>
        <Body className="bg-white my-auto mx-auto font-sans px-2">
          <Container className="border border-solid border-[#eaeaea] rounded my-[40px] mx-auto p-[20px] max-w-[465px]">
           
            <Heading className="text-black text-[24px] font-normal text-center p-0 my-[30px] mx-0">
              Join <strong>{applicationName}</strong> on <strong>{organizationName}</strong>
            </Heading>
            <Text className="text-black text-[14px] leading-[24px]">
              Hello {applicationName},
            </Text>
            <Text className="text-black text-[14px] leading-[24px]">
              <strong>{applicationName}</strong> 
              <Link
                href={`mailto:${emails}`}
                className="text-blue-600 no-underline"
              >
                {emails}
              </Link>   {""}
                you are invited to the <strong>{organizationName}</strong> 
              {/* <strong>SecuroSphere</strong>. */}
            </Text>
           
            <Section className="text-center mt-[32px] mb-[32px]">
              <Button
                className="bg-[#000000] rounded text-white text-[12px] font-semibold no-underline text-center px-5 py-3"
                href= "https://www.securosphere.in/"
              >
                Join the team
              </Button>
            </Section>
            <Text className="text-black text-[14px] leading-[24px]">
  or copy and paste this URL into your browser:{" "}
  <a href="https://www.securosphere.in/login" className="text-blue-600 no-underline">
    https://www.securosphere.in/login
  </a>
</Text>

            <Hr className="border border-solid border-[#eaeaea] my-[26px] mx-0 w-full" />
            <Text className="text-[#666666] text-[12px] leading-[24px]">
              This invitation was intended for{" "}
             
              If you
              were not expecting this invitation, you can ignore this email. If
              you are concerned about your account's safety, please reply to
              this email to get in touch with us.
            </Text>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  );
};

// InviteUserEmail.PreviewProps = {
//   username: "nive ",
  
//   invitedByUsername: " ",
//   invitedByEmail: "alan.turing@example.com",
//   teamName: "SecuroSphere",
  
//   inviteLink: "https://www.securosphere.in/",
  
  
// } as InviteUserEmailProps;

export default InviteUserEmail;