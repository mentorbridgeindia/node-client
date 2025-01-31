import {
    Body,
    Button,
    Container,
    Head,
    Heading,
    Html,
    Img,
    Preview,
    Section,
    Text,
    Tailwind,
  } from "@react-email/components";
  import * as React from "react";
  
  interface GreetingEmailProps {
    recipientName: string;
    festivalName: string;
    greetingMessage: string;
    imageUrl: string;
    footerText: string;
  }
  
  const GreetingEmail = ({
    recipientName,
    festivalName,
    greetingMessage,
    imageUrl,
    footerText,
  }: GreetingEmailProps) => {
    const previewText = `Happy ${festivalName} from all of us!`;
  
    return (
      <Html>
        <Head />
        <Preview>{previewText}</Preview>
        <Tailwind>
          <Body className="bg-yellow-50 font-sans py-6 px-4">
            <Container className="bg-white border border-yellow-300 rounded-lg shadow-md p-6 max-w-lg mx-auto">
              <Section className="text-center">
                <Img
                  src={imageUrl}
                  alt="Festival Greeting Image"
                  className="mx-auto rounded-lg"
                  width="300"
                  height="200"
                />
              </Section>
              <Section className="text-center my-4">
                <Heading className="text-2xl font-semibold text-yellow-800">
                  Wishing You a Joyful and Memorable {festivalName}!
                </Heading>
                <Text className="text-gray-700 text-base mt-2">
                  Dear {recipientName},
                </Text>
                <Text className="text-gray-700 text-base mt-2">{greetingMessage}</Text>
              </Section>
              <Section className="text-center my-6">
                <Button
                  href="https://mentor.com"
                  className="bg-yellow-600 text-white font-medium py-2 px-4 rounded"
                >
                  Celebrate with Us
                </Button>
              </Section>
              <Section className="text-center">
                <Text className="text-gray-500 text-sm">{footerText}</Text>
              </Section>
            </Container>
          </Body>
        </Tailwind>
      </Html>
    );
  };
  
  GreetingEmail.defaultProps = {
    recipientName: "Nivetha",
    festivalName: "Diwali",
    greetingMessage: "May this Diwali bring you prosperity, joy, and light!",
    imageUrl: "https://example.com/festival-image.jpg",
    footerText: "From MentorBridge India",
  };
  
  export default GreetingEmail;
  