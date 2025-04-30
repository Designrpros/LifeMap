"use client";

import styled from "styled-components";

// Colors
const colors = {
  primary: '#FF6B6B', // Coral
  secondary: '#0A6C74', // Deep teal
  background: '#FFFFFF', // White
  text: '#000000', // Black
  textSecondary: '#4A4A4A', // Gray
  border: '#E0E0E0', // Light gray border
  hover: '#F5F5F5', // Light gray hover
};

// Styled Components
const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  width: 100%;
  background: ${colors.background};
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
`;

const MainContent = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;
  text-align: center;
  padding: 4rem 1rem;
  max-width: 1000px;
  margin: 0 auto;

  @media (max-width: 768px) {
    padding: 3rem 1rem;
    gap: 1.5rem;
  }

  @media (max-width: 480px) {
    padding: 2rem 1rem;
    gap: 1rem;
  }
`;

const Heading = styled.h1`
  font-size: 3rem;
  font-weight: 700;
  font-family: 'Inter', sans-serif;
  color: ${colors.secondary};
  margin: 0;
  line-height: 1.2;

  @media (max-width: 768px) {
    font-size: 2.2rem;
  }

  @media (max-width: 480px) {
    font-size: 1.8rem;
  }
`;

const Description = styled.p`
  font-size: 1.4rem;
  color: ${colors.textSecondary};
  max-width: 800px;
  line-height: 1.6;
  margin: 0;

  @media (max-width: 768px) {
    font-size: 1.2rem;
    max-width: 600px;
  }

  @media (max-width: 480px) {
    font-size: 1rem;
    max-width: 320px;
  }
`;

const Section = styled.section`
  width: 100%;
  margin: 3rem 0;
  text-align: left;
`;

const SectionTitle = styled.h2`
  font-size: 2rem;
  font-weight: 600;
  font-family: 'Inter', sans-serif;
  color: ${colors.secondary};
  margin-bottom: 1.5rem;

  @media (max-width: 768px) {
    font-size: 1.6rem;
  }
`;

const SectionContent = styled.div`
  background: ${colors.background};
  padding: 1.5rem;
  border-radius: 4px;
  border: 1px solid ${colors.text};
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  transition: background 0.2s ease, transform 0.1s ease;

  &:hover {
    background: ${colors.hover};
    transform: translateY(-1px);
  }
`;

const SectionText = styled.p`
  font-size: 1rem;
  color: ${colors.textSecondary};
  line-height: 1.6;
  margin-bottom: 1rem;
`;

const Footer = styled.footer`
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
  justify-content: center;
  padding: 1rem;
  background: ${colors.background};
  border-top: 1px solid ${colors.border};
  color: ${colors.textSecondary};
  margin-top: auto;

  @media (max-width: 768px) {
    gap: 0.75rem;
    padding: 0.75rem;
  }

  @media (max-width: 480px) {
    flex-direction: column;
    align-items: center;
    gap: 0.5rem;
    padding: 0.5rem;
  }
`;

const FooterLink = styled.a`
  color: ${colors.textSecondary};
  text-decoration: none;
  font-size: 0.9rem;
  transition: color 0.2s ease;

  &:hover {
    color: ${colors.primary};
  }

  @media (max-width: 768px) {
    font-size: 0.85rem;
  }

  @media (max-width: 480px) {
    font-size: 0.8rem;
    width: 100%;
    text-align: center;
  }
`;

export default function PrivacyPolicyPage() {
  return (
    <PageContainer>
      <MainContent>
        <Heading>Privacy Policy</Heading>
        <Description>
          At lifeMap, we are committed to protecting your privacy and ensuring the security of your personal information. This Privacy Policy outlines how we collect, use, share, and protect your data as you use our platform.
        </Description>
        <Section>
          <SectionTitle>1. Information We Collect</SectionTitle>
          <SectionContent>
            <SectionText>
              We collect information you provide directly, such as when you create an account, log milestones, or participate in communities. This may include your name, email address, age, goals, and preferences.
            </SectionText>
            <SectionText>
              We also collect data automatically, such as usage patterns, device information, and IP addresses, to improve our services. Data from third-party integrations (e.g., Fitbit, Google Calendar) is collected only with your consent.
            </SectionText>
          </SectionContent>
        </Section>
        <Section>
          <SectionTitle>2. How We Use Your Information</SectionTitle>
          <SectionContent>
            <SectionText>
              Your data powers lifeMap’s personalized features, such as time tracking, AI-driven insights, and community recommendations. We use it to tailor resources, suggest goals, and enhance your experience.
            </SectionText>
            <SectionText>
              Anonymized data may be used for analytics to improve our platform, but we never sell your personal information to third parties.
            </SectionText>
          </SectionContent>
        </Section>
        <Section>
          <SectionTitle>3. Data Sharing</SectionTitle>
          <SectionContent>
            <SectionText>
              We share data only with your explicit consent, such as when you connect third-party services (e.g., Fitbit, Coursera) or share milestones with family. Service providers (e.g., AWS, Firebase) process data on our behalf under strict confidentiality agreements.
            </SectionText>
            <SectionText>
              We may disclose data to comply with legal obligations, protect our rights, or ensure the safety of our users.
            </SectionText>
          </SectionContent>
        </Section>
        <Section>
          <SectionTitle>4. Your Rights</SectionTitle>
          <SectionContent>
            <SectionText>
              You have the right to access, correct, or delete your personal data. You can manage data-sharing preferences, opt for offline storage, or request data portability through your account settings.
            </SectionText>
            <SectionText>
              If you’re in the EU, you have additional rights under GDPR, including the right to object to processing or lodge a complaint with a supervisory authority.
            </SectionText>
          </SectionContent>
        </Section>
        <Section>
          <SectionTitle>5. Data Security</SectionTitle>
          <SectionContent>
            <SectionText>
              We use end-to-end encryption, secure authentication, and regular audits to protect your data. Our cloud infrastructure (AWS, Firebase) adheres to industry-standard security protocols.
            </SectionText>
            <SectionText>
              While we strive to ensure security, no system is infallible. We promptly notify users of any data breaches and take immediate action to mitigate risks.
            </SectionText>
          </SectionContent>
        </Section>
        <Section>
          <SectionTitle>6. Contact Us</SectionTitle>
          <SectionContent>
            <SectionText>
              If you have questions about this Privacy Policy or our data practices, please contact us at designr.pro@gmail.com or through our support portal.
            </SectionText>
            <SectionText>
              Last updated: April 28, 2025.
            </SectionText>
          </SectionContent>
        </Section>
      </MainContent>
      <Footer>
        <FooterLink href="/about">About lifeMap</FooterLink>
        <FooterLink href="/features">Features</FooterLink>
        <FooterLink href="/tech-stack">Tech Stack</FooterLink>
        <FooterLink href="/privacy">Privacy Policy</FooterLink>
      </Footer>
    </PageContainer>
  );
}