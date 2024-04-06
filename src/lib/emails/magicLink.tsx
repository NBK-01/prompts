import {
    Body,
    Button,
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
  
  
  interface MagicLinkEmailProps {
    magicLink?: string;
    email?: string
  }
  
  const baseUrl = process.env.VERCEL_URL
    ? `https://${process.env.VERCEL_URL}`
    : "http://localhost:3000";
  
    const promptsIcon = "https://wrfjtyknswsneytnlxik.supabase.co/storage/v1/object/sign/internal/logo-base-256x256.png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJpbnRlcm5hbC9sb2dvLWJhc2UtMjU2eDI1Ni5wbmciLCJpYXQiOjE3MTI0MzU1MjksImV4cCI6MTc0Mzk3MTUyOX0.Z0PUlAX9pxRGuM6idsrpvSbvA7DpZNBhYt5izE3H4VQ&t=2024-04-06T20%3A32%3A09.326Z"

  export const LoginEmail = ({
    magicLink,
    email,
  }: MagicLinkEmailProps) => (
    <Html>
      <Head />
      <Preview> Login to Prompts </Preview>

      <Body style={main}>
        <Container style={container}>
        <Link href="https://prbly.xyz">
          <Img
            src={promptsIcon}
            width={58}
            height={58}
            alt="Probably"
          />
          </Link>
          <Heading style={heading}> Your login link</Heading>
          <Section style={buttonContainer}>
            <Button style={button} href={magicLink}>
              Login
            </Button>
          </Section>
          <Text style={paragraph}>
            If the button does not work, please use the verification link pasted below. If you are still experiencing issues signing in please contact me on <Link href="https://x.com/NBK_dev"> Twitter / X </Link>
          </Text>
          <Link href={magicLink} style={reportLink}>
            {magicLink}
          </Link>
          <Hr style={hr} />
          <Link href="https://prompts.nayef.dev" style={reportLink}>
            Prompts by Nayef
          </Link>
        </Container>
      </Body>
    </Html>
  );
  
  
  export default LoginEmail;
  
  const logo = {
    borderRadius: 21,
    width: 42,
    height: 42,
  };
  
  const main = {
    backgroundColor: "#ffffff",
    fontFamily:
      '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen-Sans,Ubuntu,Cantarell,"Helvetica Neue",sans-serif',
  };
  
  const container = {
    margin: "0 auto",
    padding: "20px 0 48px",
    maxWidth: "560px",
  };
  
  const heading = {
    fontSize: "24px",
    letterSpacing: "-0.5px",
    lineHeight: "1.3",
    fontWeight: "400",
    color: "#484848",
    padding: "17px 0 0",
  };
  
  const paragraph = {
    margin: "0 0 15px",
    fontSize: "15px",
    lineHeight: "1.4",
    color: "#3c4149",
  };
  
  const buttonContainer = {
    padding: "27px 0 27px",
  };
  
  const button = {
    backgroundColor: "#18c37d",
    borderRadius: "3px",
    fontWeight: "600",
    color: "#fff",
    fontSize: "15px",
    textDecoration: "none",
    textAlign: "center" as const,
    display: "block",
    padding: "11px 23px",
    cursor: "pointer",
  };
  
  const reportLink = {
    fontSize: "14px",
    color: "#b4becc",
  };
  
  const hr = {
    borderColor: "#dfe1e4",
    margin: "42px 0 26px",
  };
  
  const code = {
    fontFamily: "monospace",
    fontWeight: "700",
    padding: "1px 4px",
    backgroundColor: "#dfe1e4",
    letterSpacing: "-0.3px",
    fontSize: "21px",
    borderRadius: "4px",
    color: "#3c4149",
  };
  